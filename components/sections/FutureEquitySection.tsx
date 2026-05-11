'use client';

import { motion } from 'framer-motion';

export default function FutureEquitySection() {
  return (
    <section className="min-h-screen bg-[#E9E9E7] px-6 py-20 text-[#1a1612] md:px-16 lg:px-24 relative overflow-hidden">
      
      {/* Header */}
      <div className="flex flex-col items-start justify-between gap-8 md:flex-row">
        <h1 className="max-w-4xl text-5xl font-black uppercase leading-[1.0] tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl">
          Future of Private <br />
          Equity <span className="text-[#004643]">by the numbers.</span>
        </h1>

        <div className="flex max-w-xs items-start gap-3">
          <span className="text-2xl font-light text-[#004643]">+</span>
          <p className="text-sm leading-relaxed text-stone-600 sm:text-base">
            Private equity is rapidly evolving, and understanding the key figures behind this growth is essential.
          </p>
        </div>
      </div>

      {/* Grid */}
      <div className="mt-20 grid grid-cols-1 gap-16 md:grid-cols-2 relative">
        
        {/* Left Content */}
        <div className="relative pl-4 sm:pl-8 md:pl-20 z-10">
          <div className="absolute left-0 top-2 text-[#004643]">
            <svg width="50" height="50" viewBox="0 0 100 100" fill="currentColor">
              <path d="M50 0C50 40 10 50 0 50C10 50 50 60 50 100C50 60 90 50 100 50C90 50 50 40 50 0Z" />
            </svg>
          </div>

          <h2 className="text-3xl font-black leading-[1.2] sm:text-4xl md:text-5xl lg:text-5xl">
            Streamlining <br />
            Investments with <br />
            Cutting-Edge Technology
          </h2>

          <p className="mt-6 max-w-md text-sm leading-relaxed text-stone-600 sm:text-base">
            In the evolving world of private equity, technology is key to speeding up investment processes.
          </p>
        </div>

        {/* Right Image */}
        <div className="relative">
          {/* Mobile inline */}
          <img
            src="https://www.ventivegroup.com/wp-content/uploads/2025/02/business-development-startup.png"
            alt="Equity Illustration"
            className="w-64 sm:w-72 md:hidden h-auto object-contain mx-auto"
          />

          {/* Desktop full-cover */}
          <div className="hidden md:block absolute top-0 right-0 bottom-0 w-auto h-full">
            <img
              src="https://www.ventivegroup.com/wp-content/uploads/2025/02/business-development-startup.png"
              alt="Equity Illustration"
              className="h-full w-auto object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  );
}