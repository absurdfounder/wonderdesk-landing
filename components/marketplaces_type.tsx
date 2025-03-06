"use client"

import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import Image, { StaticImageData } from "next/image";
import { ArrowRight } from "lucide-react";

import helpdeskImage from "@/public/images/helpdesk.gif";
import blogImage from "@/public/images/blog.gif";
import marketplaceImage from "@/public/images/marketplace.gif";

// Interfaces remain the same
interface MarketplaceItem {
  title: string;
  description: string;
}

interface MarketplaceTypes {
  [key: number]: MarketplaceItem[];
}

interface MarketplaceCardProps extends MarketplaceItem {
  index: number;
}

interface TabButtonProps {
  text: string;
  isActive: boolean;
  onClick: () => void;
  ariaControls: string;
}

interface TabContentProps {
  show: boolean;
  image: StaticImageData | string;
  alt: string;
  id: string;
}

interface TabItem {
  text: string;
  image: StaticImageData | string;
  alt: string;
}

const MarketplaceCard: React.FC<MarketplaceCardProps> = ({ title, description, index }) => (
  <div 
    className="bg-white p-4 sm:p-6 rounded-lg border shadow-md h-full w-full transition-shadow hover:shadow-lg"
    role="article"
    aria-labelledby={`marketplace-title-${index}`}
  >
    <div>
      <h3 
        id={`marketplace-title-${index}`}
        className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-gray-900"
      >
        {title}
      </h3>
      <p className="text-sm sm:text-base text-gray-600 mb-4">{description}</p>
    </div>
    <a 
      href="#" 
      className="hidden flex items-center text-orange-500 hover:text-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 rounded"
      aria-label={`Learn more about ${title}`}
    >
      Learn more <ArrowRight className="w-4 h-4 ml-1" aria-hidden="true" />
    </a>
  </div>
);

const TabButton: React.FC<TabButtonProps> = ({ text, isActive, onClick, ariaControls }) => (
  <button
    className={`px-3 py-2 sm:px-6 text-sm sm:text-base lg:text-xl font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black whitespace-nowrap ${
      isActive
        ? 'bg-black text-white shadow-sm rounded-full'
        : 'text-gray-600 hover:text-gray-900 rounded-full'
    }`}
    onClick={onClick}
    role="tab"
    aria-selected={isActive}
    aria-controls={ariaControls}
    tabIndex={isActive ? 0 : -1}
  >
    {text}
  </button>
);

const TabContent: React.FC<TabContentProps> = ({ show, image, alt, id }) => (
  <Transition
    show={show}
    appear={true}
    className="w-full h-full m-auto text-center"
    enter="transition ease-in-out duration-700 transform order-first"
    enterFrom="opacity-0 translate-y-16"
    enterTo="opacity-100 translate-y-0"
    leave="transition ease-in-out duration-300 transform absolute"
    leaveFrom="opacity-100 translate-y-0"
    leaveTo="opacity-0 -translate-y-16"
    unmount={false}
  >
    <div 
      className="relative inline-flex flex-col m-auto w-full"
      role="tabpanel"
      id={id}
      aria-label={`${alt} visualization`}
    >
      <Image
        className="md:max-w-none mx-auto rounded-lg shadow-lg w-full h-auto"
        src={image}
        width={500}
        height={462}
        alt={alt}
        priority={show}
        quality={90}
      />
    </div>
  </Transition>
);

// marketplaceTypes data remains the same
const marketplaceTypes: MarketplaceTypes = {
  1: [ // Rental
    {
      title: "Property rentals",
      description: "Build a marketplace for renting homes, apartments, or vacation properties."
    },
    {
      title: "Equipment rentals",
      description: "Create a platform for renting tools, machinery, or specialized equipment."
    },
    {
      title: "Vehicle rentals",
      description: "Develop a marketplace for car, bike, or boat rentals."
    },
    {
      title: "Fashion rentals",
      description: "Enable users to rent designer clothes, accessories, or costumes."
    }
  ],
  2: [ // Service
    {
      title: "Professional services",
      description: "Connect clients with freelancers, consultants, or service providers."
    },
    {
      title: "Local services",
      description: "Build a platform for home services, repairs, or maintenance."
    },
    {
      title: "Educational services",
      description: "Create a marketplace for tutors, instructors, or online courses."
    },
    {
      title: "Wellness services",
      description: "Connect users with health, fitness, or wellness professionals."
    }
  ],
  3: [ // Product
    {
      title: "Handmade goods",
      description: "Build a marketplace for artisans and craftspeople to sell their creations."
    },
    {
      title: "Digital products",
      description: "Create a platform for selling digital downloads, software, or art."
    },
    {
      title: "Vintage items",
      description: "Connect collectors and sellers of antiques and vintage goods."
    },
    {
      title: "Local products",
      description: "Enable local businesses to sell their products online."
    }
  ],
  4: [ // Other
    {
      title: "Classifieds and directories",
      description: "Build a directory or classified ads site like Craigslist or Gumtree."
    },
    {
      title: "Matchmaking and recruiting",
      description: "Build a job board, dating site, or matching platform."
    },
    {
      title: "Multiflow marketplaces",
      description: "Allow services, rentals, and product-selling in one marketplace."
    },
    {
      title: "Bartering and gifting",
      description: "Let users swap things or services with each other."
    }
  ]
};


const tabData: TabItem[] = [
  { text: "Rental marketplace", image: helpdeskImage, alt: "Rental marketplace interface demonstration" },
  { text: "Service marketplace", image: blogImage, alt: "Service marketplace interface demonstration" },
  { text: "Product marketplace", image: marketplaceImage, alt: "Product marketplace interface demonstration" },
  { text: "Other marketplace", image: "/path/to/your/fourth-tab-image.gif", alt: "Other marketplace types demonstration" }
];

export default function MarketplaceType() {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <section 
      className="relative max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12"
      aria-label="Marketplace types selector"
    >
      <div className="max-w-3xl mx-auto text-center pt-4 mb-6 sm:mb-8">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
          No matter how unique your concept,
          <span className="font-source-serif-4 block font-normal text-orange-600">
            BoringSites can support it.
          </span>
        </h1>
      </div>

      {/* Tab Navigation */}
      <div className="flex justify-center mb-8 sm:mb-12 overflow-x-auto pb-4 sm:pb-0">
        <div 
          className="inline-flex bg-gray-100 p-1 rounded-full min-w-0"
          role="tablist"
          aria-label="Marketplace categories"
        >
          {tabData.map((tab, index) => (
            <TabButton
              key={index + 1}
              text={tab.text}
              isActive={activeTab === index + 1}
              onClick={() => setActiveTab(index + 1)}
              ariaControls={`tab-content-${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        {/* Grid Column */}
        <div 
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6"
          role="region"
          aria-label={`${tabData[activeTab - 1].text} options`}
        >
          {marketplaceTypes[activeTab].map((item, index) => (
            <MarketplaceCard
              key={index}
              index={index}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>

        {/* Image Column */}
        <div className="relative order-first md:order-last">
          {tabData.map((tab, index) => (
            <TabContent
              key={index + 1}
              show={activeTab === index + 1}
              image={tab.image}
              alt={tab.alt}
              id={`tab-content-${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="mt-8 sm:mt-12 text-center">
        <a
          href="https://app.boringsites.com"
          className="inline-flex items-center text-orange-500 hover:text-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 rounded text-sm sm:text-base"
          aria-label="Learn more about building marketplaces with BoringSites"
        >
          Build any kind of Marketplace / Directory with BoringSites
          <ArrowRight className="w-4 h-4 ml-2" aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}