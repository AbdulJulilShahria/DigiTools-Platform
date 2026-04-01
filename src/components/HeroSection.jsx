import React from 'react';
import heroImage from '/banner.png'
import { CiPlay1 } from 'react-icons/ci';
import { FaStar } from 'react-icons/fa';

const HeroSection = () => {
    return (

        <section className="w-full bg-[#f5f5f5] px-4 py-10 sm:px-6 sm:py-12 md:px-10 md:py-16 lg:px-20 xl:px-24">
            <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-12 lg:gap-16">
                <div className="order-2 text-center md:order-1 md:text-left">
                    <span className="inline-flex items-center rounded-full bg-purple-100 px-3 py-1 text-[10px] font-medium text-purple-600 sm:px-4 sm:text-xs">
                        <FaStar className='mr-2' /> New - AI Powered Tools Available
                    </span>

                    <h1 className="mt-4 text-3xl font-extrabold leading-tight text-gray-800 sm:mt-5 sm:text-4xl md:text-5xl lg:text-6xl">
                        Supercharge Your
                        <br className="hidden sm:block" />
                        <span className="sm:ml-0"> Digital Workflow</span>
                    </h1>

                    <p className="mx-auto mt-4 max-w-md text-sm leading-6 text-gray-500 sm:text-base md:mx-0 md:max-w-lg">
                        Access premium AI tools, design assets, templates, and productivity
                        software—all in one place. Start creating better today.
                    </p>

                    <div className="mt-6 flex flex-col items-center gap-3 sm:mt-8 sm:flex-row sm:justify-center sm:gap-4 md:justify-start">
                        <button className="w-full rounded-full bg-purple-600 px-6 py-3 text-sm font-medium text-white transition hover:scale-105 hover:bg-purple-800 sm:w-auto cursor-pointer">
                            Explore Products
                        </button>

                        <button className="w-full rounded-full border border-purple-500 px-6 py-3 text-sm font-medium text-purple-600 transition hover:scale-105 hover:bg-purple-300 sm:w-auto flex items-center gap-1 cursor-pointer">
                            <CiPlay1 /> Watch Demo
                        </button>
                    </div>
                </div>
                <div className="order-1 w-full md:order-2">
                    <div className="relative w-full h-75 sm:h-100 md:h-full overflow-hidden">
                        <img
                            src={heroImage}
                            alt="Digital workflow"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-white/10" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HeroSection;

