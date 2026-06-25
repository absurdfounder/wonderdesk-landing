import Link from 'next/link';

export const metadata = {
  title: 'Page not found | Wonder',
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return (
    <main className="flex min-h-[60vh] flex-col items-center justify-center px-6 py-24 text-center">
      <p className="font-silkscreen text-sm uppercase tracking-[0.18em] text-slate-400">404</p>
      <h1 className="mt-3 font-display text-3xl font-medium text-slate-900">Page not found</h1>
      <p className="mt-3 max-w-md text-sm text-slate-600">
        This page doesn&apos;t exist on Wonderdesk. You may have followed an old or incorrect link.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center rounded-md bg-wonder px-4 py-2 text-sm font-medium text-white hover:bg-wonder-600"
      >
        Back to homepage
      </Link>
    </main>
  );
}
