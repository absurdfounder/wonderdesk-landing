'use client';

import React, { useState, useEffect, lazy, Suspense } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Check } from 'lucide-react';
import Link from 'next/link';

// --- Performance Considerations for Imports ---
// 1. TabImageHotspots is already lazy-loaded, which is good.
// 2. Defer non-critical imports like Cal.com API.

// Lazy load the TabImageHotspots component properly
// This helps with initial bundle size and defers loading until needed.
const TabImageHotspots = lazy(() => import('./tabed_examples'));
// CONSIDER: If './tabed_examples' is a very large component, ensure it is also optimized internally.
// This includes:
//   - Lazy loading images within TabImageHotspots (using <img loading="lazy" ... /> or a library).
//   - Code-splitting TabImageHotspots further if it contains distinct, independent sections.
//   - Optimizing any data fetching it performs (e.g., using SWR or React Query for caching and efficient updates).

// Defer non-critical imports
const getCalApiImport = () => import("@calcom/embed-react").then(mod => mod.getCalApi);


// --- SVG Components & Optimization ---
// CONSIDER: The SVG path data for ProductHuntBadge is quite large.
// TODO: Optimize the SVG code itself (e.g., using a tool like SVGO - https://github.com/svg/svgo)
// to reduce its size before using it as an inline component. This can reduce the initial HTML payload.
const ProductHuntBadge = () => (
  <div className="w-48 h-10 rounded flex items-center justify-center">
    {/* TODO: Optimize this SVG data. For example, run it through an SVG optimizer. */}
    <a href="https://www.producthunt.com/posts/wonder-1999?utm_source=badge-top-post-badge&amp;utm_medium=badge&amp;utm_souce=badge-wonder-2" target="_blank" className="group justify-center grid mb-8 w-full" title="View Wonder Sites on Product Hunt"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 122 37" className="group justify-center grid w-48"><path d="M104.953 36.286c-4.22 1.634-5.936.086-5.936-.891 1.495-.126 5.067-.331 5.936.891Zm5.356-1.336a5.486 5.486 0 0 1-7.083-.497c1.44-.4 5.372-.874 7.083.497Zm-7.139-3.176c.16 2.033-1.922 3.176-4.17 3.341.41-2.045 2.509-2.958 4.17-3.341Zm4.032-1.874c.238.869-.089 3.228-3.323 4.164.139-1.593.986-3.667 3.323-4.164Zm6.413 2.365a5.005 5.005 0 0 1-6.385.571c1.296-.668 4.408-1.57 6.385-.571Zm-3.417-4.706c.443.856.537 3.295-2.326 4.763-.166-1.57.465-4.255 2.326-4.763Zm7.083.948a4.389 4.389 0 0 1-2.657 2.217 4.243 4.243 0 0 1-3.39-.44c1.805-1.697 4.685-2.348 6.047-1.777Zm-4.28-4.547c1.284 2.24-.073 4.798-1.485 5.849-.628-2.082-.052-4.351 1.484-5.849Zm6.662-.097c.155 3.479-3.478 3.29-5.184 3.313.537-.731 3.522-3.381 5.184-3.313Zm-4.48-3.25c.675.743 1.688 3.599-.555 5.929-.703-1.685-.858-4.272.554-5.929Zm6.385-1.542c.116 2.81-2.249 4.232-4.53 4.21.686-1.354 2.52-3.964 4.53-4.21Zm-4.785-1.936c1.512.89 1.34 3.764.448 5.26-1.002-1.393-1.75-3.124-.448-5.26Zm4.884-2.633c.748 2.559-1.45 4.29-2.769 4.438.338-1.222.781-3.387 2.77-4.438Zm-4.607-.851c1.667.835 2.457 2.832 1.833 4.632-1.163-.937-2.564-2.919-1.833-4.632Zm4.685-3.096c1.03 3.113-1.335 4.13-2.215 4.38.105-1.324.947-3.963 2.215-4.38Zm-4.619-.817c.676.195 2.603 1.777 2.254 4.61-1.268-.714-2.808-2.074-2.254-4.61Zm3.921-3.9c1.152 3.826-.77 5.397-1.401 5.71-.1-1.21-.222-4.037 1.401-5.71Zm-4.264.096c1.207.337 2.73 2.553 2.658 4.684-1.196-.548-2.985-2.827-2.658-4.684Zm.36-5.934c2.802 2.896 3.195 5.18 2.376 7.996-1.269-1.142-2.282-4.569-2.376-7.996ZM17.047 36.286c4.22 1.634 5.936.086 5.936-.891-1.495-.126-5.067-.331-5.936.891ZM11.69 34.95a5.486 5.486 0 0 0 7.083-.497c-1.44-.4-5.372-.874-7.083.497Zm7.139-3.176c-.16 2.033 1.922 3.176 4.17 3.341-.41-2.045-2.509-2.958-4.17-3.341ZM14.798 29.9c-.238.869.089 3.228 3.323 4.164-.139-1.593-.986-3.667-3.323-4.164Zm-6.413 2.365a5.005 5.005 0 0 0 6.385.571c-1.296-.668-4.408-1.57-6.385-.571Zm3.417-4.706c-.443.856-.537 3.295 2.326 4.763.166-1.57-.465-4.255-2.326-4.763Zm-7.083.948a4.389 4.389 0 0 0 2.657 2.217 4.243 4.243 0 0 0 3.39-.44c-1.805-1.697-4.685-2.348-6.047-1.777Zm4.28-4.547c-1.284 2.24.073 4.798 1.485 5.849.628-2.082.052-4.351-1.484-5.849Zm-6.662-.097c-.155 3.479 3.478 3.29 5.184 3.313-.537-.731-3.522-3.381-5.184-3.313Zm4.48-3.25c-.675.743-1.688 3.599.555 5.929.703-1.685.858-4.272-.554-5.929ZM.433 19.071c-.116 2.81 2.249 4.232 4.53 4.21-.686-1.354-2.52-3.964-4.53-4.21Zm4.785-1.936c-1.512.89-1.34 3.764-.448 5.26 1.002-1.393 1.75-3.124.448-5.26ZM.333 14.502c-.748 2.559 1.45 4.29 2.769 4.438-.338-1.222-.781-3.387-2.77-4.438Zm4.607-.851c-1.667.835-2.457 2.832-1.833 4.632 1.163-.937 2.564-2.919 1.833-4.632ZM.255 10.555c-1.03 3.113 1.335 4.13 2.215 4.38-.105-1.324-.947-3.963-2.215-4.38Zm4.619-.817c-.676.195-2.603 1.777-2.254 4.61 1.268-.714 2.808-2.074 2.254-4.61Zm-3.921-3.9c-1.152 3.826.77 5.397 1.401 5.71.1-1.21.222-4.037-1.401-5.71Zm4.264.096c-1.207.337-2.73 2.553-2.658 4.684 1.196-.548 2.985-2.827 2.658-4.684ZM4.857 0C2.055 2.896 1.662 5.18 2.481 7.996 3.75 6.854 4.763 3.427 4.857 0Zm49.105 35c.162 0 .288-.108.288-.27v-1.782a.284.284 0 0 0-.288-.288h-4.41l3.006-3.06c.486-.504 1.674-1.62 1.674-3.492 0-2.214-1.71-3.852-4.176-3.852-1.962 0-3.204 1.026-3.924 2.07-.09.108-.09.27.036.396l1.242 1.242c.162.144.27.162.414 0 .468-.612 1.026-1.188 1.998-1.188 1.044 0 1.728.648 1.728 1.584 0 1.116-.918 1.962-1.422 2.466l-3.744 3.798c-.09.126-.126.216-.126.342v1.764c0 .162.126.27.288.27h7.416Zm4.572 0c.162 0 .288-.108.288-.27v-4.464c0-1.17.576-1.782 1.53-1.782.972 0 1.476.612 1.476 1.782v4.464c0 .162.126.27.288.27h2.178c.162 0 .288-.108.288-.27v-5.112c0-2.304-1.35-3.654-3.186-3.654-1.26 0-2.07.63-2.574 1.53l-.09-1.026c0-.216-.108-.288-.27-.288h-2.124c-.162 0-.27.108-.27.27v8.28c0 .162.108.27.27.27h2.196Zm11.754.216c1.26 0 2.16-.504 2.754-1.35l.036.864c0 .162.126.27.288.27h1.98c.162 0 .306-.108.306-.27V22.4c0-.162-.126-.27-.288-.27H73.15c-.162 0-.27.108-.27.27v4.662c-.594-.702-1.44-1.098-2.592-1.098-2.448 0-4.14 2.016-4.14 4.626 0 2.628 1.692 4.626 4.14 4.626Zm.594-2.502c-1.17 0-2.052-.828-2.052-2.124 0-1.278.882-2.124 2.052-2.124 1.206 0 2.034.846 2.034 2.106 0 1.296-.828 2.142-2.034 2.142ZM20.72 15c.09 0 .15-.06.15-.15v-2.26h.72c1.69 0 2.49-.93 2.49-2.29 0-1.36-.8-2.3-2.49-2.3h-2.15c-.09 0-.15.06-.15.15v6.7c0 .09.06.15.15.15h1.28Zm.15-5.6h.68c.53 0 1.02.17 1.02.9 0 .72-.49.89-1.02.89h-.68V9.4Zm5.5 5.6c.09 0 .16-.06.16-.15v-2.36c0-.73.38-1.13 1.01-1.13.15 0 .26.02.36.05.14.03.21 0 .21-.13v-.97c0-.09-.02-.15-.09-.2-.08-.06-.21-.13-.45-.13-.57 0-.88.4-1.04.93l-.05-.65c0-.12-.06-.16-.15-.16h-1.18c-.09 0-.15.06-.15.15v4.6c0 .09.06.15.15.15h1.22Zm4.77.12c1.48 0 2.58-1.12 2.58-2.57 0-1.45-1.1-2.57-2.58-2.57s-2.57 1.12-2.57 2.57c0 1.45 1.09 2.57 2.57 2.57Zm0-1.4c-.62 0-1.1-.45-1.1-1.17s.48-1.17 1.1-1.17c.62 0 1.1.45 1.1 1.17s-.48 1.17-1.1 1.17Zm5.49 1.4c.7 0 1.2-.28 1.53-.75l.02.48c0 .09.07.15.16.15h1.1c.09 0 .17-.06.17-.15V8c0-.09-.07-.15-.16-.15h-1.23c-.09 0-.15.06-.15.15v2.59c-.33-.39-.8-.61-1.44-.61-1.36 0-2.3 1.12-2.3 2.57 0 1.46.94 2.57 2.3 2.57Zm.33-1.39c-.65 0-1.14-.46-1.14-1.18 0-.71.49-1.18 1.14-1.18.67 0 1.13.47 1.13 1.17 0 .72-.46 1.19-1.13 1.19Zm5.52 1.39c.71 0 1.16-.35 1.44-.85l.04.57c0 .12.07.16.16.16h1.17c.09 0 .16-.06.16-.15v-4.6c0-.09-.07-.15-.16-.15h-1.21c-.09 0-.16.06-.16.15v2.48c0 .65-.33.99-.85.99-.54 0-.82-.34-.82-.99v-2.48c0-.09-.07-.15-.16-.15h-1.22c-.09 0-.15.06-.15.15v2.84c0 1.28.74 2.03 1.76 2.03Zm6.44 0c.79 0 1.45-.35 1.87-.9.06-.07.05-.15-.01-.21l-.69-.66c-.08-.08-.19-.08-.26-.01-.27.25-.53.38-.86.38-.74 0-1.18-.56-1.18-1.2 0-.63.44-1.14 1.16-1.14.34 0 .6.12.86.38.08.07.19.07.27-.01l.69-.66c.06-.06.07-.15.01-.21-.42-.55-1.08-.9-1.9-.9-1.48 0-2.56 1.1-2.56 2.54 0 1.47 1.1 2.6 2.6 2.6Zm4.77 0c.34 0 .88-.06.88-.31v-.83c0-.1-.08-.15-.18-.14-.13.01-.22.01-.31.01-.25 0-.42-.14-.42-.41v-2.16h.75c.09 0 .15-.06.15-.15v-.88c0-.09-.06-.15-.15-.15h-.75V8.95c0-.09-.07-.15-.16-.15h-1.23c-.09 0-.16.06-.16.15v1.15h-.61c-.09 0-.15.06-.15.15v.88c0 .09.06.15.15.15h.61v2.33c0 1.14.77 1.51 1.58 1.51Zm5.95 0c1.48 0 2.58-1.12 2.58-2.57 0-1.45-1.1-2.57-2.58-2.57s-2.57 1.12-2.57 2.57c0 1.45 1.09 2.57 2.57 2.57Zm0-1.4c-.62 0-1.1-.45-1.1-1.17s.48-1.17 1.1-1.17c.62 0 1.1.45 1.1 1.17s-.48 1.17-1.1 1.17ZM64.79 15c.09 0 .16-.06.16-.15v-3.57h.98c.09 0 .15-.06.15-.15v-.88c0-.09-.06-.15-.15-.15h-.98v-.49c0-.33.11-.57.58-.57.11 0 .25.03.42.06.07.01.13 0 .13-.07V8.02c0-.06-.03-.13-.09-.16-.3-.15-.52-.17-.82-.17-1.09 0-1.76.52-1.76 1.72v.69h-.58c-.09 0-.15.06-.15.15v.88c0 .09.06.15.15.15h.58v3.57c0 .09.06.15.15.15h1.23Zm6.08.12c.34 0 .88-.06.88-.31v-.83c0-.1-.08-.15-.18-.14-.13.01-.22.01-.31.01-.25 0-.42-.14-.42-.41v-2.16h.75c.09 0 .15-.06.15-.15v-.88c0-.09-.06-.15-.15-.15h-.75V8.95c0-.09-.07-.15-.16-.15h-1.23c-.09 0-.16.06-.16.15v1.15h-.61c-.09 0-.15.06-.15.15v.88c0 .09.06.15.15.15h.61v2.33c0 1.14.77 1.51 1.58 1.51Zm4.65-5.14c-.7 0-1.15.35-1.43.85V8c0-.09-.07-.15-.16-.15h-1.22c-.09 0-.15.06-.15.15v6.85c0 .09.06.15.15.15h1.22c.09 0 .16-.06.16-.15v-2.48c0-.65.32-.99.85-.99.54 0 .82.34.82.99v2.48c0 .09.07.15.16.15h1.21c.09 0 .16-.06.16-.15v-2.84c0-1.28-.75-2.03-1.77-2.03Zm5.34 5.14c.69 0 1.32-.2 1.74-.62.09-.08.09-.16.05-.22l-.41-.58c-.06-.07-.1-.09-.18-.05-.41.23-.75.27-1.08.27-.7 0-1.16-.26-1.33-.79h2.82c.45 0 .58-.3.58-.8 0-1.26-.87-2.35-2.37-2.35-1.51 0-2.52 1.11-2.52 2.55 0 1.49 1.09 2.59 2.7 2.59Zm-1.23-3.05c.12-.58.55-.83 1.06-.83s.9.24 1 .83h-2.06Zm8.27 3.05c.7 0 1.2-.28 1.53-.75l.02.48c0 .09.07.15.16.15h1.1c.09 0 .17-.06.17-.15V8c0-.09-.07-.15-.16-.15h-1.23c-.09 0-.15.06-.15.15v2.59c-.33-.39-.8-.61-1.44-.61-1.36 0-2.3 1.12-2.3 2.57 0 1.46.94 2.57 2.3 2.57Zm.33-1.39c-.65 0-1.14-.46-1.14-1.18 0-.71.49-1.18 1.14-1.18.67 0 1.13.47 1.13 1.17 0 .72-.46 1.19-1.13 1.19Zm5.81 1.39c.7 0 1.2-.28 1.53-.75l.02.48c0 .09.07.15.16.15h1.1c.09 0 .17-.06.17-.15v-4.6c0-.09-.07-.15-.16-.15h-1.11c-.09 0-.16.06-.16.15l-.02.47c-.32-.46-.81-.74-1.53-.74-1.36 0-2.3 1.12-2.3 2.57 0 1.46.94 2.57 2.3 2.57Zm.33-1.39c-.65 0-1.14-.46-1.14-1.18 0-.71.49-1.18 1.14-1.18.67 0 1.13.47 1.13 1.17 0 .72-.46 1.19-1.13 1.19Zm5.96 3.17c.08 0 .15-.04.18-.12l2.6-6.51c.04-.11-.02-.17-.13-.17h-1.24c-.08 0-.16.04-.19.12l-1.08 3-1.08-3c-.03-.08-.11-.12-.19-.12h-1.24c-.11 0-.17.06-.13.17l1.9 4.74-.72 1.71c-.05.12.01.18.13.18h1.19Z"></path></svg></a>
  </div>
);

// CONSIDER: The SVG path data for NotionLogo is also quite extensive.
// TODO: Optimize the SVG code itself (e.g., using SVGO) to reduce its size.
const NotionLogo = () => (
  <div className="w-14 h-14 mr-2 flex items-center justify-center rounded">
    {/* TODO: Optimize this SVG data. */}
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="12 0.19 487.619 510.941" className="w-12 h-12 mr-2 sm:w-10 sm:h-10"><path d="M96.085 91.118c15.81 12.845 21.741 11.865 51.43 9.884l279.888-16.806c5.936 0 1-5.922-.98-6.906L379.94 43.686c-8.907-6.915-20.773-14.834-43.516-12.853L65.408 50.6c-9.884.98-11.858 5.922-7.922 9.883zm16.804 65.228v294.491c0 15.827 7.909 21.748 25.71 20.769l307.597-17.799c17.81-.979 19.794-11.865 19.794-24.722V136.57c0-12.836-4.938-19.758-15.84-18.77l-321.442 18.77c-11.863.997-15.82 6.931-15.82 19.776zm303.659 15.797c1.972 8.903 0 17.798-8.92 18.799l-14.82 2.953v217.412c-12.868 6.916-24.734 10.87-34.622 10.87-15.831 0-19.796-4.945-31.654-19.76l-96.944-152.19v147.248l30.677 6.922s0 17.78-24.75 17.78l-68.23 3.958c-1.982-3.958 0-13.832 6.921-15.81l17.805-4.935V210.7l-24.721-1.981c-1.983-8.903 2.955-21.74 16.812-22.736l73.195-4.934L358.186 335.22V198.836l-25.723-2.952c-1.974-10.884 5.927-18.787 15.819-19.767zM42.653 23.919l281.9-20.76c34.618-2.969 43.525-.98 65.283 14.825l89.986 63.247c14.848 10.876 19.797 13.837 19.797 25.693v346.883c0 21.74-7.92 34.597-35.608 36.564L136.64 510.14c-20.785.991-30.677-1.971-41.562-15.815l-66.267-85.978C16.938 392.52 12 380.68 12 366.828V58.495c0-17.778 7.922-32.608 30.653-34.576z" fillRule="evenodd"></path></svg>
  </div>
);

// Lightweight Features component, memoized for potential minor perf gain if props are stable.
const Features = React.memo(() => (
  <div className="flex flex-col font-bold items-center justify-center space-x-2 space-y-1 text-sm opacity-60 sm:flex-row sm:space-y-0 mt-6">
    {["7-day trial", "Free Design Service", "Free Data Migration"].map((feature, index) => (
      <div key={index} className="flex items-center justify-start">
        <Check className="w-4 h-4 mr-2 text-slate-900" />
        {feature}
      </div>
    ))}
  </div>
));

interface HeroProps {
  onCategorySelect?: (category: string) => void;
}

export default function Hero({ onCategorySelect }: HeroProps) {
  // Minimal initial state to reduce computation on first render
  const [isLoaded, setIsLoaded] = useState(false); // Controls appearance of lazy-loaded TabImageHotspots
  const [index, setIndex] = useState(0); // For rotating words animation
  const [isHovered, setIsHovered] = useState(false); // For "Create Site" button hover effect
  const [isBookHovered, setIsBookHovered] = useState(false); // For "Book Demo" button hover effect (though not directly used in its animation in this version)

  const words = ["directory", "blog", "job board", "helpdesk", "documentation"];

  // Effect for rotating words
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 3000);
    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [words.length]); // words.length is stable, so this runs once on mount

  // Mark component as loaded after first render to trigger appearance of deferred content
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Defer Cal.com widget loading to after critical content is displayed and component is mounted.
  useEffect(() => {
    if (!isLoaded) return; // Only load Cal.com API after the main component is "ready"

    let calApiLoaded = false;

    const loadCalApi = async () => {
      try {
        const getCalApi = await getCalApiImport();
        const cal = await getCalApi({ "namespace": "setup-call" });
        cal("ui", { "hideEventTypeDetails": false, "layout": "month_view" });
        calApiLoaded = true;
      } catch (error) {
        console.error("Failed to load Cal.com widget:", error);
      }
    };

    // Use requestIdleCallback for low-priority loading, fallback to setTimeout.
    if (typeof window !== 'undefined' && 'requestIdleCallback' in window) {
      window.requestIdleCallback(loadCalApi);
    } else {
      setTimeout(loadCalApi, 1000); // Fallback for browsers not supporting requestIdleCallback
    }

    return () => {
      // Cleanup if needed (e.g., if Cal.com API provides a cleanup method)
      if (calApiLoaded && typeof window !== 'undefined') {
        // Example: if (cal && cal.destroy) cal.destroy();
      }
    };
  }, [isLoaded]); // Re-run if isLoaded changes (though it only changes once from false to true)

  // Optimized category click handler
  const handleCategoryClick = (category: string) => {
    if (onCategorySelect) {
      onCategorySelect(category);
    }

    const templateSection = document.getElementById('template-section');
    if (templateSection) {
      templateSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // --- Page Performance & Caching Strategy ---
  // CONSIDER (Next.js specific):
  // To ensure text shows immediately without "server checks" (at request time) and for best performance:
  // 1. Static Site Generation (SSG): If this page content is largely static, use `getStaticProps` in your Next.js page file.
  //    This pre-renders the HTML at build time, which can be served instantly from a CDN.
  //    Example (in `pages/your-page-name.tsx`):
  //    `export async function getStaticProps() { return { props: { initialDataForHero: ... } } }`
  // 2. Incremental Static Regeneration (ISR): If content needs to update periodically.
  // 3. CDN Caching: Ensure your hosting (e.g., Vercel, Netlify) uses a CDN. SSG/ISR pages are automatically cached by CDNs.
  //    For SSR pages (`getServerSideProps`), set `Cache-Control` headers.
  // 4. Browser Caching: Ensure proper HTTP Cache-Control headers are set for static assets (JS, CSS, images) by your server/hosting.
  // 5. Service Worker: For advanced asset caching and offline capabilities (e.g., using `next-pwa`).

  return (
    <section className="relative">
      {/*
        Ensure this Hero component is part of a page structure that allows for SSG or ISR if applicable.
        Example: If this `Hero` component is used in `pages/index.tsx`, that page can use `getStaticProps`.
      */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="pt-12 pb-12">
          {/* Header section with immediate animation. This content should be visible very quickly. */}
          <motion.div
            className="text-center px-4 sm:px-6 lg:px-8 grid"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2 }} // Quick fade-in for primary text content
          >
            {/* ProductHuntBadge is rendered immediately. Ensure its SVG is optimized. */}
            <ProductHuntBadge />

            <h1 className="h1 mb-8 text-center leading-tight font-funneldisplay tracking-loose text-slate-700 font-normal">
              Build websites with just a
              {" "}
              <span className="font-bungee block font-normal text-gray-800 my-2">
                <div className="inline-flex items-center justify-center ml-1 px-4">
                  {/* NotionLogo is rendered immediately. Ensure its SVG is optimized. */}
                  <NotionLogo />
                  <b className="text-gray-800">Notion Database</b>
                </div>
              </span>{" "}
              {/* Rotating word animation */}
              <AnimatePresence mode="wait">
                <motion.span
                  key={words[index]}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.5 }}
                  className="text-orange-600 inline-block" // Changed from block to inline-block for better flow
                >
                  {words[index]}
                </motion.span>
              </AnimatePresence>
            </h1>

            <p className="text-xl text-slate-900 mb-8 font-lato max-w-2xl m-auto">
              <span className="text-slate-900"><b>Build Production-ready</b> apps in hours setup </span>{" "}
              {["Listings", "SEO", "Custom Domains", "Payments"].map((category, idx) => (
                <React.Fragment key={category}>
                  {idx > 0 && ", "}
                  <motion.b
                    className="text-slate-800 border-b border-orange-600 hover:text-orange-500 cursor-pointer"
                    onClick={() => handleCategoryClick(category)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {category}
                  </motion.b>
                </React.Fragment>
              ))}
              {" "}
              – without any technical skills.
            </p>
            {/* If the above text is not showing, check browser console for JS errors or CSS issues. */}
          </motion.div>

          {/* CTA Buttons - immediate rendering */}
          <div className="flex flex-col sm:flex-row gap-4 mt-8 mb-8 items-center justify-center">
            <Link
              href="https://app.wondersites.co?ref=herolanding"
              className="flex items-center justify-center py-3 px-6 bg-orange-600 text-white rounded-md font-medium hover:bg-orange-700 transition-colors w-full sm:w-auto relative"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <div className="relative overflow-hidden mr-2 h-5"> {/* Ensure h-5 is enough for your font size */}
                <div
                  className="transition-transform duration-150"
                  style={{
                    transform: isHovered ? 'translateY(-100%)' : 'translateY(0)'
                  }}
                >
                  Create a free site
                </div>
                <div
                  className="absolute top-0 left-0 w-full text-center transition-transform duration-150"
                  style={{
                    transform: isHovered ? 'translateY(0)' : 'translateY(100%)'
                  }}
                >
                  in just 15 mins.
                </div>
              </div>
              <ArrowRight className="w-4 h-4 flex-shrink-0" />
            </Link>

            <button
              data-cal-namespace="setup-call"
              data-cal-link="wondersites/setup-call"
              data-cal-config='{"layout":"month_view"}'
              className="btn-sm text-black border border-gray-600 bg-slate-100 hover:bg-slate-800 hover:text-white ml-3 flex items-center justify-between px-4 py-2 rounded-md transition duration-150 ease-in-out group"
              onMouseEnter={() => setIsBookHovered(true)} // isBookHovered state can be used for more complex animations if needed
              onMouseLeave={() => setIsBookHovered(false)}
            >
              <div className="flex items-center justify-between w-full">
                Book a Demo
                <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
              </div>
            </button>
          </div>

          {/* Features section - immediate rendering */}
          <Features />

          {/* Progressive loading for TabImageHotspots */}
          {/* This section appears after the initial component mount due to `isLoaded` state */}
          <AnimatePresence>
            {isLoaded && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.1 }} // Small delay to ensure it fades in after primary content
                className="mt-12" // Added some margin for spacing
              >
                <Suspense fallback={
                  // Improved Skeleton Loader for TabImageHotspots
                  // This provides a better visual cue while the component is loading.
                  <div className="w-full max-w-4xl mx-auto animate-pulse space-y-6 py-8">
                    {/* Skeleton for tab headers */}
                    <div className="flex space-x-4">
                      <div className="h-10 bg-gray-200 rounded w-1/4"></div>
                      <div className="h-10 bg-gray-300 rounded w-1/4"></div>
                      <div className="h-10 bg-gray-200 rounded w-1/4"></div>
                    </div>
                    {/* Skeleton for tab content area (e.g., an image or featured content) */}
                    <div className="h-80 bg-gray-300 rounded-lg"></div>
                    {/* Skeleton for smaller items or text below */}
                    <div className="space-y-3">
                      <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                      <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                    </div>
                    {/* Ensure this skeleton roughly matches the structure of TabImageHotspots for better UX */}
                  </div>
                }>
                  {/*
                    TODO: Inside TabImageHotspots component:
                    1. Lazy load any images: <img src="..." loading="lazy" width="..." height="..." />
                       (Specify width and height to prevent layout shift).
                    2. If TabImageHotspots fetches data:
                       - Use SWR or React Query for efficient data fetching, caching, and state management.
                       - Ensure API endpoints are fast and optimized.
                    3. Profile TabImageHotspots for any internal performance bottlenecks.
                  */}
                  <TabImageHotspots />
                </Suspense>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
