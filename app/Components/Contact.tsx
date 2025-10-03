import { IconBrandGithub, IconBrandGithubFilled, IconBrandGmail, IconBrandInstagramFilled, IconBrandLinkedinFilled, IconBrandWhatsappFilled, IconBrandX, IconBrandXFilled, IconMail } from '@tabler/icons-react'
import { Icon } from 'lucide-react'
import React, { useRef, useState, useEffect } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrambleTextPlugin } from 'gsap/ScrambleTextPlugin'

const Contact = () => {
  const [result, setResult] = useState("");
  const [showToast, setShowToast] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const toastRef = useRef(null);
  const socialsRef = useRef(null);
  const formRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger, ScrambleTextPlugin);
  
  useEffect(() => {
    if (result) {
      setShowToast(true);
      const timer = setTimeout(() => {
        setShowToast(false);
        setResult("");
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [result]);

  useGSAP(() => {
    // Title animations with scramble effect
    const titles = [".Get-in-touch", ".my-socials", ".reach-out"];
    titles.forEach(title => {
      gsap.to(title, {
        duration: 2,
        scrambleText: {
          text: title === ".Get-in-touch" ? "Get in Touch" : 
                title === ".my-socials" ? "My Socials" : 
                "Or Reach Out Directly",
        },
        scrollTrigger: {
          trigger: title,
          start: "top bottom-=100",
          toggleActions: "play none none reverse",
        }
      });
    });
    
    gsap.fromTo(".description", {
      opacity: 0,
      y: 30
    }, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".description",
        start: "top bottom-=100",
        toggleActions: "play none none reverse"
      }
    });

    // Social icons staggered animation
    gsap.fromTo(".social-item", {
      opacity: 0,
      y: 30
    }, {
      opacity: 1,
      y: 0,
      stagger: 0.1,
      duration: 0.5,
      ease: "power2.out",
      scrollTrigger: {
        trigger: socialsRef.current,
        start: "top bottom-=100",
        toggleActions: "play none none reverse"
      }
    });

    // Form elements staggered animation
    gsap.fromTo(".form-element", {
      opacity: 0,
      x: -30
    }, {
      opacity: 1,
      x: 0,
      stagger: 0.2,
      duration: 0.7,
      ease: "power2.out",
      scrollTrigger: {
        trigger: formRef.current,
        start: "top bottom-=100",
        toggleActions: "play none none reverse"
      }
    });

    // Updated toast animation
    if (showToast) {
      gsap.fromTo(
        toastRef.current,
        {
          opacity: 0,
          y: -20,
          scale: 0.8
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.5,
          ease: "back.out(1.7)"
        }
      );
    }
  }, [showToast]);
  
  const key = "5d3fb542-f77c-42f5-8962-657f588044f3"; 

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    setResult("Sending....");

    const formData = new FormData(event.target as HTMLFormElement);
    
    formData.append("access_key", key);
    
    formData.append("from_name", formData.get("name") as string);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await res.json();

      // Delay showing the result
      setTimeout(() => {
        if (data.success) {
          setResult("Form Submitted Successfully");
          (event.target as HTMLFormElement).reset();
        } else {
          setResult(data.message || "Something went wrong!");
        }
        setIsLoading(false);
      }, 2000);

    } catch (error) {
      // Delay showing the error
      setTimeout(() => {
        console.error("Error:", error);
        setResult("Failed to submit form. Please try again.");
        setIsLoading(false);
      }, 2000);
    }
  };

  return (
    <div className='mt-16 sm:mt-24 w-full px-4 sm:px-8 lg:px-12 flex flex-col items-center' id='Contact'>
        <h1 className='Get-in-touch text-3xl sm:text-4xl mb-8 sm:mb-12 font-light text-[#00ffff] text-center'>Get in Touch</h1>
        
        <p className='description text-[#cdcdcd] text-lg sm:text-xl lg:text-2xl w-full sm:w-[80vw] lg:w-[60vw] text-center'>
          I'm currently open to new opportunities and collaborations. Whether you have a project in mind, need assistance with web development, or just want to say hello, feel free to reach out!
        </p>

        <h1 className='my-socials text-3xl sm:text-4xl mt-12 sm:mt-16 font-light text-[#00ffff]'>My Socials</h1>
        
        <div ref={socialsRef} className='flex flex-wrap justify-center gap-4 sm:gap-6 lg:gap-8 mt-8 sm:mt-12 text-base sm:text-xl lg:text-2xl text-[#cdcdcd]'>
          <a className='social-item flex items-center' href='https://github.com/Senpai-489'>
            <IconBrandGithubFilled className='h-8 w-8 sm:h-10 sm:w-10 hover:opacity-70 ease-in-out duration-300 cursor-pointer' />
            <p className='ml-2'>Github</p>
          </a>
          <a className='social-item flex items-center' href='https://linkedin.com/in/Amitsingh489'>
            <IconBrandLinkedinFilled className='text-sky-600 h-8 w-8 sm:h-10 sm:w-10 hover:opacity-70 ease-in-out duration-300 cursor-pointer' />
            <p className='ml-2'>LinkedIn</p>
          </a>
          <a className='social-item flex items-center' href='mailto:amitfr489@gmail.com'>
            <IconMail className='text-[#f4fad1] h-8 w-8 sm:h-10 sm:w-10 hover:opacity-70 ease-in-out duration-300 cursor-pointer' />
            <p className='ml-2'>Email</p>
          </a>
          <a className='social-item flex items-center' href='https://www.instagram.com/clown_.fr_/'>
            <IconBrandInstagramFilled className='text-[#e61b91] h-8 w-8 sm:h-10 sm:w-10 hover:opacity-70 ease-in-out duration-300 cursor-pointer' />
            <p className='ml-2'>Instagram</p>
          </a>
          <a className='social-item flex items-center' href='https://wa.me/7627023295'>
            <IconBrandWhatsappFilled className='text-[#12b435] h-8 w-8 sm:h-10 sm:w-10 hover:opacity-70 ease-in-out duration-300 cursor-pointer' />
            <p className='ml-2'>WhatsApp</p>
          </a>
          <a className='social-item flex items-center' href='https://x.com/cl0wn_fr'>
            <IconBrandX className='h-8 w-8 sm:h-10 sm:w-10 hover:opacity-70 ease-in-out duration-300 cursor-pointer' />
            <p className='ml-2'>X</p>
          </a>
        </div>

        <h1 className='reach-out text-3xl sm:text-4xl mt-12 sm:mt-16 font-light text-[#00ffff]'>Or Reach Out Directly</h1>
        
        <form onSubmit={onSubmit} ref={formRef} className='relative flex flex-col gap-4 sm:gap-6 mt-8 sm:mt-12 w-full sm:w-[80vw] lg:w-[60vw] px-4 sm:px-0'>
          <input 
            name="name"
            type='text' 
            placeholder='Your Name' 
            required
            className='form-element bg-[#1e1e1e] text-[#cdcdcd] px-4 py-2 sm:py-3 rounded-lg border border-[#00ffff] focus:outline-none focus:ring-2 focus:ring-[#00ffff]' 
          />
          <input 
            name="email"
            type='email' 
            placeholder='Your Email'
            required 
            className='form-element bg-[#1e1e1e] text-[#cdcdcd] px-4 py-2 sm:py-3 rounded-lg border border-[#00ffff] focus:outline-none focus:ring-2 focus:ring-[#00ffff]' 
          />
          <textarea 
            name="message"
            placeholder='Your Message'
            required 
            className='form-element bg-[#1e1e1e] text-[#cdcdcd] px-4 py-2 sm:py-3 rounded-lg border border-[#00ffff] focus:outline-none focus:ring-2 focus:ring-[#00ffff]' 
            rows={5}
          ></textarea>
          <div className="flex flex-col gap-2">
            <button 
              type='submit' 
              disabled={isLoading}
              className='form-element bg-[#00ffff] text-black px-4 py-2 sm:py-3 rounded-lg text-base sm:text-lg font-semibold hover:opacity-70 ease-in-out duration-300 w-fit disabled:opacity-50 disabled:cursor-not-allowed'
            >
              {isLoading ? 'Sending...' : 'Send Message'}
            </button>
            
            {showToast && (
              <div
                ref={toastRef}
                className={`fixed bottom-4 right-4 px-6 py-3 rounded-lg shadow-lg ${
                  result.includes("Success")
                    ? "bg-[#1a472a] text-green-400"
                    : "bg-[#4a1515] text-red-400"
                } flex items-center gap-2 z-50`}
              >
                <span className={`text-2xl ${
                  result.includes("Success") ? "text-green-400" : "text-red-400"
                }`}>
                  {result.includes("Success") ? "✓" : "×"}
                </span>
                <p className="text-sm font-medium">
                  {result}
                </p>
              </div>
            )}
          </div>
        </form>
    </div>
  )
}

export default Contact