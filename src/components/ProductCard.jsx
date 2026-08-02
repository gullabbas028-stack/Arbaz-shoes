import { Link } from "react-router-dom";
import SmartImage from "./SmartImage";

export default function ProductCard({ product }) {
  return (
    <Link
      to={`/product/${product.id}`}
      className="group block bg-white/60 border border-stitch rounded-sm overflow-hidden hover:shadow-lg transition-shadow"
    >
      <div className="relative aspect-square overflow-hidden bg-stitch/30">
        <SmartImage
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {product.badge && (
          <span className="absolute top-3 left-3 bg-charcoal text-cream text-[10px] uppercase tracking-widest px-2 py-1">
            {product.badge}
          </span>
        )}
      </div>
      <div className="p-4">
        <p className="text-xs uppercase tracking-widest text-olive mb-1">{product.type}</p>
        <h3 className="font-display text-lg leading-snug mb-2">{product.name}</h3>
        <div className="flex items-center gap-2 font-mono text-sm">
          <span className="text-leatherDark">Rs. {product.price.toLocaleString()}</span>
          {product.oldPrice && (
            <span className="line-through text-charcoal/40">
              Rs. {product.oldPrice.toLocaleString()}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}
