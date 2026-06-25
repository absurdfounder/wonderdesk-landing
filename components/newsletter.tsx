'use client'

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface FlippingButtonLinkProps {
  href: string;
  initialText: string;
  hoverText: string;
  className?: string;
  target?: string;
  rel?: string;
}

const FlippingButtonLink: React.FC<FlippingButtonLinkProps> = ({
  href,
  initialText,
  hoverText,
  className = '',
  target,
  rel,
}) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const baseClasses =
    'flex items-center justify-center py-3 px-4 rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 relative';

  return (
    <Link
      href={href}
      className={`${baseClasses} ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      target={target}
      rel={rel}
    >
      <div className="relative overflow-hidden h-7">
        <div
          style={{
            transform: isHovered ? 'translateY(-100%)' : 'translateY(0)',
            transition: 'transform 0.3s ease-in-out',
            whiteSpace: 'nowrap',
          }}
        >
          {initialText}
        </div>
        <div
          className="absolute top-0 left-0 w-full text-center"
          style={{
            transform: isHovered ? 'translateY(0)' : 'translateY(100%)',
            transition: 'transform 0.3s ease-in-out',
            whiteSpace: 'nowrap',
          }}
        >
          {hoverText}
        </div>
      </div>
    </Link>
  );
};

export default function Newsletter() {
  const words = ['Directory', 'Marketplaces', 'Directory'];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [words.length]);

  return (
    <section className="homepage-grid-row bg-white">
      <div className="landing-grid-column">
        <div
          className="relative overflow-hidden py-10 px-8 md:py-16 md:px-12"
          style={{
            backgroundImage:
              'linear-gradient(rgb(255 255 255 / 87%), rgb(187 229 255 / 76%)), url(https://dazzling-cat.netlify.app/wondercollectivebanner.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
          }}
        >
          <div className="absolute right-0 pointer-events-none hidden lg:block">
            <Image
              alt="Wonder desk illustration"
              width={600}
              height={600}
              className="block"
              src="https://dazzling-cat.netlify.app/wonderdesktop.png"
            />
          </div>

          <div className="relative flex flex-col lg:flex-row justify-between items-center">
            <div className="text-center lg:text-left lg:max-w-xl">
              <h3 className="h2 text-slate-800 my-2">
                Stop living at your desk all day{' '}
                <span style={{ color: '#009fbc' }}>automate it </span>.
              </h3>
              <p className="h5 font-normal text-slate-800 my-2">
                Outdated posts are wasting time, money and affecting your reputation. Let Wonder run your
                Helpdesk & Blog on pure automations.
              </p>

              <form className="w-full lg:w-auto mt-4">
                <div className="flex flex-col sm:flex-row max-w-xs mx-auto sm:max-w-md lg:mx-0">
                  <FlippingButtonLink
                    href="https://app.wonderdesk.ai"
                    initialText="Get started - free"
                    hoverText="in just 15 mins"
                    className="btn text-dark text-2xl bg-orange-300 hover:bg-orange-700 hover:text-orange-100 w-full mb-4 sm:w-auto sm:mb-0"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
