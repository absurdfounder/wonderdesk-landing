
import React, { useState, useEffect } from "react";

import ModalVideo from "@/components/modal-video";
import VideoThumb from "@/public/images/hero-image.png";

import Link from "next/link";
import Image from "next/image";

import TrustedBy from "../compare-against/TrustedBy";
import FeaturesBlocks from "@/components/features-blocks";
import Blog_Type from "@/components/blog_type";

import Testimonials from "@/components/testimonials";
import Header from "@/components/ui/header";
import BelieveLandingPage from "@/components/token-page";


import Aos from "aos";
import 'aos/dist/aos.css'


export const metadata = {
    title: "Get a blog with Notion (no-code and free)",
    description:
        "Build a blog in Notion, with our Notion blog maker. Go live in under a minute.  Build your free Wonder  blog website in a minute!",
        alternates: {
            canonical: "https://wondersites.co/create-a-blog-notion",
          },
    openGraph: {
        images: [
            {
                url: "https://dazzling-cat.netlify.app/notiontoblog_socialshare.png",
                width: 1200,
                height: 630,
                alt: "Get a blog with Notion",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        images: [
            {
                url: "https://dazzling-cat.netlify.app/notiontoblog_socialshare.png",
                alt: "Get a blog with Notion",
            },
        ],
    },
};

export default function PageDetail() {
    return (

        <div>
            <section >

                <Header />



                <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    <div className="pt-12 pb-6 md:pt-4 md:pb-6">
                        {/* Page header */}

                        <div className="max-w-4xl py-6 mx-auto lg:py-6">


<br/>

<br/>

                            <div className="text-center">


                                <div className="max-w-screen-xl px-4 mx-auto sm:px-6 mb-4">
                                    <div className="text-center px-4 sm:px-6 lg:px-8">
                                        <h1 className="font-funneldisplay text-3xl sm:text-4xl md:text-7xl font-bold tracking-tight text-slate-900 leading-tighter tracking-tighter mb-4 aos-init aos-animate">
                                            <span className="text-3xl sm:text-4xl md:text-7xl gradient-text-accent mx-4">wonder</span>
                                            <br className="block" />
                                           without limits.
                                        </h1>
                                        <p className="max-w-md mx-auto mt-3 text-base text-slate-500 sm:mb-0 sm:text-lg md:mt-5 md:text-lg md:max-w-2xl">
                                            Wonder token powers the <b>vibe coding</b> narrative with an easy to use platform on built on top of AI platforms and Notion.
                                        </p>
                                        <div className="flex flex-col-reverse justify-center w-full mt-10 sm:flex-row">
                                            <div className="mt-3 sm:mt-0">
                                                <Link href="/signup" className="inline-flex items-center justify-center w-full px-6 py-3 text-base font-medium leading-6 text-white transition duration-150 ease-in-out rounded-md shadow bg-orange-700 sm:w-auto">
                                                    <strong className="mr-1">Generate a Site</strong>
                                                </Link>
                                                <p className="mt-3 text-sm text-slate-700"><strong>Free</strong> 3 day trial. Free Design Service.</p>
                                            </div>
                                        </div>
                                    </div>

                                </div>


                            </div>
                        </div>

<BelieveLandingPage/>


                        <ModalVideo
                        />

                    </div>
                </div>



            </section>


            <Blog_Type />


            <FeaturesBlocks />


            <section className="mb-20">
                <div className="px-6 pt-5 pb-10 bg-white lg:px-8">
                    <div className="max-w-4xl mx-auto text-center">
                        <p className="text-base font-semibold leading-7 text-orange-600">
                            EXPERTS CAN HELP
                        </p>
                        <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                            What can Wonder  Experts do for you?
                        </h2>
                        <p className="mt-6 text-slate-600 sm:text-lg sm:leading-8">
                            Experts can help with a wide range of design, development, and
                            marketing projects. Helping you reach your business goals as a
                            solo founder or small team.
                        </p>
                    </div>
                </div>

                <div className="max-w-7xl  container mx-auto">
                    <div className="mt-4">
                        <div
                            role="list"
                            className="project_type-list w-dyn-items grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
                        >
                            <div
                                role="listitem"
                                className="project_type-item w-dyn-item bg-white shadow-lg p-6 rounded-lg"
                            >
                                <div className="grid gap-4 items-center">
                                    <Image
                                        loading="lazy"
                                        width={100} height={100}
                                        alt="Platform migrations"
                                        unoptimized
                                        src="https://assets-global.website-files.com/6320a2f3bd0b234991397e96/65316fc6b33cce40a33c2b1b_Migration.svg"
                                        className="project_type-image mr-4 p-2"
                                        style={{ filter: "hue-rotate(161deg)" }}
                                    />
                                    <div>
                                        <h3 className="text-xl font-semibold mb-2">
                                            Platform migrations
                                        </h3>
                                        <p>
                                            Move all (or just part of) your site from another
                                            platform to Webflow.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div
                                role="listitem"
                                className="project_type-item w-dyn-item bg-white shadow-lg p-6 rounded-lg"
                            >
                                <div className="grid gap-4 items-center">
                                    <Image
                                        loading="lazy"
                                        width={100} height={100}
                                        alt="Custom code &amp; integrations"
                                        unoptimized
                                        src="https://assets-global.website-files.com/6320a2f3bd0b234991397e96/65316fb84aabe974ccc5e90a_Plugins.svg"
                                        className="project_type-image mr-4 p-2"
                                        style={{ filter: "hue-rotate(161deg)" }}
                                    />
                                    <div>
                                        <h3 className="text-xl font-semibold mb-2">
                                            Custom code &amp; integrations
                                        </h3>
                                        <p>
                                            Get help with integrations or other extensions that
                                            require development work.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div
                                role="listitem"
                                className="project_type-item w-dyn-item bg-white shadow-lg p-6 rounded-lg"
                            >
                                <div className="grid gap-4 items-center">
                                    <Image
                                        loading="lazy"
                                        width={100} height={100}
                                        alt="Rebrands &amp; redesigns"
                                        unoptimized
                                        src="https://assets-global.website-files.com/6320a2f3bd0b234991397e96/65316f5a0c978936919bd6fe_SiteRefresh.svg"
                                        className="project_type-image mr-4 p-2"
                                        style={{ filter: "hue-rotate(161deg)" }}
                                    />
                                    <div>
                                        <h3 className="text-xl font-semibold mb-2">
                                            Rebrands &amp; redesigns
                                        </h3>
                                        <p>
                                            Give your whole site a new look or work on a fresh new
                                            project with an Expert.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </section>


            <Testimonials />



        </div>

    );
}