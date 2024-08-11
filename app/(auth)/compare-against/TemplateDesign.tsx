import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const TemplateDesign = () => {
    return (
        <section>

            <div className="grid grid-cols-1 gap-y-8 gap-x-12 lg:grid-cols-2 lg:items-center xl:gap-x-16 mb-12">
                <div className="max-w-sm">
                    <div className="flex items-center space-x-4">
                        <div className="space-y-2">
                            <h1 className="mt-4 text-2xl font-bold text-gray-900 sm:text-3xl">Your content <span className='font-source-serif-4 block font-normal text-orange-600'>lives in Notion</span></h1>
                            <p className="mt-2 text-base font-normal text-gray-700 lg:text-lg">
                                Your work stays in a place you control and love, while BoringSites handles the technical parts of publishing it to your website. This means you can focus what’s actually important to you: creating content and building your brand without worrying about configurations, plugins, downtime, performance, or security.

                            </p>
                        </div>
                    </div>
                    <div className="mt-6 space-y-3 text-base font-normal text-gray-700 lg:text-lg">
                        <Link href="https://app.BoringSites.com" className="bg-gray-900 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full inline-flex items-center" rel="noopener noreferrer" target="_blank"><span>Sign Up</span></Link>
                    </div>
                </div>
                <div className="relative w-full"><Image 
                width={100}
                height={100}
                unoptimized src="https://dazzling-cat.netlify.app/write%20on%20notion.png" alt="" className="h-full w-full rounded-full object-cover" /></div>
            </div>



            <div className="grid grid-cols-1 gap-y-8 gap-x-12 lg:grid-cols-2 lg:items-center xl:gap-x-16 mb-12">
                <div className="relative w-full"><Image unoptimized src="https://dazzling-cat.netlify.app/notion%20to%20website.png" width={100} height={100}  alt="" className="h-full w-full rounded-full object-cover" /></div>

                <div className="max-w-sm">
                    <div className="flex items-center space-x-4">
                        <div className="space-y-2">
                            <h1 className="mt-4 text-2xl font-bold text-gray-900 sm:text-3xl">Customize to your brand</h1>
                            <p className="mt-2 text-base font-normal text-gray-700 lg:text-lg">
                                Style the look and feel of your site with no-code themes and designer templates. Everything can be customized inside BoringSites without code to make you proud of the unique site you share with the world. Add custom-code only if you want to.

                            </p>
                        </div>
                    </div>
                    <div className="mt-6 space-y-3 text-base font-normal text-gray-700 lg:text-lg">
                        <Link href="https://app.BoringSites.com" className="bg-gray-900 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full inline-flex items-center" rel="noopener noreferrer" target="_blank"><span>Sign Up</span></Link>
                    </div>
                </div>
            </div>



            <div className="grid grid-cols-1 gap-y-8 gap-x-12 lg:grid-cols-2 lg:items-center xl:gap-x-16 mb-12">
                <div className="max-w-sm">
                    <div className="flex items-center space-x-4">
                        <div className="space-y-2">
                            <h1 className="mt-4 text-2xl font-bold text-gray-900 sm:text-3xl">World-class Performance</h1>
                            <p className="mt-2 text-base font-normal text-gray-700 lg:text-lg">
                                Pages load instantly anywhere in the world giving your site visitors a pleasant and snappy experience—they’ll never close the page for taking too long to load. On average BoringSites sites perform better than any industry leading website builder.

                            </p>
                        </div>
                    </div>
                    <div className="mt-6 space-y-3 text-base font-normal text-gray-700 lg:text-lg">
                        <Link href="https://app.BoringSites.com" className="bg-gray-900 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full inline-flex items-center" rel="noopener noreferrer" target="_blank"><span>Sign Up</span></Link>
                    </div>
                </div>
                <div className="relative w-full"><Image unoptimized src="https://dazzling-cat.netlify.app/performancewebsite.png" 
                width={100}
                height={100}
                alt="" className="h-full w-full rounded-full object-cover" /></div>
            </div>


            <div className="grid grid-cols-1 gap-y-8 gap-x-12 lg:grid-cols-2 lg:items-center xl:gap-x-16 mb-12">

                <div className="relative w-full"><Image unoptimized
                
                
                src="https://dazzling-cat.netlify.app/analyticsseo.png" alt="" width={100} height={100} className="h-full w-full rounded-full object-cover" /></div>

                <div className="max-w-sm">
                    <div className="flex items-center space-x-4">
                        <div className="space-y-2">
                            <h1 className="mt-4 text-2xl font-bold text-gray-900 sm:text-3xl">In-built Analytics</h1>
                            <p className="mt-2 text-base font-normal text-gray-700 lg:text-lg">
                                See your page views, visitors, referrers, clicks, and much more for all of your websites. BoringSites provides Inbuilt analytics for all your sites tp help ou find out where people are finding your blog, which links people are clicking the most, which of your posts are popular.
                            </p>
                        </div>
                    </div>
                    <div className="mt-6 space-y-3 text-base font-normal text-gray-700 lg:text-lg">
                        <Link href="https://app.BoringSites.com" className="bg-gray-900 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full inline-flex items-center" rel="noopener noreferrer" target="_blank"><span>Sign Up</span></Link>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 gap-y-8 gap-x-12 lg:grid-cols-2 lg:items-center xl:gap-x-16 mb-12">

                <div className="relative w-full"><Image unoptimized src="https://dazzling-cat.netlify.app/integrationsdb.png" alt="" width={100} height={100} className="h-full w-full rounded-full object-cover" /></div>

                <div className="max-w-sm">
                    <div className="flex items-center space-x-4">
                        <div className="space-y-2">
                            <h1 className="mt-4 text-2xl font-bold text-gray-900 sm:text-3xl">Integrates with your existing apps</h1>
                            <p className="mt-2 text-base font-normal text-gray-700 lg:text-lg">
                                BoringSites integrates with the tools you already use. Connect to Slack for notifications, embed your live chat widget from Intercom, Hubspot, Crisp and more. Need your app connected to BoringSites? We got you covered.
                            </p>
                        </div>
                    </div>
                    <div className="mt-6 space-y-3 text-base font-normal text-gray-700 lg:text-lg">
                        <Link href="https://app.BoringSites.com" className="bg-gray-900 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full inline-flex items-center" rel="noopener noreferrer" target="_blank"><span>Sign Up</span></Link>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default TemplateDesign;
