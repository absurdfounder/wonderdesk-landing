"use client";

import React, { useState, useEffect } from 'react';
import Image from "next/image";
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { AlertCircle, ArrowRight, Tag } from 'lucide-react';
import templateData from '@/public/showcase_data.json';

interface CallToAction {
  text: string;
  link: string;
}

interface viewDemo {
  text: string;
  link: string;
}

interface Product {
  name: string;
  logo: string;
  description: string;
  type: string;
  provider: string;
  callToCopy: CallToAction;
  viewDemo: viewDemo;
  tags?: string[];
}

interface Template {
  id: string;
  product: Product;
  overview: {
    content: string;
  };
  howItWorks: {
    content: string;
  };
  configuration: {
    content: string;
  };
  proof: {
    screenshot: string;
    youtubevideo: string;
  };
}

interface TagCount {
  tag: string;
  count: number;
}

interface TemplateLibraryProps {
  initialSelectedType?: string;
  variant?: 'homepage' | 'standalone';
}

const HOMEPAGE_TAG_LIMIT = 12;

const TemplateLibrary = ({ variant = 'standalone' }: TemplateLibraryProps) => {
  const isHomepage = variant === 'homepage';
  const [templates, setTemplates] = useState<Template[]>([]);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [displayedTemplates, setDisplayedTemplates] = useState<Template[]>([]);
  const [isTagMenuOpen, setIsTagMenuOpen] = useState(false);
  const [popularTags, setPopularTags] = useState<TagCount[]>([]);
  const [lesserTags, setLesserTags] = useState<TagCount[]>([]);
  const [showAllTags, setShowAllTags] = useState(false);

  useEffect(() => {
    const allTemplates = templateData[0]?.template_library || [];
    setTemplates(allTemplates);

    const tagCounts: Record<string, number> = {};

    allTemplates.forEach((template) => {
      template?.product?.tags?.forEach((tag) => {
        tagCounts[tag] = (tagCounts[tag] || 0) + 1;
      });
    });

    const tagCountArray = Object.entries(tagCounts).map(([tag, count]) => ({
      tag,
      count,
    }));

    tagCountArray.sort((a, b) => b.count - a.count || a.tag.localeCompare(b.tag));

    setPopularTags(tagCountArray.filter((tc) => tc.count >= 2));
    setLesserTags(tagCountArray.filter((tc) => tc.count < 2));
  }, []);

  useEffect(() => {
    if (!Array.isArray(templates)) {
      setDisplayedTemplates([]);
      return;
    }

    let filteredTemplates = templates;

    if (selectedTags.length > 0) {
      filteredTemplates = filteredTemplates.filter((template) => {
        if (!template?.product?.tags) return false;
        return selectedTags.some((tag) => template.product.tags?.includes(tag));
      });
    }

    setDisplayedTemplates(filteredTemplates.slice(0, 6));
  }, [selectedTags, templates]);

  const toggleTag = (tag: string) => {
    setSelectedTags((prevTags) =>
      prevTags.includes(tag) ? prevTags.filter((t) => t !== tag) : [...prevTags, tag],
    );
  };

  const clearTags = () => {
    setSelectedTags([]);
  };

  const visiblePopularTags = isHomepage && !showAllTags
    ? popularTags.slice(0, HOMEPAGE_TAG_LIMIT)
    : popularTags;

  const hiddenPopularCount = isHomepage && !showAllTags
    ? Math.max(0, popularTags.length - HOMEPAGE_TAG_LIMIT)
    : 0;

  const tagButtonClass = (active: boolean) =>
    isHomepage
      ? `rounded-sm border px-2.5 py-1 font-mono text-[10px] font-semibold uppercase tracking-[0.12em] transition-colors ${
          active
            ? 'border-wonder bg-wonder/10 text-wonder-800'
            : 'border-slate-200 bg-white text-slate-500 hover:border-slate-300 hover:text-slate-700'
        }`
      : `rounded-md px-3 py-1.5 text-sm font-medium transition-all duration-200 ${
          active ? 'bg-orange-500 text-white' : 'bg-slate-200 text-slate-600 hover:bg-slate-200'
        }`;

  const renderTagFilters = () => (
    <>
      <div className={isHomepage ? 'flex flex-wrap gap-2' : 'flex flex-wrap justify-start gap-2 mb-2 max-w-3xl'}>
        {visiblePopularTags.map(({ tag }) => (
          <button
            key={tag}
            type="button"
            onClick={() => toggleTag(tag)}
            className={tagButtonClass(selectedTags.includes(tag))}
          >
            {tag}
            {selectedTags.includes(tag) && !isHomepage && <span className="ml-1.5">×</span>}
          </button>
        ))}

        {!isHomepage && showAllTags && lesserTags.map(({ tag }) => (
          <button
            key={tag}
            type="button"
            onClick={() => toggleTag(tag)}
            className={tagButtonClass(selectedTags.includes(tag))}
          >
            {tag}
            {selectedTags.includes(tag) && <span className="ml-1.5">×</span>}
          </button>
        ))}
      </div>

      <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1">
        {isHomepage && hiddenPopularCount > 0 && (
          <button
            type="button"
            onClick={() => setShowAllTags(true)}
            className="text-sm font-medium text-orange-600 transition-colors hover:text-orange-700"
          >
            Show {hiddenPopularCount} more tags
          </button>
        )}

        {isHomepage && showAllTags && popularTags.length > HOMEPAGE_TAG_LIMIT && (
          <button
            type="button"
            onClick={() => setShowAllTags(false)}
            className="text-sm font-medium text-orange-600 transition-colors hover:text-orange-700"
          >
            Show fewer tags
          </button>
        )}

        {!isHomepage && lesserTags.length > 0 && (
          <button
            type="button"
            onClick={() => setShowAllTags(!showAllTags)}
            className="text-sm font-medium text-orange-600 transition-colors hover:text-orange-800"
          >
            {showAllTags ? 'Show less' : `Show all (${lesserTags.length} more)`}
          </button>
        )}

        {selectedTags.length > 0 && (
          <button
            type="button"
            onClick={clearTags}
            className="text-sm font-medium text-slate-500 transition-colors hover:text-slate-800"
          >
            Clear filters
          </button>
        )}

        {isHomepage && (
          <Link
            href="/showcase"
            className="text-sm font-medium text-wonder transition-colors hover:text-wonder-700"
          >
            Browse full showcase →
          </Link>
        )}
      </div>
    </>
  );

  const renderTemplateCard = (template: Template, index: number) => {
    if (isHomepage) {
      return (
        <motion.article
          key={template.id}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, delay: index * 0.05 }}
          className="bg-white"
        >
          <Link href={`/showcase/${template.id}`} className="group flex h-full flex-col">
            <div className="relative aspect-[16/10] overflow-hidden border-b border-slate-200 bg-slate-50">
              <Image
                className="h-full w-full object-cover object-top transition-transform duration-300 group-hover:scale-[1.02]"
                width={640}
                height={400}
                src={template.product.logo}
                unoptimized
                alt={template.product.name}
              />
            </div>

            <div className="flex flex-1 flex-col px-5 py-5 md:px-6 md:py-6">
              <div className="flex items-start justify-between gap-3">
                <h3 className="flex min-w-0 items-center gap-2 text-base font-semibold text-slate-900 transition-colors group-hover:text-wonder">
                  <span className="truncate">{template.product.name}</span>
                  <ArrowRight className="h-4 w-4 shrink-0 text-slate-300 transition-colors group-hover:text-wonder" />
                </h3>
                <span className="shrink-0 font-mono text-[10px] font-semibold uppercase tracking-[0.12em] text-slate-400">
                  {template.product.type}
                </span>
              </div>
              <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-slate-500">
                {template.product.description}
              </p>
              {template.product.tags && template.product.tags.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {template.product.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="rounded-sm border border-slate-200 px-2 py-0.5 font-mono text-[9px] uppercase tracking-wide text-slate-500"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </Link>
        </motion.article>
      );
    }

    return (
      <motion.div
        key={template.id}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="flex h-full"
      >
        <Link
          href={`/showcase/${template.id}`}
          className="relative flex w-full flex-col overflow-hidden rounded-2xl border bg-white transition-shadow duration-300 hover:shadow-2xl"
        >
          <div className="w-full p-4">
            <div className="flex items-center justify-center">
              <Image
                className="h-full w-full object-cover"
                width={100}
                height={100}
                src={template.product.logo}
                unoptimized
                alt={template.product.name}
              />
            </div>
            <div className="p-4 text-start">
              <div className="flex flex-col justify-between gap-2 sm:flex-row sm:gap-4">
                <span className="group flex min-w-0 flex-1 items-center gap-2">
                  <span className="truncate text-start font-bold transition-colors duration-300 group-hover:text-orange-600">
                    {template.product.name}
                  </span>
                  <ArrowRight className="h-4 w-4 shrink-0 text-slate-400 transition-colors duration-300 group-hover:text-orange-600" />
                </span>

                <span className="inline-block self-start whitespace-nowrap rounded-md border-2 border-dashed border-slate-200 bg-slate-100 px-2 py-1 text-xs sm:self-auto sm:px-3 sm:text-sm">
                  {template.product.type}
                </span>
              </div>

              <p className="mb-3 mt-2 line-clamp-2 text-xs text-slate-400 sm:text-sm">
                {template.product.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {template.product.tags?.slice(0, 2).map((tag) => (
                  <span
                    key={tag}
                    className="inline-block rounded-md bg-slate-100 px-2 py-1 text-xs text-slate-800 sm:px-3 sm:text-sm"
                  >
                    {tag}
                  </span>
                ))}
                {template.product.tags && template.product.tags.length > 2 && (
                  <span className="inline-block self-center text-xs text-slate-400">
                    +{template.product.tags.length - 2} more
                  </span>
                )}
              </div>
            </div>
          </div>
        </Link>
      </motion.div>
    );
  };

  const headerBlock = (
    <div
      className={
        isHomepage
          ? 'flex flex-col gap-6 border-b border-slate-200 landing-grid-pad py-10 md:flex-row md:items-end md:justify-between md:py-12'
          : 'mb-8 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center sm:gap-6'
      }
    >
      <div className="max-w-2xl">
        <motion.h2
          className="font-display text-2xl text-slate-800 sm:text-3xl md:text-4xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Beautifully crafted.
        </motion.h2>

        <motion.p
          className={`text-base text-slate-600 sm:text-lg ${isHomepage ? 'mt-3' : 'mb-4 mt-2 text-start sm:mb-8 lg:text-xl'}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Browse through examples of live Notion websites, built with Wonder Sites.
        </motion.p>
      </div>

      <Link
        className={
          isHomepage
            ? 'wonder-btn-secondary w-full shrink-0 sm:w-auto'
            : 'w-full whitespace-nowrap rounded-lg border border-slate-900 px-6 py-3 text-center text-base text-slate-800 transition-colors duration-300 hover:bg-slate-800 hover:text-white sm:w-auto sm:text-lg lg:text-xl'
        }
        href="/showcase"
      >
        Explore all showcases
      </Link>
    </div>
  );

  const tagBlock = (
    <motion.div
      className={isHomepage ? 'border-b border-slate-200 landing-grid-pad py-5' : 'mb-8 mt-8 max-w-5xl'}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
    >
      <div className="sm:hidden relative mb-4">
        <button
          type="button"
          onClick={() => setIsTagMenuOpen(!isTagMenuOpen)}
          className="flex w-full items-center justify-between rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-left shadow-sm"
        >
          <span className="text-sm text-slate-700">
            Filter by tag{selectedTags.length > 0 ? ` (${selectedTags.length})` : ''}
          </span>
          <svg
            className={`h-5 w-5 transition-transform ${isTagMenuOpen ? 'rotate-180' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        {isTagMenuOpen && (
          <div className="absolute z-10 mt-1 max-h-60 w-full overflow-y-auto rounded-lg border border-slate-200 bg-white shadow-lg">
            <div className="border-b bg-slate-50 p-2">
              <p className="text-xs font-medium text-slate-500">Popular tags</p>
            </div>
            {popularTags.map(({ tag }) => (
              <button
                key={tag}
                type="button"
                onClick={() => toggleTag(tag)}
                className={`flex w-full items-center px-4 py-2 text-left ${
                  selectedTags.includes(tag) ? 'bg-wonder/10 text-wonder-800' : 'hover:bg-slate-50'
                }`}
              >
                <Tag className="mr-2 h-4 w-4" />
                {tag}
              </button>
            ))}
            {selectedTags.length > 0 && (
              <button
                type="button"
                onClick={clearTags}
                className="w-full border-t px-4 py-2 text-left text-sm text-orange-600"
              >
                Clear filters
              </button>
            )}
          </div>
        )}
      </div>

      {isHomepage && (
        <div className="mb-1 sm:hidden">
          <Link href="/showcase" className="text-sm font-medium text-wonder transition-colors hover:text-wonder-700">
            Browse full showcase →
          </Link>
        </div>
      )}

      <div className="hidden sm:block">{renderTagFilters()}</div>
    </motion.div>
  );

  const templatesGrid = (
    <AnimatePresence mode="wait">
      {displayedTemplates.length > 0 ? (
        <motion.div
          key="templates"
          className={
            isHomepage
              ? 'grid grid-cols-1 gap-px bg-slate-200 sm:grid-cols-2 lg:grid-cols-3'
              : 'mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3'
          }
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {displayedTemplates.map((template, index) => renderTemplateCard(template, index))}
        </motion.div>
      ) : (
        <motion.div
          key="empty"
          className={`flex flex-col items-center justify-center rounded-lg bg-slate-50 p-8 ${
            isHomepage ? 'landing-grid-pad py-16' : 'mt-8'
          }`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          <AlertCircle size={48} className="mb-4 text-orange-600" />
          <h2 className="mb-2 text-2xl font-bold">No templates found</h2>
          <p className="text-slate-600">Try adjusting your filters or check back later for more templates.</p>
        </motion.div>
      )}
    </AnimatePresence>
  );

  if (isHomepage) {
    return (
      <div id="template-section">
        {headerBlock}
        {tagBlock}
        {templatesGrid}
      </div>
    );
  }

  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" id="template-section">
      {headerBlock}
      {tagBlock}
      {templatesGrid}
    </section>
  );
};

export default TemplateLibrary;
