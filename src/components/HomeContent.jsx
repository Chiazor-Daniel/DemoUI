import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import TradeView from './TradeView';

gsap.registerPlugin(ScrollTrigger);

const PLATFORM_DATA = {
    hero: {
        title: 'Demo Trade',
        subtitle: 'Smart investing. Made easy.',
        description: 'Access investment funds, exchange-traded funds (ETFs), and international products in investing portfolios and strategies.',
        cta: {
            title: 'Apply in minutes.',
            subtitle: 'Start trading today.',
            description: 'Gain access to the fastest execution speeds and no commissions.',
            buttonText: 'Start Now'
        }
    },
    hero2: {
        title: 'Discover our Range of Account Types',
        img: "https://img.pikbest.com/ai/illus_our/20230427/34fa4caf0c808840359b76925e74dd49.jpg!bw700",
        description: 'We have the ideal account types for all levels of experience, whether you are a novice or a seasoned trader.',
        cta: {
            title: 'Apply in minutes.',
            subtitle: 'Start trading today.',
            description: 'Gain access to the fastest execution speeds and no commissions.',
            buttonText: 'Start Now'
        }
    },
    instruments: [
        { title: 'Global Markets', img: 'coins.png', description: 'Trade major global currency pairs' },
        { title: 'Stock Indices', img: 'business-analyst.png', description: 'Access world\'s leading indices' },
        { title: 'Raw Materials', img: 'money-back.png', description: 'Trade commodities and resources' },
        { title: 'Digital Assets', img: 'magnet.png', description: 'Cryptocurrency market access' },
    ],
    features: [
        { title: "Narrow Spreads", description: "Obtain competitive spreads on major currency pairs.", img: "profit.png" },
        { title: "Regulated", description: "Authorized and regulated by the FCA.", img: "regulation.png" },
        { title: "Multiple Products", description: "Access to a variety of financial instruments from one account.", img: "problem-solved.png" },
        { title: "Service", description: "Prompt and courteous service with attention to detail.", img: "parachute.png" }
    ]
};

const useAnimateOnScroll = (ref, config = {}) => {
    useEffect(() => {
        const element = ref.current;
        const defaults = {
            opacity: [0, 1],
            y: [100, 0],
            duration: 1,
            ease: 'power3.out'
        };
        const { opacity, y, duration, ease } = { ...defaults, ...config };

        gsap.fromTo(element,
            { opacity: opacity[0], y: y[0] },
            {
                opacity: opacity[1],
                y: y[1],
                duration,
                ease,
                scrollTrigger: {
                    trigger: element,
                    start: 'top 80%',
                    end: 'bottom 20%',
                    toggleActions: 'play none none reverse'
                }
            }
        );
    }, []);
};

export const GlassCard = ({ children, className = '' }) => (
    <div className={`
        relative overflow-hidden
        bg-gradient-to-br from-white/10 to-white/5
        backdrop-blur-lg
        border border-white/10
        rounded-2xl
        p-4 md:p-8
        hover:bg-white/10
        transition-all duration-500
        shadow-lg
        ${className}
    `}>
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-violet-500/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl" />
        <div className="relative z-10">
            {children}
        </div>
    </div>
);

const HeroSection = ({ data }) => {
    const contentRef = useRef(null);
    useAnimateOnScroll(contentRef, { x: [-100, 0] });

    return (
        <div className="min-h-[90vh] flex items-center px-4 sm:px-6 lg:px-8">
            <div ref={contentRef} className="grid lg:grid-cols-2 gap-6 md:gap-8 w-full">
                <div className="space-y-6">
                    <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-violet-300 to-blue-300 bg-clip-text text-transparent">
                        {data.title}
                    </h1>
                    <p className="text-lg md:text-2xl text-gray-200">{data.subtitle}</p>
                    <p className="text-gray-400 text-sm md:text-lg">{data.description}</p>
                    <button className="
                        bg-gradient-to-r from-violet-600 to-blue-600
                        hover:from-violet-700 hover:to-blue-700
                        text-sm md:text-base
                        px-4 md:px-8 py-2 md:py-3
                        rounded-lg
                        transition-all duration-300
                        shadow-lg shadow-violet-500/25
                    ">
                        {data.cta.buttonText}
                    </button>
                </div>
                {data.img ? (
                    <img src={data.img} className="rounded-xl scale-100 md:scale-105" />
                ) : (
                    <GlassCard className="lg:p-12">
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">{data.cta.title}</h2>
                        <p className="text-lg md:text-xl text-gray-300 mb-4">{data.cta.subtitle}</p>
                        <p className="text-sm md:text-base text-gray-400">{data.cta.description}</p>
                    </GlassCard>
                )}
            </div>
        </div>
    );
};

const FeatureCard = ({ title, description, icon, img }) => (
    <GlassCard className="group">
        {icon ? (
            <div className="
                text-3xl md:text-4xl mb-4 md:mb-6
                bg-gradient-to-br from-violet-400/20 to-blue-400/20
                w-fit p-3 md:p-4
                rounded-xl
                group-hover:from-violet-400/30 group-hover:to-blue-400/30
                transition-all duration-500
            ">
                {icon}
            </div>
        ) : (
            <img src={img} className="w-16 md:w-[150px]" />
        )}
        <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3 text-white">{title}</h3>
        <p className="text-gray-400 text-sm md:text-base">{description}</p>
    </GlassCard>
);

const GridSection = ({ items, title, subtitle, cols = 2 }) => {
    const sectionRef = useRef(null);
    useAnimateOnScroll(sectionRef);

    return (
        <div ref={sectionRef} className="py-12 md:py-24">
            <div className="text-center mb-10 md:mb-16">
                <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-violet-300 to-blue-300 bg-clip-text text-transparent mb-4">
                    {title}
                </h2>
                {subtitle && <p className="text-gray-400 text-sm md:text-xl">{subtitle}</p>}
            </div>
            <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-${cols} gap-6 md:gap-8`}>
                {items.map((item, index) => (
                    <FeatureCard key={index} {...item} />
                ))}
            </div>
        </div>
    );
};

const HomeContent = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="fixed inset-0 z-0">
                    <div className="absolute top-20 left-20 w-48 md:w-96 h-48 md:h-96 bg-violet-500/20 rounded-full blur-3xl" />
                    <div className="absolute bottom-20 right-20 w-48 md:w-96 h-48 md:h-96 bg-blue-500/20 rounded-full blur-3xl" />
                </div>
                <div className="relative z-10">
                    <HeroSection data={PLATFORM_DATA.hero} />
                    <div className="h-[80vh] flex flex-col items-center">
                        <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-violet-300 to-blue-300 bg-clip-text text-transparent mb-6 md:mb-10">
                            Trading Charts
                        </h2>
                        <div className="w-full h-[400px] md:h-[650px]">
                            <TradeView />
                        </div>
                    </div>
                    <GridSection items={PLATFORM_DATA.features} title="Why Choose Us?" subtitle="Explore our benefits" />
                    <HeroSection data={PLATFORM_DATA.hero2} />
                    <GridSection items={PLATFORM_DATA.instruments} title="Market Products" cols={4} />
                </div>
            </div>
        </div>
    );
};

export default HomeContent;
