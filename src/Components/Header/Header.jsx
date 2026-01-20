
import React, { useState, useRef, useEffect } from 'react';
import { Search, Heart, ShoppingCart, UserRound, Leaf, X, ShoppingBag } from 'lucide-react';
import { Badge } from './Badge';
import { ProfileDropdown } from './ProfileDropdown';
import { CartDrawer } from './CartDrawer';
import Navigation from './Navigation';
import { Link } from 'react-router-dom';
;

const Header = () => {

  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSearchExpanded, setIsSearchExpanded] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const profileTriggerRef = useRef(null);
  const searchInputRef = useRef(null);

  const closeProfile = () => setIsProfileOpen(false);


  useEffect(() => {
    if (isSearchExpanded && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isSearchExpanded]);

  const navIconClass = `
    group relative flex h-11 w-11 items-center justify-center rounded-xl 
    bg-white border border-slate-200 
    transition-all duration-300  hover:shadow-[0_10px_25px_-5px_rgba(16,185,129,0.2)] 
    hover:border-emerald-200 hover:text-emerald-600  text-slate-600 cursor-pointer 
  `;

  return (
    <>
      <header className="sticky top-0 z-50 w-full bg-white  border-b border-slate-200 ">
        <div className=" flex h-20 items-center justify-between px-6 lg:px-20 ">

          {/* LEFT SIDE: Logo & Slogan */}
          <Link to='/' className="flex items-center gap-3 cursor-pointer group shrink-0" >
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

          {/* RIGHT SIDE: Search, Wishlist, Cart, Profile */}
          <div className="flex items-center gap-2 sm:gap-4">
            {/* Desktop Search (Visible on LG+) */}
           <div className="hidden lg:flex items-center lg:w-64 xl:w-80">
  <div className="relative w-full group">
    {/* Input */}
    <input
      type="text"
      placeholder="Search groceries..."
      className=" h-12 w-full rounded-4xl border border-slate-200 bg-white/70 backdrop-blur pl-5 pr-14 text-sm text-slate-800 transition-all duration-300 focus:bg-white focus:border-emerald-500 focus:outline-none group-hover:border-emerald-400"/>

    {/* Icon Button */}
    <button className=" absolute right-1 top-1/2 -translate-y-1/2 h-10 w-10 rounded-3xl  bg-emerald-500  flex items-center justify-center text-white shadow-md transition-all duration-300 hover:bg-emerald-600 hover:scale-105 active:scale-95">
      <Search className="h-5 w-5" />
    </button>
  </div>
</div>


            {/* Mobile Expandable Search Icon */}
            <div className="relative flex lg:hidden items-center">
              {/* Search Button (fixed position) */}
              <button
                onClick={() => setIsSearchExpanded(!isSearchExpanded)}
                className={`${navIconClass} z-20 ${isSearchExpanded ? "border-emerald-500 text-emerald-600" : ""
                  }`}
              >
                {isSearchExpanded ? <X className="h-6 w-6" /> : <Search className="h-6 w-6" />}
              </button>

              {/* Search Input (expands LEFT, button stays) */}
              <div
                className={`fixed left-0 top-20 z-100 flex items-center h-14
      bg-white  border border-emerald-300
      transition-all duration-500 overflow-hidden shadow-lg
      ${isSearchExpanded ? "w-full opacity-100" : "w-0 opacity-0"}`}
              >
                <input
                  ref={searchInputRef}
                  type="text"
                  placeholder="Search Grocery"
                  className="w-full bg-transparent pl-7 pr-4 text-sm text-gray-900 font-semibold focus:text-emerald-600  focus:outline-none"
                />
              </div>
            </div>


            {/* Wishlist Icon */}
            <button className={`${navIconClass} hidde`}>
              <Heart className="h-6 w-6 group-hover:fill-rose-500 group-hover:text-rose-500 transition-all" />
              <Badge count={3} className="bg-rose-500 ring-2 ring-white" />
            </button>

            {/* Cart Drawer Trigger */}
            <button
              onClick={() => setIsCartOpen(true)}
              className={`${navIconClass} hidde`}
            >
              <ShoppingBag className="h-6 w-6" />
              <Badge count={5} className="bg-emerald-600 ring-2 ring-white" />
            </button>
            <div className="h-6 w-px bg-gray-200/50 mx-1 hidden sm:block hidde" />
            {isLoggedIn ? ( 
              <Link to='/signin' className='text-base  text-white bg-linear-to-r from-emerald-400 to-emerald-500 px-4 py-2 rounded-4xl shadow-md shadow-emerald-600/30'>Sign In</Link>
            ) : (

              <div className="relative hidde">
                <button
                  ref={profileTriggerRef}
                  onClick={() => setIsProfileOpen(!isProfileOpen)}
                  className={`${navIconClass} ${isProfileOpen ? 'bg-emerald-50 text-emerald-700 border-emerald-200' : ''}`}
                >
                  <UserRound className="h-6 w-6" />
                </button>

                <ProfileDropdown
                  isOpen={isProfileOpen}
                  onClose={closeProfile}
                  triggerRef={profileTriggerRef}
                />
              </div>
            )}

          </div>
        </div>
        <Navigation />
      </header>


      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
};


export default Header