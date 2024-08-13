
import React, { useState, useEffect } from "react";

import ModalVideo from "@/components/modal-video";
import VideoThumb from "@/public/images/hero-image.png";

import Link from "next/link";
import Image from "next/image";

import TrustedBy from "../compare-against/TrustedBy";
import FeaturesBlocks from "@/components/features-blocks";

import Marketplace_Type from "@/components/marketplaces_type";

import Testimonials from "@/components/testimonials";


import Aos from "aos";
import 'aos/dist/aos.css'


export const metadata = {
    title: "Create a Marketplace with Notion (no-code and free)",
    description:
        "Build a marketplace in Notion, with our Notion marketplace maker. Go live in under a minute.  Build your free BoringSites marketplace website in a minute!",
        openGraph: {
            images: [
                {
                    url: "https://dazzling-cat.netlify.app/notiontomarketplace_socialshare.png",
                    width: 1200,
                    height: 630,
                    alt: "Create a Marketplace with Notion",
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            images: [
                {
                    url: "https://dazzling-cat.netlify.app/notiontomarketplace_socialshare.png",
                    alt: "Create a Marketplace with Notion",
                },
            ],
        },
};

export default function PageDetail() {
    return (

        <div>
        <section className="bg-gradient-to-b from-gray-100 to-white">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <div className="pt-32 pb-12 md:pt-18 md:pb-20">
                    {/* Page header */}

                    <div className="max-w-4xl py-10 mx-auto lg:py-12">
                        <div className="text-center">


                            <div className="max-w-screen-xl px-4 mx-auto sm:px-6 mb-20">
                            <div className="text-center px-4 sm:px-6 lg:px-8">
  <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-gray-900 leading-tighter tracking-tighter mb-4 aos-init aos-animate">
    Turn
    <span className="text-3xl sm:text-4xl md:text-5xl relative">
      <span className="inline-flex items-center relative sm:bottom-0 bottom-[-1px] justify-center mx-2">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="12 0.19 487.619 510.941" className="w-6 h-6 sm:w-9 sm:h-9 md:w-12 md:h-12 ml-3 max-w-full max-h-full">
          <path
            d="M96.085 91.118c15.81 12.845 21.741 11.865 51.43 9.884l279.888-16.806c5.936 0 1-5.922-.98-6.906L379.94 43.686c-8.907-6.915-20.773-14.834-43.516-12.853L65.408 50.6c-9.884.98-11.858 5.922-7.922 9.883zm16.804 65.228v294.491c0 15.827 7.909 21.748 25.71 20.769l307.597-17.799c17.81-.979 19.794-11.865 19.794-24.722V136.57c0-12.836-4.938-19.758-15.84-18.77l-321.442 18.77c-11.863.997-15.82 6.931-15.82 19.776zm303.659 15.797c1.972 8.903 0 17.798-8.92 18.799l-14.82 2.953v217.412c-12.868 6.916-24.734 10.87-34.622 10.87-15.831 0-19.796-4.945-31.654-19.76l-96.944-152.19v147.248l30.677 6.922s0 17.78-24.75 17.78l-68.23 3.958c-1.982-3.958 0-13.832 6.921-15.81l17.805-4.935V210.7l-24.721-1.981c-1.983-8.903 2.955-21.74 16.812-22.736l73.195-4.934L358.186 335.22V198.836l-25.723-2.952c-1.974-10.884 5.927-18.787 15.819-19.767zM42.653 23.919l281.9-20.76c34.618-2.969 43.525-.98 65.283 14.825l89.986 63.247c14.848 10.876 19.797 13.837 19.797 25.693v346.883c0 21.74-7.92 34.597-35.608 36.564L136.64 510.14c-20.785.991-30.677-1.971-41.562-15.815l-66.267-85.978C16.938 392.52 12 380.68 12 366.828V58.495c0-17.778 7.922-32.608 30.653-34.576z"
            fill-rule="evenodd"
          ></path>
        </svg>
      </span>
      Notion into a
    </span>
    <br className="block" />
    multi-sided <span className="text-3xl sm:text-4xl md:text-5xl gradient-text-accent mx-4">marketplace.</span>
  </h1>
  <p className="max-w-md mx-auto mt-3 text-base text-gray-500 sm:mb-0 sm:text-lg md:mt-5 md:text-lg md:max-w-2xl">
    BoringSites is the perfect tool for creating your marketplaces powered by Notion. You write your articles in Notion and BoringSites takes care of the rest. It's as simple as that.
  </p>
  <div className="flex flex-col-reverse justify-center w-full mt-10 sm:flex-row">
    <div className="mt-3 sm:mt-0">
      <Link href="/signup" className="inline-flex items-center justify-center w-full px-6 py-3 text-base font-medium leading-6 text-white transition duration-150 ease-in-out rounded-full shadow bg-orange-700 sm:w-auto">
        <strong className="mr-1">Create your marketplace with Notion →</strong>
      </Link>
      <p className="mt-3 text-sm text-gray-700"><strong>Free</strong> 7 day trial. Free Design Service.</p>
    </div>
  </div>
</div>

                            </div>


                        </div>
                    </div>


                    <ModalVideo
                                thumb={VideoThumb}
                                thumbWidth={768}
                                thumbHeight={432}
                                thumbAlt="Modal video thumbnail"
                                video="/videos/video.mp4"
                                videoWidth={1920}
                                videoHeight={1080}
                            />

                </div>
            </div>
        </section>


        <Marketplace_Type />


<FeaturesBlocks />



<section className="mb-20">
    <div className="px-6 pt-5 pb-10 bg-white lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
            <p className="text-base font-semibold leading-7 text-orange-600">
                EXPERTS CAN HELP
            </p>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                What can BoringSites Experts do for you?
            </h2>
            <p className="mt-6 text-gray-600 sm:text-lg sm:leading-8">
                Experts can help with a wide range of design, development, and
                marketing projects. Helping you reach your business goals as a
                solo founder or small team.
            </p>
        </div>
    </div>

    <div className="max-w-6xl  container mx-auto">
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
