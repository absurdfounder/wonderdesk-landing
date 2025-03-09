"use client";

import Link from "next/link";
import Image from "next/image";
import { _loadFromJson } from "@/app/utils/helper";
import notionfooterImage from "@/public/images/freedesigner.png";
import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";

// Define types for the product structure
interface Product {
  name?: string;
  description?: string;
  logo?: string;
  type?: string;
  tags?: string[];
}

interface Template {
  id: string;
  product?: Product;
}

interface TagCount {
  tag: string;
  count: number;
}

// Utility function to truncate text with proper typing
const truncateText = (text: string | undefined, maxLength: number): string => {
  if (!text) return "";
  return text.length > maxLength ? `${text.slice(0, maxLength)}...` : text;
};

export default function Template() {
  const router = useRouter();
  const searchParams = useSearchParams();
  
  const [templates, setTemplates] = useState<Template[]>([]);
  const [filteredTemplates, setFilteredTemplates] = useState<Template[]>([]);
  const [allTags, setAllTags] = useState<TagCount[]>([]);
  const [popularTags, setPopularTags] = useState<TagCount[]>([]);
  const [lesserTags, setLesserTags] = useState<TagCount[]>([]);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showAllTags, setShowAllTags] = useState(false);

  // Helper function to update URL
  const updateUrlParams = (tags: string[]) => {
    // Create a URLSearchParams object
    const params = new URLSearchParams();
    
    // Add tags to URL if there are any selected
    if (tags.length > 0) {
      params.set('tags', tags.join(','));
    }
    
    // Update the URL without refreshing the page
    const newUrl = tags.length > 0 
      ? `?${params.toString()}` 
      : window.location.pathname;
    
    router.push(newUrl, { scroll: false });
  };

  // Parse tags from URL on initial load
  useEffect(() => {
    const tagsParam = searchParams.get('tags');
    if (tagsParam) {
      const urlTags = tagsParam.split(',').map(tag => tag.trim());
      setSelectedTags(urlTags);
    }
  }, [searchParams]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await _loadFromJson() as Template[];
        setTemplates(data);
        setFilteredTemplates(data);
        
        // Count tag occurrences
        const tagCounts: Record<string, number> = {};
        data.forEach(template => {
          if (template.product?.tags) {
            template.product.tags.forEach(tag => {
              tagCounts[tag] = (tagCounts[tag] || 0) + 1;
            });
          }
        });
        
        // Convert to TagCount array and sort
        const tagCountArray: TagCount[] = Object.entries(tagCounts).map(([tag, count]) => ({
          tag,
          count
        }));
        
        // Sort by count (descending) then alphabetically
        tagCountArray.sort((a, b) => {
          if (b.count !== a.count) return b.count - a.count;
          return a.tag.localeCompare(b.tag);
        });
        
        setAllTags(tagCountArray);
        
        // Separate popular tags (more than 1 template) from lesser tags
        const popular = tagCountArray.filter(tc => tc.count > 1);
        const lesser = tagCountArray.filter(tc => tc.count === 1);
        
        setPopularTags(popular);
        setLesserTags(lesser);
        
        // Apply URL filters after getting data
        const tagsParam = searchParams.get('tags');
        if (tagsParam) {
          const urlTags = tagsParam.split(',').map(tag => tag.trim());
          // Only keep tags that actually exist in our data
          const validUrlTags = urlTags.filter(tag => tagCountArray.some(tc => tc.tag === tag));
          setSelectedTags(validUrlTags);
        }
        
        setIsLoading(false);
      } catch (error) {
        console.error("Error loading templates:", error);
        setIsLoading(false);
      }
    };
    
    fetchData();
  }, [searchParams]);

  // Filter templates when selectedTags changes
  useEffect(() => {
    if (selectedTags.length === 0) {
      setFilteredTemplates(templates);
    } else {
      const filtered = templates.filter(template => {
        const templateTags = template.product?.tags || [];
        return selectedTags.some(tag => templateTags.includes(tag));
      });
      setFilteredTemplates(filtered);
    }
  }, [selectedTags, templates]);

  // Handle tag selection/deselection
  const toggleTag = (tag: string) => {
    const newSelectedTags = selectedTags.includes(tag)
      ? selectedTags.filter(t => t !== tag)
      : [...selectedTags, tag];
    
    setSelectedTags(newSelectedTags);
    updateUrlParams(newSelectedTags);
  };

  // Clear all selected tags
  const clearTags = () => {
    setSelectedTags([]);
    updateUrlParams([]);
  };

  // Toggle showing all tags
  const toggleShowAllTags = () => {
    setShowAllTags(!showAllTags);
  };

  return (
    <section id="template-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page header with improved spacing and typography */}
        <div className="pt-4 pb-20 md:pt-24 md:pb-28">
          <div className="mx-auto text-center pb-12 md:pb-16">
            <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl md:text-4xl mb-6">
              <span className="block">Not Templates,</span>
              <span className="block text-orange-600">Beautiful Businesses</span>
            </h1>
            <p className="mt-3 text-xl text-slate-600 sm:mt-4 max-w-2xl mx-auto">
              Jumpstart your SaaS business with pre-built open-source solutions crafted for success.
            </p>

            {/* Tag filtering section */}
            <div className="mt-12 mb-8">
              <div className="mb-4 max-w-4xl m-auto">
                <div className="flex flex-wrap justify-center gap-2 mx-auto">
                  {/* Popular tags (with more than 1 template) */}
                  {popularTags.map(({ tag, count }) => (
                    <button
                      key={tag}
                      onClick={() => toggleTag(tag)}
                      className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                        selectedTags.includes(tag)
                          ? "bg-orange-500 text-white"
                          : "bg-slate-100 text-slate-800 hover:bg-slate-200"
                      }`}
                    >
                      {tag} 
                      {selectedTags.includes(tag) && (
                        <span className="ml-1.5">×</span>
                      )}
                    </button>
                  ))}
                  
                  {/* Lesser tags (with 1 template) - only shown when showAllTags is true */}
                  {showAllTags && lesserTags.map(({ tag, count }) => (
                    <button
                      key={tag}
                      onClick={() => toggleTag(tag)}
                      className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                        selectedTags.includes(tag)
                          ? "bg-orange-500 text-white"
                          : "bg-slate-100 text-slate-800 hover:bg-slate-200"
                      }`}
                    >
                      {tag}
                      {selectedTags.includes(tag) && (
                        <span className="ml-1.5">×</span>
                      )}
                    </button>
                  ))}
                </div>
                
                {/* Show/Hide Tags Toggle */}
                {lesserTags.length > 0 && (
                  <button
                    onClick={toggleShowAllTags}
                    className="mt-4 text-sm text-orange-600 hover:text-orange-800 font-medium transition-colors duration-200"
                  >
                    {showAllTags ? "Show less" : `Show all (${lesserTags.length} more)`}
                  </button>
                )}
                
                <div className="mt-4 flex justify-center items-center gap-3">
                  {selectedTags.length > 0 && (
                    <button
                      onClick={clearTags}
                      className="text-sm text-orange-600 hover:text-orange-800 font-medium transition-colors duration-200"
                    >
                      Clear all filters
                    </button>
                  )}
                </div>
              </div>
              <div className="text-sm text-slate-600">
                {selectedTags.length > 0 ? (
                  <p>Showing {filteredTemplates.length} templates matching your filters</p>
                ) : (
                  <p>Showing all {templates.length} templates</p>
                )}
              </div>
            </div>

            {/* CTA banner with improved styling and layout */}
            <div className="mt-10">
              <div className="relative bg-slate-900 rounded-2xl py-8 px-6 md:py-10 md:px-12 shadow-2xl overflow-hidden">
                {/* Background illustration with proper positioning */}
                <div className="absolute right-0 bottom-0 pointer-events-none hidden lg:block transform translate-x-6 translate-y-6">
                  <Image
                    alt="Designer Logo"
                    width={240}
                    height={240}
                    className="block opacity-80"
                    src={notionfooterImage}
                  />
                </div>

                <div className="relative flex flex-col lg:flex-row justify-between items-center">
                  {/* CTA content with improved typography */}
                  <div className="text-center lg:text-left lg:max-w-xl">
                    <h3 className="text-2xl font-bold text-white mb-4">
                      Get <span className="text-orange-500 font-extrabold">Free Design Services</span>
                    </h3>

                    {/* CTA form with improved button styling */}
                    <form className="w-full lg:w-auto">
                      <div>
                        <Link
                          className="inline-flex items-center text-black justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition-all duration-150 shadow-lg hover:shadow-xl"
                          href="https://app.youform.com/forms/r3rvhjv4" 
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Ask Us to Build
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                          </svg>
                        </Link>
                      </div>
                      <p className="text-sm text-slate-400 mt-3">
                        We setup the whole flow for you, no technical skills required.
                      </p>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Loading state */}
          {isLoading ? (
            <div className="flex justify-center items-center py-20">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500"></div>
            </div>
          ) : (
            <>
              {/* Empty state */}
              {filteredTemplates.length === 0 && (
                <div className="text-center py-16">
                  <h3 className="text-lg font-medium text-slate-900 mb-2">No templates found</h3>
                  <p className="text-slate-600">Try adjusting your filter selection or clear all filters.</p>
                </div>
              )}

              {/* Template cards grid with improved layout and styling */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                {filteredTemplates.map((template: Template, index: number) => (
                  <Link
                    href={`/showcase/${template.id}`}
                    key={index}
                    className="group relative flex flex-col overflow-hidden bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 h-full border border-slate-200 hover:border-orange-200"
                  >
                    <div className="w-full">
                      {/* Image container with improved styling */}
                      <div className="bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center">
                        <Image
                          className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
                          width={120}
                          height={120}
                          src={template?.product?.logo || "https://via.placeholder.com/120"}
                          unoptimized
                          alt={template?.product?.name || "Template"}
                        />
                      </div>

                      <div className="p-6">
                        {/* Template type badge with improved styling */}
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-orange-100 text-orange-800">
                          {template?.product?.type || "Template"}
                        </span>

                        {/* Title with hover effect */}
                        <div className="mt-4 flex items-start">
                          <h3 className="text-lg font-bold text-slate-900 group-hover:text-orange-600 transition-colors duration-200">
                            {template?.product?.name || "Untitled Template"}
                          </h3>
                          <span className="ml-2 text-slate-400 group-hover:text-orange-500 transition-colors duration-200">
                            <svg
                              width="14"
                              height="14"
                              viewBox="0 0 12 11"
                              xmlns="http://www.w3.org/2000/svg"
                              className="mt-1"
                            >
                              <g
                                stroke="currentColor"
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
                        </div>

                        {/* Description with improved styling */}
                        <p className="mt-3 text-sm text-slate-600 line-clamp-2">
                          {truncateText(template?.product?.description, 100) || "No description available"}
                        </p>

                        {/* Tags with improved styling and layout */}
                        <div className="flex flex-wrap gap-2 mt-4">
                          {template?.product?.tags && template.product.tags.length > 0 ? (
                            template.product.tags.slice(0, 3).map((tag: string, tagIndex: number) => (
                              <span 
                                key={tagIndex} 
                                className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium transition-colors duration-200 ${
                                  selectedTags.includes(tag)
                                    ? "bg-orange-200 text-orange-800" 
                                    : "bg-slate-100 text-slate-800 hover:bg-slate-200"
                                }`}
                              >
                                {tag}
                              </span>
                            ))
                          ) : (
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-100 text-slate-400">
                              No tags available
                            </span>
                          )}
                          {template?.product?.tags && template.product.tags.length > 3 && (
                            <span className="text-xs text-slate-500 self-center">+{template.product.tags.length - 3} more</span>
                          )}
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}