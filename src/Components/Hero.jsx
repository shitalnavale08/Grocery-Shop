import React from 'react';
import { ArrowRight, Star, Truck, ShieldCheck, Leaf, Zap } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-emerald-950  p-1">
      
      <div className="absolute top-0 right-0 -mr-20 -mt-20 h-96 w-96 rounded-full bg-emerald-500/20 blur-[100px]" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 h-96 w-96 rounded-full bg-lime-500/10 blur-[100px]" />

      <div className="relative overflow-hidden rounded-[2.4rem] bg-emerald-900/40  shadow-2xl">
        
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1610348725531-843dff563e2c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
            alt="Fresh veggies" 
            className="h-full w-full object-cover opacity-30 mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-linear-to-r from-emerald-950 via-emerald-950/70 to-transparent lg:to-emerald-950/20" />
        </div>


        <div className="relative grid items-center gap-12 px-6 py-10  lg:grid-cols-2 lg:px-20 ">

          <div className="max-w-xl">
            <div className="reveal-1 mb-6 inline-flex items-center rounded-full bg-emerald-500/20 border border-emerald-400/30 px-4 py-2 backdrop-blur-md">
              <Zap className="mr-2 h-4 w-4 text-yellow-400" fill="currentColor" />
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-50">Hot Deals</span>
            </div>
            
            <h1 className="reveal-1 mb-6 text-5xl font-extrabold tracking-tight text-white sm:text-6xl xl:text-7xl leading-[1.1]">
              Freshness <br/>
              <span className="bg-linear-to-r from-emerald-300 to-lime-300 bg-clip-text text-transparent">
                At Your Door.
              </span>
            </h1>
            
            <p className="reveal-2 mb-10 text-lg leading-relaxed text-emerald-100/80 md:text-xl">
              Skip the lines. We source directly from local farmers to bring 
              the freshest organic produce straight to your kitchen in minutes.
            </p>

            <div className="reveal-3 flex flex-wrap gap-4">
              <button className="relative group overflow-hidden flex items-center justify-center rounded-full bg-emerald-500 px-10 py-4 text-lg font-bold text-white shadow-[0_10px_20px_rgba(16,185,129,0.3)] hover:bg-emerald-400 hover:shadow-emerald-500/40 transition-all active:scale-95">
                <span className="relative z-10">Start Shopping</span>
                <div className="absolute inset-0 btn-shimmer opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>
              
              <button className="flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-8 py-4 text-lg font-bold text-white hover:bg-white/10 transition-all backdrop-blur-md">
                Categories <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </button>
            </div>

            {/* Trust Badges */}
            <div className="reveal-3 mt-12 flex items-center gap-6 border-t border-white/10 pt-8">
              <div className="flex items-center gap-2 text-emerald-200/60">
                <Truck className="h-5 w-5" />
                <span className="text-xs font-medium uppercase tracking-wider">Fast Delivery</span>
              </div>
              <div className="flex items-center gap-2 text-emerald-200/60">
                <ShieldCheck className="h-5 w-5" />
                <span className="text-xs font-medium uppercase tracking-wider">Secure Payment</span>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Elements (Desktop Only) */}
          <div className="hidden lg:relative lg:block">
            {/* Floating Glass Cards */}
            <div className="absolute -left-12 top-10 z-20 animate-float rounded-2xl border border-white/20 bg-white/10 p-5 shadow-2xl backdrop-blur-xl">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-400 text-amber-900 shadow-lg">
                  <Truck className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm font-bold text-white">Express Delivery</p>
                  <p className="text-[10px] font-medium text-emerald-200">Arriving in <span className="text-white">15-20 mins</span></p>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-10 right-10 z-20 animate-float-delayed rounded-2xl border border-white/20 bg-white/10 p-5 shadow-2xl backdrop-blur-xl">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-400 text-emerald-900 shadow-lg">
                  <Leaf className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm font-bold text-white">100% Organic</p>
                  <p className="text-[10px] font-medium text-emerald-200">Certified <span className="text-white">Fresh Farm</span> Goods</p>
                </div>
              </div>
            </div>

            {/* Hero Image Presentation */}
            <div className="relative mx-auto w-full max-w-110 ">
              <div className="absolute inset-0 -rotate-6 scale-105 rounded-[3rem] bg-emerald-500/20 blur-2xl" />
              <div className="relative overflow-hidden rounded-[3rem] border-8 border-white/10 shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                  alt="Product display"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};