
'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Button from './Button';
import FloatingCard from './FloatingCard';
import Navbar from './Navbar';

const HeroSection = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollY } = useScroll();
    const y = useTransform(scrollY, [0, 500], [0, 100]); // Parallax scroll effect

    return (
        <div
            className="min-h-screen bg-cream overflow-hidden relative flex flex-col"
            ref={containerRef}
        >
            <Navbar />

            <main className="flex-1 container mx-auto px-4 md:px-12 flex flex-col lg:flex-row items-center justify-center gap-12 py-12 lg:py-0">

                {/* Left Content: Text */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="flex-1 max-w-2xl z-10"
                >
                    <h1 className="text-5xl md:text-[59px] font-bold text-dark leading-[1.1] mb-6 tracking-tight">
                        Data-driven <br />
                        <span className="text-yellow">Performance!</span>
                    </h1>
                    <div className="text-gray-600 text-lg md:text-[19px] leading-relaxed mb-8 max-w-xl font-normal">
                        <span className="text-inherit">We are a </span>
                        <b className="text-dark font-bold">leading influencer marketing agency in India</b>
                        <span className="text-inherit">, offering </span>
                        <b className="text-dark font-bold">AI-powered influencer marketing solutions</b>
                        <span className="text-inherit"> that empower both </span>
                        <b className="text-dark font-bold">brands and influencers</b>
                        <span className="text-inherit"> to capitalize on the value of their social influence</span>
                    </div>

                    <a href="" target="_blank" rel="noopener noreferrer">
                        <Button variant="primary" className="text-base font-semibold px-8 py-3 bg-coral hover:bg-coral/90 text-white shadow-xl shadow-coral/30 rounded-full transition-transform hover:-translate-y-1">
                            Request Demo
                        </Button>
                    </a>
                </motion.div>

                {/* Right Content: Illustration & Floating Card */}
                <div className="flex-1 relative w-full flex items-center justify-center lg:justify-end">
                    {/* Illustration Container */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative w-full max-w-[748px]"
                    >
                        {/* Main Banner Image */}
                        <motion.img
                            src="/Kof-Banner.svg"
                            alt="Illustration of an AI-powered analytics dashboard for influencer marketing performance"
                            className="w-full h-auto object-contain z-10 relative drop-shadow-sm"
                            width={748}
                            height={562}
                        />

                        {/* Floating Card with Parallax Scroll */}
                        <motion.div style={{ y }} className="absolute bottom-0 right-0 w-full h-full pointer-events-none">
                            <div className="pointer-events-auto w-full h-full relative">
                                <FloatingCard />
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </main>
        </div>
    );
};

export default HeroSection;
