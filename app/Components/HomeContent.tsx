'use client'

import React, { useEffect, useRef } from 'react'
import GlitchText from '@/components/GlitchText'
import DecryptedText from '@/components/DecryptedText'
import Threads from '@/components/Threads'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'


const HomeContent = () => {

  const scrollIntoView = (selector: string) => {
    const element = document.querySelector(selector);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  const yoeRef = useRef<HTMLSpanElement>(null);
  const projectsRef = useRef<HTMLSpanElement>(null);
  const hoursRef = useRef<HTMLSpanElement>(null);
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    let yoe = 0.1;
    let projects = 0;
    let hours = 0;
    const yoeTarget = 1.5;
    const projectsTarget = 10;
    const hoursTarget = 2000;

    const yoeInterval = setInterval(() => {
      if (yoe < yoeTarget) {
        yoe = +(yoe + 0.1).toFixed(1);
        if (yoeRef.current) yoeRef.current.textContent = yoe + '+';
      } else {
        clearInterval(yoeInterval);
      }
    }, 150);

    const projectsInterval = setInterval(() => {
      if (projects < projectsTarget) {
        projects += 1;
        if (projectsRef.current) projectsRef.current.textContent = projects + '+';
      } else {
        clearInterval(projectsInterval);
      }
    }, 150);

    const hoursInterval = setInterval(() => {
      if (hours < hoursTarget) {
        hours += 20;
        if (hoursRef.current) hoursRef.current.textContent = hours + '+';
      } else {
        clearInterval(hoursInterval);
      }
    }, 20);

    return () => {
      clearInterval(yoeInterval);
      clearInterval(projectsInterval);
      clearInterval(hoursInterval);
    };
  }, []);


    
   
  useGSAP(() => {
    gsap.fromTo(
      '.yoe',
      { opacity: 0, x: 100 },
      { opacity: 1, x: 0, duration: 1, delay: 3, ease: 'power2.out' }
    );
    gsap.fromTo(
      '.projects',
      { opacity: 0, x: 100 },
      { opacity: 1, x: 0, duration: 1, delay: 3, ease: 'power2.out' }
    );
    gsap.fromTo(
      '.hours',
      { opacity: 0, x: 100 },
      { opacity: 1, x: 0, duration: 1, delay: 3, ease: 'power2.out' }
    );
    gsap.fromTo(
      '.glitch-text',
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 1, ease: 'power2.out', delay: 3, scrollTrigger: { trigger: '.projects' } }
    );
    gsap.fromTo(
      '.why-work',
      { 
        opacity: 0,
        y: 50 
      },
      { 
        opacity: 1,
        y: 0,
        delay: 0.2,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.why-work',
          start: 'top bottom-=100',
          end: 'top center',
          toggleActions: 'play none none reverse',
          markers: false 
        }
      }
    );

    gsap.fromTo(
      '.para',
      { 
        opacity: 0,
        y: 50 
      },
      { 
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out',
        delay: 0.3,
        scrollTrigger: {
          trigger: '.para',
          start: 'top bottom-=100',
          end: 'top center',
          toggleActions: 'play none none reverse',
          markers: false
        }
      }
    );
  }, []);
 
  return (
    <div className="relative overflow-hidden min-h-screen px-4 sm:px-6 lg:px-8">
     
      <div className=" relative  sm:text-8xl top-4 z-20 sm:h-[70vh] h-[60vh] flex flex-col justify-center items-center">
        <GlitchText
          
          speed={2}
          enableShadows
          enableOnHover={true}
          className="glitch-text text-4xl sm:text-7xl lg:text-6xl font-bold text-black text-center"
        >
          Amit Singh
        </GlitchText>
        </div>

      <div className="fixed inset-0 -z-10">
        <Threads amplitude={4} distance={0.4} enableMouseInteraction={false} />
      </div>

      <div className="text-xl sm:text-2xl lg:text-3xl text-[#00ffff] flex flex-col justify-center items-center px-4 text-center">
        <DecryptedText
          text="Full Stack Developer | Freelancer | Web3 Enthusiast"
          animateOn="view"
          speed={80}
          revealDirection="start"
          sequential
        />
      </div>

      <div className="flex justify-center mt-6">
        <button onClick={() => scrollIntoView('#Contact')} className="z-20 bg-[#00ffff] text-black px-4 sm:px-6 py-2 sm:py-3 rounded-lg text-base sm:text-lg font-semibold hover:opacity-70 ease-in-out duration-300">
          Hire Me
        </button>
      </div>

      <div className="relative lg:absolute lg:bottom-72 w-full lg:w-auto flex flex-col items-center lg:items-end lg:right-12 text-center lg:text-right mt-20 lg:mt-0 space-y-8 lg:space-y-10">
        <div className="yoe">
          <h1 className="text-4xl sm:text-5xl font-bold text-[#00ffff]">
            <span ref={yoeRef}>0.1+</span>
          </h1>
          <span className="text-lg sm:text-xl font-light text-[#cdcdcd]">Years of Experience</span>
        </div>

        <div className="projects">
          <h1 className="text-4xl sm:text-5xl font-bold text-[#00ffff]">
            <span ref={projectsRef}>0+</span>
          </h1>
          <span className="text-lg sm:text-xl font-light text-[#cdcdcd]">Projects Completed</span>
        </div>

        <div className="hours">
          <h1 className="text-4xl sm:text-5xl font-bold text-[#00ffff]">
            <span ref={hoursRef}>0+</span>
          </h1>
          <span className="text-lg sm:text-xl font-light text-[#cdcdcd]">Hours Worked</span>
        </div>
      </div>

      <div className="mt-20 lg:mt-28 px-4 sm:px-6">
        <h1 className='why-work text-3xl sm:text-4xl text-[#00ffff] mb-8'>Why Work With Me?</h1>
        <p className="para text-2xl sm:text-3xl lg:text-3xl text-[#cdcdcd] w-full lg:w-[40vw]">
          I make websites that are not only visually appealing but also highly functional
          and user-friendly, meeting the specific needs of my clients.
        </p>
      </div>
    </div>
  )
}

export default HomeContent
