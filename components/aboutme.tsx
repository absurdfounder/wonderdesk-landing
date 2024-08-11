import Image from "next/image";


export default function aboutme() {
  return (
    <section className="relative">

      <div className="px-6 pt-16 mb-10 md:pt-20 max-w-6xl mx-auto px-4 sm:px-6 pb-12">
        <h2 className="mb-1 font-semibold leading-6 tracking-wide text-center text-orange-600 uppercase">
          How did i come to this idea ?
        </h2>


        <h1 className="h2 mb-4 text-center">
              Launch businesses in minutes <span className="font-source-serif-4 block font-normal text-orange-600">grow to millions in traffic </span> without leaving
              Notion.
        </h1>

        <div className="grid items-start pt-6 mx-auto gap-8 md:flex md:items-start justify-center">
          <div className="float-right md:w-1/3 sm:w-full mb-6 m-auto sm:float-none sm:ml-12 sm:mb-0  ">
            <Image
              src="https://dazzling-cat.netlify.app/image 1469.png"
              width="600"
              height="905"
              unoptimized
              className="rounded-2xl"
              alt={''}
              style={{ filter: "grayscale(1)", opacity: 0.85 }}
            />
          </div>
          <div className="prose-sm text-gray-600 sm:prose sm:w-2/3 prose-indigo">
            <p className="my-2">
              Hey 👋 <br className="block sm:hidden" />
              I’m Vaibhav, the founder of BoringSites.
            </p>
            <p className="my-2">
              There are already a couple of website builders and knowledge base
              softwares out there to help you post and manage content. And while
              most of them are certainly doing a good job,
              <strong className="text-gray-900">
                are they actually making use of the best content management
                system in the world?
              </strong>
            </p>
            <p className="my-2">
              I have been using{" "}
              <strong className="text-gray-900">Notion</strong> for a few years
              now. It's an amazing tool for storing and organizing all of my
              company's knowledge and writings. It should feel similiar to tools
              such as Intercom or Zendesk when it comes to support or webflow
              and framer if your building marketplaces with 1000s of documents.{" "}
              <br />
              <br />
              Since I couldn't find the right solution –{" "}
              <strong className="text-gray-900">I built BoringSites</strong>.
              Sure, you can publish your Notion page on its own but it might
              come across as unprofessional. The messy Notion url, distracting
              links pointing to Notion and the lack of customizability are just
              a few disadvantages...
            </p>
            <p className="my-2">
              <strong className="text-gray-900">
                BoringSites is solving all of this. It is for businesses who need
                an easy way to create a reliable knowledge site powered by
                Notion.{" "}
              </strong>
            </p>
            <br /> <br />
            <p className="my-2">— Vaibhav, Creator</p>
          </div>
        </div>
      </div>
    </section>
  );
}
