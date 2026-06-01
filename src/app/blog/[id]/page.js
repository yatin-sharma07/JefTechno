'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useParams } from 'next/navigation';
import { blogData } from '../MainBlogPage';

const socialLinks = [
  { icon: "/FooterLogo/Link - Facebook.png", href: "https://www.facebook.com/JEFTECHNO/", alt: "Facebook" },
  { icon: "/FooterLogo/Link - Twitter.png", href: "https://x.com/JeftechnoIndia", alt: "Twitter" },
  { icon: "/FooterLogo/Link - Linkedin.png", href: "https://www.linkedin.com/showcase/jef-engineering-services-middle-east/", alt: "LinkedIn" },
  { icon: "/FooterLogo/Instagram.png", href: "https://www.instagram.com/", alt: "Instagram" },
  { icon: "/FooterLogo/Link - Youtube.png", href: "https://www.youtube.com/@JEFgroup", alt: "YouTube" }
];

const BlogPostPage = () => {
  const { id } = useParams();
  const post = blogData[id];

  if (!post) {
    return (
      <div className="bg-[#121212] min-h-screen font-montserrat pt-[100px] flex items-center justify-center text-white">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
          <Link href="/blog" className="text-[#C02429] hover:underline">Back to Blog</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#232427] min-h-screen font-montserrat pt-[80px] md:pt-[90px]">
      {/* News & Media Header (Same as MainBlogPage) */}
      <motion.div
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        className="w-full bg-[#2D2E30] border-b border-white/5 py-4 md:py-6"
      >
        <div className="section-container px-4 sm:px-6 lg:px-0 flex flex-col md:flex-row justify-between items-center  lg:py-5 gap-4">
          <span className="text-white/60 text-xs md:text-sm tracking-[2px] uppercase font-medium">
            News & Media
          </span>
          <nav className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-10">
            {['OVERVIEW', 'ALL NEWS', 'RESOURCES', 'EVENTS', 'PRESS ENQUIRES'].map((item) => (
              <Link 
                key={item} 
                href="/blog" 
                className={`text-[10px] md:text-xs tracking-[1.5px] uppercase  transition-colors ${
                  item === 'ALL NEWS' ? 'text-white' : 'text-white hover:text-white'
                }`}
              >
                {item}
              </Link>
            ))}
          </nav>
        </div>
      </motion.div>

      {/* Breadcrumbs */}
      <div className="w-full bg-[#2D2E30] py-4 border-b border-white/5">
        <div className="section-container px-4 sm:px-6 lg:px-0 flex flex-wrap items-center gap-2 text-[10px] tracking-[1px] uppercase">
          <Link href="/" className="text-white/40 hover:text-[#C02429]">Home</Link>
          <span className="text-white/20">›</span>
          <Link href="/blog" className="text-white/40 hover:text-[#C02429]">Our Blogs</Link>
          <span className="text-white/20">›</span>
          <span className="text-white/40">Consulting Services</span>
          <span className="text-white/20">›</span>
          <span className="text-[#C02429]">Our Blogs</span>
        </div>
      </div>

      {/* Blog Content */}
      <main className="section-container px-4 sm:px-6 lg:px-0 py-12 md:py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-[1000px] mx-auto"
        >
          {/* Header */}
          <div className="flex flex-col gap-4 mb-10">
            <span className="text-white/40 text-xs md:text-sm tracking-wide">
              {post.date}
            </span>
            <h1 className="text-[#C02429] text-2xl md:text-3xl lg:text-4xl font-bold leading-tight uppercase tracking-wide">
              {post.title}
            </h1>
          </div>

          {/* Featured Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-12 rounded-2xl overflow-hidden shadow-2xl"
          >
            <img 
              src={post.imageUrl} 
              alt={post.title} 
              className="w-full h-auto object-cover"
            />
          </motion.div>

          {/* Article Text */}
          <div className="mb-16">
            {post.content}
          </div>

          {/* Share Section */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="w-full bg-[#1A1A1A] rounded-xl p-6 md:p-8 flex flex-col md:flex-row justify-between items-center gap-6"
          >
            <span className="text-white text-sm font-bold uppercase tracking-[2px]">
              Share this article
            </span>
            <div className="flex items-center gap-6">
              {socialLinks.map((social, index) => (
                <a 
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-transform hover:scale-110"
                >
                  <img 
                    src={social.icon} 
                    alt={social.alt} 
                    className="w-6 h-6 object-contain" 
                  />
                </a>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </main>
    </div>
  );
};

export default BlogPostPage;
