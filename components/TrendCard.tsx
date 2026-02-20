'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState } from 'react';

interface TrendCardProps {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readingTime: string;
  index: number;
}

export default function TrendCard({ 
  slug, 
  title, 
  excerpt, 
  category, 
  readingTime, 
  index 
}: TrendCardProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left - rect.width / 2,
      y: e.clientY - rect.top - rect.height / 2,
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setMousePosition({ x: 0, y: 0 })}
    >
      <Link href={`/blog/${slug}`}>
        <motion.div
          className="group relative h-full overflow-hidden rounded-2xl glass-dark border border-white/10 transition-all duration-300"
          style={{
            transform: `perspective(1000px) rotateX(${mousePosition.y / 20}deg) rotateY(${mousePosition.x / 20}deg)`,
          }}
          whileHover={{ scale: 1.02 }}
        >
          {/* Gradient overlay on hover */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 via-transparent to-secondary-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          {/* Trending number badge */}
          <div className="relative h-48 bg-gradient-to-br from-primary-500/20 to-secondary-500/20 flex items-center justify-center overflow-hidden">
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-primary-500 to-secondary-500 opacity-0 group-hover:opacity-20 transition-opacity duration-500"
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 90, 0],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
            />
            <motion.span
              className="relative text-8xl font-bold gradient-text font-display"
              initial={{ scale: 0.5, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 + 0.2, duration: 0.5, type: "spring" }}
            >
              {index + 1}
            </motion.span>
            
            {/* Animated ring around number */}
            <motion.div
              className="absolute w-32 h-32 rounded-full border-2 border-primary-500/30"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0, 0.3],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </div>

          {/* Content */}
          <div className="p-6 relative z-10">
            <motion.h3
              className="font-bold text-xl mb-3 text-white group-hover:gradient-text transition-all duration-300 font-display"
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 + 0.3 }}
            >
              {title}
            </motion.h3>
            
            <motion.p
              className="text-sm text-gray-400 line-clamp-2 mb-4"
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 + 0.4 }}
            >
              {excerpt}
            </motion.p>
            
            <motion.div
              className="flex items-center justify-between text-xs"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 + 0.5 }}
            >
              <span className="px-3 py-1.5 bg-primary-500/20 text-primary-400 rounded-full font-semibold backdrop-blur-sm">
                {category}
              </span>
              <span className="text-gray-500 flex items-center gap-1">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {readingTime}
              </span>
            </motion.div>
          </div>

          {/* Shine effect on hover */}
          <motion.div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
            style={{
              background: 'linear-gradient(135deg, transparent 0%, rgba(255,255,255,0.1) 50%, transparent 100%)',
            }}
            animate={{
              x: ['-100%', '100%'],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatDelay: 3,
            }}
          />
        </motion.div>
      </Link>
    </motion.div>
  );
}
