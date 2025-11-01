import React from 'react';

export const About = () => {
  return (
    <section id="about" className="pt-20 pb-16 lg:pt-24 lg:pb-20" data-testid="about-section">
      <div className="max-w-prose space-y-4">
        <h2 
          className="text-base md:text-lg font-medium tracking-tight text-neutral-800" 
          data-testid="about-heading"
        >
          About
        </h2>
        <p 
          className="text-base text-neutral-800 leading-relaxed" 
          data-testid="about-paragraph-1"
        >
          I run YUPL.com and practice ethical hacking to help teams ship secure, reliable products. My approach blends business leadership with hands-on technical depth.
        </p>
        <p 
          className="text-base text-neutral-800 leading-relaxed" 
          data-testid="about-paragraph-2"
        >
          Previously, I've led security reviews, incident response playbooks, and engineering teams across growth stages—from MVP to scale.
        </p>
      </div>
    </section>
  );
};
