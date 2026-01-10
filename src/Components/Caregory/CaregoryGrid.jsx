import React from 'react';
import { 
  ChevronRight, 
  Apple, 
  Beef, 
  CakeSlice, 
  Coffee, 
  Egg, 
  Leaf, 
  Popcorn, 
  Snowflake,
  Sparkles
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';



const CATEGORIES = [
  {
    name: "Fruits & Veggies",
    path: "fruits-vegetables",
    icon: Apple,
    color: "from-rose-50 to-rose-100",
    iconColor: "text-rose-600",
    glow: "hover:shadow-rose-200"
  },
  {
    name: "Meats & Seafood",
    path: "meats-seafood",
    icon: Beef,
    color: "from-orange-50 to-orange-100",
    iconColor: "text-orange-600",
    glow: "hover:shadow-orange-200"
  },
  {
    name: "Breakfast & Dairy",
    path: "breakfast-dairy",
    icon: Egg,
    color: "from-amber-50 to-amber-100",
    iconColor: "text-amber-600",
    glow: "hover:shadow-amber-200"
  },
  {
    name: "Beverages",
    path: "beverages",
    icon: Coffee,
    color: "from-blue-50 to-blue-100",
    iconColor: "text-blue-600",
    glow: "hover:shadow-blue-200"
  },
  {
    name: "Breads & Bakery",
    path: "breads-bakery",
    icon: CakeSlice,
    color: "from-yellow-50 to-yellow-100",
    iconColor: "text-yellow-600",
    glow: "hover:shadow-yellow-200"
  },
  {
    name: "Frozen Foods",
    path: "frozen-foods",
    icon: Snowflake,
    color: "from-cyan-50 to-cyan-100",
    iconColor: "text-cyan-600",
    glow: "hover:shadow-cyan-200"
  },
  {
    name: "Biscuits & Snacks",
    path: "biscuits-snacks",
    icon: Popcorn,
    color: "from-purple-50 to-purple-100",
    iconColor: "text-purple-600",
    glow: "hover:shadow-purple-200"
  },
  {
    name: "Grocery Staples",
    path: "grocery-staples",
    icon: Leaf,
    color: "from-emerald-50 to-emerald-100",
    iconColor: "text-emerald-600",
    glow: "hover:shadow-emerald-200"
  },
];

export const CategoryGrid  = () => {
  const navigate = useNavigate();

  return (
    <div className="mt-10">
      {/* Cool Animated Heading */}
      <div className="relative mb-12 overflow-hidden py-4">
        <div className="absolute left-0 top-0 h-24 w-24 rounded-full bg-emerald-100/50 blur-3xl -z-10 animate-pulse" />
        
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
          <div className="reveal-1">
            <h2 className="text-4xl font-black text-gray-900 tracking-tight leading-none">
              Explore Our <br/>
              <span className="bg-linear-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent ">
                Fresh Collections
              </span>
            </h2>
            <div className="flex items-center gap-3 mt-4">
              <div className="h-2 w-12 bg-emerald-600 rounded-full" />
              <p className="text-sm font-bold text-gray-400 uppercase tracking-widest">Handpicked for you</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8">
        {CATEGORIES.map((category, idx) => (
          <button
            key={idx}
            onClick={() => navigate(`/category/${category.path}`)}
            className={`group relative flex flex-col items-center justify-center rounded-[2.5rem] bg-white hover:bg-linear-to-br ${category.color} cursor-pointer p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${category.glow}`}
          >
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/60 shadow-inner backdrop-blur-sm transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110">
              <category.icon className={`h-8 w-8 ${category.iconColor}`} strokeWidth={2.5} />
            </div>
            
            <h3 className="text-center text-[10px] font-black uppercase tracking-wider text-gray-800 transition-colors group-hover:text-gray-900">
              {category.name}
            </h3>
            
            <div className="absolute bottom-3 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:bottom-4">
              <div className={`h-1 w-4 rounded-full bg-current ${category.iconColor} opacity-50`} />
            </div>
          </button>
        ))}
      </div>

      <div className="mt-16 overflow-hidden rounded-xl bg-gray-900 p-8 shadow-2xl relative">
        <div className="absolute top-0 right-0 h-32 w-32 bg-emerald-500/10 blur-[60px]" />
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
          <div className="text-center md:text-left">
            <h4 className="text-2xl font-black text-white tracking-tight">New to Fresho? <span className="text-emerald-500">20% OFF</span></h4>
            <p className="text-gray-400 mt-3 font-bold text-sm">Use code <span className="text-white bg-white/10 px-3 py-1 rounded-lg border border-white/10 ml-1">FRESH20</span></p>
          </div>
          <button className="rounded-2xl bg-emerald-600 px-10 py-4 font-black text-xs uppercase tracking-widest text-white shadow-lg shadow-emerald-900/40 transition-all hover:bg-emerald-500 hover:scale-105 active:scale-95">
            Claim Your Discount
          </button>
        </div>
      </div>
    </div>
  );
};