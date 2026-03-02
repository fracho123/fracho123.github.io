import React from 'react';

const posts = [
  {
    title: 'Resiliency patterns in distributed systems',
    date: '2025-03-02',
    description: 'Notes on idempotency keys, outbox patterns, retries, and safe parallelism in high-throughput services.',
    href: '/blog/resiliency-patterns',
  }
];

function formatDate(iso) {
  try {
    return new Date(iso).toLocaleDateString(undefined, { month: 'short', year: 'numeric' });
  } catch {
    return iso;
  }
}

export default function Blog() {
  return (
    <section className="mb-20">
      <h3 className="text-sm font-mono text-stone-500 mb-8 uppercase tracking-wider">Writing</h3>

      <div className="space-y-10">
        {posts.map((post) => (
          <div key={post.href} className="group">
            <a href={post.href} className="block">
              <h4 className="text-lg font-medium text-stone-100 mb-2 group-hover:text-[#8ba87a] transition-colors flex items-center gap-2">
                {post.title}
                <span className="text-stone-600 group-hover:text-[#8ba87a]/50 transition-colors">↗</span>
              </h4>
              <p className="text-stone-400 mb-4 leading-relaxed">
                {post.description}
              </p>
              <div className="flex items-center gap-3 text-xs font-mono text-stone-500">
                <span>{formatDate(post.date)}</span>
                <span className="hidden sm:inline">•</span>
                <span className="text-stone-600 group-hover:text-stone-400 transition-colors">Read more</span>
              </div>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
