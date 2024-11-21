import React from 'react';
import { GlassCard } from '../components/HomeContent';

const data = {
    title: "Popular Instruments to Trade",
    categories: ["Forex", "Indices", "Commodities", "Cryptocurrencies", "Precious Metals"],
    hero: {
        title: "Trade Indices.",
        description: "Add new investments to your portfolio to change it. Diversified trading platform.",
        imageUrl: "https://thumbs.dreamstime.com/b/drilling-rig-stock-market-chart-candlesticks-263676132.jpg", // Replace with actual image URL
    },
    features: [
        {
            title: "What is Indices Trading?",
            description: "Indices are used to track how groups of stocks are performing in a unified manner and can be traded as a CFD instrument.",
        },
        {
            title: "Why trade with Opti Trade Broker?",
            description: "Tap into our pool of liquidity to access true market depth, combined with our enhanced trading technology to provide you with an optimal trading experience.",
        },
        {
            title: "Ways to trade with Opti Trade Broker?",
            description: "Obtain an account to practice trading in the financial market by utilizing the software indicators and tools.",
        },
    ],
    steps: [
        "Access real-time data and charts.",
        "Trade from multiple financial instruments.",
        "Place strategy orders on the TRADE Platform.",
        "Practice your trading prior to going live.",
    ],
};

const TradePage = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 mt-16 text-white">
            {/* Background effects */}
            <div className="fixed inset-0 z-0">
                <div className="absolute top-20 left-20 w-96 h-96 bg-violet-500/20 rounded-full blur-3xl" />
                <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
            </div>
            <h1 className="text-6xl font-bold bg-gradient-to-r from-violet-300 to-blue-300 bg-clip-text text-transparent text-center">{data.title}</h1>

            <div className="flex justify-center space-x-6 text-gray-400 mt-8">
                {data.categories.map((category, index) => (
                    <span
                        key={index}
                        className={`cursor-pointer ${category === "Indices" ? "text-gray-800 font-semibold underline" : ""
                            }`}
                    >
                        {category}
                    </span>
                ))}
            </div>

            <div className="mt-8 flex flex-col lg:flex-row items-center  p-6 rounded-lg shadow-lg">
                <div className="lg:w-1/2 text-center lg:text-left">
                    <h2 className="text-2xl font-bold text-gray-400">{data.hero.title}</h2>
                    <p className="mt-2 text-gray-200">{data.hero.description}</p>
                </div>
                <div className="lg:w-1/2 mt-4 lg:mt-0">
                    <img src={data.hero.imageUrl} alt="Trade Indices" className="w-full rounded-lg" />
                </div>
            </div>

            <div className="mt-10 grid lg:grid-cols-3 gap-6">
                {data.features.map((feature, index) => (
                    <div key={index} className="p-6">
                        <GlassCard>

                        <h3 className="text-lg font-bold text-gray-200">{feature.title}</h3>
                        <p className="mt-2 text-gray-400">{feature.description}</p>
                        </GlassCard>
                    </div>
                ))}
            </div>

            <div className="mt-6">
                <GlassCard>
                    <h3 className="text-2xl font-bold text-gray-200">How to trade indices.</h3>
                    <ul className="mt-4 space-y-2">
                        {data.steps.map((step, index) => (
                            <li key={index} className="flex items-start">
                                <span className="mr-2 text-yellow-500">●</span>
                                <p className="text-gray-200">{step}</p>
                            </li>
                        ))}
                    </ul>
                </GlassCard>
            </div>


           
        </div>
    );
};

export default TradePage;
