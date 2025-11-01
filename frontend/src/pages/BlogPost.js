import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Button } from '../components/ui/button';

const blogPosts = {
  'defensive-by-design-building-for-the-unexpected': {
    title: 'Defensive by Design: Building for the Unexpected',
    date: '2025-01-09',
    content: `Building resilient systems isn't just about handling known edge cases—it's about designing for the scenarios you haven't thought of yet.

In my work at YUPL.com and through ethical hacking engagements, I've seen how the best systems aren't just secure; they're defensively architected from the ground up.

## Key Principles

**Assume Breach**: Design your systems as if an attacker is already inside. What can they access? How do you limit lateral movement?

**Fail Securely**: When something breaks (and it will), make sure it fails in a way that doesn't expose sensitive data or create vulnerabilities.

**Defense in Depth**: Never rely on a single security control. Layer your defenses so that if one fails, others catch the breach.

## Practical Implementation

Start with threat modeling early in the design phase. Don't wait until code review to think about security. Build it into your architecture, your data flows, and your API design from day one.

The best security isn't bolted on—it's baked in.`
  },
  'threat-modeling-that-teams-actually-use': {
    title: 'Threat Modeling That Teams Actually Use',
    date: '2025-01-02',
    content: `Most threat modeling frameworks are too heavy for real engineering teams. They're academic, time-consuming, and end up gathering dust in a wiki somewhere.

Here's what actually works.

## The Lightweight Approach

**Start with Data Flow**: Map out where your sensitive data lives and how it moves. This alone will surface 80% of your risks.

**Ask Three Questions**:
1. What could go wrong here?
2. What's the impact if it does?
3. How do we prevent or detect it?

**Make It Visual**: Whiteboard sessions work better than lengthy documents. Get the team in a room, draw your architecture, and mark the risk points with red dots.

## Integrate with Development

The best threat modeling happens during sprint planning, not in quarterly security reviews. When a team proposes a new feature, spend 15 minutes asking: "What could an attacker do with this?"

It's not about perfection—it's about making security thinking a habit.`
  },
  'from-finding-vulns-to-fixing-culture': {
    title: 'From Finding Vulns to Fixing Culture',
    date: '2024-12-21',
    content: `Early in my career, I thought ethical hacking was about finding vulnerabilities. I was wrong.

The real work isn't finding the bugs—it's creating an environment where they don't happen in the first place.

## Beyond the Pentest Report

Every organization I've worked with gets the pentest report, nods, and promises to fix the critical issues. Six months later, different vulnerabilities, same root causes.

Why? Because the incentives haven't changed. Shipping fast still beats shipping secure.

## Building a Security Culture

**Make Security Visible**: Put security metrics on the same dashboard as performance metrics. If you measure deploy frequency, also measure vulnerability remediation time.

**Reward Good Behavior**: When someone raises a security concern that delays a feature, celebrate it. Make it career-positive to slow down for the right reasons.

**Enable, Don't Block**: Security teams that say "no" all the time get bypassed. Security teams that provide better, safer alternatives get embedded into the workflow.

## The Long Game

Changing culture takes years. But it's the only thing that scales. You can patch a thousand vulnerabilities, or you can fix the process that creates them.

I've learned to do both, but I focus on the latter.`
  }
};

export const BlogPost = () => {
  const { slug } = useParams();
  const post = blogPosts[slug];

  if (!post) {
    return (
      <div className="min-h-screen bg-background text-foreground antialiased">
        <main className="mx-auto max-w-screen-md px-6 lg:px-8 py-20">
          <div className="text-center space-y-6">
            <h1 className="text-4xl font-semibold tracking-tight">Post Not Found</h1>
            <p className="text-neutral-700">Sorry, we couldn't find that blog post.</p>
            <Button asChild>
              <Link to="/" className="inline-flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back to Home
              </Link>
            </Button>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <main className="mx-auto max-w-screen-md px-6 lg:px-8 py-20">
        <article className="space-y-8">
          <div className="space-y-4">
            <Link 
              to="/"
              className="inline-flex items-center gap-2 text-[hsl(var(--primary))] hover:text-[hsl(var(--primary))]/90 transition-colors"
              data-testid="back-to-home-link"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Link>
            <h1 
              className="text-4xl sm:text-5xl font-semibold tracking-tight" 
              data-testid="blog-post-title"
            >
              {post.title}
            </h1>
            <p 
              className="text-sm text-neutral-600" 
              data-testid="blog-post-date"
            >
              {new Date(post.date).toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </p>
          </div>
          
          <div 
            className="prose prose-neutral max-w-none leading-relaxed space-y-6"
            data-testid="blog-post-content"
          >
            {post.content.split('\n\n').map((paragraph, idx) => {
              if (paragraph.startsWith('## ')) {
                return (
                  <h2 
                    key={idx} 
                    className="text-2xl font-semibold tracking-tight mt-8 mb-4"
                  >
                    {paragraph.replace('## ', '')}
                  </h2>
                );
              }
              if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                return (
                  <p key={idx} className="text-base text-neutral-800 font-medium">
                    {paragraph.replace(/\*\*/g, '')}
                  </p>
                );
              }
              return (
                <p key={idx} className="text-base text-neutral-800">
                  {paragraph.split('**').map((part, i) => 
                    i % 2 === 0 ? part : <strong key={i}>{part}</strong>
                  )}
                </p>
              );
            })}
          </div>

          <div className="pt-8 border-t">
            <Link 
              to="/"
              className="inline-flex items-center gap-2 text-[hsl(var(--primary))] hover:text-[hsl(var(--primary))]/90 transition-colors"
              data-testid="back-to-home-link-bottom"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Link>
          </div>
        </article>
      </main>
    </div>
  );
};
