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
                        rotate: 360,
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
                <div className="loader ease-linear border-[1px] rounded-lg border-gray-200 w-[50vw] mb-12">
                    <div style={{ width: loadPercent }} className="bg-[#00ffff] h-2 z-[501] rounded-lg"></div>
                </div>
                <p className="text-2xl font-semibold text-gray-700">{loadPercent}</p>
            </div>
        </section>
    );
};

export default LoadingPage;