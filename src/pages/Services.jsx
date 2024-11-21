import React from 'react';
import { GlassCard } from '../components/HomeContent'; // Ensure this component is correctly imported

const Services = () => {
    const benefits = [
        {
            title: "Access to multiple markets.",
            description:
                "Tap into a variety of products to diversify your investment portfolio from one trading account.",
        },
        {
            title: "Tools to enhance your trading.",
            description:
                "The TRADE platform allows traders the ability for one-click trading, set bracket orders, and place trailing stops.",
        },
        {
            title: "Broaden your industry knowledge.",
            description:
                "Whether you're a beginner or an experienced trader, our learning resources help you to trade smarter.",
        },
    ];

    const tradeFeatures = [
        {
            title: "Practice account",
            description: "Try out all the features of the trading platform with our low-risk standard account.",
            icon: "/path-to-practice-account-icon.png", // Replace with actual path
        },
        {
            title: "Real-time insights",
            description: "Receive access to the latest market news directly from the platform.",
            icon: "/path-to-real-time-insights-icon.png",
        },
        {
            title: "Risk management",
            description: "Set stop-loss and take-profit parameters tailored to your trading strategy.",
            icon: "/path-to-risk-management-icon.png",
        },
    ];

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 mt-16">
            {/* Top Section */}
            <div className="flex flex-col lg:flex-row justify-center gap-12">
                <div className="lg:w-1/2">
                    <h2 className="text-3xl font-bold text-gray-200">Self-directed offerings.</h2>
                    <p className="mt-4 text-gray-400">
                        Our brokerage services provide you with access to all the necessary resources. Access a range
                        of financial products through a single account that includes trading platforms, market analysis,
                        and more.
                    </p>
                    <ul className="mt-6 space-y-4">
                        {benefits.map((benefit, index) => (
                            <li key={index} className="flex items-start">
                                <span className="mr-4 text-yellow-500 text-xl">✔</span>
                                <div>
                                    <h4 className="text-lg font-semibold text-gray-200">{benefit.title}</h4>
                                    <p className="text-gray-400">{benefit.description}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="lg:w-1/2">
                    <img
                        src="REF.png" // Replace with the image path
                        alt="Self Directed Offerings"
                        className="scale-110"
                    />
                </div>
            </div>

            {/* Features Section */}
            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
                {tradeFeatures.map((feature, index) => (
                    <GlassCard key={index} className="p-6">
                        <div className="flex flex-col items-center text-center">
                            {/* <img
                                src={feature.icon}
                                alt={feature.title}
                                className="w-16 h-16 mb-4"
                            /> */}
                            <h3 className="text-lg font-semibold text-gray-200">{feature.title}</h3>
                            <p className="mt-2 text-gray-400">{feature.description}</p>
                        </div>
                    </GlassCard>
                ))}
            </div>
        </div>
    );
};

export default Services;
