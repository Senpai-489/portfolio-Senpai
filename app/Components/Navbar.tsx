import React, { useState, useEffect, useRef } from 'react'
import { Menu, X } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const navRef = useRef(null)
    let lastScroll = 0

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger)
        
        const showNav = (direction: string) => {
            if (!navRef.current) return
            
            gsap.to(navRef.current, {
                y: direction === 'up' ? 0 : -100,
                duration: 1,
                ease: 'power2.out'
            })
        }

        const handleScroll = () => {
            const currentScroll = window.scrollY
            if (currentScroll <= 0) {
                showNav('up')
                return
            }
            
            if (currentScroll > lastScroll) {
                // Scrolling down
                showNav('down')
            } else {
                // Scrolling up
                showNav('up')
            }
            
            lastScroll = currentScroll
        }

        window.addEventListener('scroll', handleScroll)
        
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <nav ref={navRef} className="fixed top-0 left-0 w-full bg-[#121212] z-50">
            
            <div className="hidden md:flex justify-center gap-8 lg:gap-20 items-center p-6 text-white">
                <a 
                    className="text-base lg:text-lg px-4 rounded-3xl ease-in-out duration-300 py-2 hover:opacity-40"
                    href="#"
                >
                    Home
                </a>
                <a 
                    className="text-base lg:text-lg px-4 rounded-3xl ease-in-out duration-300 py-2 hover:opacity-40"
                    href="#AboutMe"
                >
                    About Me
                </a>
                <a 
                    className="text-base lg:text-lg px-4 rounded-3xl ease-in-out duration-300 py-2 hover:opacity-40"
                    href="#Projects"
                >
                    Projects
                </a>
                <a 
                    className="text-base lg:text-lg px-4 rounded-3xl ease-in-out duration-300 py-2 hover:opacity-40"
                    href="#Contact"
                >
                    Contact Me
                </a>
            </div>

            <div className="md:hidden">
                <div className="flex justify-end p-4">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-white"
                        aria-label="Toggle Menu"
                    >
                        {isOpen ? (
                            <X className="h-6 w-6" />
                        ) : (
                            <Menu className="h-6 w-6" />
                        )}
                    </button>
                </div>

              
                {isOpen && (
                    <div className="flex flex-col items-center gap-4 pb-4 text-white bg-[#121212]">
                        <a 
                            className="w-full text-center py-2 hover:bg-[#1f1f1f] transition-colors"
                            href="#"
                            onClick={() => setIsOpen(false)}
                        >
                            Home
                        </a>
                        <a 
                            className="w-full text-center py-2 hover:bg-[#1f1f1f] transition-colors"
                            href="#AboutMe"
                            onClick={() => setIsOpen(false)}
                        >
                            About Me
                        </a>
                        <a 
                            className="w-full text-center py-2 hover:bg-[#1f1f1f] transition-colors"
                            href="#Projects"
                            onClick={() => setIsOpen(false)}
                        >
                            Projects
                        </a>
                        <a 
                            className="w-full text-center py-2 hover:bg-[#1f1f1f] transition-colors"
                            href="#Contact"
                            onClick={() => setIsOpen(false)}
                        >
                            Contact Me
                        </a>
                    </div>
                )}
            </div>
        </nav>
    )
}

export default Navbar
