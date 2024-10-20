import Image from 'next/image';

import integrationData from '../../public/integration_data.json';
import templateData from '../../public/showcase_data.json';
import comparisonData from '../../public/comparison_data.json';
import Link from 'next/link';


  const goBack = () => {
    window.history.back();
  };


const renderContent = (item: any, index: number) => {
  switch (item.type) {
    case 'heading':
      return <h3 key={index} className="text-xl font-bold text-slate-900 mt-4 mb-2">{item.text}</h3>;
    case 'paragraph':
      return <p key={index} className="text-base text-slate-700 my-2">{item.text}</p>;
    case 'image':
      return (
        <div key={index} className="flex justify-center">
          <Image width={1000} height={1000} src={item.url} unoptimized alt={item.alt} className="max-w-full h-auto rounded-lg shadow-md" />
        </div>
      ); case 'bold':
      return <strong key={index} className="font-semibold">{item.text}</strong>;
    case 'list':
      return (
        <ul key={index} className="list-disc pl-5 space-y-1">
          {item.items.map((listItem: string, listItemIndex: number) => (
            <li key={listItemIndex} className="text-slate-700">{listItem}</li>
          ))}
        </ul>
      );
    case 'link':
      return <Link key={index} href={item.href} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 underline">{item.text}</Link>;
    case 'blockquote':
      return <blockquote key={index} className="italic border-l-4 border-slate-200 pl-4 py-2 my-2">{item.text}</blockquote>;
    case 'code':
      return (
        <pre key={index} className="bg-slate-100 rounded-full p-3 overflow-auto">
          <code className="text-sm">{item.code}</code>
        </pre>
      );
    case 'video':
      return <video key={index} width={1000} height={1000} src={item.src} loop className="w-full h-auto max-w-full rounded-lg shadow-md"></video>;
    case 'iframe':
      return <iframe key={index} src={item.src} frameBorder="0" allowFullScreen className="w-full h-64 md:h-96 rounded-lg shadow-md"></iframe>;
    default:
      return null;
  }
};



const _loadFromJson = async (template: boolean = true) => {
  try {
    return template ? templateData?.template_library : integrationData.integration_library;
  } catch (error) {
    console.error("Failed to load templates", error);
    return [];
  }
};


const _loadFromJsonComparison = async () => {
  try {
    return comparisonData.comparision_library;
  } catch (error) {
    console.error("Failed to load templates", error);
    return [];
  }
};

function _transformDataToPostPageView(dataObject: any) {
  let postPageView = [];

  if (dataObject.overview && dataObject.overview.content) {
    postPageView.push({
      type: 'paragraph',
      text: dataObject.overview.content
    });
  }

  if (dataObject.howItWorks && dataObject.howItWorks.content) {
    postPageView.push({
      type: 'paragraph',
      text: dataObject.howItWorks.content
    });
  }

  if (dataObject.configuration && dataObject.configuration.content) {
    postPageView.push({
      type: 'paragraph',
      text: dataObject.configuration.content
    });
  }

  if (dataObject.proof) {
    if (dataObject.proof.screenshot) {
      postPageView.push({
        type: 'image',
        url: dataObject.proof.screenshot,
        alt: "Screenshot of the product"
      });
    }

    if (dataObject.proof.youtubevideo) {
      postPageView.push({
        type: 'video',
        src: dataObject.proof.youtubevideo
      });
    }
  }

  return postPageView;
}



export { renderContent,_loadFromJsonComparison ,_loadFromJson, goBack,_transformDataToPostPageView }
