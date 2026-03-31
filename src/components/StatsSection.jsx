import React from 'react';

const StatsSection = () => {
    return (
        <div>
            <section className="w-full bg-linear-to-r from-blue-700 via-purple-600 to-fuchsia-600">
                <div className="mx-auto grid max-w-6xl grid-cols-1 text-center sm:grid-cols-3">

                    <div className="flex flex-col items-center justify-center px-6 py-8 sm:min-h-37.5">
                        <h2 className="text-4xl font-extrabold text-white md:text-5xl">
                            50K+
                        </h2>
                        <p className="mt-3 text-white/80">Active Users</p>
                    </div>

                    <div className="flex flex-col items-center justify-center px-6 py-8 sm:min-h-37.5">
                        <h2 className="text-4xl font-extrabold text-white md:text-5xl">
                            200+
                        </h2>
                        <p className="mt-3 text-white/80">Premium Tools</p>
                    </div>

                    <div className="flex flex-col items-center justify-center px-6 py-8 sm:min-h-37.5">
                        <h2 className="text-4xl font-extrabold text-white md:text-5xl">
                            4.9
                        </h2>
                        <p className="mt-3 text-white/80">Rating</p>
                    </div>

                </div>
            </section>
        </div>
    );
};

export default StatsSection;