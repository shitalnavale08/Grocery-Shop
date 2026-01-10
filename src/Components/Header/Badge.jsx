import React from 'react';



export const Badge = ({ count, className = '' }) => {
  if (count === 0) return null;
  return (
    <span className={`absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-emerald-600 text-[10px] font-bold text-white shadow-sm ${className}`}>
      {count > 99 ? '99+' : count}
    </span>
  );
};