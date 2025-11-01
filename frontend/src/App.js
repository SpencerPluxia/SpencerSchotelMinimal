import React from 'react';
import '@/App.css';
import { Toaster } from 'sonner';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { BlogPreview } from './sections/BlogPreview';
import { Contact } from './sections/Contact';

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <main className="mx-auto max-w-screen-lg px-6 lg:px-8">
        <Hero />
        <About />
        <BlogPreview />
        <Contact />
      </main>
      <Toaster position="top-center" richColors />
    </div>
  );
}

export default App;
