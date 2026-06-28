
import React, { useState, useEffect } from "react";

import ModalVideo from "@/components/FullModalVideo";
import VideoThumb from "@/public/images/hero-image.png";

import Link from "next/link";
import Image from "next/image";

import TrustedBy from "../compare-against/TrustedBy";
import FeaturesBlocks from "@/components/FeaturesBlocks";
import MarketplaceType from "@/components/MarketplaceType";

import Testimonials from "@/components/testimonials";

import Header from "@/components/ui/header";


import Aos from "aos";
import 'aos/dist/aos.css'


import { buildPageMetadata } from '@/lib/og/buildMetadata';

export const metadata = buildPageMetadata({
  title: "Get a marketplace with Notion",
  description: "Launch a two-sided marketplace site with Notion as your CMS on Wonderdesk.",
  canonical: "https://wonderdesk.ai/create-a-marketplace-notion",
  ogKind: 'page',
  ogSlug: "create-a-marketplace-notion",
});

export default function PageDetail() {
    return (

        <div>
            <section 
                    style={{
          backgroundImage: "linear-gradient(rgb(255 255 255 / 59%), rgba(255, 255, 255, 0)), url(https://dazzling-cat.netlify.app/wondercollectivebanner.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed"
        }}
            >
                <Header />

<br/>
<br/>
<br/>
<br/>
<br/>


                <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    <div className="pt-12 pb-6 md:pt-4 md:pb-6">
                        {/* Page header */}

                        <div className="max-w-4xl py-6 mx-auto lg:py-6">
                            <div className="text-center">


                                <div className="max-w-screen-xl px-4 mx-auto sm:px-6 mb-4">
                                    <div className="text-center px-4 sm:px-6 lg:px-8">
                                        <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900 leading-tighter tracking-tighter mb-4 aos-init aos-animate">
                                          
                                            <span className="text-3xl sm:text-4xl md:text-5xl relative">

                                                AI Agent that keeps your 
                                            </span>
                                            <br className="block" />
                                            multi-sided <span className="text-3xl sm:text-4xl md:text-5xl gradient-text-accent mx-4">marketplace.</span>
                                        </h1>
                                        <p className="max-w-md mx-auto mt-3 text-base text-slate-500 sm:mb-0 sm:text-lg md:mt-5 md:text-lg md:max-w-2xl">
                                            Customers want self-serve answers, but outdated help docs send them back to support. Wonderdesk helps you publish a searchable knowledge base that stays aligned with your product.
                                        </p>
                                        <div className="flex flex-col-reverse justify-center w-full mt-10 sm:flex-row">
                                            <div className="mt-3 sm:mt-0">
                                                <Link href="/signup" className="wonder-btn-primary w-full sm:w-auto">
                                                    <strong className="mr-1">Get a marketplace with Notion →</strong>
                                                </Link>
                                                <p className="mt-3 text-sm text-slate-700"><strong>Free</strong> 3 day trial. Free Design Service.</p>
                                            </div>
                                        </div>
                                    </div>

                                </div>


                            </div>
                        </div>


                        <ModalVideo
                        />

                    </div>
                </div>
            </section>

            <MarketplaceType />

            <FeaturesBlocks />

            <Testimonials />

        </div>

    );
}
