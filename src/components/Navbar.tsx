
'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';
import Button from './Button';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    // Exact links from the reference site
    const navLinks = [
        { name: 'Home', href: '' }, // Hidden on desktop usually if logo is there, but strictly following list
        { name: 'Creator', href: '' },
        { name: 'Brand', href: '' },
        { name: 'Case Studies', href: '' },
        { name: 'About', href: '' },
        { name: 'Contact', href: '' },
    ];

    // Filter 'Home' from desktop menu if logo serves as home link, but let's keep it if reference has it explicitly or just follow typical pattern
    // Reference chunk shows "Home" in the list.
    const desktopLinks = navLinks.filter(link => link.name !== 'Home');

    return (
        <nav className="w-full py-4 px-4 md:px-12 flex justify-between items-center bg-white relative z-50 mx-auto">
            {/* Logo Area */}
            <Link href="" className="flex-shrink-0">
                <Logo />
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-8">
                {desktopLinks.map((link) => (
                    <Link
                        key={link.name}
                        href={link.href}
                        className="text-dark hover:text-coral transition-colors font-medium text-[15px] tracking-wide"
                    >
                        {link.name}
                    </Link>
                ))}

                <a href="">
                    <Button variant="outline" className="text-coral border-coral hover:bg-coral hover:text-white px-6 py-2.5 text-sm font-semibold rounded-full transition-all">
                        Request Demo
                    </Button>
                </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
                <button onClick={() => setIsOpen(!isOpen)} className="text-dark p-2">
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            {isOpen && (
                <div className="absolute top-full left-0 w-full bg-cream shadow-xl p-6 flex flex-col gap-4 lg:hidden z-50 border-t border-gray-100">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-dark hover:text-coral font-medium py-2 border-b border-gray-50 last:border-0"
                            onClick={() => setIsOpen(false)}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <div className="pt-2">
                        <a href="" className="block w-full">
                            <Button variant="outline" className="w-full justify-center text-coral border-coral hover:bg-coral hover:text-white">
                                Request Demo
                            </Button>
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
