import React, { useEffect, useRef, useState } from 'react';
import {
  User, Settings, Package, Heart, LogOut,
  HelpCircle, UserCircle, ChevronRight,
  Award, Zap, Truck,
  ShoppingBag,
  UserRound
} from 'lucide-react';
import { Link } from 'react-router-dom';



export const ProfileDropdown = ({ isOpen, onClose, triggerRef }) => {
  const dropdownRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        triggerRef.current &&
        !triggerRef.current.contains(event.target)
      ) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      setIsVisible(true);
    } else {
      const timer = setTimeout(() => setIsVisible(false), 300);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
        clearTimeout(timer);
      };
    }

    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen, onClose, triggerRef]);

  if (!isVisible && !isOpen) return null;

  return (
    <div
      ref={dropdownRef}
      className={`absolute right-0 top-full mt-3 w-80 origin-top-right rounded-2xl bg-white shadow-[0_20px_60px_rgba(0,0,0,0.15)] ring-1 ring-black/5 focus:outline-none z-110 transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${isOpen
          ? 'transform scale-100 opacity-100 translate-y-0'
          : 'transform scale-90 opacity-0 -translate-y-4 pointer-events-none'
        }`}
    >
      {/* 1. Profile Header & Loyalty Status */}
      <div className="p-5 pb-4 border-b border-gray-100">
        <div className="flex items-center justify-between mb-4">
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
      </div>


      {/* 3. Main Menu */}
      <div className="py-2">
        {[
          { icon: UserRound, label: 'Profile', color: 'text-cyan-500',path:"/account/profile" },
          { icon: Package, label: 'My Orders', badge: '2', color: 'text-blue-500',path:"/account/orders" },
          { icon: ShoppingBag, label: 'Cart', color: 'text-emerald-500',path:"/cart" },
          { icon: Heart, label: 'Favorites', color: 'text-red-500',path:"/wishist" },
          { icon: Zap, label: 'Flash Deals', color: 'text-yellow-500',path:'/hot-deals' },
        ].map((item, i) => (
          <Link
            key={i}
            to={item.path}
            onClick={onClose}
            className="group flex items-center justify-between px-5 py-2.5 text-sm text-gray-600 hover:bg-emerald-50/50 transition-all"
          >
            <div className="flex items-center gap-3 transform group-hover:translate-x-1 transition-transform">
              <item.icon className={`h-4 w-4 ${item.color}`} />
              <span className="font-medium group-hover:text-emerald-900">{item.label}</span>
            </div>
            {item.badge && (
              <span className="rounded-full bg-blue-100 px-1.5 py-0.5 text-[10px] font-bold text-blue-600">
                {item.badge}
              </span>
            )}
          </Link>
        ))}
      </div>

      {/* 4. Footer Logout */}
      <div className="mt-1 border-t border-gray-100 p-2">
        <button
          onClick={onClose}
          className="group flex w-full items-center gap-3 rounded-xl px-4 py-2.5 text-sm font-bold text-red-500 hover:bg-red-50 transition-all active:scale-[0.98]"
        >
          <LogOut className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
          Sign out
        </button>
      </div>
    </div>
  );
};