import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../components/ui/card';

const posts = [
  { 
    id: '1', 
    title: 'Defensive by Design: Building for the Unexpected', 
    date: '2025-01-09',
    slug: 'defensive-by-design'
  },
  { 
    id: '2', 
    title: 'Threat Modeling That Teams Actually Use', 
    date: '2025-01-02',
    slug: 'threat-modeling-teams'
  },
  { 
    id: '3', 
    title: 'From Finding Vulns to Fixing Culture', 
    date: '2024-12-21',
    slug: 'finding-vulns-fixing-culture'
  },
];

export const BlogPreview = () => {
  return (
    <section id="blog" className="pt-20 pb-16 lg:pt-24 lg:pb-20" data-testid="blog-section">
      <div className="space-y-6">
        <h2 
          className="text-base md:text-lg font-medium tracking-tight text-neutral-800" 
          data-testid="blog-heading"
        >
          Latest writing
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <a 
              key={post.id} 
              href={`#blog/${post.slug}`}
              data-testid={`blog-card-link-${post.id}`}
              aria-label={post.title}
              className="block"
            >
              <Card className="group border rounded-lg p-5 hover:shadow-sm transition-[box-shadow,colors] h-full">
                <CardHeader className="p-0 mb-3">
                  <CardTitle 
                    className="text-lg font-medium tracking-tight group-hover:text-[hsl(var(--primary))] transition-colors" 
                    data-testid={`blog-card-title-${post.id}`}
                  >
                    {post.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <p 
                    className="text-xs text-neutral-500" 
                    data-testid={`blog-card-date-${post.id}`}
                  >
                    {new Date(post.date).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </p>
                </CardContent>
              </Card>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
