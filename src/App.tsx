import { useState, useMemo, useEffect } from 'react';
import { Product, CartItem } from './types';
import { products, categories, roastLevels } from './data/products';

// ============ HEADER COMPONENT ============
function Header({ 
  cartCount, 
  onCartClick, 
  searchQuery, 
  onSearchChange 
}: { 
  cartCount: number; 
  onCartClick: () => void; 
  searchQuery: string; 
  onSearchChange: (q: string) => void;
}) {
  const [mobileSearch, setMobileSearch] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-[#FDF8F3]/95 backdrop-blur-md border-b border-[#E8D5B7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-[#6B4226] to-[#C4956A] flex items-center justify-center">
              <span className="text-white text-lg">☕</span>
            </div>
            <div>
              <h1 className="text-lg sm:text-xl font-bold text-[#3D2314] tracking-tight">Kaypuna</h1>
              <p className="text-[10px] sm:text-xs text-[#8B5E3C] -mt-0.5 tracking-widest uppercase">Specialty Coffee</p>
            </div>
          </div>

          {/* Desktop Search */}
          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8B5E3C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                placeholder="Search coffees..."
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-[#F5EDE4] border border-[#E8D5B7] rounded-full text-sm text-[#3D2314] placeholder-[#A0876E] focus:outline-none focus:ring-2 focus:ring-[#C4956A]/50 focus:border-[#C4956A] transition-all"
              />
            </div>
          </div>

          {/* Right actions */}
          <div className="flex items-center gap-3">
            {/* Mobile search toggle */}
            <button 
              onClick={() => setMobileSearch(!mobileSearch)}
              className="md:hidden p-2 text-[#6B4226] hover:bg-[#F5EDE4] rounded-full transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>

            {/* Cart button */}
            <button 
              onClick={onCartClick}
              className="relative p-2 text-[#6B4226] hover:bg-[#F5EDE4] rounded-full transition-colors"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              {cartCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 w-5 h-5 bg-[#C4956A] text-white text-xs font-bold rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Mobile search bar */}
        {mobileSearch && (
          <div className="md:hidden pb-3">
            <div className="relative">
              <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8B5E3C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                placeholder="Search coffees..."
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                autoFocus
                className="w-full pl-10 pr-4 py-2.5 bg-[#F5EDE4] border border-[#E8D5B7] rounded-full text-sm text-[#3D2314] placeholder-[#A0876E] focus:outline-none focus:ring-2 focus:ring-[#C4956A]/50 focus:border-[#C4956A] transition-all"
              />
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

// ============ HERO SECTION ============
function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#3D2314] via-[#6B4226] to-[#8B5E3C] text-white">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-[#C4956A] blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 rounded-full bg-[#DEB887] blur-3xl"></div>
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        <div className="max-w-2xl">
          <p className="text-[#C4956A] text-sm font-medium tracking-widest uppercase mb-3">Artisan Roasted</p>
          <h2 className="text-3xl sm:text-5xl font-bold leading-tight mb-4">
            Exceptional Coffee,<br />
            <span className="text-[#DEB887]">Thoughtfully Sourced</span>
          </h2>
          <p className="text-[#E8D5B7] text-base sm:text-lg leading-relaxed max-w-lg">
            From the world's finest growing regions to your cup. Each bean is carefully selected, 
            roasted to perfection, and delivered fresh.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <div className="flex items-center gap-2 text-sm text-[#E8D5B7]">
              <span className="w-2 h-2 rounded-full bg-[#C4956A]"></span>
              Freshly Roasted
            </div>
            <div className="flex items-center gap-2 text-sm text-[#E8D5B7]">
              <span className="w-2 h-2 rounded-full bg-[#C4956A]"></span>
              Ethically Sourced
            </div>
            <div className="flex items-center gap-2 text-sm text-[#E8D5B7]">
              <span className="w-2 h-2 rounded-full bg-[#C4956A]"></span>
              Free Shipping $35+
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ============ FILTER BAR ============
function FilterBar({ 
  selectedCategory, 
  onCategoryChange, 
  selectedRoast, 
  onRoastChange 
}: { 
  selectedCategory: string; 
  onCategoryChange: (c: string) => void;
  selectedRoast: string;
  onRoastChange: (r: string) => void;
}) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 mb-8">
      <div className="flex flex-wrap gap-2">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => onCategoryChange(cat)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              selectedCategory === cat
                ? 'bg-[#6B4226] text-white shadow-md'
                : 'bg-[#F5EDE4] text-[#6B4226] hover:bg-[#E8D5B7]'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>
      <div className="flex items-center gap-2">
        <span className="text-sm text-[#8B5E3C]">Roast:</span>
        <div className="flex gap-1">
          {roastLevels.map(roast => (
            <button
              key={roast}
              onClick={() => onRoastChange(roast)}
              className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                selectedRoast === roast
                  ? 'bg-[#8B5E3C] text-white'
                  : 'bg-[#F5EDE4] text-[#6B4226] hover:bg-[#E8D5B7]'
              }`}
            >
              {roast}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

// ============ PRODUCT CARD ============
function ProductCard({ 
  product, 
  onAddToCart, 
  onViewDetails 
}: { 
  product: Product; 
  onAddToCart: (p: Product) => void;
  onViewDetails: (p: Product) => void;
}) {
  return (
    <div className="group bg-white rounded-2xl shadow-sm border border-[#E8D5B7]/50 overflow-hidden hover:shadow-lg hover:shadow-[#C4956A]/10 transition-all duration-300 hover:-translate-y-1">
      {/* Product image area */}
      <div 
        className="relative h-48 sm:h-56 cursor-pointer overflow-hidden"
        style={{ background: product.image }}
        onClick={() => onViewDetails(product)}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
        <div className="absolute bottom-3 left-3">
          <span className="px-2.5 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-medium text-[#3D2314]">
            {product.roast} Roast
          </span>
        </div>
        <div className="absolute top-3 right-3">
          <span className="px-2.5 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-medium text-[#3D2314]">
            {product.weight}
          </span>
        </div>
        {/* Coffee bean icon */}
        <div className="absolute inset-0 flex items-center justify-center opacity-20 group-hover:opacity-30 transition-opacity">
          <svg className="w-20 h-20 text-white" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14.5v-5l-3.5 3.5-1.42-1.42L9.67 10H4.5V8h5.17L6.08 4.42l1.42-1.42L11 6.5V2h2v4.5l3.5-3.5 1.42 1.42L14.33 8H19.5v2h-5.17l3.59 3.58-1.42 1.42L13 11.5v5h-2z"/>
          </svg>
        </div>
      </div>

      {/* Product info */}
      <div className="p-4 sm:p-5">
        <div className="flex items-start justify-between gap-2 mb-2">
          <div>
            <h3 
              className="font-semibold text-[#3D2314] text-base sm:text-lg cursor-pointer hover:text-[#6B4226] transition-colors"
              onClick={() => onViewDetails(product)}
            >
              {product.name}
            </h3>
            <p className="text-sm text-[#8B5E3C]">{product.origin}</p>
          </div>
          <div className="flex items-center gap-1 text-[#C4956A]">
            <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
              <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
            </svg>
            <span className="text-sm font-medium text-[#6B4226]">{product.rating}</span>
          </div>
        </div>

        {/* Flavor notes */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {product.notes.map(note => (
            <span key={note} className="px-2 py-0.5 bg-[#FDF8F3] border border-[#E8D5B7] rounded-full text-xs text-[#8B5E3C]">
              {note}
            </span>
          ))}
        </div>

        {/* Price and add to cart */}
        <div className="flex items-center justify-between">
          <span className="text-xl font-bold text-[#3D2314]">${product.price.toFixed(2)}</span>
          <button
            onClick={() => onAddToCart(product)}
            className="px-4 py-2 bg-[#6B4226] text-white text-sm font-medium rounded-full hover:bg-[#8B5E3C] active:scale-95 transition-all shadow-sm hover:shadow-md"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

// ============ PRODUCT DETAIL MODAL ============
function ProductDetail({ 
  product, 
  onClose, 
  onAddToCart 
}: { 
  product: Product; 
  onClose: () => void;
  onAddToCart: (p: Product, qty: number) => void;
}) {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
      <div 
        className="relative bg-[#FDF8F3] rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-8 h-8 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center text-[#6B4226] hover:bg-white transition-colors"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Image */}
        <div 
          className="h-56 sm:h-72 rounded-t-3xl relative"
          style={{ background: product.image }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-t-3xl"></div>
          <div className="absolute bottom-4 left-6 flex gap-2">
            <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-sm font-medium text-[#3D2314]">
              {product.roast} Roast
            </span>
            <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-sm font-medium text-[#3D2314]">
              {product.category}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8">
          <div className="flex items-start justify-between gap-4 mb-4">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#3D2314]">{product.name}</h2>
              <p className="text-[#8B5E3C] mt-1">{product.origin} • {product.weight}</p>
            </div>
            <div className="flex items-center gap-1 bg-[#F5EDE4] px-3 py-1.5 rounded-full">
              <svg className="w-4 h-4 fill-[#C4956A]" viewBox="0 0 20 20">
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
              </svg>
              <span className="text-sm font-semibold text-[#6B4226]">{product.rating}</span>
            </div>
          </div>

          <p className="text-[#5C3D2E] leading-relaxed mb-6">{product.description}</p>

          {/* Flavor notes */}
          <div className="mb-6">
            <h4 className="text-sm font-semibold text-[#6B4226] uppercase tracking-wider mb-2">Tasting Notes</h4>
            <div className="flex flex-wrap gap-2">
              {product.notes.map(note => (
                <span key={note} className="px-3 py-1.5 bg-[#F5EDE4] border border-[#E8D5B7] rounded-full text-sm text-[#6B4226] font-medium">
                  {note}
                </span>
              ))}
            </div>
          </div>

          {/* Quantity and Add to Cart */}
          <div className="flex items-center justify-between pt-4 border-t border-[#E8D5B7]">
            <div className="flex items-center gap-3">
              <span className="text-sm font-medium text-[#6B4226]">Qty:</span>
              <div className="flex items-center border border-[#E8D5B7] rounded-full overflow-hidden">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-9 h-9 flex items-center justify-center text-[#6B4226] hover:bg-[#F5EDE4] transition-colors"
                >
                  −
                </button>
                <span className="w-10 text-center text-sm font-semibold text-[#3D2314]">{quantity}</span>
                <button 
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-9 h-9 flex items-center justify-center text-[#6B4226] hover:bg-[#F5EDE4] transition-colors"
                >
                  +
                </button>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-2xl font-bold text-[#3D2314]">${(product.price * quantity).toFixed(2)}</span>
              <button
                onClick={() => { onAddToCart(product, quantity); onClose(); }}
                className="px-6 py-3 bg-[#6B4226] text-white font-medium rounded-full hover:bg-[#8B5E3C] active:scale-95 transition-all shadow-md hover:shadow-lg"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ============ CART SIDEBAR ============
function Cart({ 
  isOpen, 
  onClose, 
  items, 
  onUpdateQuantity, 
  onRemoveItem, 
  onCheckout 
}: { 
  isOpen: boolean; 
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (id: number, qty: number) => void;
  onRemoveItem: (id: number) => void;
  onCheckout: () => void;
}) {
  const subtotal = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const shipping = subtotal >= 35 ? 0 : 5.99;
  const total = subtotal + shipping;

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end" onClick={onClose}>
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>
      <div 
        className="relative w-full max-w-md bg-[#FDF8F3] h-full shadow-2xl flex flex-col animate-slide-in"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-[#E8D5B7]">
          <h2 className="text-xl font-bold text-[#3D2314]">Your Cart</h2>
          <button 
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-[#F5EDE4] flex items-center justify-center text-[#6B4226] hover:bg-[#E8D5B7] transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Cart items */}
        <div className="flex-1 overflow-y-auto p-5">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <div className="w-20 h-20 rounded-full bg-[#F5EDE4] flex items-center justify-center mb-4">
                <svg className="w-10 h-10 text-[#C4956A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
              </div>
              <p className="text-[#8B5E3C] font-medium">Your cart is empty</p>
              <p className="text-sm text-[#A0876E] mt-1">Add some delicious coffee!</p>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map(item => (
                <div key={item.product.id} className="flex gap-3 bg-white rounded-xl p-3 border border-[#E8D5B7]/50">
                  <div 
                    className="w-16 h-16 rounded-lg flex-shrink-0"
                    style={{ background: item.product.image }}
                  ></div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-[#3D2314] text-sm truncate">{item.product.name}</h4>
                    <p className="text-xs text-[#8B5E3C]">{item.product.weight}</p>
                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center border border-[#E8D5B7] rounded-full overflow-hidden">
                        <button 
                          onClick={() => onUpdateQuantity(item.product.id, item.quantity - 1)}
                          className="w-7 h-7 flex items-center justify-center text-[#6B4226] hover:bg-[#F5EDE4] text-sm transition-colors"
                        >
                          −
                        </button>
                        <span className="w-7 text-center text-xs font-semibold text-[#3D2314]">{item.quantity}</span>
                        <button 
                          onClick={() => onUpdateQuantity(item.product.id, item.quantity + 1)}
                          className="w-7 h-7 flex items-center justify-center text-[#6B4226] hover:bg-[#F5EDE4] text-sm transition-colors"
                        >
                          +
                        </button>
                      </div>
                      <span className="font-semibold text-[#3D2314] text-sm">
                        ${(item.product.price * item.quantity).toFixed(2)}
                      </span>
                    </div>
                  </div>
                  <button 
                    onClick={() => onRemoveItem(item.product.id)}
                    className="self-start p-1 text-[#A0876E] hover:text-[#6B4226] transition-colors"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer with totals */}
        {items.length > 0 && (
          <div className="border-t border-[#E8D5B7] p-5 space-y-3">
            <div className="flex justify-between text-sm text-[#8B5E3C]">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-sm text-[#8B5E3C]">
              <span>Shipping</span>
              <span>{shipping === 0 ? <span className="text-green-600 font-medium">Free</span> : `$${shipping.toFixed(2)}`}</span>
            </div>
            {subtotal < 35 && (
              <p className="text-xs text-[#C4956A]">Add ${(35 - subtotal).toFixed(2)} more for free shipping!</p>
            )}
            <div className="flex justify-between text-lg font-bold text-[#3D2314] pt-2 border-t border-[#E8D5B7]">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
            <button
              onClick={onCheckout}
              className="w-full py-3.5 bg-[#6B4226] text-white font-semibold rounded-full hover:bg-[#8B5E3C] active:scale-[0.98] transition-all shadow-md hover:shadow-lg mt-2"
            >
              Proceed to Checkout
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

// ============ CHECKOUT MODAL ============
function Checkout({ 
  isOpen, 
  onClose, 
  items, 
  onComplete 
}: { 
  isOpen: boolean; 
  onClose: () => void;
  items: CartItem[];
  onComplete: () => void;
}) {
  const [step, setStep] = useState<'form' | 'success'>('form');
  const [formData, setFormData] = useState({
    name: '', email: '', address: '', city: '', zip: '', card: '', expiry: '', cvv: ''
  });

  const subtotal = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const shipping = subtotal >= 35 ? 0 : 5.99;
  const total = subtotal + shipping;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('success');
    setTimeout(() => {
      onComplete();
      setStep('form');
      setFormData({ name: '', email: '', address: '', city: '', zip: '', card: '', expiry: '', cvv: '' });
    }, 3000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
      <div 
        className="relative bg-[#FDF8F3] rounded-3xl max-w-lg w-full max-h-[90vh] overflow-y-auto shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {step === 'success' ? (
          <div className="p-8 sm:p-12 text-center">
            <div className="w-20 h-20 mx-auto rounded-full bg-green-100 flex items-center justify-center mb-6">
              <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-[#3D2314] mb-2">Order Confirmed!</h2>
            <p className="text-[#8B5E3C]">Thank you for your purchase. Your coffee is being prepared with care.</p>
            <p className="text-sm text-[#A0876E] mt-4">Order #KYP-{Math.random().toString(36).substr(2, 8).toUpperCase()}</p>
          </div>
        ) : (
          <>
            {/* Close button */}
            <button 
              onClick={onClose}
              className="absolute top-4 right-4 z-10 w-8 h-8 bg-[#F5EDE4] rounded-full flex items-center justify-center text-[#6B4226] hover:bg-[#E8D5B7] transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="p-6 sm:p-8">
              <h2 className="text-2xl font-bold text-[#3D2314] mb-6">Checkout</h2>

              {/* Order summary */}
              <div className="bg-white rounded-xl p-4 border border-[#E8D5B7]/50 mb-6">
                <h3 className="text-sm font-semibold text-[#6B4226] uppercase tracking-wider mb-3">Order Summary</h3>
                {items.map(item => (
                  <div key={item.product.id} className="flex justify-between text-sm py-1">
                    <span className="text-[#5C3D2E]">{item.product.name} × {item.quantity}</span>
                    <span className="text-[#3D2314] font-medium">${(item.product.price * item.quantity).toFixed(2)}</span>
                  </div>
                ))}
                <div className="border-t border-[#E8D5B7] mt-2 pt-2 flex justify-between font-bold text-[#3D2314]">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-[#6B4226] mb-1">Full Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-4 py-2.5 bg-white border border-[#E8D5B7] rounded-xl text-sm text-[#3D2314] focus:outline-none focus:ring-2 focus:ring-[#C4956A]/50 focus:border-[#C4956A]"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#6B4226] mb-1">Email</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-4 py-2.5 bg-white border border-[#E8D5B7] rounded-xl text-sm text-[#3D2314] focus:outline-none focus:ring-2 focus:ring-[#C4956A]/50 focus:border-[#C4956A]"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#6B4226] mb-1">Shipping Address</label>
                  <input
                    type="text"
                    required
                    value={formData.address}
                    onChange={(e) => setFormData({...formData, address: e.target.value})}
                    className="w-full px-4 py-2.5 bg-white border border-[#E8D5B7] rounded-xl text-sm text-[#3D2314] focus:outline-none focus:ring-2 focus:ring-[#C4956A]/50 focus:border-[#C4956A]"
                    placeholder="123 Coffee Lane"
                  />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-sm font-medium text-[#6B4226] mb-1">City</label>
                    <input
                      type="text"
                      required
                      value={formData.city}
                      onChange={(e) => setFormData({...formData, city: e.target.value})}
                      className="w-full px-4 py-2.5 bg-white border border-[#E8D5B7] rounded-xl text-sm text-[#3D2314] focus:outline-none focus:ring-2 focus:ring-[#C4956A]/50 focus:border-[#C4956A]"
                      placeholder="Portland"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#6B4226] mb-1">ZIP Code</label>
                    <input
                      type="text"
                      required
                      value={formData.zip}
                      onChange={(e) => setFormData({...formData, zip: e.target.value})}
                      className="w-full px-4 py-2.5 bg-white border border-[#E8D5B7] rounded-xl text-sm text-[#3D2314] focus:outline-none focus:ring-2 focus:ring-[#C4956A]/50 focus:border-[#C4956A]"
                      placeholder="97201"
                    />
                  </div>
                </div>

                <div className="pt-4 border-t border-[#E8D5B7]">
                  <h3 className="text-sm font-semibold text-[#6B4226] uppercase tracking-wider mb-3">Payment</h3>
                  <div className="space-y-3">
                    <div>
                      <label className="block text-sm font-medium text-[#6B4226] mb-1">Card Number</label>
                      <input
                        type="text"
                        required
                        value={formData.card}
                        onChange={(e) => setFormData({...formData, card: e.target.value})}
                        className="w-full px-4 py-2.5 bg-white border border-[#E8D5B7] rounded-xl text-sm text-[#3D2314] focus:outline-none focus:ring-2 focus:ring-[#C4956A]/50 focus:border-[#C4956A]"
                        placeholder="4242 4242 4242 4242"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-sm font-medium text-[#6B4226] mb-1">Expiry</label>
                        <input
                          type="text"
                          required
                          value={formData.expiry}
                          onChange={(e) => setFormData({...formData, expiry: e.target.value})}
                          className="w-full px-4 py-2.5 bg-white border border-[#E8D5B7] rounded-xl text-sm text-[#3D2314] focus:outline-none focus:ring-2 focus:ring-[#C4956A]/50 focus:border-[#C4956A]"
                          placeholder="MM/YY"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-[#6B4226] mb-1">CVV</label>
                        <input
                          type="text"
                          required
                          value={formData.cvv}
                          onChange={(e) => setFormData({...formData, cvv: e.target.value})}
                          className="w-full px-4 py-2.5 bg-white border border-[#E8D5B7] rounded-xl text-sm text-[#3D2314] focus:outline-none focus:ring-2 focus:ring-[#C4956A]/50 focus:border-[#C4956A]"
                          placeholder="123"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 bg-[#6B4226] text-white font-semibold rounded-full hover:bg-[#8B5E3C] active:scale-[0.98] transition-all shadow-md hover:shadow-lg mt-4"
                >
                  Place Order — ${total.toFixed(2)}
                </button>
                <p className="text-xs text-center text-[#A0876E]">This is a simulated checkout. No real payment will be processed.</p>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

// ============ FOOTER ============
function Footer() {
  return (
    <footer className="bg-[#3D2314] text-[#E8D5B7] mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#C4956A] to-[#DEB887] flex items-center justify-center">
                <span className="text-sm">☕</span>
              </div>
              <span className="font-bold text-white">Kaypuna</span>
            </div>
            <p className="text-sm text-[#A0876E] leading-relaxed">
              Specialty coffee roasted with passion. From bean to cup, we craft exceptional experiences.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-3 text-sm">Shop</h4>
            <ul className="space-y-2 text-sm text-[#A0876E]">
              <li className="hover:text-[#DEB887] cursor-pointer transition-colors">Single Origin</li>
              <li className="hover:text-[#DEB887] cursor-pointer transition-colors">Blends</li>
              <li className="hover:text-[#DEB887] cursor-pointer transition-colors">Subscriptions</li>
              <li className="hover:text-[#DEB887] cursor-pointer transition-colors">Gift Cards</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-3 text-sm">Learn</h4>
            <ul className="space-y-2 text-sm text-[#A0876E]">
              <li className="hover:text-[#DEB887] cursor-pointer transition-colors">Brewing Guides</li>
              <li className="hover:text-[#DEB887] cursor-pointer transition-colors">Our Story</li>
              <li className="hover:text-[#DEB887] cursor-pointer transition-colors">Sustainability</li>
              <li className="hover:text-[#DEB887] cursor-pointer transition-colors">Blog</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-3 text-sm">Connect</h4>
            <ul className="space-y-2 text-sm text-[#A0876E]">
              <li className="hover:text-[#DEB887] cursor-pointer transition-colors">Instagram</li>
              <li className="hover:text-[#DEB887] cursor-pointer transition-colors">Twitter</li>
              <li className="hover:text-[#DEB887] cursor-pointer transition-colors">Newsletter</li>
              <li className="hover:text-[#DEB887] cursor-pointer transition-colors">Contact Us</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-[#5C3D2E] mt-8 pt-8 text-center text-sm text-[#A0876E]">
          <p>© 2026 Kaypuna Coffee. All rights reserved. Crafted with ♥ and caffeine.</p>
        </div>
      </div>
    </footer>
  );
}

// ============ TOAST NOTIFICATION ============
function Toast({ message, isVisible }: { message: string; isVisible: boolean }) {
  if (!isVisible) return null;
  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[60] animate-toast-in">
      <div className="bg-[#3D2314] text-white px-5 py-3 rounded-full shadow-lg flex items-center gap-2 text-sm font-medium">
        <svg className="w-4 h-4 text-[#C4956A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
        {message}
      </div>
    </div>
  );
}

// ============ MAIN APP ============
export default function App() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedRoast, setSelectedRoast] = useState('All');
  const [toast, setToast] = useState({ message: '', visible: false });

  // Filter products
  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.origin.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.notes.some(n => n.toLowerCase().includes(searchQuery.toLowerCase()));
      const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
      const matchesRoast = selectedRoast === 'All' || product.roast === selectedRoast;
      return matchesSearch && matchesCategory && matchesRoast;
    });
  }, [searchQuery, selectedCategory, selectedRoast]);

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  const showToast = (message: string) => {
    setToast({ message, visible: true });
    setTimeout(() => setToast({ message: '', visible: false }), 2500);
  };

  const addToCart = (product: Product, quantity = 1) => {
    setCart(prev => {
      const existing = prev.find(item => item.product.id === product.id);
      if (existing) {
        return prev.map(item =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { product, quantity }];
    });
    showToast(`${product.name} added to cart`);
  };

  const updateQuantity = (productId: number, newQuantity: number) => {
    if (newQuantity <= 0) {
      setCart(prev => prev.filter(item => item.product.id !== productId));
    } else {
      setCart(prev => prev.map(item =>
        item.product.id === productId ? { ...item, quantity: newQuantity } : item
      ));
    }
  };

  const removeItem = (productId: number) => {
    setCart(prev => prev.filter(item => item.product.id !== productId));
  };

  const handleCheckout = () => {
    setIsCartOpen(false);
    setIsCheckoutOpen(true);
  };

  const handleCheckoutComplete = () => {
    setIsCheckoutOpen(false);
    setCart([]);
    showToast('Order placed successfully! 🎉');
  };

  return (
    <div className="min-h-screen bg-[#FDF8F3]">
      <Header 
        cartCount={cartCount} 
        onCartClick={() => setIsCartOpen(true)} 
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />
      
      <Hero />

      {/* Products Section */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        <div className="flex items-end justify-between mb-6">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#3D2314]">Our Coffees</h2>
            <p className="text-[#8B5E3C] mt-1">Discover your perfect cup</p>
          </div>
          <span className="text-sm text-[#A0876E]">{filteredProducts.length} coffee{filteredProducts.length !== 1 ? 's' : ''}</span>
        </div>

        <FilterBar 
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
          selectedRoast={selectedRoast}
          onRoastChange={setSelectedRoast}
        />

        {filteredProducts.length === 0 ? (
          <div className="text-center py-16">
            <div className="w-16 h-16 mx-auto rounded-full bg-[#F5EDE4] flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-[#C4956A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <p className="text-[#8B5E3C] font-medium">No coffees found</p>
            <p className="text-sm text-[#A0876E] mt-1">Try adjusting your search or filters</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredProducts.map(product => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={addToCart}
                onViewDetails={setSelectedProduct}
              />
            ))}
          </div>
        )}
      </main>

      <Footer />

      {/* Modals */}
      {selectedProduct && (
        <ProductDetail 
          product={selectedProduct} 
          onClose={() => setSelectedProduct(null)}
          onAddToCart={addToCart}
        />
      )}

      <Cart 
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cart}
        onUpdateQuantity={updateQuantity}
        onRemoveItem={removeItem}
        onCheckout={handleCheckout}
      />

      <Checkout 
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        items={cart}
        onComplete={handleCheckoutComplete}
      />

      <Toast message={toast.message} isVisible={toast.visible} />
    </div>
  );
}
