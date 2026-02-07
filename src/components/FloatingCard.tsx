
'use client';

import React from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import Button from './Button';

const FloatingCard = () => {
    // 3D Tilt Effect State
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    // Mouse tracking for tilt
    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        // Calculate rotation (-1 to 1 range suitable for rotation multipliers)
        const xPct = (mouseX / width - 0.5) * 2;
        const yPct = (mouseY / height - 0.5) * 2;

        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    // Spring physics for smooth animation
    const rotateX = useSpring(useTransform(y, [-1, 1], [15, -15]), { stiffness: 150, damping: 20 }); // Inverted Y for natural tilt
    const rotateY = useSpring(useTransform(x, [-1, 1], [-15, 15]), { stiffness: 150, damping: 20 });

    return (
        <motion.div
            style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d" // Essential for 3D effect
            }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="absolute bottom-[-20px] right-[10%] md:bottom-10 md:right-0 bg-white p-8 rounded-[20px] shadow-[0_20px_50px_rgba(0,0,0,0.1)] w-[320px] md:w-[380px] z-20 border border-gray-50 perspective-1000"
        >
            <div style={{ transform: "translateZ(20px)" }}>
                <h3 className="font-bold text-xl text-dark mb-1 leading-tight">
                    2025 Influencer Marketing Report
                </h3>
                <p className="text-gray-500 text-sm mb-6">
                    Get the latest in industry trends with Kofluence
                </p>
                <a href="https://www.kofluence.com/influencer-marketing-research-report/" target="_blank" rel="noopener noreferrer" className="block w-full">
                    <Button variant="primary" className="w-full text-sm font-semibold bg-coral hover:bg-coral/90 text-white py-3 rounded-full shadow-lg shadow-coral/30">
                        Download Report
                    </Button>
                </a>
            </div>
        </motion.div>
    );
};

export default FloatingCard;
