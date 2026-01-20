
import { useState, useRef, useEffect } from 'react';
import {
  LayoutGrid, ChevronDown, ChevronRight, Menu, Percent, UtensilsCrossed, Apple, Beef, Egg, Coffee,
  CakeSlice, Snowflake, Popcorn, Leaf
} from 'lucide-react';
import MobileSidebar from './MobileSidebar';
import { Link, useNavigate } from 'react-router-dom';




const CATEGORIES = [
  {
    name: "Fruits & Veggies",
    path: "fruits-vegetables",
    icon: Apple,
    iconColor: "text-rose-600",
  },
  {
    name: "Meats & Seafood",
    path: "meats-seafood",
    icon: Beef,
    iconColor: "text-orange-600",
  },
  {
    name: "Breakfast & Dairy",
    path: "breakfast-dairy",
    icon: Egg,
    iconColor: "text-amber-600",

  },
  {
    name: "Beverages",
    path: "beverages",
    icon: Coffee,
    iconColor: "text-blue-600",

  },
  {
    name: "Breads & Bakery",
    path: "breads-bakery",
    icon: CakeSlice,
    iconColor: "text-yellow-600",
  },
  {
    name: "Frozen Foods",
    path: "frozen-foods",
    icon: Snowflake,
    iconColor: "text-cyan-600",
  },
  {
    name: "Biscuits & Snacks",
    path: "biscuits-snacks",
    icon: Popcorn,
    iconColor: "text-purple-600",
  },
  {
    name: "Grocery Staples",
    path: "grocery-staples",
    icon: Leaf,
    iconColor: "text-emerald-600",

  },
];


const Navigation = () => {
  
  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const subNavLinkClass = `
    flex items-center gap-2 text-[14px] font-semibold
    text-slate-600 hover:text-emerald-600 transition-all cursor-pointer whitespace-nowrap
    px-3 py-2 
  `;


  return (
    <>
      <div className="sticky top-20  left-0 right-0 z-90 border-t border-slate-200 bg-white ">
        <div className="w-full flex h-14  items-center justify-between px-6 lg:px-20">

          {/* 1. Mobile Hamburger (Pinned Far Left on Mobile) */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsMobileSidebarOpen(true)}
              className="relative flex h-11 w-11 items-center justify-center rounded-xl 
    bg-white border border-slate-200 
    transition-all duration-300  hover:shadow-[0_10px_25px_-5px_rgba(16,185,129,0.2)] 
    hover:border-emerald-200 hover:text-emerald-600  text-slate-600 cursor-pointer  "
              aria-label="Open Menu"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>

          {/* 2. Desktop Navigation Group (Hidden on Mobile) */}
          <nav className="hidden lg:flex items-center gap-6">
            <div className="flex items-center gap-4">
              <Link to='/' className={subNavLinkClass}>Home</Link>
              <Link to="/hot-deals" className={subNavLinkClass}>
                <Percent className="h-3.5 w-3.5 text-rose-500" /> Hot Deals
              </Link>
              <Link to="/grocery" className={subNavLinkClass}>Grocery</Link>
              <Link to="/recipes" className={subNavLinkClass}>
                <UtensilsCrossed className="h-3.5 w-3.5 text-orange-500" /> Recipes
              </Link>
            </div>
          </nav>

          {/* 3. Category Dropdown (Pinned Far Right on Mobile) */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className={`
                flex items-center gap-2 px-4 h-10 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all
                ${isDropdownOpen ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-500/30' : 'bg-gray-900 text-white hover:bg-emerald-600'}
              `}
            >
              <LayoutGrid className="h-4 w-4 shrink-0" />
              <span className="hidden sm:inline">All Categories</span>
              <span className="sm:hidden">Grocery Catalog</span>
              <ChevronDown className={`h-3 w-3 transition-transform duration-500 ${isDropdownOpen ? 'rotate-180' : ''}`} />
            </button>

            {/* DROPDOWN MENU */}
            <div className={`
              absolute top-full right-0   mt-3 w-72 bg-white backdrop-blur-2xl rounded-4xl shadow-[0_25px_60px_-15px_rgba(0,0,0,0.1)] border border-white/50 p-3 z-110
              transition-all duration-500 ease-[cubic-bezier(0.2,0.8,0.2,1)] 
              ${isDropdownOpen ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-90 -translate-y-4 pointer-events-none'}
            `}>
              <div className="grid grid-cols-1 gap-1">
                {CATEGORIES.map((cat, i) => (
                  <a
                    key={cat.name}
                    onClick={() => navigate(`/category/${cat.path}`)}
                    className="group flex items-center justify-between py-2  px-3 transition-all duration-300"
                    style={{ transitionDelay: `${i * 40}ms` }}
                  >
                    <div className={`flex items-center gap-4 text-slate-700  hover:${cat.iconColor} hover:translate-x-1 transition ease-in-out duration-300 `}>
                      <div className={`flex items-center justify-center transition-transform group-hover:scale-110 group-hover:rotate-3 ${cat.iconColor} `}>
                        <cat.icon className="h-5 w-5" />
                      </div>
                      <span className={`text-[13px] font-semibold    `}>{cat.name}</span>
                    </div>
                    <ChevronRight className="h-4 w-4 text-gray-200 group-hover:text-emerald-500 group-hover:translate-x-1 transition-all" />
                  </a>
                ))}
              </div>
            </div>
          </div>


        </div>
      </div>

      <MobileSidebar
        isOpen={isMobileSidebarOpen}
        onClose={() => setIsMobileSidebarOpen(false)}
      />
    </>
  );
};

export default Navigation