import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { ShoppingBag, Menu, X, User } from "lucide-react";
import { useCart } from "../context/CartContext";
import { siteInfo } from "../data/products";

const links = [
  { to: "/shop", label: "All Shoes" },
  { to: "/shop?cat=Men", label: "Men" },
  { to: "/shop?cat=Women", label: "Women" },
  { to: "/shop?cat=Kids", label: "Kids" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { count } = useCart();

  return (
    <header className="sticky top-0 z-40 bg-cream/95 backdrop-blur border-b border-stitch">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-20">
        <Link to="/" className="font-display text-2xl sm:text-3xl tracking-tight text-charcoal">
          {siteInfo.brand}
        </Link>

        <nav className="hidden lg:flex items-center gap-8 font-body text-sm uppercase tracking-wide">
          {links.map((l) => (
            <NavLink
              key={l.label}
              to={l.to}
              className={({ isActive }) =>
                `pb-1 border-b-2 transition-colors ${
                  isActive ? "border-gold text-leatherDark" : "border-transparent hover:text-leather"
                }`
              }
              end={l.to === "/shop"}
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Link
            to="/login"
            className="hidden sm:flex items-center gap-1 text-sm hover:text-leather"
            aria-label="Account"
          >
            <User size={20} />
          </Link>
          <Link to="/cart" className="relative flex items-center gap-1" aria-label="Cart">
            <ShoppingBag size={22} />
            {count > 0 && (
              <span className="absolute -top-2 -right-2 bg-leatherDark text-cream text-[10px] rounded-full w-5 h-5 flex items-center justify-center">
                {count}
              </span>
            )}
          </Link>
          <button
            className="lg:hidden"
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="lg:hidden border-t border-stitch bg-cream px-4 py-4 flex flex-col gap-4 text-sm uppercase tracking-wide">
          {links.map((l) => (
            <Link key={l.label} to={l.to} onClick={() => setOpen(false)}>
              {l.label}
            </Link>
          ))}
          <Link to="/login" onClick={() => setOpen(false)}>
            Login / Sign Up
          </Link>
        </nav>
      )}
    </header>
  );
}
