"use client";

import React, { useState, useEffect } from 'react';
import Image from "next/image";
import Link from 'next/link'; 
import templateData from '@/public/showcase_data.json';
import { AlertCircle } from 'lucide-react';

// Define TypeScript interfaces for the template data
interface Product {
  name: string;
  logo: string;
  description: string;
  type: string;
}

interface Template {
  id: string;
  product: Product;
  type?: string;  // Make type optional
}

// Utility function to truncate text
const truncateText = (text: string, maxLength: number): string => {
  if (text.length > maxLength) {
    return text.slice(0, maxLength) + "...";
  }
  return text;
};

interface TemplateLibraryProps {
  initialSelectedType: string;
}

const TemplateLibrary = ({ initialSelectedType }: TemplateLibraryProps) => {
  const [templates, setTemplates] = useState<Template[]>([]);
  const [selectedType, setSelectedType] = useState<string>(initialSelectedType || 'all');
  const [displayedTemplates, setDisplayedTemplates] = useState<Template[]>([]);

  const types = ['all', 'helpdesk', 'blog', 'directory', 'marketplace', 'company wiki', 'documentation'];

  useEffect(() => {
    // Fetch all templates from the JSON data
    const allTemplates = templateData.template_library as Template[];
    setTemplates(allTemplates);
  }, []);

  useEffect(() => {
    setSelectedType(initialSelectedType || 'all');
  }, [initialSelectedType]);

  useEffect(() => {
    // Filter templates based on selected type
    const filteredTemplates = selectedType === 'all' || !selectedType
      ? templates 
      : templates.filter(template => {
          const templateType = template.type || template.product?.type;
          return templateType && templateType.toLowerCase() === selectedType.toLowerCase();
        });

    // Limit to 6 templates
    setDisplayedTemplates(filteredTemplates.slice(0, 6));
  }, [selectedType, templates]);

  useEffect(() => {
    // Filter templates based on selected type
    const filteredTemplates = selectedType === 'all' 
      ? templates 
      : templates.filter(template => {
          const templateType = template.type || template.product?.type;
          return templateType && templateType.toLowerCase() === selectedType.toLowerCase();
        });

    // Limit to 6 templates
    setDisplayedTemplates(filteredTemplates.slice(0, 6));
  }, [selectedType, templates]);

  return (
    <section className='max-w-6xl m-auto text-center' id="template-section">
      <h1 className="h2 mb-4">
        <span className="font-source-serif-4 block font-normal text-orange-600">Incredible websites </span> 
        <div className="flex items-center justify-center m-auto">
          <span className="mr-2 font-normal">made with</span>

          <svg width="1886" height="240" viewBox="0 0 1886 240" className="h-10 w-auto px-2 py-0" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* SVG content remains unchanged */}
          </svg>

        </div>
      </h1>

      <p className="text-xl text-gray-600 mb-8">Browse through examples of live Notion websites, built with BoringSites.</p>

      <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center aos-init aos-animate mt-6" data-aos="zoom-y-out" data-aos-delay="300">
        <div>
          <Link className="btn text-dark bg-orange-600 hover:bg-orange-200 hover:text-orange-800 w-full mb-4 sm:w-auto sm:mb-0" href="https://app.BoringSites.com">Ask our Designer for Help</Link>
        </div>
        <div>
          <Link className="btn text-white bg-gray-900 hover:bg-gray-800 w-full sm:w-auto sm:ml-2 m-auto" href="/showcase">View all</Link>
        </div>
      </div>

      <div className="flex justify-center space-x-2 my-4 mt-24">
        {types.map(type => (
          <button
            key={type}
            onClick={() => setSelectedType(type)}
            className={`px-3 py-1 rounded ${selectedType === type ? 'bg-orange-600 text-white' : 'bg-gray-200 text-gray-700'}`}
          >
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </button>
        ))}
      </div>

      {displayedTemplates.length > 0 ? (
        <div className="max-w-sm mx-auto grid gap-6 md:grid-cols-3 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-none mt-8">
          {displayedTemplates.map((template, index) => (
            <Link
              href={"/showcase/" + template.id}
              key={index}
              className="relative flex flex-col items-center bg-white rounded-2xl shadow-xl h-full border"
            >
              <div>
                <div>
                  <div className="items-start">
                    <div className="m-auto flex border justify-center items-center h-64">
                      <Image
                        className="w-auto mx-auto"
                        width={100}
                        height={100}
                        src={template.product.logo}
                        unoptimized
                        alt={template.product.name}
                      />
                    </div>
                    <div className="p-6 text-start">
                      <Link href={"/showcase/" + template.id} className="flex gap-2">
                        <span className="text-start mt-2 mb-1 font-bold hover:text-orange-600">
                          {template.product.name}
                        </span>
                        <span className="ml-2 m-auto mb-3">
                          <svg
                            width="12"
                            height="11"
                            viewBox="0 0 12 11"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g
                              stroke="#52667A"
                              strokeWidth="1.25"
                              fill="none"
                              fillRule="evenodd"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="M4.10437012.76923H1.83333333C1.37309604.76923 1 1.11362635 1 1.53846077v7.69230769c0 .42483442.37309604.76923077.83333333.76923077h8.33333334c.46023729 0 .83333333-.34439635.83333333-.76923077V7.03051681M7.4205317.78000087h3.20254469c.21241721 0 .38461538.17219818.38461538.38461539V4.345704M10.5 1.5L6 5.84615385"></path>
                            </g>
                          </svg>
                        </span>
                      </Link>
                      <p className="text-sm text-gray-400 mt-2 mb-3">
                        {truncateText(template.product.description, 76)}
                      </p>
                      <span className="bg-gray-100 border-gray-200 border-dashed border-2 p-1 px-4 rounded-full my-2">
                        {template.product.type}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center mt-8 p-8 bg-gray-100 rounded-lg">
          <AlertCircle size={48} className="text-orange-600 mb-4" />
          <h2 className="text-2xl font-bold mb-2">Coming Soon</h2>
          <p className="text-gray-600">We're working on adding templates for this category. Check back later!</p>
        </div>
      )}
    </section>
  );
};

export default TemplateLibrary;