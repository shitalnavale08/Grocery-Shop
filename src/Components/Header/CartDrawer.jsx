import React, { useEffect, useState } from 'react';
import { X, Trash2, Plus, Minus, ShoppingBag, ArrowRight } from 'lucide-react';

// Mock data for demonstration
const INITIAL_CART_ITEMS = [
  { id: 1, name: 'Organic Bananas', price: 2.99, quantity: 2, image: 'https://picsum.photos/id/102/100/100', category: 'Produce' },
  { id: 2, name: 'Fresh Sourdough Bread', price: 5.49, quantity: 1, image: 'https://picsum.photos/id/988/100/100', category: 'Bakery' },
  { id: 3, name: 'Free Range Eggs (12ct)', price: 4.29, quantity: 1, image: 'https://picsum.photos/id/292/100/100', category: 'Dairy' },
];

export const CartDrawer = ({ isOpen, onClose }) => {
  const [items, setItems] = useState(INITIAL_CART_ITEMS);
  const [isRendered, setIsRendered] = useState(false);
  const [isActive, setIsActive] = useState(false);

  // Handle animation timing
  useEffect(() => {
    if (isOpen) {
      setIsRendered(true);
      // Small delay to ensure the component is mounted before adding the active class for transition
      const timer = setTimeout(() => setIsActive(true), 10);
      document.body.style.overflow = 'hidden';
      return () => clearTimeout(timer);
    } else {
      setIsActive(false);
      // Wait for transition to finish before unmounting
      const timer = setTimeout(() => {
        setIsRendered(false);
        document.body.style.overflow = 'unset';
      }, 300); 
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  const updateQuantity = (id, delta) => {
    setItems(prev => prev.map(item => {
      if (item.id === id) {
        const newQty = Math.max(0, item.quantity + delta);
        return { ...item, quantity: newQty };
      }
      return item;
    }).filter(item => item.quantity > 0));
  };

  const subtotal = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  
  if (!isRendered) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end" role="dialog" aria-modal="true">
      {/* Backdrop */}
      <div 
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300 ease-in-out ${isActive ? 'opacity-100' : 'opacity-0'}`}
        onClick={onClose}
      />

      {/* Drawer */}
      <div 
        className={`relative w-full max-w-md bg-white shadow-2xl transition-transform duration-300 ease-out flex flex-col h-full transform ${isActive ? 'translate-x-0' : 'translate-x-full'}`}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-gray-100 px-6 py-4">
          <div className="flex items-center gap-2 text-emerald-700">
            <ShoppingBag className="h-5 w-5" />
            <h2 className="text-lg font-semibold text-gray-900">Your Cart</h2>
            <span className="ml-2 rounded-full bg-emerald-100 px-2 py-0.5 text-xs font-medium text-emerald-800">
              {items.length} items
            </span>
          </div>
          <button 
            onClick={onClose}
            className="rounded-full p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Items List */}
        <div className="flex-1 overflow-y-auto px-6 py-4 scrollbar-hide">
          {items.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center space-y-4 text-center">
              <div className="rounded-full bg-gray-50 p-6">
                <ShoppingBag className="h-12 w-12 text-gray-300" />
              </div>
              <div>
                <p className="text-lg font-medium text-gray-900">Your cart is empty</p>
                <p className="text-sm text-gray-500">Looks like you haven't added anything yet.</p>
              </div>
              <button 
                onClick={onClose}
                className="mt-4 rounded-full bg-emerald-600 px-6 py-2 text-sm font-medium text-white shadow-sm hover:bg-emerald-700 transition-colors"
              >
                Start Shopping
              </button>
            </div>
          ) : (
            <div className="space-y-6">
              {items.map((item) => (
                <div key={item.id} className="flex gap-4">
                  <div className="h-20 w-20 shrink-0 overflow-hidden rounded-lg border border-gray-200">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="flex flex-1 flex-col justify-between">
                    <div>
                      <div className="flex justify-between">
                        <h3 className="text-sm font-medium text-emerald-800 line-clamp-2">{item.name}</h3>
                        <p className="text-sm font-semibold text-gray-900 ml-4">${(item.price * item.quantity).toFixed(2)}</p>
                      </div>
                      <p className="text-xs text-gray-500 mt-1">{item.category}</p>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center rounded-lg border border-gray-200 shadow-sm">
                        <button 
                          onClick={() => updateQuantity(item.id, -1)}
                          className="p-1 hover:bg-gray-50 text-gray-500 hover:text-red-600 transition-colors"
                        >
                          {item.quantity === 1 ? <Trash2 className="h-3.5 w-3.5" /> : <Minus className="h-3.5 w-3.5" />}
                        </button>
                        <span className="w-8 text-center text-sm font-medium text-gray-900">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.id, 1)}
                          className="p-1 hover:bg-gray-50 text-gray-500 hover:text-emerald-600 transition-colors"
                        >
                          <Plus className="h-3.5 w-3.5" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-gray-100 bg-gray-50 px-6 py-6">
            <div className="mb-4 space-y-2">
              <div className="flex justify-between text-sm text-gray-600">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm text-gray-600">
                <span>Shipping</span>
                <span className="text-emerald-600 font-medium">Free</span>
              </div>
              <div className="flex justify-between text-base font-semibold text-gray-900 pt-2 border-t border-gray-200">
                <span>Total</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
            </div>
            <button className="group w-full flex items-center justify-center gap-2 rounded-full bg-emerald-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-emerald-700 active:scale-[0.99] transition-all">
              Checkout
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};