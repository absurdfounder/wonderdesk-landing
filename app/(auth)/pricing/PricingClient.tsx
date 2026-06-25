"use client";


import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Check, X, Loader, Users, MessageSquare, FileText, FolderGit2, DatabaseIcon, Gift, Lock, ArrowBigRight, ArrowRight, Sparkles, HelpCircle, Globe, Headphones } from 'lucide-react';
import confetti from "canvas-confetti";
import MigrateFrom from "@/public/images/migratefrom.png";
import Testimonials from "@/components/testimonials";
import Rating from "../compare-against/Rating";
import Header from "@/components/ui/header";
import WonderPricingGrid, { type PricingTier } from "@/components/pricing/WonderPricingGrid";

// --- NEW: Exit Intent Popup Component ---
interface ExitIntentPopupProps {
    isOpen: boolean;
    onClose: () => void;
}

const ExitIntentPopup: React.FC<ExitIntentPopupProps> = ({ isOpen, onClose }) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 flex items-center justify-start bg-black bg-opacity-70 p-4 z-50"
                    onClick={onClose} // Close on overlay click
                >
                    <motion.div
                        initial={{ scale: 0.9, y: 20 }}
                        animate={{ scale: 1, y: 0 }}
                        exit={{ scale: 0.9, y: 20 }}
                        className="bg-white p-8 rounded-xl shadow-2xl max-w-lg mx-auto relative"
                        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
                    >
                        <button
                            onClick={onClose}
                            className="absolute top-3 right-3 bg-slate-200 hover:bg-slate-300 rounded-md w-8 h-8 flex items-center justify-center transition-colors z-10"
                        >
                            <X size={16} />
                        </button>





                        <span className="text-lg font-bold bg-orange-600 text-white rounded-full p-2 px-4">Psst.</span>

                        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mt-2 mb-3">
                            Before you go...
                        </h2>
                        <p className="text-slate-600 mb-6 max-w-md mx-auto">
                            Did we mention that the trial is free, you can signup in seconds, and no credit card is required? Give us a try, we'd love to show you what Wonder can do!
                        </p>


                        <Link
                            href="https://app.wonderdesk.ai" // Make sure this is the correct link for the discounted offer
                            className="bg-orange-600 text-white text-lg w-fit py-3 px-6 rounded-lg block hover:bg-orange-700 transition-colors shadow-lg font-medium"
                            onClick={() => {
                                // You might want to track this conversion
                                onClose();
                            }}
                        >
                            OK Lets get started
                        </Link>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};
// --- END of Exit Intent Popup Component ---


// Feature interfaces
interface Feature {
    name: string;
    description: string;
    imageUrl: string;
}

interface HobbyFeature extends Feature {
    included: boolean;
}

// Position interface for tooltip positioning
interface Position {
    top: number;
    left: number;
}

// FAQ data structure
interface FAQ {
    question: string;
    answer: string;
}

// Comparison table: cell is either check (true), cross (false), or text
type ComparisonCell = boolean | { text: string; sub?: string };

interface ComparisonRow {
    feature: string;
    personal: ComparisonCell;
    business: ComparisonCell;
}

interface ComparisonCategory {
    title: string;
    icon: React.ComponentType<{ className?: string }>;
    iconColor: string;
    rows: ComparisonRow[];
}

// Comparison table data (Personal vs Business)
const comparisonCategories: ComparisonCategory[] = [
    {
        title: "AI Features",
        icon: Sparkles,
        iconColor: "text-violet-500",
        rows: [
            { feature: "Wonder AI", personal: true, business: true },
            { feature: "AI Teams (Designer & Developer)", personal: true, business: true },
        ],
    },
    {
        title: "Sites & Publishing",
        icon: FileText,
        iconColor: "text-blue-500",
        rows: [
            { feature: "Websites", personal: { text: "1" }, business: { text: "10" } },
            { feature: "Unlimited pages", personal: true, business: true },
            { feature: "All types of websites", personal: true, business: true },
            { feature: "Manual publishing", personal: true, business: true },
            { feature: "Auto publish every hour", personal: true, business: true },
            { feature: "Instant auto publish", personal: false, business: true },
        ],
    },
    {
        title: "Help Center & Docs",
        icon: HelpCircle,
        iconColor: "text-slate-600",
        rows: [
            { feature: "Public help center", personal: true, business: true },
            { feature: "Custom branding", personal: true, business: true },
            { feature: "Automatic SSL (HTTPS)", personal: true, business: true },
            { feature: "Custom domain", personal: true, business: true },
            { feature: "Sub-directory domain", personal: false, business: true },
            { feature: "Multi-lingual sites", personal: false, business: true },
        ],
    },
    {
        title: "Team & Collaboration",
        icon: Users,
        iconColor: "text-blue-500",
        rows: [
            { feature: "Team members", personal: { text: "Limited" }, business: { text: "Unlimited" } },
            { feature: "Membership sites", personal: false, business: true },
        ],
    },
    {
        title: "Hosting & Limits",
        icon: Globe,
        iconColor: "text-cyan-500",
        rows: [
            { feature: "Traffic (users/month)", personal: { text: "10,000" }, business: { text: "100,000" } },
            { feature: "No watermark", personal: true, business: true },
            { feature: "Privacy-focused analytics", personal: true, business: true },
        ],
    },
    {
        title: "Support",
        icon: Headphones,
        iconColor: "text-amber-500",
        rows: [
            { feature: "Email support", personal: true, business: true },
        ],
    },
];

// Features for Scale/Rocket plan
const scaleFeatures: Feature[] = [
    { name: "Unlimited Websites", description: "Set up and manage unlimited helpdesks, documentations, directories and blogs on Wonder Sites.", imageUrl: "/api/placeholder/200/150" },
    { name: "Unlimited Custom Domain / SSL", description: "Use your own domain name and benefit from included SSL encryption for enhanced security.", imageUrl: "/api/placeholder/200/150" },
    { name: "Unlimited articles & collections", description: "Create unlimited articles and collections without any restrictions.", imageUrl: "/api/placeholder/200/150" },
    { name: "Unlimited Analytics", description: "Access comprehensive analytics to gain deep insights into your site's performance and user behavior.", imageUrl: "/api/placeholder/200/150" },
    { name: "Full SEO Ready", description: "Utilize advanced SEO tools and features to maximize your site's search engine visibility.", imageUrl: "/api/placeholder/200/150" },
    { name: "Advanced Customization", description: "Enjoy extensive customization options to tailor your site's look and feel to your exact preferences.", imageUrl: "/api/placeholder/200/150" },
    { name: "Instant Upgrades", description: "Receive immediate upgrades and new features as soon as they're available.", imageUrl: "/api/placeholder/200/150" },
    { name: "Custom Sections AI", description: "Leverage AI technology to create unique, custom sections that match your site's theme and content.", imageUrl: "/api/placeholder/200/150" },
    { name: "Custom Code & Integrations", description: "Add your own custom code and integrate with a wide range of third-party services and APIs.", imageUrl: "/api/placeholder/200/150" },
    { name: "Paywall - Gumroad, LemonSqueezy, Stripe", description: "Implement paywalls using popular payment processors to monetize your content effectively.", imageUrl: "/api/placeholder/200/150" },
    { name: "Tally Form Connection", description: "Seamlessly connect and use Tally forms within your site for data collection and user interaction.", imageUrl: "/api/placeholder/200/150" },
    { name: "Open AI Assistant", description: "Access an advanced AI assistant to help with content creation, site management, and user engagement.", imageUrl: "/api/placeholder/200/150" },
    { name: "General Search", description: "Implement a powerful, site-wide search feature to help users find content quickly and easily.", imageUrl: "/api/placeholder/200/150" },
    { name: "Remove 'Watermark' badge", description: "Remove the 'Powered by Wonder  Sites badge for a fully branded, professional appearance.", imageUrl: "/api/placeholder/200/150" },
];

const faqs: Record<string, FAQ[]> = {
    Pricing: [
        {
            question: "How does the free 3-day trial work?",
            answer: "Wonder offers a 3-day free trial to help you explore everything we offer. There’s zero cost to get started, and during the trial you’ll have full access to all features. After the trial, you can choose a subscription plan to continue.",
        },
        {
            question: "What are the pricing plans?",
            answer: "Wonder offers flexible pricing plans based on your needs. Plans vary based on usage and feature access. You can view full details on our pricing page.",
        },
        {
            question: "Are there any additional fees?",
            answer: "Pricing is exclusive of taxes. Some add-ons and advanced features may have additional costs, which are clearly outlined when applicable.",
        },
        {
            question: "Do I need to enter my credit card to start the trial?",
            answer: "No. You can start your free trial without providing payment details. Payment is only required when you're ready to upgrade.",
        },
        {
            question: "What happens after my free trial ends?",
            answer: "Once your trial ends, you’ll be asked to choose a subscription plan. If you don't upgrade, your site will be paused, but your content will remain saved.",
        },
        {
            question: "Can I cancel or switch plans anytime?",
            answer: "Yes, you can upgrade, downgrade, or cancel your plan at any time from your dashboard. Changes will take effect in your next billing cycle.",
        },
        {
            question: "Are there discounts for students, startups, or nonprofits?",
            answer: "Yes! We offer special discounts. Please contact support@wonderdesk.ai with proof of eligibility to apply.",
        },
        {
            question: "Do you offer custom pricing for agencies or enterprises?",
            answer: "Yes, we offer custom plans tailored for agencies and larger teams managing multiple websites. Contact us for details.",
        },
        {
            question: "Can I switch from monthly to annual billing?",
            answer: "Absolutely. You can switch to annual billing anytime and enjoy a discounted rate compared to monthly payments.",
        },
        {
            question: "Will my site go offline if my payment fails?",
            answer: "We’ll notify you if there’s an issue with your payment and provide a grace period to update your billing info. Your site won't be taken down immediately.",
        },
    ],
    Features: [
        {
            question: "What is Wondersites?",
            answer: "Wondersites is a powerful no-code website builder that turns your Notion pages into beautiful, functional websites—perfect for blogs, documentation, directories, and more.",
        },
        {
            question: "What types of websites can I build?",
            answer: "You can create blogs, help centers, knowledge bases, directories, marketing pages, and even marketplaces—all powered by Notion.",
        },
        {
            question: "Do I need to know how to code?",
            answer: "No! Wondersites is built for non-technical users. You can build a complete site using Notion and our tools—no coding required.",
        },
        {
            question: "Can I use my own custom domain?",
            answer: "Yes, Wondersites lets you connect your own custom domain to your site for a branded experience.",
        },
        {
            question: "Is my content synced with Notion?",
            answer: "Yes. Any changes you make in Notion will be automatically reflected on your live site. It’s always up to date.",
        },
        {
            question: "Does Wondersites support SEO?",
            answer: "Absolutely. Wondersites offers built-in SEO tools like meta tags, custom URLs, fast loading speeds, and mobile-friendly design.",
        },
        {
            question: "Can I customize my site's design?",
            answer: "Yes. Choose from pre-built themes, adjust layout settings, or add custom CSS and code to make your site truly yours.",
        },
        {
            question: "Is Wondersites mobile-friendly?",
            answer: "Yes. Every Wondersite is fully responsive, meaning it looks great on desktops, tablets, and mobile devices.",
        },
        {
            question: "Can I track analytics?",
            answer: "Yes. Wondersites includes built-in privacy-friendly analytics, and you can also connect external tools like Google Analytics.",
        },
        {
            question: "Is it secure?",
            answer: "Wondersites follows best practices in security including HTTPS, secure Notion access, and regular data protection protocols.",
        }
    ]
};


// Feature Tooltip Component
interface FeatureTooltipProps {
    feature: Feature;
    position: Position;
}

const FeatureTooltip: React.FC<FeatureTooltipProps> = ({ feature, position }) => {
    const adjustedPosition = {
        top: Math.min(position.top, window.innerHeight - 200),
        left: Math.min(position.left, window.innerWidth - 300)
    };

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="fixed p-4 bg-white shadow-lg rounded-lg max-w-xs z-50" // Added z-index
            style={{ top: adjustedPosition.top, left: adjustedPosition.left }}
        >
            <Image src={feature.imageUrl} alt={feature.name} width={200} height={150} className="mb-2 rounded" />
            <h3 className="text-lg font-bold text-slate-900">{feature.name}</h3>
            <p className="text-sm text-slate-600">{feature.description}</p>
        </motion.div>
    );
};

// Feature Popup Component
interface FeaturePopupProps {
    feature: Feature;
    onClose: () => void;
}

const FeaturePopup: React.FC<FeaturePopupProps> = ({ feature, onClose }) => (
    <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 p-4 z-50" // Added z-index
        onClick={onClose} // Close on overlay click
    >
        <motion.div
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 20 }}
            className="bg-white p-6 md:p-8 rounded-lg shadow-xl w-full max-w-md mx-auto relative"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
        >
            <button
                onClick={onClose}
                className="absolute top-2 right-2 bg-slate-200 hover:bg-slate-300 rounded-md w-8 h-8 flex items-center justify-center transition-colors z-10" // Ensure button is clickable
            >
                <X size={16} />
            </button>
            <div className="max-w-full overflow-hidden">
                <Image src={feature.imageUrl} alt={feature.name} width={400} height={300} className="mb-4 rounded-md w-full h-auto" />
            </div>
            <h2 className="text-xl md:text-2xl font-bold mt-4 text-slate-900">{feature.name}</h2>
            <p className="mt-2 text-slate-600">{feature.description}</p>
        </motion.div>
    </motion.div>
);

// FAQ Accordion Component
interface FAQAccordionProps {
    question: string;
    answer: string;
}

const FAQAccordion: React.FC<FAQAccordionProps> = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b border-slate-200">
            <button
                className="w-full text-left py-4 px-5 flex justify-between items-center hover:bg-gray-50 transition-colors"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className="font-medium text-slate-900">{question}</span>
                <span className="flex-shrink-0 ml-2 text-slate-500">
                    {isOpen ? (
                        <X size={16} />
                    ) : (
                        <span className="text-lg">+</span>
                    )}
                </span>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="px-5 pb-4 text-slate-600"
                    >
                        <p>{answer}</p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

// FAQ Section Component
const FAQSection: React.FC = () => {
    const [activeTab, setActiveTab] = useState("Pricing");

    return (
        <div className="mt-20 max-w-7xl">
            <div className="px-4">
                <div className="text-start mb-10">
                    <h2 className="font-funneldisplay text-2xl md:text-3xl font-bold text-slate-900 mb-3">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-slate-600 max-w-2xl">
                        Have a different question? Reach out to our support team by
                        <a
                            href="mailto:vaibhav@wonderdesk.ai"
                            className="text-orange-600 hover:text-orange-700 hover:underline px-2"
                        >
                            sending us an email
                        </a>
                        and we'll get back to you as soon as we can.
                    </p>
                </div>

                <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                    <div className="flex justify-center p-4 border-b border-slate-200">
                        {Object.keys(faqs).map((tab) => (
                            <button
                                key={tab}
                                className={`px-4 py-2 mx-1 text-sm md:text-base font-medium rounded-md transition-colors ${activeTab === tab
                                    ? "bg-orange-100 text-orange-800"
                                    : "text-slate-600 hover:bg-slate-100"
                                    }`}
                                onClick={() => setActiveTab(tab)}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>

                    <div className="divide-y divide-slate-200">
                        {faqs[activeTab].map((faq, index) => (
                            <FAQAccordion key={index} {...faq} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};


// --- NEW: Reusable Flipping Button Component ---
interface FlippingButtonLinkProps {
    href: string;
    initialText: string;
    hoverText: string;
    className?: string; // To pass the dynamic styles for highlight/non-highlight
}

const FlippingButtonLink: React.FC<FlippingButtonLinkProps> = ({
    href,
    initialText,
    hoverText,
    className = '', // Default to empty string
}) => {
    const [isHovered, setIsHovered] = useState<boolean>(false);

    // Base classes for the link structure and behavior
    const baseClasses = "flex items-center justify-center py-3 px-4 rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 w-full relative";

    return (
        <Link
            href={href}
            className={`${baseClasses} ${className}`} // Combine base and passed classes
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Container for the flipping text - adjust height (e.g., h-5) if needed */}
            <div className="relative overflow-hidden h-5">
                {/* Initial Text */}
                <div
                    style={{
                        transform: isHovered ? 'translateY(-100%)' : 'translateY(0)',
                        transition: 'transform 0.3s ease-in-out',
                    }}
                >
                    {initialText}
                </div>
                {/* Hover Text */}
                <div
                    className="absolute top-0 left-0 w-full text-center" // Center text
                    style={{
                        transform: isHovered ? 'translateY(0)' : 'translateY(100%)',
                        transition: 'transform 0.3s ease-in-out',
                    }}
                >
                    {hoverText}
                </div>
            </div>
            {/* Icon could be added here if needed, e.g., <ArrowRight className="w-4 h-4 ml-2 flex-shrink-0" /> */}
        </Link>
    );
};
// --- End of FlippingButtonLink Component ---

// Main Pricing Component
const Pricing: React.FC = () => {
    // State variables
    const [billingCycle, setBillingCycle] = useState<'Monthly' | 'Yearly'>('Monthly');
    const [popupFeature, setPopupFeature] = useState<Feature | null>(null);
    const [hoveredFeature, setHoveredFeature] = useState<Feature | null>(null);
    const [tooltipPosition, setTooltipPosition] = useState<Position>({ top: 0, left: 0 });
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [countdown, setCountdown] = useState(86400);
    const [isLifetimeDealVisible, setIsLifetimeDealVisible] = useState(true);
    const [loading, setLoading] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    // --- NEW: State for Exit Intent Popup ---
    const [showExitPopup, setShowExitPopup] = useState(false);
    const exitIntentShown = useRef(false); // Ref to ensure it only fires once

    const featureRefs = useRef<(HTMLDivElement | null)[]>([]);

    // Define the pricing tiers
    const pricingTiers: PricingTier[] = [
        {
            name: "Personal",
            highlight: false,
            monthlyPrice: 18,
            yearlyPrice: 108,
            trafficLimit: "10,000",
            features: [
                "1 Website",
                "Unlimited Pages",
                "All Type of Websites",
                "Automatic SSL(https)",
                "Custom domain",
                "Wonder AI",
                "AI Teams (Designer & Developer)",
                "Privacy focused analytics",
                "No Watermark",
                "Manual Publishing",
                "Auto publish every hour"
            ]
        },
        {
            name: "Business",
            highlight: true,
            monthlyPrice: 86,
            yearlyPrice: 516,
            trafficLimit: "100,000",
            features: [
                "10 Websites",
                "Everything in Personal, Plus",
                "Sub-directory Domain",
                "Multi-lingual sites",
                "Unlimited team members",
                "Membership sites",
                "Instant Auto Publish"
            ]
        }
    ];

    // --- NEW: useEffect for Exit Intent ---
    useEffect(() => {
        const handleMouseLeave = (e: MouseEvent) => {
            // If the mouse is at the top of the viewport and the popup hasn't been shown yet
            if (e.clientY <= 0 && !exitIntentShown.current) {
                // Any other modals are closed
                if (!isModalOpen && !popupFeature) {
                    setShowExitPopup(true);
                    exitIntentShown.current = true; // Mark as shown
                }
            }
        };

        document.addEventListener("mouseout", handleMouseLeave);

        return () => {
            document.removeEventListener("mouseout", handleMouseLeave);
        };
    }, [isModalOpen, popupFeature]); // Re-run if other modals open/close


    // Check mobile status on mount and resize
    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);

        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // Check if lifetime deal should be visible
    useEffect(() => {
        const today = new Date();
        const endDate = new Date("2024-06-30"); // Using the specific date from original code
        if (today > endDate) {
            setIsLifetimeDealVisible(false);
        }
    }, []);

    // Countdown timer
    useEffect(() => {
        const timer = setInterval(() => {
            setCountdown((prevCountdown) => (prevCountdown > 0 ? prevCountdown - 1 : 0));
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    // Confetti effect on mount (smaller burst for better UX)
    useEffect(() => {
        confetti({
            particleCount: 30,
            spread: 50,
            origin: { y: 0.6 },
        });
    }, []);

    // Event handlers
    const handleFeatureClick = (feature: Feature) => {
        setPopupFeature(feature);
    };

    const closePopup = () => {
        setPopupFeature(null);
    };

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    const formatTime = (time: number) => {
        const hours = Math.floor(time / 3600);
        const minutes = Math.floor((time % 3600) / 60);
        const seconds = time % 60;
        return `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
    };

    const handleFeatureHover = (feature: Feature, index: number) => {
        if (isMobile) return;

        setHoveredFeature(feature);
        const element = featureRefs.current[index];
        if (element) {
            const rect = element.getBoundingClientRect();
            setTooltipPosition({
                top: rect.bottom + window.scrollY,
                left: rect.left + window.scrollX,
            });
        }
    };

    const handleFeatureLeave = () => {
        setHoveredFeature(null);
    };

    const handleUpgradeClick = async () => {
        setLoading(true);
        try {
            // Payment logic would go here
            await new Promise(resolve => setTimeout(resolve, 2000));
        } catch (error) {
            console.error('Error during payment:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="bg-slate-50 min-h-screen">
            {/* --- NEW: Render the Exit Intent Popup --- */}
            <ExitIntentPopup isOpen={showExitPopup} onClose={() => setShowExitPopup(false)} />

            <Header />

<br/>
<br/>
<br/>
<br/>
<br/>




            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-8 relative">
                <div className="mb-8">
                    <div className="text-start mb-16">
                        <h1 className="font-funneldisplay text-4xl md:text-5xl tracking-tight mb-6">
                            <span className="text-slate-800 block mb-2">
                                Setup <img src="https://dazzling-cat.netlify.app/wonderbadge.png" className="inline-block w-12 h-12 rounded-md align-middle mx-1" /> Wonder at your company
                            </span>
                        </h1>
                        <p className="body-text max-w-2xl">

                        Never write another help article.
                        Wonder customers save 20 hours a month on support and docs on average. Get started today with a 7-day free trial. No credit card required.
                        </p>

                    </div>
                </div>

                {/* Pricing grid (Trooper-style) */}
                <div className="mb-16">
                    <WonderPricingGrid
                        tiers={pricingTiers}
                        billingCycle={billingCycle}
                        onBillingCycleChange={setBillingCycle}
                    />
                </div>

                {/* Comparison table (desktop) */}
                <div className="hidden lg:block mb-20">
                    <h4 className="font-funneldisplay text-2xl font-bold text-slate-900 text-start mb-8">
                        Compare plans
                    </h4>
                    <div className="wonder-pricing-compare">
                        <div className="wonder-pricing-compare-grid sticky top-16 z-10 bg-white">
                            <div className="wonder-pricing-compare-cell wonder-pricing-compare-head">Features</div>
                            <div className="wonder-pricing-compare-cell wonder-pricing-compare-head text-center">Personal</div>
                            <div className="wonder-pricing-compare-cell wonder-pricing-compare-head text-center text-slate-900">Business</div>
                        </div>
                        <div className="wonder-pricing-compare-grid">
                            {comparisonCategories.map((category) => {
                                const Icon = category.icon;
                                return (
                                    <React.Fragment key={category.title}>
                                        <div className="wonder-pricing-compare-category">
                                            <span className={`inline-flex items-center gap-2 ${category.iconColor}`}>
                                                <Icon className="h-[18px] w-[18px]" />
                                                {category.title}
                                            </span>
                                        </div>
                                        {category.rows.map((row) => (
                                            <React.Fragment key={row.feature}>
                                                <div className="wonder-pricing-compare-cell text-slate-700">{row.feature}</div>
                                                <div className="wonder-pricing-compare-cell flex items-center justify-center">
                                                    {typeof row.personal === 'boolean' ? (
                                                        row.personal ? (
                                                            <Check className="h-5 w-5 shrink-0 text-[#009fbc]" strokeWidth={1.5} />
                                                        ) : (
                                                            <X className="h-5 w-5 shrink-0 text-slate-300" strokeWidth={1.5} />
                                                        )
                                                    ) : (
                                                        <div className="flex flex-col items-center text-center">
                                                            <span className="text-sm text-slate-700">{row.personal.text}</span>
                                                            {row.personal.sub ? (
                                                                <span className="text-xs text-slate-500">{row.personal.sub}</span>
                                                            ) : null}
                                                        </div>
                                                    )}
                                                </div>
                                                <div className="wonder-pricing-compare-cell flex items-center justify-center">
                                                    {typeof row.business === 'boolean' ? (
                                                        row.business ? (
                                                            <Check className="h-5 w-5 shrink-0 text-[#009fbc]" strokeWidth={1.5} />
                                                        ) : (
                                                            <X className="h-5 w-5 shrink-0 text-slate-300" strokeWidth={1.5} />
                                                        )
                                                    ) : (
                                                        <div className="flex flex-col items-center text-center">
                                                            <span className="text-sm text-slate-700">{row.business.text}</span>
                                                            {row.business.sub ? (
                                                                <span className="text-xs text-slate-500">{row.business.sub}</span>
                                                            ) : null}
                                                        </div>
                                                    )}
                                                </div>
                                            </React.Fragment>
                                        ))}
                                    </React.Fragment>
                                );
                            })}
                            <div className="wonder-pricing-compare-cell font-medium text-slate-900">Monthly price</div>
                            <div className="wonder-pricing-compare-cell flex items-center justify-center text-sm text-slate-900">
                                $
                                {billingCycle === 'Yearly'
                                    ? (pricingTiers[0].yearlyPrice / 12).toFixed(0)
                                    : pricingTiers[0].monthlyPrice}
                                /mo
                            </div>
                            <div className="wonder-pricing-compare-cell flex items-center justify-center text-sm text-slate-900">
                                $
                                {billingCycle === 'Yearly'
                                    ? (pricingTiers[1].yearlyPrice / 12).toFixed(0)
                                    : pricingTiers[1].monthlyPrice}
                                /mo
                            </div>
                            <div className="wonder-pricing-compare-cell bg-slate-50" />
                            <div className="wonder-pricing-compare-cell flex items-center justify-center bg-slate-50 px-4 py-5">
                                <Link href="https://app.wonderdesk.ai" className="wonder-plan-cta wonder-plan-cta-neutral max-w-[12rem]">
                                    Start free trial
                                </Link>
                            </div>
                            <div className="wonder-pricing-compare-cell flex items-center justify-center bg-slate-50 px-4 py-5">
                                <Link href="https://app.wonderdesk.ai" className="wonder-plan-cta max-w-[12rem]">
                                    Start free trial
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>




                {/* Lifetime deal modal */}
                <AnimatePresence>
                    {isModalOpen && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 p-4 z-50" // Added z-index
                            onClick={toggleModal} // Close on overlay click
                        >
                            <motion.div
                                initial={{ scale: 0.9, y: 20 }}
                                animate={{ scale: 1, y: 0 }}
                                exit={{ scale: 0.9, y: 20 }}
                                className="bg-white p-6 rounded-xl shadow-2xl max-w-md mx-auto relative"
                                onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
                            >
                                <button
                                    onClick={toggleModal}
                                    className="absolute top-3 right-3 bg-slate-200 hover:bg-slate-300 rounded-md w-8 h-8 flex items-center justify-center transition-colors z-10" // Ensure button is clickable
                                >
                                    <X size={16} />
                                </button>

                                <h2 className="text-2xl font-bold text-slate-900 mt-2 mb-4">Limited Lifetime Deal</h2>
                                <p className="text-slate-600">
                                    $99 for super early birds. <span className="font-medium text-slate-800">Due to high demand, the price will increase to $199 in {formatTime(countdown)}.</span> Secure lifetime access now before prices increase!
                                </p>

                                <div className="text-center mt-8">
                                    <h3 className="text-3xl font-bold text-slate-900 mb-4">
                                        $99.00
                                    </h3>
                                    <Link
                                        href="https://buy.stripe.com/5kAeV0b6K27w8BG6os"
                                        className="bg-orange-600 text-white text-lg w-full py-3 px-6 rounded-lg block hover:bg-orange-700 transition-colors shadow-md font-medium"
                                    >
                                        Buy Now
                                    </Link>
                                </div>
                                <div className="text-center text-slate-500 mt-6 mb-2">
                                    Supported payment methods
                                </div>
                                <div className="flex justify-center">
                                    <img
                                        alt="Payment methods"
                                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_e9xJ7ce6A2N49hHB1Woit1mj6b3o13Lt3Q1NT-tW&s"
                                        className="h-12 object-contain"
                                    />
                                </div>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Feature tooltips */}
                <AnimatePresence>
                    {!isMobile && hoveredFeature && (
                        <FeatureTooltip feature={hoveredFeature} position={tooltipPosition} />
                    )}
                </AnimatePresence>

                {/* Feature popup */}
                <AnimatePresence>
                    {popupFeature && (
                        <FeaturePopup feature={popupFeature} onClose={closePopup} />
                    )}
                </AnimatePresence>



                {/* FAQ Section */}
                <FAQSection />

                {/* Testimonials and Rating */}
                <div className="mt-20">
                    <Rating />
                </div>

                <div className="mt-20">
                    <Testimonials />
                </div>
            </div>
        </div>
    );
};

export default Pricing;