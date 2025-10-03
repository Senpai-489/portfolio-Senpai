import React, { useRef } from 'react'
import { 
    IconBrandAws,
    IconBrandBootstrap,
    IconBrandCss3,
    IconBrandDocker,
    IconBrandFirebase,
    IconBrandFramerMotion,
  IconBrandGit,
  IconBrandGithub,
  IconBrandHtml5,
  IconBrandJavascript, 
  IconBrandMongodb, 
  IconBrandMysql, 
  IconBrandNextjs, 
  IconBrandNodejs, 
  IconBrandReact, 
  IconBrandSupabase, 
  IconBrandTailwind, 
  IconBrandTypescript, 
  IconEyeX
} from '@tabler/icons-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { ScrambleTextPlugin } from 'gsap/all'



const AboutMe = () => {
  const frontendStackRef = useRef(null);
  const backendStackRef = useRef(null);
  const databaseStackRef = useRef(null);
  const toolsStackRef = useRef(null);
  
  gsap.registerPlugin(ScrollTrigger);
  gsap.registerPlugin(ScrambleTextPlugin);

  useGSAP(() => {
    
    const frontendTl = gsap.timeline({
      scrollTrigger: {
        trigger: frontendStackRef.current,
        start: 'top bottom-=100',
        end: 'top center',
        toggleActions: 'play none none reverse',
      }
    });

    frontendTl
      .from('.frontend-item', {
        opacity: 0,
        x: 50,
        stagger: 0.1,
        duration: 0.5,
        ease: 'power2.out'
      });

    // Backend Timeline
    const backendTl = gsap.timeline({
      scrollTrigger: {
        trigger: backendStackRef.current,
        start: 'top bottom-=100',
        end: 'top center',
        toggleActions: 'play none none reverse',
      }
    });

    backendTl
      .from('.backend-item', {
        opacity: 0,
        x: 50,
        stagger: 0.1,
        duration: 0.5,
        ease: 'power2.out'
      });

    // Database Timeline
    const databaseTl = gsap.timeline({
      scrollTrigger: {
        trigger: databaseStackRef.current,
        start: 'top bottom-=100',
        end: 'top center',
        toggleActions: 'play none none reverse',
      }
    });

    databaseTl
      .from('.database-item', {
        opacity: 0,
        x: 50,
        stagger: 0.1,
        duration: 0.5,
        ease: 'power2.out'
      });

    // Tools Timeline
    const toolsTl = gsap.timeline({
      scrollTrigger: {
        trigger: toolsStackRef.current,
        start: 'top bottom-=100',
        end: 'top center',
        toggleActions: 'play none none reverse',
      }
    });

    toolsTl
      .from('.tools-item', {
        opacity: 0,
        x: 50,
        stagger: 0.1,
        duration: 0.5,
        ease: 'power2.out'
      });

    gsap.to(".Frontend", {
      duration: 2,
      scrambleText: {
        text: "Frontend",
      },
      scrollTrigger: {
        trigger: ".Frontend",
        start: "top bottom-=100",
        toggleActions: "play none none reverse",
      }
    });
    gsap.to(".Backend", {
      duration: 2,
      scrambleText: {
        text: "Backend",
      },
      scrollTrigger: {
        trigger: ".Backend",
        start: "top bottom-=100",
        toggleActions: "play none none reverse",
      }
    });
    gsap.to(".Database", {
      duration: 2,
      scrambleText: {
        text: "Database",
      },
      scrollTrigger: {
        trigger: ".Database",
        start: "top bottom-=100",
        toggleActions: "play none none reverse",
      }
    });
    gsap.to(".Tools", {
      duration: 2,
      scrambleText: {
        text: "Tools",
      },
      scrollTrigger: {
        trigger: ".Tools",
        start: "top bottom-=100",
        toggleActions: "play none none reverse",
      }
    });
    gsap.fromTo(
      '.AboutMe',
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: 'power2.out', scrollTrigger: {
          trigger: '.AboutMe',
          start: 'top bottom-=100',
          end: 'top center',
          toggleActions: 'play none none reverse',
          markers: false
        }
      }
    );
    gsap.fromTo(
      '.my-stack',
      { opacity: 0, x: 50 },
      { opacity: 1, x: 0, duration: 1, ease: 'power2.out', scrollTrigger: {
          trigger: '.my-stack',
          start: 'top bottom-=100',
          end: 'top center',
          toggleActions: 'play none none reverse',
          markers: false
        }
      }
    );
    gsap.fromTo(
      '.Name',
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: 'power2.out', scrollTrigger: {
          trigger: '.Name',
          start: 'top bottom-=100',
          end: 'top center',
          toggleActions: 'play none none reverse',
          markers: false
        }
      }
    );
  }, []);

  return (
    <section className="relative mt-20 sm:mt-32 px-4 sm:px-8 lg:px-12" id="AboutMe">
      <h1 className="AboutMe text-3xl sm:text-4xl font-light text-[#00ffff]">About Me</h1>

      <div className="mt-8 sm:mt-10 flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-20 text-[#cdcdcd]">
        <p className="Name text-3xl sm:text-4xl font-medium">Hi, I'm Amit 👋</p>
        <div className="hidden lg:block w-px bg-[#00ffff]" />
        <p className="Name text-base sm:text-lg lg:text-xl max-w-3xl leading-relaxed">
          I'm a <span className="text-[#00ffff] font-semibold">Full Stack Developer</span> with a passion for creating 
          dynamic and responsive web applications. 
          I specialize in both front-end and back-end development, ensuring seamless user experiences and robust functionality. 
          With a strong foundation in various programming languages and frameworks, I thrive on turning complex problems into elegant solutions.
        </p>
      </div>

      <div className="mt-16 sm:mt-24">
        <h2 className="my-stack text-3xl sm:text-4xl font-light text-[#00ffff]">My Stack</h2>

        <div className="mt-8 sm:mt-10 flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-20 text-[#cdcdcd]">
          <p className="Frontend text-3xl sm:text-4xl w-42 font-medium">Frontend</p>
          <div className="hidden lg:block w-px bg-[#00ffff]" />
          <div ref={frontendStackRef} className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-8">
            <div className="frontend-item flex items-center gap-3">
              <IconBrandJavascript className="h-10 w-10 sm:h-12 sm:w-12 lg:h-14 lg:w-14 text-amber-300" />
              <span className="text-lg sm:text-xl lg:text-2xl">JavaScript</span>
            </div>
            <div className="frontend-item flex items-center gap-3">
              <IconBrandTypescript className="h-10 w-10 sm:h-12 sm:w-12 lg:h-14 lg:w-14 text-blue-500" />
              <span className="text-lg sm:text-xl lg:text-2xl">TypeScript</span>
            </div>
            <div className="frontend-item flex items-center gap-3">
              <IconBrandNextjs className="h-10 w-10 sm:h-12 sm:w-12 lg:h-14 lg:w-14 text-white" />
              <span className="text-lg sm:text-xl lg:text-2xl">Next.js</span>
            </div>
            <div className="frontend-item flex items-center gap-3">
              <IconBrandReact className="h-10 w-10 sm:h-12 sm:w-12 lg:h-14 lg:w-14 text-[#61dafb]" />
              <span className="text-lg sm:text-xl lg:text-2xl">React</span>
            </div>
            <div className="frontend-item flex items-center gap-3">
              <IconBrandTailwind className="h-10 w-10 sm:h-12 sm:w-12 lg:h-14 lg:w-14 text-sky-400" />
              <span className="text-lg sm:text-xl lg:text-2xl">Tailwind</span>
            </div>
            <div className="frontend-item flex items-center gap-3">
              <IconBrandFramerMotion className="h-10 w-10 sm:h-12 sm:w-12 lg:h-14 lg:w-14 text-[#9c257e]" />
              <span className="text-lg sm:text-xl lg:text-2xl">Framer Motion</span>
            </div>
            <div className="frontend-item flex items-center gap-3">
              <IconBrandBootstrap className="h-10 w-10 sm:h-12 sm:w-12 lg:h-14 lg:w-14 text-[#814ed3]" />
              <span className="text-lg sm:text-xl lg:text-2xl">Bootstrap</span>
            </div>
            <div className="frontend-item flex items-center gap-3">
              <IconBrandHtml5 className="h-10 w-10 sm:h-12 sm:w-12 lg:h-14 lg:w-14 text-[#ec7441]" />
              <span className="text-lg sm:text-xl lg:text-2xl">HTML</span>
            </div>
             <div className="frontend-item flex items-center gap-3">
              <IconBrandCss3 className="h-10 w-10 sm:h-12 sm:w-12 lg:h-14 lg:w-14 text-sky-400" />
              <span className="text-lg sm:text-xl lg:text-2xl">CSS</span>
            </div>

          </div>
        </div>

        
        <div className="mt-16 sm:mt-24 flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-20 text-[#cdcdcd]">
          <p className="Backend text-3xl sm:text-4xl w-42 font-medium">Backend</p>
          <div className="hidden lg:block w-px bg-[#00ffff]" />
          <div ref={backendStackRef} className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-8">
            <div className="backend-item flex items-center gap-3">
              <IconBrandNodejs className="h-10 w-10 sm:h-12 sm:w-12 lg:h-14 lg:w-14 text-amber-300" />
              <span className="text-lg sm:text-xl lg:text-2xl">Node.js</span>
            </div>
            <div className="backend-item flex items-center gap-3">
            <IconBrandFirebase className="h-10 w-10 sm:h-12 sm:w-12 lg:h-14 lg:w-14 text-[#ff9252]" />
              <span className="text-lg sm:text-xl lg:text-2xl">Firebase</span>
            </div>
            <div className="backend-item flex items-center gap-3">
            <IconBrandSupabase className="h-10 w-10 sm:h-12 sm:w-12 lg:h-14 lg:w-14 text-[#ff9252]" />
              <span className="text-lg sm:text-xl lg:text-2xl">SupaBase</span>
            </div>
            <div className="backend-item flex items-center gap-3">
              <img src="/icons8-express-js-50.png" className="h-10 w-10 sm:h-12 sm:w-12 lg:h-14 lg:w-14 bg-white rounded-lg p-2" />
              <span className="text-lg sm:text-xl lg:text-2xl">Express</span>
            </div>
            
          </div>
        </div>

        
        <div className="mt-16 sm:mt-24 flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-20 text-[#cdcdcd]">
          <p className="Database text-3xl sm:text-4xl w-42 font-medium">Database</p>
          <div className="hidden lg:block w-px bg-[#00ffff]" />
          <div ref={databaseStackRef} className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-8">
            
            <div className="database-item flex items-center gap-3">
              <IconBrandMysql className="h-10 w-10 sm:h-12 sm:w-12 lg:h-14 lg:w-14 text-[#317eaa]" />
              <span className="text-lg sm:text-xl lg:text-2xl">MySQL</span>
            </div>
            <div className="database-item flex items-center gap-3">
            <IconBrandMongodb className="h-10 w-10 sm:h-12 sm:w-12 lg:h-14 lg:w-14 text-[#2fc038]" />
              <span className="text-lg sm:text-xl lg:text-2xl">MongoDB</span>
            </div>
            <div className="database-item flex items-center gap-3">
            <IconBrandFirebase className="h-10 w-10 sm:h-12 sm:w-12 lg:h-14 lg:w-14 text-[#ff9252]" />
              <span className="text-lg sm:text-xl lg:text-2xl">Firebase</span>
            </div>
          </div>
        </div>

       
        <div className="mt-16 sm:mt-24 flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-20 text-[#cdcdcd]">
          <p className="Tools text-3xl sm:text-4xl w-42 font-medium">Tools</p>
          <div className="hidden lg:block w-px bg-[#00ffff]" />
          <div ref={toolsStackRef} className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-8">
            
            <div className="tools-item flex items-center gap-3">
              <IconBrandGit className="h-10 w-10 sm:h-12 sm:w-12 lg:h-14 lg:w-14 text-[#d49440]" />
              <span className="text-lg sm:text-xl lg:text-2xl">Git</span>
            </div>
            <div className="tools-item flex items-center gap-3">
            <IconBrandGithub className="h-10 w-10 sm:h-12 sm:w-12 lg:h-14 lg:w-14 text-[#7b7b7b]" />
              <span className="text-lg sm:text-xl lg:text-2xl">GitHub</span>
            </div>
            <div className="tools-item flex items-center gap-3">
            <IconBrandDocker className="h-10 w-10 sm:h-12 sm:w-12 lg:h-14 lg:w-14 text-[#4da1c5]" />
              <span className="text-lg sm:text-xl lg:text-2xl">Docker</span>
            </div>
            <div className="tools-item flex items-center gap-3">
            <IconBrandAws className="h-10 w-10 sm:h-12 sm:w-12 lg:h-14 lg:w-14 text-[#e19f1c]" />
              <span className="text-lg sm:text-xl lg:text-2xl">AWS</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutMe
