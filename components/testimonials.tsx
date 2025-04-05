"use client"

import React, { FC, useState, CSSProperties } from 'react';
import { Twitter, Linkedin } from 'lucide-react';

interface Testimonial {
  name: string;
  handle?: string;
  avatar: string;
  content: string;
  additionalContent?: string;
  platform?: 'twitter' | 'linkedin';
}

const testimonials: Testimonial[] = [
  {
    name: "Zack Swire",
    handle: "@swire",
    avatar: "/api/placeholder/40/40",
    content:
      "If you're a Coach or a Creator, and you'd like to build better websites quickly, check out @WonderSitesCo",
    additionalContent: "I switched from Squarespace & I'm not looking back 🙌",
    platform: "twitter",
  },
  {
    name: "Dan Rowden",
    handle: "@dr",
    avatar: "/api/placeholder/40/40",
    content: "Wow @WonderSitesCo is amazing ✨",
    platform: "twitter",
  },
  {
    name: "Laura Evans-Hill",
    handle: "@EvansNifty",
    avatar: "/api/placeholder/40/40",
    content:
      "A HUGGGGEEEE shout out to @WonderSitesCo for putting me onto them—my course landing pages have never looked better.",
    platform: "twitter",
  },
  {
    name: "Alberto Di Risio",
    handle: "albertodirisio",
    avatar: "/api/placeholder/40/40",
    content:
      "First I downgraded my old site builder to the free plan. Then I stopped using it entirely.",
    additionalContent:
      "What am I using now?\n\nThis thing called Wonder (wondersites.co) 🎉\n\nAfter trying it for half an hour I upgraded to a paid plan—and I really really like it.",
    platform: "linkedin",
  },
  {
    name: "Annie Hwang",
    avatar: "/api/placeholder/40/40",
    content:
      "The customization in Wonder is awesome. My product pages always look super fun and match Jemi's brand.",
  },
  {
    name: "Ben Barrett-Forrest",
    avatar: "/api/placeholder/40/40",
    content:
      "I was up and running with Wonder in literally 2 minutes. I love how simple it is to launch landing pages. Would highly recommend!",
  },
  {
    name: "Max Haining",
    handle: "@HainingMax",
    avatar: "/api/placeholder/40/40",
    content:
      "@WonderSitesCo\n\nLike Webflow, but better.\n\nPerfect for...\n- Sharing course previews\n- Product demos\n- Creating sales funnels\n- Teaching your audience",
    platform: "twitter",
  },
  {
    name: "Mike Futia",
    handle: "@mikefutia",
    avatar: "/api/placeholder/40/40",
    content:
      "The best new tool for building:\n\n- Course websites\n- Webinar pages\n- 1-on-1 booking sites\n- Or ANY type of landing page\n\nIs WonderSites.co\n\nIt blows everything else out of the water.",
    platform: "twitter",
  },
  {
    name: "Raffaele Gaito",
    avatar: "/api/placeholder/40/40",
    content:
      "I love Wonder, it's a platform that has incredibly sped up my site creation speed. If I'm growing quickly on YouTube, I owe it also to Wonder.",
  },
  {
    name: "Tom Critchlow",
    handle: "@tomcritchlow",
    avatar: "/api/placeholder/40/40",
    content:
      "Wrapping up day 1 of site building for my new course and just so much <3 for @WonderSitesCo\n\n- Impeccable and speedy support (even on a Sunday!)\n- Great templates (recognizing my brand’s vibe instantly!)\n- Putting professional websites within reach (in browser!)",
    platform: "twitter",
  },
  {
    name: "Martin Cregut",
    handle: "martin-cregut",
    avatar: "/api/placeholder/40/40",
    content:
      "Wonder c'est Webflow en 100x plus intuitif, 100x plus beau et 100x plus vaste.",
    platform: "linkedin",
  },
  {
    name: "Justin Moore",
    handle: "@justinmoorefam",
    avatar: "/api/placeholder/40/40",
    content:
      "I just re-launched my entire course site on @WonderSitesCo and holy cow their multi-layout views and custom CSS are soooo sick 🤩",
    platform: "twitter",
  },
  {
    name: "Bug Artisan",
    handle: "LeBugArtisan",
    avatar: "/api/placeholder/40/40",
    content:
      "Yesterday I started using @WonderSitesCo and 🤯\n\nIt's so easy to use! I'm definitely a no‑code beginner, and I rarely/never build sites.",
    platform: "twitter",
  },
  {
    name: "James Devonport",
    handle: "@jamesdevonport",
    avatar: "/api/placeholder/40/40",
    content:
      "Thank you, love @WonderSitesCo for producing all my tutorial and help pages 💙",
    platform: "twitter",
  },
  {
    name: "Mona",
    handle: "@simondela",
    avatar: "/api/placeholder/40/40",
    content:
      "One more vote for @WonderSitesCo! Have been using other builders for 3 years now and Wonder just kicks them out of the market imo.",
    platform: "twitter",
  },
];

const tabs = ['All', 'Online Course', 'Product Demo', 'Tutorial', 'Squarespace', 'YouTube'] as const;
type Tab = typeof tabs[number];

const TestimonialsGrid: FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>('All');

  const getRandomRotation = (): CSSProperties['transform'] => {
    const deg = Math.random() * 4 - 2;
    return `rotate(${deg}deg)`;
  };

  return (
    <div className="bg-gray-50 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4">Loved by entrepreneurs</h1>
          <p className="text-xl text-gray-600">
            We could toot our horn, but customers do it for us.
          </p>
        </header>

        <nav className="flex justify-center flex-wrap gap-2 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2 rounded-full transition-colors duration-200 ${
                activeTab === tab
                  ? 'bg-gray-900 text-white'
                  : 'bg-white text-gray-500 hover:bg-gray-100'
              }`}
            >
              {tab}
            </button>
          ))}
        </nav>

        <section className="flex flex-wrap justify-center gap-6">
          {testimonials.map((t, i) => (
            <article
              key={i}
              className="bg-white rounded-lg shadow-md transition-transform duration-300 hover:-translate-y-1 p-6 w-[346px] overflow-visible"
              style={{ transform: getRandomRotation() }}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <img
                    src={t.avatar}
                    alt={`${t.name}'s avatar`}
                    className="w-10 h-10 rounded-full mr-3"
                  />
                  <div>
                    <h3 className="font-medium">{t.name}</h3>
                    {t.handle && (
                      <p className="text-gray-500 text-sm">{t.handle}</p>
                    )}
                  </div>
                </div>
                <div>
                  {t.platform === 'twitter' && (
                    <Twitter size={20} className="text-gray-400" />
                  )}
                  {t.platform === 'linkedin' && (
                    <Linkedin size={20} className="text-gray-400" />
                  )}
                </div>
              </div>

              <div className="space-y-3 whitespace-pre-line">
                <p>{t.content}</p>
                {t.additionalContent && <p>{t.additionalContent}</p>}
              </div>
            </article>
          ))}
        </section>
      </div>
    </div>
  );
};

export default TestimonialsGrid;
