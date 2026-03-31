import { X } from 'lucide-react';
import React from 'react';
import { BsYoutube } from 'react-icons/bs';
import { FaFacebook } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-[#07152d] text-white">
      <div className="mx-auto max-w-7xl px-6 py-14 sm:px-8 lg:px-12">
        {/* Top Section */}
        <div className="border-b border-solid border-gray-500/70 p-6 sm:p-8">
          <div className="grid gap-10 lg:grid-cols-[1.3fr_2fr_0.9fr]">
            
            {/* Brand */}
            <div className="max-w-sm">
              <h2 className="text-3xl font-extrabold sm:text-4xl">
                DigiTools
              </h2>
              <p className="mt-4 text-sm text-slate-300 sm:text-base leading-7">
                Premium digital tools for creators, professionals, and
                businesses. Work smarter with our suite of powerful tools.
              </p>
            </div>

            {/* Links */}
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
              
              {/* Product */}
              <div>
                <h3 className="text-base font-semibold">Product</h3>
                <ul className="mt-4 space-y-3 text-sm text-slate-300">
                  <li><a href="#" className="hover:text-white">Features</a></li>
                  <li><a href="#" className="hover:text-white">Pricing</a></li>
                  <li><a href="#" className="hover:text-white">Templates</a></li>
                  <li><a href="#" className="hover:text-white">Integrations</a></li>
                </ul>
              </div>

              {/* Company */}
              <div>
                <h3 className="text-base font-semibold">Company</h3>
                <ul className="mt-4 space-y-3 text-sm text-slate-300">
                  <li><a href="#" className="hover:text-white">About</a></li>
                  <li><a href="#" className="hover:text-white">Blog</a></li>
                  <li><a href="#" className="hover:text-white">Careers</a></li>
                  <li><a href="#" className="hover:text-white">Press</a></li>
                </ul>
              </div>

              {/* Resources */}
              <div>
                <h3 className="text-base font-semibold">Resources</h3>
                <ul className="mt-4 space-y-3 text-sm text-slate-300">
                  <li><a href="#" className="hover:text-white">Documentation</a></li>
                  <li><a href="#" className="hover:text-white">Help Center</a></li>
                  <li><a href="#" className="hover:text-white">Community</a></li>
                  <li><a href="#" className="hover:text-white">Contact</a></li>
                </ul>
              </div>

            </div>

            {/* Social */}
            <div>
              <h3 className="text-base font-semibold">Social Links</h3>
              <div className="mt-4 flex gap-3">
                <a
                  href="#"
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-slate-900 hover:scale-105 transition"
                >
                  <BsYoutube size={18} />
                </a>
                <a
                  href="#"
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-slate-900 hover:scale-105 transition"
                >
                  <FaFacebook size={18} />
                </a>
                <a
                  href="#"
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-slate-900 hover:scale-105 transition"
                >
                  <X size={18} />
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10  py-5">
          <div className="flex flex-col gap-4 text-sm text-slate-400 sm:flex-row sm:justify-between sm:items-center">
            <p>© 2026 Digitools. All rights reserved.</p>

            <div className="flex flex-wrap gap-4 sm:gap-6">
              <a href="#" className="hover:text-white">Privacy Policy</a>
              <a href="#" className="hover:text-white">Terms of Service</a>
              <a href="#" className="hover:text-white">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
    );
};

export default Footer;