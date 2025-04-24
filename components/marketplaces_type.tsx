"use client"

import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import Image, { StaticImageData } from "next/image";
import { ArrowRight } from "lucide-react";
import Link from "next/link"; // Import Link for client-side navigation

// Import your actual image paths if they differ
import helpdeskImage from "@/public/images/helpdesk.gif";
import blogImage from "@/public/images/blog.gif";
import marketplaceImage from "@/public/images/marketplace.gif";

// --- UPDATED Interface ---
interface MarketplaceItem {
  title: string;
  description: string;
  tag: string; // Added: tag for URL category filtering
}

interface MarketplaceTypes {
  [key: number]: MarketplaceItem[];
}

// --- UPDATED Interface ---
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

// --- UPDATED MarketplaceCard Component ---
const MarketplaceCard: React.FC<MarketplaceCardProps> = ({ title, description, index, tag }) => (
  // Use Next.js Link for client-side navigation
  <Link
    href={`/showcase?tags=${tag}`}
    className="group bg-white p-4 sm:p-6 rounded-lg border shadow-md h-full w-full transition-all duration-200 hover:shadow-lg hover:border-orange-300 block relative focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2" // Added group, block, relative, hover/focus effects
    role="article" // Role remains appropriate for a self-contained item
    aria-labelledby={`marketplace-title-${index}`}
  >
    {/* Card Content */}
    <div className="mb-10"> {/* Increased margin-bottom to ensure space for hover text */}
      <h3
        id={`marketplace-title-${index}`}
        className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-gray-900"
      >
        {title}
      </h3>
      <p className="text-sm sm:text-base text-gray-600">{description}</p>
    </div>

    {/* Hover Effect Text: "View Templates ->" */}
    <div
      className="flex items-center text-orange-500 font-medium transition-opacity duration-300 ease-in-out opacity-0 group-hover:opacity-100 absolute bottom-4 right-4 sm:bottom-6 sm:right-6" // Show on hover, positioned bottom-right
      aria-hidden="true" // Hide decorative text from accessibility tree as the link itself is sufficient
    >
      View Templates <ArrowRight className="w-4 h-4 ml-1" />
    </div>
  </Link>
);


// TabButton Component (No changes needed)
const TabButton: React.FC<TabButtonProps> = ({ text, isActive, onClick, ariaControls }) => (
  <button
    className={`px-3 py-2 sm:px-6 text-sm sm:text-base lg:text-xl font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black whitespace-nowrap ${
      isActive
        ? 'bg-black text-white shadow-sm rounded-md'
        : 'text-gray-600 hover:text-gray-900 rounded-md'
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

// TabContent Component (No changes needed)
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
      hidden={!show}
    >
      <Image
        className="md:max-w-none mx-auto rounded-lg shadow-lg w-full h-auto"
        src={image}
        width={500}
        height={462}
        alt={alt}
        priority
        quality={90}
      />
    </div>
  </Transition>
);

// --- UPDATED Marketplace Types Data ---
const marketplaceTypes: MarketplaceTypes = {
  1: [ // Rental
    {
      title: "Property rentals",
      description: "Build a marketplace for renting homes, apartments, or vacation properties.",
      tag: "property-rental" // Added tag
    },
    {
      title: "Equipment rentals",
      description: "Create a platform for renting tools, machinery, or specialized equipment.",
      tag: "equipment-rental" // Added tag
    },
    {
      title: "Vehicle rentals",
      description: "Develop a marketplace for car, bike, or boat rentals.",
      tag: "vehicle-rental" // Added tag
    },
    {
      title: "Fashion rentals",
      description: "Enable users to rent designer clothes, accessories, or costumes.",
      tag: "fashion-rental" // Added tag
    }
  ],
  2: [ // Service
    {
      title: "Professional services",
      description: "Connect clients with freelancers, consultants, or service providers.",
      tag: "freelance-pro" // Added tag
    },
    {
      title: "Local services",
      description: "Build a platform for home services, repairs, or maintenance.",
      tag: "local-home-service" // Added tag
    },
    {
      title: "Educational services",
      description: "Create a marketplace for tutors, instructors, or online courses.",
      tag: "tutoring-online" // Added tag
    },
    {
      title: "Wellness services",
      description: "Connect users with health, fitness, or wellness professionals.",
      tag: "health-wellness" // Added tag
    }
  ],
  3: [ // Product
    {
      title: "Handmade goods",
      description: "Build a marketplace for artisans and craftspeople to sell their creations.",
      tag: "handmade-crafts" // Added tag
    },
    {
      title: "Digital products",
      description: "Create a platform for selling digital downloads, software, or art.",
      tag: "digital-goods" // Added tag
    },
    {
      title: "Vintage items",
      description: "Connect collectors and sellers of antiques and vintage goods.",
      tag: "vintage-antique" // Added tag
    },
    {
      title: "Local products",
      description: "Enable local businesses to sell their products online.",
      tag: "local-shop" // Added tag
    }
  ],
  4: [ // Directories (Content Updated)
    {
      title: "Business Directory",
      description: "Create a searchable directory of local or industry-specific businesses.",
      tag: "business-directory" // Updated content + tag
    },
    {
      title: "Event Listings",
      description: "Build a platform to list and promote upcoming events, workshops, or concerts.",
      tag: "event-listing" // Updated content + tag
    },
    {
      title: "Classified Ads",
      description: "Develop a site for users to post classified advertisements for goods or services.",
      tag: "classified-ads" // Updated content + tag
    },
    {
      title: "Member Directory",
      description: "Enable organizations to create private or public directories of their members.",
      tag: "member-directory" // Updated content + tag
    }
  ]
};

// Tab Data (Defines the Tabs themselves - No changes needed)
const tabData: TabItem[] = [
  { text: "Product Docs", image: helpdeskImage, alt: "Product documentation interface example" },
  { text: "Helpdesk", image: helpdeskImage, alt: "Helpdesk interface demonstration" },
  { text: "Blog", image: blogImage, alt: "Blog interface demonstration" },
  { text: "Marketplace", image: marketplaceImage, alt: "Generic marketplace interface demonstration" },
  { text: "Directories", image: marketplaceImage, alt: "Directory interface demonstration" }
];


// --- Main Component - MarketplaceType --- (Passes tag prop)
export default function MarketplaceType() {
  const [activeTab, setActiveTab] = useState(1);

  // Logic to map activeTab (1-5) to dataKey (1-4) remains the same
  const dataKey = activeTab === 5 ? 4 : activeTab;

  const currentTabText = tabData[activeTab - 1]?.text || 'Selected Category';

  return (
    <section
      className="relative max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12"
      aria-label="Marketplace types selector"
    >
      {/* Title Section */}
      <div className="max-w-3xl mx-auto text-center pt-4 mb-6 sm:mb-8">
        <h2 className="font-funneldisplay text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
          No matter how unique your concept,
          <span className=" block font-normal text-orange-600">
            Wonder can support it.
          </span>
        </h2>
      </div>

      {/* Tab Navigation */}
      <div className="flex justify-center mb-8 sm:mb-12 overflow-x-auto pb-4 sm:pb-0">
        <div
          className="inline-flex bg-gray-100 p-1 rounded-md min-w-0"
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

      {/* Main Content Area (Grid) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">

        {/* Grid Column: Marketplace Cards */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6"
          role="region"
          aria-label={`${currentTabText} options`}
        >
          {/* --- UPDATED: Pass 'tag' prop --- */}
          {marketplaceTypes[dataKey] ? (
            marketplaceTypes[dataKey].map((item, index) => (
              <MarketplaceCard
                key={item.tag} // Use tag as key assuming it's unique within the category
                index={index}
                title={item.title}
                description={item.description}
                tag={item.tag} // Pass the tag prop
              />
            ))
          ) : (
             <div className="col-span-full text-center text-gray-500 py-8">
              <p>Marketplace examples are not available for this category.</p>
             </div>
          )}
        </div>

        {/* Grid Column: Image Content */}
        <div className="relative order-first md:order-last flex items-center justify-center min-h-[300px] md:min-h-0">
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

      {/* Call to Action Section */}
      <div className="mt-8 sm:mt-12 text-center">
        <a // Changed to <a> as it leads off-site or to a general page
          href="https://app.wondersites.co" // Use appropriate URL
          className="inline-flex items-center text-orange-500 hover:text-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 rounded text-sm sm:text-base font-medium"
          aria-label="Learn more about building marketplaces with Wonder Sites"
        >
          Build any kind of Marketplace / Directory with Wonder Sites
          <ArrowRight className="w-4 h-4 ml-2" aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}