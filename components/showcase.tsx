import TemplateList from '@/app/(auth)/compare-against/TemplateList'
import LandingMissionTag from './landing/LandingMissionTag'

type ShowcasesProps = {
  embedded?: boolean;
};

export default function Showcases({ embedded = false }: ShowcasesProps) {
  const content = (
    <>
      <LandingMissionTag index="09" label="Examples" className="mb-4" />
      <TemplateList />
    </>
  );

  if (embedded) {
    return <div className="py-12 md:py-16">{content}</div>;
  }

  return (
    <section className="relative border bg-white landing-dot-grid">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 md:py-20 lg:px-8">{content}</div>
    </section>
  );
}
