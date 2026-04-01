import React from 'react';

const OptSection = () => {
    return (
        <section className="w-full bg-linear-to-r from-[#5b2df5] to-[#c300ff] py-20 sm:py-24">
            <div className="mx-auto flex max-w-4xl flex-col items-center px-6 text-center">
                <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
                    Ready To Transform Your Workflow?
                </h2>

                <p className="mt-4 max-w-2xl text-sm leading-6 text-white/80 sm:text-base">
                    Join thousands of professionals who are already using Digitools to
                    work smarter. <br /> Start your free trial today.
                </p>

                <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row">
                    <button className="rounded-full bg-white px-6 py-3 text-sm font-medium text-[#5b2df5] transition hover:scale-105">
                        Explore Products
                    </button>

                    <button className="rounded-full border border-white/70 px-6 py-3 text-sm font-medium text-white transition hover:bg-white/10">
                        View Pricing
                    </button>
                </div>

                <p className="mt-6 text-xs text-white/70 sm:text-sm">
                    14-day free trial • No credit card required • Cancel anytime
                </p>
            </div>
        </section>
    );
};

export default OptSection;