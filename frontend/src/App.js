import React from 'react';
import '@/App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from 'sonner';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { BlogPreview } from './sections/BlogPreview';
import { Contact } from './sections/Contact';
import { BlogPost } from './pages/BlogPost';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <main className="mx-auto max-w-screen-lg px-6 lg:px-8">
        <Hero />
        <About />
        <BlogPreview />
        <Contact />
      </main>
    </div>
  );
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
      </Routes>
      <Toaster position="top-center" richColors />
    </BrowserRouter>
  );
}

export default App;
