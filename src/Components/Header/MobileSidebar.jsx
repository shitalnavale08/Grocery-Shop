
import React, { useEffect, useState } from 'react';
import {
  X, Home, Percent, ShoppingBasket, UtensilsCrossed,
  Info, Headset, LogOut, UserCircle, ChevronRight, ChevronDown,
  Apple, Beef, Egg, Coffee, CakeSlice, Snowflake, Popcorn,
  Store, Heart, HelpCircle,
  Leaf,
  House,
  Phone,
  Settings
} from 'lucide-react';
import { Link } from 'react-router-dom';


const CATEGORIES = [
  { name: "Fruits & Veg", icon: Apple, color: "text-emerald-500", path: "#/category/fruits" },
  { name: "Prime Meats", icon: Beef, color: "text-rose-500", path: "#/category/meats" },
  { name: "Dairy & Eggs", icon: Egg, color: "text-amber-500", path: "#/category/dairy" },
  { name: "Beverages", icon: Coffee, color: "text-blue-500", path: "#/category/beverages" },
  { name: "Artisan Bakery", icon: CakeSlice, color: "text-orange-500", path: "#/category/bakery" },
  { name: "Frozen Foods", icon: Snowflake, color: "text-cyan-500", path: "#/category/frozen" },
  { name: "Snacks", icon: Popcorn, color: "text-purple-500", path: "#/category/snacks" },
];

export const MobileSidebar = ({ isOpen, onClose, onNavigate }) => {
  const [isActive, setIsActive] = useState(false);
  const [IsGroceryO,SetIsGroceryOpen] = useState(true);
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setTimeout(() => setIsActive(true), 10);
    } else {
      setIsActive(false);
      setTimeout(() => {
        document.body.style.overflow = 'unset';
      }, 400);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleLinkClick = (path) => {
    onNavigate(path);
    onClose();
  };
  const subNavLinkClass = `
    flex items-center gap-2 text-[14px] font-semibold
    text-slate-600 hover:text-emerald-600 transition-all cursor-pointer whitespace-nowrap
    px-3 py-2 
  `;


  return (
    <div className="fixed inset-0 z-200 lg:hidden">
      {/* Backdrop */}
      <div
        className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-500 ${isActive ? 'opacity-100' : 'opacity-0'}`}
        onClick={onClose}
      />

      {/* Drawer */}
      <div
        className={`absolute top-0 left-0 bottom-0 w-[85%] max-w-sm bg-white shadow-[20px_0_60px_rgba(0,0,0,0.1)] transition-transform duration-500 ease-[cubic-bezier(0.2,0.8,0.2,1)] flex flex-col ${isActive ? 'translate-x-0' : '-translate-x-full'
          }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-50 bg-white sticky top-0 z-10">
          <Link to='/'

            className="flex items-center gap-3 cursor-pointer group shrink-0"
          >
            <div className="flex h-13 w-13 items-center justify-center rounded-[1.3rem] bg-emerald-400 text-white shadow-lg transition-all duration-500 group-hover:scale-105 group-hover:rotate-6">
              <Leaf className="h-6 w-6" />
            </div>
            <div className="flex flex-col">
              <span className="text-3xl font-black tracking-tighter text-gray-900 leading-none group-hover:text-emerald-700 transition-colors">
                Fresho
              </span>
              <span className="text-[15px] font-semibold text-emerald-400 mt-0.5 ">
                Freshness
              </span>
            </div>
          </Link>

          <button onClick={onClose} className="w-11 h-11 flex items-center justify-center rounded-xl bg-white text-slate-600  border border-slate-200 hover:border-emerald-400 hover:text-emerald-600 active:rotate-90 transition ease-in duration-300">
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto px-4 py-6 scrollbar-hide space-y-6">

          {/* Section: Main Navigation */}
          <div className="space-y-1">
            <nav className="flex flex-col items-start text-left w-full">
              <Link to="/" className={subNavLinkClass}>
                <House className="h-4 w-4 text-slate-600" />
                Home
              </Link>

              <Link to="/hot-deals" className={subNavLinkClass}>
                <Percent className="h-4 w-4 text-rose-500" />
                Hot Deals
              </Link>

              <Link to="/grocery" className={subNavLinkClass}>
                <Leaf className="h-4 w-4 text-emerald-600" />
                Grocery
              </Link>

              <Link to="/recipes" className={subNavLinkClass}>
                <UtensilsCrossed className="h-4 w-4 text-amber-400" />
                Recipes
              </Link>
              <Link to="/about" className={subNavLinkClass}>
                <Info className="h-4 w-4 text-slate-600" />
                About Us
              </Link>
              <Link to="/contact" className={subNavLinkClass}>
                <Phone className="h-4 w-4 text-slate-600" />
                Contact Us
              </Link>
            </nav>


          </div>


        </div>

        {/* Footer Actions */}
        <div className=" border-t bg-white border-slate-200  space-y-3 shrink-0">
           <div className="flex items-center justify-between p-4">
          <div className="flex items-center gap-3">
            <div className="h-12 w-12 rounded-full bg-emerald-100 border-2 border-white shadow-sm flex items-center justify-center text-emerald-700">
              <UserCircle className="h-8 w-8" />
            </div>
            <div>
              <p className="text-sm font-bold text-gray-900">Alex Johnson</p>
              <div className="flex items-center gap-1 mt-0.5">
                <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[10px] font-bold text-emerald-600 uppercase tracking-wider">Gold Member</span>
              </div>
            </div>
          </div>
          <button className="rounded-full bg-gray-50 p-2 text-gray-400 hover:bg-emerald-50 hover:text-emerald-600 transition-colors">
            <Settings className="h-4 w-4" />
          </button>
        </div>

          <button className="w-full h-14 bg-linear-to-tr from-rose-600 to-rose-700 text-white flex items-center justify-center gap-3  font-black text-[13px] uppercase tracking-[0.2em]transition-all active:scale-95 border border-transparent ">
            <LogOut className="h-4 w-4" /> Log out Account
          </button>
        </div>
      </div>
    </div>
  );
};

export default MobileSidebar