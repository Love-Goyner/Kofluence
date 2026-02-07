
'use client';

import { motion, HTMLMotionProps } from 'framer-motion';
import { cn } from '@/lib/utils';
import React from 'react';

interface ButtonProps extends HTMLMotionProps<"button"> {
    variant?: 'primary' | 'secondary' | 'outline';
    children: React.ReactNode;
    className?: string; // HTMLMotionProps includes className but explicit is fine
}

const Button = ({ variant = 'primary', children, className, ...props }: ButtonProps) => {
    const baseStyles = "px-6 py-2 rounded-full font-medium transition-colors duration-200 flex items-center justify-center";

    const variants = {
        primary: "bg-coral text-white hover:bg-opacity-90 shadow-md hover:shadow-lg",
        secondary: "bg-yellow text-dark hover:bg-opacity-90",
        outline: "border-2 border-dark text-dark hover:bg-dark hover:text-white"
    };

    return (
        <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={cn(baseStyles, variants[variant], className)}
            {...props}
        >
            {children}
        </motion.button>
    );
};

export default Button;
