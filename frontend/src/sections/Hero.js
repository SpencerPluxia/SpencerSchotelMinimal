import React from 'react';
import { Button } from '../components/ui/button';
import { Mail } from 'lucide-react';

export const Hero = () => {
  const scrollToBlog = (e) => {
    e.preventDefault();
    const blogSection = document.getElementById('blog');
    if (blogSection) {
      blogSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="hero" className="pt-20 pb-16 lg:pt-24 lg:pb-20" data-testid="hero-section">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
        <div className="lg:col-span-7 space-y-6">
          <h1 
            className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight" 
            data-testid="hero-title"
          >
            Spencer Schotel
          </h1>
          <p 
            className="text-base md:text-lg text-neutral-700 max-w-prose leading-relaxed" 
            data-testid="hero-subtitle"
          >
            Business owner at <a 
              href="https://yupl.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[hsl(var(--primary))] hover:underline underline-offset-4 transition-colors"
            >
              YUPL.com
            </a> and ethical hacker. I build resilient systems, lead teams, and break things (responsibly) to make them stronger.
          </p>
          <div className="flex items-center gap-4 flex-wrap">
            <Button 
              className="bg-[hsl(var(--primary))] text-white hover:bg-[hsl(var(--primary))]/90 transition-colors h-11" 
              data-testid="hero-primary-cta-button" 
              asChild
            >
              <a href="mailto:spencer@yupl.com" aria-label="Email Spencer">
                <Mail className="mr-2 h-4 w-4"/>
                Contact
              </a>
            </Button>
            <a 
              href="#blog" 
              onClick={scrollToBlog}
              className="text-[hsl(var(--primary))] underline underline-offset-4 hover:text-[hsl(var(--primary))]/90 transition-colors" 
              data-testid="hero-secondary-cta-link"
            >
              Read the blog
            </a>
          </div>
        </div>
        <div className="lg:col-span-5">
          <img 
            alt="Spencer Schotel portrait" 
            src="/hero.jpg" 
            className="w-full max-w-sm mx-auto lg:mx-0 rounded-lg shadow-sm ring-1 ring-black/5 object-cover" 
            data-testid="hero-image" 
          />
        </div>
      </div>
    </section>
  );
};
