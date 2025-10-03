import React, { useRef } from 'react'
import ProjectCard from './ProjectCard'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrambleTextPlugin } from 'gsap/ScrambleTextPlugin'
import { useGSAP } from '@gsap/react'

const Projects = () => {
    const projectsRef = useRef(null);
    gsap.registerPlugin(ScrollTrigger, ScrambleTextPlugin);

    // Add GSAP animations
    useGSAP(() => {
        // Title animation with scramble effect
        gsap.to(".projects-title", {
            duration: 2,
            scrambleText: {
                text: "My Projects",
            },
            scrollTrigger: {
                trigger: ".projects-title",
                start: "top bottom-=100",
                toggleActions: "play none none reverse",
            }
        });

        // Project cards staggered animation
        gsap.fromTo(
            '.project-card',
            { 
                opacity: 0,
                y: 50,
            },
            {
                opacity: 1,
                y: 0,
                duration: 0.8,
                stagger: 0.2,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: projectsRef.current,
                    start: 'top bottom-=100',
                    end: 'bottom center',
                    toggleActions: 'play none none reverse',
                }
            }
        );
    }, []);

    const projectData = [
        {
            Title: "Vaul-E",
            Description: "A secure and Safe Web 3 Wallet Generator built on Solana and Ethereum blockchains.",
            Technologies: ["React", "Tailwind CSS", "Web3.js", "Solana.js", "Ethers.js"],
            LiveDemo: "https://vaul-e.vercel.app/",
            SourceCode: "https://github.com/Senpai-489/Vaul-e",
            Image: "/Vaul-e.png"
        },
        {
            Title: "Farmingo",
            Description: "An AI-powered platform that serves as a comprehensive solution for farmers, providing real-time insights and recommendations to optimize crop yield and resource management.",
            Technologies: ["Node.js", "Express", "MongoDB", "React", "Tailwind CSS", "Gemini-AI"],
            
            SourceCode: "https://github.com/Senpai-489/Farmingo",
            Image: "/Farmingo.png"
        }
        ,
        {
            Title: "Sales and Leads Dashboard",
            Description: "A webApp I made for Luxuryvibesstay.com that allows sales teams to manage sales leads and track their progress through the sales pipeline.",
            Technologies: ["Node.js", "Express", "NextJS", "React", "Tailwind CSS"," MongoDB"],
            
            SourceCode: "https://github.com/Senpai-489/LuxuryVibes_Dashboard",
            Image: "/Dashboard.png"
        }
        ,
        {
            Title: "EZ Promptor",
            Description: "A CRUD Web Application that allows users to create, read, update, and delete AI prompts for various use cases, With Built in AI Chatbot using Gemini API.",
            Technologies: ["Node.js", "Express", "MongoDB", "NextJS","Google Auth0", "Tailwind CSS", "Gemini-AI"],
            LiveDemo: "https://ez-promptor.vercel.app/",
            SourceCode: "https://github.com/Senpai-489/ez_promptor",
            Image: "/ezPromptor.png"
        }
        ,
        {
            Title: "Wabi-Sabi",
            Description: "A webApp that helps children with Autism Spectrum Disorder (ASD) improve their social skills and emotional recognition through interactive games, activities and by using machine learning.",
            Technologies: ["Node.js", "Express", "Python"],
           
            SourceCode: "https://github.com/Senpai-489/Wabi-Sabi",
            Image: "/WabiSabi.png"
        }
        ,
        {
            Title: "Multiplayer Chess",
            Description: "A webApp that allows users to play chess against each other in real-time, with features like chat, user authentication, and game history.",
            Technologies: ["Node.js", "Express", "Socket.io", "React", "Tailwind CSS"],
            
            SourceCode: "https://github.com/Senpai-489/Multiplayer_Chess",
            Image: "/chess.png"
        }
    ];
  return (
    <div id='Projects' className='mt-20 sm:mt-32 lg:mt-52 px-4 sm:px-8 lg:px-12 flex flex-col justify-start items-center text-[#00ffff]'>
        <h1 className="projects-title text-3xl sm:text-4xl mb-12 sm:mb-16 lg:mb-24 font-light text-[#00ffff]">
            My Projects
        </h1>
    
        <div ref={projectsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
            {projectData.map((project, index) => (
                <div key={index} className="project-card">
                    <ProjectCard
                        Title={project.Title}
                        Description={project.Description}
                        Technologies={project.Technologies}
                        LiveDemo={project.LiveDemo}
                        SourceCode={project.SourceCode}
                        Image={project.Image}
                    />
                </div>
            ))}
        </div>
    </div>
  )
}

export default Projects
