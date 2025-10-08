import React from 'react';
import gsap from 'gsap';

const LoadingPage = () => {
    const [loadPercent, setLoadPercent] = React.useState('0%');
    const sectionRef = React.useRef<HTMLElement>(null);

    React.useEffect(() => {
        let percent = 0;
        const interval = setInterval(() => {
            percent += 1;
            setLoadPercent(`${percent}%`);
            if (percent >= 100) {
                clearInterval(interval);
                if (sectionRef.current) {
                    const loader = sectionRef.current.querySelector('.loader');
                    gsap.to(loader, {
                       
                        duration: 1,
                        ease: 'power2.out',
                        onComplete: () => {
                            gsap.to(sectionRef.current, {
                                y: '-100%',
                                duration: 1,
                                ease: 'power2.inOut',
                            });
                        },
                    });
                }
            }
        }, 10);

        return () => clearInterval(interval);
    }, []);

    return (
        <section
            ref={sectionRef}
            className="h-[100vh] w-[100vw] fixed z-[500] overflow-clip bg-[#111111]"
            aria-label="Loading Page"
        >
            <div className="flex flex-col justify-center items-center h-full w-full gap-4">
                <div className="loader h-24 w-24 border-4 border-t-4 drop-shadow-[0_0_5px_#00ffff] border-gray-300 rounded-full animate-spin">
                    <div className="h-12 w-12 border-4 border-t-4 border-gray-700 rounded-full animate-spin-slow">
                        {/* <div className="h-2 bg-[#00ffff] drop-shadow-[0_0_5px_#00ffff] w-[6px]" ></div> */}
                    </div>
                </div>

                <p className="text-2xl font-semibold text-gray-700">{loadPercent}</p>
            </div>
        </section>
    );
};

export default LoadingPage;