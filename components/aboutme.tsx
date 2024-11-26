import Image from "next/image";

export default function AboutMe() {
  return (
    <section className="relative">
      <div className="px-4 sm:px-6 pt-16 md:pt-20 pb-12 max-w-6xl mx-auto">

      <h1 className="h2 mb-8 text-start font-silkscreen">
        Hello! 👋<br/>
        My name is Vaibhav.
        </h1>

        <div className="flex flex-col md:flex-row items-center justify-center">
          <div className="w-full md:w-1/3 mb-6 md:mb-0 flex justify-center">
            <Image
              src="https://dazzling-cat.netlify.app/xprofileim.jpg"
              width={300}
              height={452}
              className="rounded-2xl"
              alt="Profile"
            />
          </div>
          <div className="w-full md:w-2/3 md:pl-8 prose prose-sm sm:prose text-slate-600 prose-indigo">
            <p className="my-2">
              Hey 👋 <br className="block sm:hidden" />
              I'm Vaibhav, the founder of BoringSites.
            </p>
            <p className="my-2">
              There are already a couple of website builders and knowledge base
              softwares out there to help you post and manage content. And while
              most of them are certainly doing a good job,{" "}
              <strong className="text-slate-900">
                are they actually making use of the best content management
                system in the world?
              </strong>
            </p>
            <p className="my-2">
              I have been using{" "}
              <strong className="text-slate-900">Notion</strong> for a few years
              now. It's an amazing tool for storing and organizing all of my
              company's knowledge and writings. It should feel similar to tools
              such as Intercom or Zendesk when it comes to support or Webflow
              and Framer if you're building marketplaces with 1000s of documents.
              <br />
              <br />
              Since I couldn't find the right solution –{" "}
              <strong className="text-slate-900">I built BoringSites</strong>.
              Sure, you can publish your Notion page on its own but it might
              come across as unprofessional. The messy Notion URL, distracting
              links pointing to Notion and the lack of customizability are just
              a few disadvantages...
            </p>
            <p className="my-2">
              <strong className="text-slate-900">
                BoringSites is solving all of this. It is for businesses who need
                an easy way to create a reliable knowledge site powered by
                Notion.{" "}
              </strong>
            </p>
            <p className="my-2">— Vaibhav, Creator</p>
          </div>
        </div>
      </div>
    </section>
  );
}