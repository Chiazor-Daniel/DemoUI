import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const InstrumentCard = ({ title, description, icon }) => (
    <div className="
        min-w-[300px] lg:min-w-[400px]
        bg-gradient-to-br from-white/10 to-white/5
        backdrop-blur-lg
        border border-white/10
        rounded-2xl
        p-6
        hover:bg-white/10
        transition-all duration-500
        shadow-lg
        group
    ">
        <div className="
            text-4xl mb-6
            bg-gradient-to-br from-violet-400/20 to-blue-400/20
            w-fit p-4
            rounded-xl
            group-hover:from-violet-400/30 group-hover:to-blue-400/30
            transition-all duration-500
        ">
            {icon}
        </div>
        <h3 className="text-xl font-semibold mb-3 text-white">{title}</h3>
        <p className="text-gray-400">{description}</p>
    </div>
);

const InstrumentsSection = ({ items, title, subtitle }) => {
    const scrollContainerRef = useRef(null);

    const scroll = (direction) => {
        const container = scrollContainerRef.current;
        const scrollAmount = 400; // Adjust based on card width
        const targetScroll = container.scrollLeft + (direction === 'left' ? -scrollAmount : scrollAmount);
        container.scrollTo({
            left: targetScroll,
            behavior: 'smooth'
        });
    };

    return (
        <div className="py-24 relative">
            <div className="text-center mb-16">
                <h2 className="text-4xl font-bold bg-gradient-to-r from-violet-300 to-blue-300 bg-clip-text text-transparent mb-4">
                    {title}
                </h2>
                {subtitle && <p className="text-gray-400 text-xl">{subtitle}</p>}
            </div>

            {/* Mobile: Vertical Stack */}
            <div className="lg:hidden space-y-6 px-4">
                {items.map((item, index) => (
                    <InstrumentCard key={index} {...item} />
                ))}
            </div>

            {/* Desktop: Horizontal Scroll */}
            <div className="hidden lg:block relative">
                {/* Scroll Buttons */}
                <button 
                    onClick={() => scroll('left')}
                    className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 z-10
                        bg-white/10 hover:bg-white/20 
                        rounded-full p-2
                        backdrop-blur-lg
                        transition-all duration-300"
                >
                    <ChevronLeft className="w-6 h-6 text-white" />
                </button>
                <button 
                    onClick={() => scroll('right')}
                    className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 z-10
                        bg-white/10 hover:bg-white/20 
                        rounded-full p-2
                        backdrop-blur-lg
                        transition-all duration-300"
                >
                    <ChevronRight className="w-6 h-6 text-white" />
                </button>

                {/* Horizontal Scroll Container */}
                <div 
                    ref={scrollContainerRef}
                    className="
                        flex overflow-x-auto scrollbar-hide
                        gap-6 px-4
                        snap-x snap-mandatory
                        scroll-smooth
                    "
                    style={{
                        maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
                        WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)'
                    }}
                >
                    {items.map((item, index) => (
                        <div key={index} className="snap-center">
                            <InstrumentCard {...item} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default InstrumentsSection;