import React from 'react'
import { Leaf, Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin, Globe, ShieldCheck, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {

const socialLinks = [
    { icon: Facebook, label: 'Facebook' },
    { icon: Instagram, label: 'Instagram' },
    { icon: Twitter, label: 'Twitter' },
    { icon: Youtube, label: 'Youtube' }
  ];

  return (
<footer className="relative top-up overflow-hidden bg-[#0F172A] pt-32 text-white  ">
      <div className='relative  px-6 pb-12 lg:px-20'>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 lg:gap-8">

          {/* Brand & Mission Column */}
          <div className="lg:col-span-4 space-y-10">
            <div className="flex items-center gap-4 group cursor-pointer">
              <div className="flex h-14 w-14 items-center justify-center rounded-[1.3rem] bg-emerald-500 text-white shadow-[0_15px_30px_rgba(16,185,129,0.3)] transition-all duration-500 group-hover:rotate-6">
                <Leaf className="h-8 w-8" />
              </div>
              <div>
                <span className="text-3xl font-black tracking-tighter">Fresho</span>
                <p className="text-[10px] font-black text-emerald-400 uppercase tracking-[0.3em] mt-1 ">Freshness</p>
              </div>
            </div>

            <p className="max-w-sm text-lg font-medium leading-relaxed text-gray-400">
              Redefining the daily harvest. We bridge the gap between <span className="text-white">heritage farmers</span> and modern tables through purely organic, curated excellence.
            </p>

            <div className="flex gap-4">
              {socialLinks.map((social, idx) => (
                <Link
                  key={idx}
                  to="/"
                  aria-label={social.label}
                  className="group flex h-12 w-12 items-center justify-center rounded-2xl bg-white/5 border border-white/10 text-gray-400 hover:bg-emerald-500 hover:text-emerald-600 hover:border-emerald-500 hover:-translate-y-1.5 transition-all duration-300 shadow-sm"
                >
                  <social.icon className="h-5 w-5" />
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Navigation - Departments */}
          <div className="lg:col-span-2 space-y-8 lg:pt-4">
            <h4 className="text-[16px] font-black tracking-widest text-emerald-500">Quick Links</h4>
            <ul className="space-y-4">
              {['Fruits & Greens', 'Dairy Heritage', 'Prime Meats', 'Artisan Bakery', 'Cellar Drinks'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm font-bold text-gray-400 hover:text-emerald-600 flex items-center gap-2 group transition-colors">
                    <div className="h-1.5 w-1.5 rounded-full bg-white/3 group-hover:bg-emerald-500 transition-all" />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links - Curated By */}
          <div className="lg:col-span-2 space-y-8 lg:pt-4">
            <h4 className="text-[16px]  font-black  tracking-widest text-emerald-500">Curated By</h4>
            <ul className="space-y-4">
              {['Our Story', 'Farmer Partners', 'Ethics & Quality', 'Boutique Recipes', 'Sustainability'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm font-bold text-gray-400 hover:text-emerald-600 flex items-center gap-2 group transition-colors">
                    <div className="h-1.5 w-1.5 rounded-full bg-white/3 group-hover:bg-emerald-500 transition-all" />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Support - Concierge */}
          <div className="lg:col-span-4 space-y-8 lg:pt-4">
            <h4 className="text-[16px]  font-black  tracking-widest text-emerald-500">Support</h4>

              <div className="space-y-6">
                <div className="flex items-center gap-5 group">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-400 group-hover:bg-emerald-500 group-hover:text-emerald-600 transition-all duration-300">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-[9px] font-black uppercase tracking-widest text-gray-500">Priority Line</p>
                    <p className="text-sm font-black text-white">+1 (800) FRESH-MART</p>
                  </div>
                </div>

                <div className="flex items-center gap-5 group">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-400 group-hover:bg-emerald-500 group-hover:text-emerald-600 transition-all duration-300">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-[9px] font-black uppercase tracking-widest text-gray-500">Main Boutique</p>
                    <p className="text-sm font-black text-white">123 Artisan Blvd, Farmville CA</p>
                  </div>
                </div>

                <div className="flex items-center gap-5 group">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-400 group-hover:bg-emerald-500 group-hover:text-emerald-600 transition-all duration-300">
                    <Globe className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-[9px] font-black uppercase tracking-widest text-gray-500">Online Store</p>
                    <p className="text-sm font-black text-white">www.freshmart.grocery</p>
                  </div>
                </div>
              </div>
          </div>
        </div>
          {/* Footer Bottom Hub */}
        <div className="mt-20 pt-10 border-t border-white/10 flex flex-col lg:flex-row items-center justify-between gap-10">

          {/* Trust Badges */}

          <p className="text-xs font-semibold tracking-widest text-gray-400 text-center lg:text-right">
            © 2025 Fresho Concierge. All Rights Reserved.
          </p>


          <div className="flex flex-col items-center lg:items-end gap-3">
            <div className="flex gap-6 text-xs font-semibold  tracking-widest text-gray-400">
              <a href="#" className="hover:text-emerald-400 transition-colors">Privacy</a>
              <a href="#" className="hover:text-emerald-400 transition-colors">Terms</a>
              <a href="#" className="hover:text-emerald-400 transition-colors">Refunds</a>
            </div>

          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
