import { Check  } from 'lucide-react';
import React from 'react';

const PricingSection = () => {
    return (
        <section className="bg-[#f5f6f8] px-6 py-16 sm:py-20 lg:px-8">
            <div className="mx-auto max-w-6xl">
                
                <div className="text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-[#111827] sm:text-4xl md:text-5xl">
                        Simple, Transparent Pricing
                    </h2>
                    <p className="mt-4 text-sm text-slate-500 sm:text-base">
                        Choose the plan that fits your needs. Upgrade or downgrade anytime.
                    </p>
                </div>

                
                <div className="mt-12 grid gap-6 lg:grid-cols-3 ">
                    
                    <div className="transition hover:scale-105 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                        <h3 className="text-2xl font-semibold text-slate-800">Starter</h3>
                        <p className="mt-2 text-sm text-slate-500">
                            Perfect for getting started
                        </p>

                        <div className="mt-6 flex items-end">
                            <span className="text-4xl font-bold text-slate-900">$0</span>
                            <span className="mb-1 ml-1 text-base text-slate-500">/Month</span>
                        </div>

                        <ul className="mt-6 space-y-3">
                            <li className="flex items-start gap-2 text-sm text-slate-600">
                                <Check className="mt-0.5 h-4 w-4 text-green-500" />
                                <span>Access to 10 free tools</span>
                            </li>
                            <li className="flex items-start gap-2 text-sm text-slate-600">
                                <Check className="mt-0.5 h-4 w-4 text-green-500" />
                                <span>Basic templates</span>
                            </li>
                            <li className="flex items-start gap-2 text-sm text-slate-600">
                                <Check className="mt-0.5 h-4 w-4 text-green-500" />
                                <span>Community support</span>
                            </li>
                            <li className="flex items-start gap-2 text-sm text-slate-600">
                                <Check className="mt-0.5 h-4 w-4 text-green-500" />
                                <span>1 project per month</span>
                            </li>
                        </ul>

                        <button className="mt-8 w-full rounded-full bg-linear-to-r from-[#5b2df5] to-[#b91cff] px-5 py-3 text-sm font-semibold text-white transition hover:opacity-70 cursor-pointer">
                            Get Started Free
                        </button>
                    </div>

                   
                    <div className="transition hover:scale-105 relative rounded-2xl bg-linear-to-b from-[#6c2cff] to-[#b11cff] p-6 text-white shadow-lg">
                        <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#f4c542] px-3 py-1 text-xs font-medium text-slate-900">
                            Most Popular
                        </div>

                        <h3 className="text-2xl font-semibold">Pro</h3>
                        <p className="mt-2 text-sm text-white/80">Best for professionals</p>

                        <div className="mt-6 flex items-end">
                            <span className="text-4xl font-bold">$29</span>
                            <span className="mb-1 ml-1 text-base text-white/80">/Month</span>
                        </div>

                        <ul className="mt-6 space-y-3">
                            <li className="flex items-start gap-2 text-sm text-white/90">
                                <Check className="mt-0.5 h-4 w-4 text-white" />
                                <span>Access to all premium tools</span>
                            </li>
                            <li className="flex items-start gap-2 text-sm text-white/90">
                                <Check className="mt-0.5 h-4 w-4 text-white" />
                                <span>Unlimited templates</span>
                            </li>
                            <li className="flex items-start gap-2 text-sm text-white/90">
                                <Check className="mt-0.5 h-4 w-4 text-white" />
                                <span>Priority support</span>
                            </li>
                            <li className="flex items-start gap-2 text-sm text-white/90">
                                <Check className="mt-0.5 h-4 w-4 text-white" />
                                <span>Unlimited projects</span>
                            </li>
                            <li className="flex items-start gap-2 text-sm text-white/90">
                                <Check className="mt-0.5 h-4 w-4 text-white" />
                                <span>Cloud sync</span>
                            </li>
                            <li className="flex items-start gap-2 text-sm text-white/90">
                                <Check className="mt-0.5 h-4 w-4 text-white" />
                                <span>Advanced analytics</span>
                            </li>
                        </ul>

                        <button className="mt-8 w-full rounded-full bg-white px-5 py-3 text-sm font-semibold text-[#6c2cff] transition hover:bg-white/70 cursor-pointer">
                            Start Pro Trial
                        </button>
                    </div>

                   
                    <div className="transition hover:scale-105 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                        <h3 className="text-2xl font-semibold text-slate-800">Enterprise</h3>
                        <p className="mt-2 text-sm text-slate-500">
                            For teams and businesses
                        </p>

                        <div className="mt-6 flex items-end">
                            <span className="text-4xl font-bold text-slate-900">$99</span>
                            <span className="mb-1 ml-1 text-base text-slate-500">/Month</span>
                        </div>

                        <ul className="mt-6 space-y-3">
                            <li className="flex items-start gap-2 text-sm text-slate-600">
                                <Check className="mt-0.5 h-4 w-4 text-green-500" />
                                <span>Everything in Pro</span>
                            </li>
                            <li className="flex items-start gap-2 text-sm text-slate-600">
                                <Check className="mt-0.5 h-4 w-4 text-green-500" />
                                <span>Team collaboration</span>
                            </li>
                            <li className="flex items-start gap-2 text-sm text-slate-600">
                                <Check className="mt-0.5 h-4 w-4 text-green-500" />
                                <span>Custom integrations</span>
                            </li>
                            <li className="flex items-start gap-2 text-sm text-slate-600">
                                <Check className="mt-0.5 h-4 w-4 text-green-500" />
                                <span>Dedicated support</span>
                            </li>
                            <li className="flex items-start gap-2 text-sm text-slate-600">
                                <Check className="mt-0.5 h-4 w-4 text-green-500" />
                                <span>SLA guarantee</span>
                            </li>
                            <li className="flex items-start gap-2 text-sm text-slate-600">
                                <Check className="mt-0.5 h-4 w-4 text-green-500" />
                                <span>Custom branding</span>
                            </li>
                        </ul>

                        <button className="mt-8 w-full rounded-full bg-linear-to-r from-[#5b2df5] to-[#b91cff] px-5 py-3 text-sm font-semibold text-white transition hover:opacity-70 cursor-pointer">
                            Contact Sales
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PricingSection;