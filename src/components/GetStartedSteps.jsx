import { UserRound, Box, Rocket } from 'lucide-react';
import React from 'react';

const GetStartedSteps = () => {
    return (
        <section className="bg-[#F9FAFC] px-6 py-16 sm:py-20 lg:px-8">
            <div className="mx-auto max-w-6xl">
              
                <div className="text-center">
                    <h2 className="text-4xl font-bold tracking-tight text-[#111827] sm:text-5xl">
                        Get Started In 3 Steps
                    </h2>
                    <p className="mt-4 text-sm text-slate-500 sm:text-base">
                        Start using premium digital tools in minutes, not hours.
                    </p>
                </div>

             
                <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                    
                    <div className="relative rounded-2xl border border-slate-200 bg-white px-6 py-10 text-center shadow-sm">
                        <div className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-[#7c3aed] text-xs font-semibold text-white">
                            01
                        </div>

                        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#ede9fe]">
                            <UserRound className="h-8 w-8 text-[#7c3aed]" />
                        </div>

                        <h3 className="mt-6 text-2xl font-semibold text-[#111827]">
                            Create Account
                        </h3>
                        <p className="mt-3 text-sm leading-6 text-slate-500">
                            Sign up for free in seconds. No credit card required to get
                            started.
                        </p>
                    </div>

                   
                    <div className="relative rounded-2xl border border-slate-200 bg-white px-6 py-10 text-center shadow-sm">
                        <div className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-[#7c3aed] text-xs font-semibold text-white">
                            02
                        </div>

                        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#ede9fe]">
                            <Box className="h-8 w-8 text-[#7c3aed]" />
                        </div>

                        <h3 className="mt-6 text-2xl font-semibold text-[#111827]">
                            Choose Products
                        </h3>
                        <p className="mt-3 text-sm leading-6 text-slate-500">
                            Browse our catalog and select the tools that fit your needs.
                        </p>
                    </div>

                    
                    <div className="relative rounded-2xl border border-slate-200 bg-white px-6 py-10 text-center shadow-sm md:col-span-2 xl:col-span-1">
                        <div className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-[#7c3aed] text-xs font-semibold text-white">
                            03
                        </div>

                        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#ede9fe]">
                            <Rocket className="h-8 w-8 text-[#7c3aed]" />
                        </div>

                        <h3 className="mt-6 text-2xl font-semibold text-[#111827]">
                            Start Creating
                        </h3>
                        <p className="mt-3 text-sm leading-6 text-slate-500">
                            Download and start using your premium tools immediately.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GetStartedSteps;