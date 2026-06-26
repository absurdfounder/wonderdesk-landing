import Link from 'next/link';
import Header from '@/components/ui/header';
import PixelFramedVisual from '@/components/ui/PixelFramedVisual';
import PrDocsNotificationCard, {
  PR_DOCS_CARD_H,
  PR_DOCS_CARD_W,
} from '@/components/visuals/PrDocsNotificationCard';
import PrDocsHowItWorksCards, {
  PR_DOCS_HOW_IT_WORKS_H,
  PR_DOCS_HOW_IT_WORKS_W,
} from '@/components/visuals/PrDocsHowItWorksCards';
import PrDocsTaskWorkspaceCard, {
  PR_DOCS_TASK_H,
  PR_DOCS_TASK_W,
} from '@/components/visuals/PrDocsTaskWorkspaceCard';
import PrDocsAuditResultsCard, {
  PR_DOCS_AUDIT_H,
  PR_DOCS_AUDIT_W,
} from '@/components/visuals/PrDocsAuditResultsCard';
import PrDocsMigrationSection, {
  PR_DOCS_MIGRATION_H,
  PR_DOCS_MIGRATION_W,
} from '@/components/visuals/PrDocsMigrationSection';
import PrDocsPlatformFeaturesSection, {
  PR_DOCS_PLATFORM_H,
  PR_DOCS_PLATFORM_W,
} from '@/components/visuals/PrDocsPlatformFeaturesSection';
import PrDocsProductFeaturesSection, {
  PR_DOCS_PRODUCT_H,
  PR_DOCS_PRODUCT_W,
} from '@/components/visuals/PrDocsProductFeaturesSection';
import FeatureVisualStage from '@/components/ui/FeatureVisualStage';

export const metadata = {
  title: 'PR to Docs — Ship features, docs follow | Wonder',
  description:
    'Wonder watches your pull requests and drafts help center articles when customer-facing features ship — so your docs stay current without manual work.',
  alternates: {
    canonical: 'https://wonderdesk.ai/features/pr-to-docs',
  },
  openGraph: {
    images: [
      {
        url: 'https://dazzling-cat.netlify.app/wondercollectivebanner.png',
        width: 1200,
        height: 630,
        alt: 'PR to Docs — Ship features, docs follow',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    images: [
      {
        url: 'https://dazzling-cat.netlify.app/wondercollectivebanner.png',
        alt: 'PR to Docs — Ship features, docs follow',
      },
    ],
  },
};

export default function PrToDocsPage() {
  return (
    <div>
      <section
        style={{
          backgroundImage:
            'linear-gradient(rgb(255 255 255 / 59%), rgba(255, 255, 255, 0)), url(https://dazzling-cat.netlify.app/wondercollectivebanner.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
        <Header />
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="pt-24 pb-8 md:pt-28 md:pb-10">
            <div className="max-w-3xl mx-auto text-center">
              <span className="font-silkscreen text-xs uppercase tracking-wide text-wonder sm:text-sm">
                PR to docs
              </span>
              <h1 className="mt-4 font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900 leading-tight">
                Ship features.
                <br />
                <span className="text-wonder">Docs follow automatically.</span>
              </h1>
              <p className="mt-5 text-base text-slate-500 sm:text-lg md:max-w-2xl mx-auto leading-relaxed">
                When a pull request merges with a customer-facing change, Wonder drafts the
                missing help article and refreshes related ones — ready for your review before
                anything goes live.
              </p>
              <div className="mt-8">
                <Link
                  href="https://app.wonderdesk.ai"
                  className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white transition duration-150 ease-in-out rounded-md shadow bg-orange-700 hover:bg-orange-800"
                >
                  Get Started →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white border-t border-slate-200">
        <div className="landing-grid-column">
          <div className="border-b border-slate-200 landing-grid-pad py-10 md:py-12 text-center">
            <h2 className="font-display text-2xl text-slate-800 sm:text-3xl">
              Review before you publish
            </h2>
            <p className="mt-3 max-w-xl mx-auto text-base text-slate-600 leading-relaxed">
              Wonder surfaces exactly what changed — new articles, updated guides, and the PR
              that triggered them — in one place.
            </p>
          </div>

          <PixelFramedVisual bare scaled>
            <FeatureVisualStage stageWidth={PR_DOCS_CARD_W} stageHeight={PR_DOCS_CARD_H}>
              <PrDocsNotificationCard />
            </FeatureVisualStage>
          </PixelFramedVisual>

          <div className="border-t border-slate-200 landing-grid-pad py-10 md:py-14">
            <div
              className="overflow-x-auto"
              style={{
                backgroundImage:
                  'radial-gradient(circle, rgba(186, 183, 195, 0.35) 0.7px, transparent 0.7px)',
                backgroundSize: '10px 10px',
                backgroundColor: '#ffffff',
              }}
            >
              <div className="mx-auto w-full max-w-[min(100%,72rem)] py-10 md:py-12">
                <FeatureVisualStage
                  stageWidth={PR_DOCS_HOW_IT_WORKS_W}
                  stageHeight={PR_DOCS_HOW_IT_WORKS_H}
                >
                  <PrDocsHowItWorksCards />
                </FeatureVisualStage>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-200 landing-grid-pad py-10 md:py-14 text-center">
            <h2 className="font-display text-2xl text-slate-800 sm:text-3xl">
              From task to published article
            </h2>
            <p className="mt-3 max-w-xl mx-auto text-base text-slate-600 leading-relaxed">
              Wonder works through integration guides in a live workspace — browsing your codebase, drafting
              articles, and showing you the preview before anything ships.
            </p>
          </div>

          <div className="border-t border-slate-200">
            <div
              className="overflow-x-auto"
              style={{
                backgroundImage:
                  'radial-gradient(circle, rgba(186, 183, 195, 0.35) 0.7px, transparent 0.7px)',
                backgroundSize: '10px 10px',
                backgroundColor: '#ffffff',
              }}
            >
              <div className="landing-grid-pad mx-auto w-full max-w-[min(100%,72rem)] py-10 md:py-14">
                <div
                  className="relative w-full overflow-hidden"
                  style={{ aspectRatio: `${PR_DOCS_TASK_W} / ${PR_DOCS_TASK_H}` }}
                >
                  <FeatureVisualStage
                    stageWidth={PR_DOCS_TASK_W}
                    stageHeight={PR_DOCS_TASK_H}
                    className="absolute inset-0"
                  >
                    <PrDocsTaskWorkspaceCard />
                  </FeatureVisualStage>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-200 landing-grid-pad py-10 md:py-14 text-center">
            <h2 className="font-display text-2xl text-slate-800 sm:text-3xl">
              Close the gaps in your help center
            </h2>
            <p className="mt-3 max-w-xl mx-auto text-base text-slate-600 leading-relaxed">
              Wonder audits support conversations and surfaces high-impact recommendations — so you know exactly
              which articles to write or expand next.
            </p>
          </div>

          <div className="border-t border-slate-200">
            <div
              className="overflow-x-auto"
              style={{
                backgroundImage:
                  'radial-gradient(circle, rgba(186, 183, 195, 0.35) 0.7px, transparent 0.7px)',
                backgroundSize: '10px 10px',
                backgroundColor: '#ffffff',
              }}
            >
              <div className="landing-grid-pad mx-auto w-full max-w-[min(100%,72rem)] py-10 md:py-14">
                <div
                  className="relative w-full overflow-hidden"
                  style={{ aspectRatio: `${PR_DOCS_AUDIT_W} / ${PR_DOCS_AUDIT_H}` }}
                >
                  <FeatureVisualStage
                    stageWidth={PR_DOCS_AUDIT_W}
                    stageHeight={PR_DOCS_AUDIT_H}
                    className="absolute inset-0"
                  >
                    <PrDocsAuditResultsCard />
                  </FeatureVisualStage>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-200">
            <div className="overflow-x-auto" style={{ backgroundColor: '#F9FAFB' }}>
              <div
                className="landing-grid-pad mx-auto w-full max-w-[min(100%,72rem)] py-12 md:py-16"
                style={{ minHeight: 360 }}
              >
                <FeatureVisualStage
                  stageWidth={PR_DOCS_MIGRATION_W}
                  stageHeight={PR_DOCS_MIGRATION_H}
                  className="min-h-[280px] sm:min-h-[340px] md:min-h-[400px]"
                >
                  <PrDocsMigrationSection />
                </FeatureVisualStage>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-200">
            <div className="overflow-x-auto bg-white">
              <div
                className="landing-grid-pad mx-auto w-full max-w-[min(100%,72rem)] py-12 md:py-16"
                style={{ minHeight: 400 }}
              >
                <FeatureVisualStage
                  stageWidth={PR_DOCS_PLATFORM_W}
                  stageHeight={PR_DOCS_PLATFORM_H}
                  className="min-h-[300px] sm:min-h-[380px] md:min-h-[460px]"
                >
                  <PrDocsPlatformFeaturesSection />
                </FeatureVisualStage>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-200">
            <div className="overflow-x-auto bg-white">
              <div
                className="landing-grid-pad mx-auto w-full max-w-[min(100%,72rem)] py-12 md:py-16"
                style={{ minHeight: 420 }}
              >
                <FeatureVisualStage
                  stageWidth={PR_DOCS_PRODUCT_W}
                  stageHeight={PR_DOCS_PRODUCT_H}
                  className="min-h-[320px] sm:min-h-[400px] md:min-h-[480px]"
                >
                  <PrDocsProductFeaturesSection />
                </FeatureVisualStage>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
