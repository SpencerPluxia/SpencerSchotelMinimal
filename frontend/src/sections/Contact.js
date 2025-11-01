import React from 'react';
import { toast } from 'sonner';
import { Mail } from 'lucide-react';

const copyEmail = async (text) => {
  try {
    await navigator.clipboard.writeText(text);
    toast.success('Email copied to clipboard');
  } catch {
    toast.error('Failed to copy email');
  }
};

export const Contact = () => {
  return (
    <section id="contact" className="pt-20 pb-24" data-testid="contact-section">
      <h2 
        className="text-base md:text-lg font-medium tracking-tight text-neutral-800 mb-6" 
        data-testid="contact-heading"
      >
        Contact
      </h2>
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 text-neutral-700">
        <button 
          onClick={() => copyEmail('spencer@yupl.com')} 
          className="inline-flex items-center gap-2 text-[hsl(var(--primary))] hover:text-[hsl(var(--primary))]/90 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--ring))] focus-visible:ring-offset-2 rounded-sm" 
          data-testid="contact-email-link"
          aria-label="Copy email address"
        >
          <Mail className="h-4 w-4" aria-hidden="true" /> 
          spencer@yupl.com
        </button>
        <span className="hidden sm:inline text-neutral-300">•</span>
        <div className="flex items-center gap-4">
          <a 
            href="https://x.com/" 
            target="_blank" 
            rel="noreferrer noopener" 
            aria-label="Follow on X (Twitter)" 
            data-testid="contact-x-link" 
            className="text-neutral-700 hover:text-[hsl(var(--primary))] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--ring))] focus-visible:ring-offset-2 rounded-sm"
          >
            <i className="fa-brands fa-x-twitter text-xl" aria-hidden="true"></i>
          </a>
          <a 
            href="https://t.me/" 
            target="_blank" 
            rel="noreferrer noopener" 
            aria-label="Message on Telegram" 
            data-testid="contact-telegram-link" 
            className="text-neutral-700 hover:text-[hsl(var(--primary))] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--ring))] focus-visible:ring-offset-2 rounded-sm"
          >
            <i className="fa-brands fa-telegram text-xl" aria-hidden="true"></i>
          </a>
          <a 
            href="https://uk.linkedin.com/in/spencer-schotel" 
            target="_blank" 
            rel="noreferrer noopener" 
            aria-label="Connect on LinkedIn" 
            data-testid="contact-linkedin-link" 
            className="text-neutral-700 hover:text-[hsl(var(--primary))] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--ring))] focus-visible:ring-offset-2 rounded-sm"
          >
            <i className="fa-brands fa-linkedin text-xl" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    </section>
  );
};
