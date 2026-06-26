import TemplateList from '@/app/(auth)/compare-against/TemplateList';

export default function Showcases() {
  return (
    <section
      className="relative bg-white"
      style={{
        backgroundImage: 'radial-gradient(circle, rgba(186, 183, 195, 0.35) 0.7px, transparent 0.7px)',
        backgroundSize: '10px 10px',
        backgroundColor: '#ffffff',
      }}
    >
      <div className="landing-grid-column bg-white">
        <TemplateList variant="homepage" />
      </div>
    </section>
  );
}
