import Link from "next/link";
import Image from "next/image";
import { _loadFromJson } from "@/app/utils/helper";
import notionfooterImage from "@/public/images/freedesigner.png";

export const metadata = {
  title: 'Beautiful websites built on notion using BoringSites',
  description: 'Jumpstart your SaaS business with pre-built solutions from BoringSites and our community.',
  openGraph: {
    images: [
      {
        url: "https://dazzling-cat.netlify.app/BoringSitesshowcase_socialshare.png",
        width: 1200,
        height: 630,
        alt: "Get a Marketplace with Notion",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: [
      {
        url: "https://dazzling-cat.netlify.app/BoringSitesshowcase_socialshare.png",
        alt: "Get a Marketplace with Notion",
      },
    ],
  },
}

// Utility function to truncate text
const truncateText = (text: string, maxLength: number): string => {
  if (text.length > maxLength) {
    return text.slice(0, maxLength) + "...";
  }
  return text;
};

export default async function Template() {
  const templates = await _loadFromJson();

  return (
    <section className="bg-gradient-to-b from-slate-100 to-white" id="template-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="pt-12 pb-12 md:pt-18 md:pb-20">
          {/* Page header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h1 className="h2 mb-4">Not Templates, Beautiful Businesses</h1>
            <p className="text-xl text-slate-600">
              Jumpstart your SaaS business with pre-built open-source solutions.
            </p>

            <div className="mt-6">
              <div className="relative bg-slate-900 rounded-2xl py-6 px-4 md:py-8 md:px-12 shadow-2xl overflow-hidden">
                {/* Background illustration */}
                <div className="absolute right-0 bottom-0 pointer-events-none hidden lg:block">
                  <Image
                    alt="Logo"
                    width={220}
                    className="block"
                    src={notionfooterImage}
                  />
                </div>

                <div className="relative flex flex-col lg:flex-row justify-between items-center">
                  {/* CTA content */}
                  <div className="text-center lg:text-left lg:max-w-xl">
                    <h3 className="h3 text-white mb-2">
                      Get{" "}
                      <b className="text-orange-600">Free Design Services</b>
                    </h3>

                    {/* CTA form */}
                    <form className="w-full lg:w-auto">
                      <div>
                        <Link
                          className="btn bg-orange-600 hover:bg-orange-700 shadow"
                          href="https://app.youform.com/forms/r3rvhjv4" target="_blank"
                        >
                          Ask Us to Build
                        </Link>
                      </div>
                      {/* Success message */}
                      {/* <p className="text-sm text-slate-400 mt-3">Thanks for subscribing!</p> */}
                      <p className="text-sm text-slate-400 mt-3">
                        We setup the whole flow for you.
                      </p>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-3xl mx-auto aos-init aos-animate max-w-sm grid md:grid-cols-1 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-none gap-6">
            {templates.map((template: any, index: number) => (
              <Link
                href={"/showcase/" + template.id}
                key={index}
                className="relative flex flex-col items-center overflow-hidden bg-white rounded-2xl shadow-xl h-full border"
              >
                <div className="w-full">
                  <div>
                    <div className="items-start">
                      <div className="m-auto flex justify-center items-center">
                        <Image
                          className="w-full"
                          width={100}
                          height={100}
                          src={template?.product?.logo}
                          unoptimized
                          alt={template?.product?.name}
                        />
                      </div>

                      <div className="p-6">
                        {/* Show template type as category */}
                        <span className="uppercase text-xs font-semibold text-orange-600 bg-orange-50 px-2 py-1 rounded-full">
                          {template?.product?.type || "Template"}
                        </span>

                        <Link href={"/showcase/" + template.id} className="flex gap-2">
                          <span className="text-start mt-2 mb-1 font-bold hover:text-orange-600">
                            {template?.product?.name}
                          </span>
                          <span className="ml-2 m-auto mb-3">
                            <svg
                              width="12"
                              height="11"
                              viewBox="0 0 12 11"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <g
                                stroke="#52667A"
                                strokeWidth="1.25"
                                fill="none"
                                fillRule="evenodd"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <path d="M4.10437012.76923H1.83333333C1.37309604.76923 1 1.11362635 1 1.53846077v7.69230769c0 .42483442.37309604.76923077.83333333.76923077h8.33333334c.46023729 0 .83333333-.34439635.83333333-.76923077V7.03051681M7.4205317.78000087h3.20254469c.21241721 0 .38461538.17219818.38461538.38461539V4.345704M10.5 1.5L6 5.84615385"></path>
                              </g>
                            </svg>
                          </span>
                        </Link>

                        <p className="text-sm text-slate-400 mt-2 mb-3">
                          {truncateText(template?.product?.description, 76)}
                        </p>

                        {/* Display tags if available */}
                        <div className="flex flex-wrap gap-1 mt-3">
                          {template?.product?.tags && template.product.tags.length > 0 ? (
                            template.product.tags.slice(0, 3).map((tag: string, tagIndex: number) => (
                              <span 
                                key={tagIndex} 
                                className="bg-slate-100 text-slate-700 text-xs px-2 py-1 rounded-full"
                              >
                                {tag}
                              </span>
                            ))
                          ) : (
                            <span className="bg-slate-100 text-slate-400 text-xs px-2 py-1 rounded-full">
                              No tags available
                            </span>
                          )}
                          {template?.product?.tags && template.product.tags.length > 3 && (
                            <span className="text-xs text-slate-500">+{template.product.tags.length - 3} more</span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}