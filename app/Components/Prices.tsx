import React, { useRef } from 'react'
import Image from 'next/image'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrambleTextPlugin } from 'gsap/ScrambleTextPlugin'
import { useGSAP } from '@gsap/react'

const Prices = () => {
  const pricesRef = useRef(null);
  gsap.registerPlugin(ScrollTrigger, ScrambleTextPlugin);

  useGSAP(() => {
    // Title animation
    gsap.to(".prices-title", {
      duration: 2,
      scrambleText: {
        text: "Hire Me",
      },
      scrollTrigger: {
        trigger: ".prices-title",
        start: "top bottom-=100",
        toggleActions: "play none none reverse",
      }
    });

    // Cards animation
    gsap.fromTo(".price-card",
      {
        opacity: 0,
        y: 50,
        scale: 0.9,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: pricesRef.current,
          start: "top bottom-=100",
          toggleActions: "play none none reverse",
        }
      }
    );
  }, []);

  return (
    <section className='w-full mt-20 sm:mt-32 lg:mt-40 px-4 sm:px-8 lg:px-16' id='prices'>
      <div className='max-w-7xl mx-auto'>
        <h2 className='prices-title text-3xl sm:text-4xl lg:text-5xl font-light text-[#00ffff] text-center mb-12 sm:mb-16'>
          Hire Me
        </h2>
        
        <div ref={pricesRef} className='grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 lg:gap-12'>
          
          <div className='price-card group bg-[#1e1e1e] rounded-xl overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl'>
            <div className='relative aspect-video'>
              <Image 
                src="/fiverr thumbnsil.png" 
                alt="Fiverr" 
                fill
                className='object-cover transition-transform duration-300 group-hover:scale-105'
              />
            </div>
            <div className='p-6 sm:p-8'>
              <h3 className='text-2xl sm:text-3xl font-semibold text-white mb-4'>Fiverr</h3>
              <p className='text-lg sm:text-xl text-[#00ffff] font-medium mb-6'>$80 - $500</p>
              <a 
                href="https://www.fiverr.com/s/xXbDGdZ" 
                target="_blank" 
                rel="noopener noreferrer" 
                className='inline-block bg-[#00ffff] text-black px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:opacity-80'
              >
                Hire on Fiverr
              </a>
            </div>
          </div>

          {/* Upwork Card */}
          <div className='price-card group bg-[#1e1e1e] rounded-xl overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl'>
            <div className='relative aspect-video'>
              <Image 
                src="/Upwork.png" 
                alt="Upwork" 
                fill
                className='object-cover transition-transform duration-300 group-hover:scale-105'
              />
            </div>
            <div className='p-6 sm:p-8'>
              <h3 className='text-2xl sm:text-3xl font-semibold text-white mb-4'>Upwork</h3>
              <p className='text-lg sm:text-xl text-[#00ffff] font-medium mb-6'>$200 - $500</p>
              <a 
                href="https://www.upwork.com/freelancers/~01fec05d1ba93f837d?mp_source=share" 
                target="_blank" 
                rel="noopener noreferrer" 
                className='inline-block bg-[#00ffff] text-black px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:opacity-80'
              >
                Hire on Upwork
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Prices