import { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { products } from "../data/products";
import { useCart } from "../context/CartContext";
import ProductCard from "../components/ProductCard";
import SmartImage from "../components/SmartImage";

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find((p) => p.id === id);
  const { addItem } = useCart();

  const [color, setColor] = useState(product?.colors?.[0]);
  const [qty, setQty] = useState(1);
  const [activeImg, setActiveImg] = useState(0);
  const [added, setAdded] = useState(false);

  if (!product) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-24 text-center">
        <h1 className="font-display text-3xl mb-4">Product not found</h1>
        <Link to="/shop" className="underline text-leather">
          Back to shop
        </Link>
      </div>
    );
  }

  const related = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

  const handleAdd = () => {
    addItem(product, color, qty);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
      <button onClick={() => navigate(-1)} className="text-sm text-charcoal/60 hover:text-leather mb-8">
        ← Back
      </button>

      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <div className="aspect-square bg-stitch/30 overflow-hidden rounded-sm mb-3">
            <SmartImage
              src={product.gallery[activeImg] || product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>
          {product.gallery.length > 1 && (
            <div className="flex gap-3">
              {product.gallery.map((g, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImg(i)}
                  className={`w-16 h-16 overflow-hidden rounded-sm border-2 ${
                    activeImg === i ? "border-gold" : "border-transparent"
                  }`}
                >
                  <SmartImage src={g} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>

        <div>
          <p className="text-xs uppercase tracking-widest text-olive mb-2">
            {product.category} / {product.type}
          </p>
          <h1 className="font-display text-4xl mb-4">{product.name}</h1>
          <div className="flex items-center gap-3 font-mono text-lg mb-6">
            <span className="text-leatherDark">Rs. {product.price.toLocaleString()}</span>
            {product.oldPrice && (
              <span className="line-through text-charcoal/40 text-base">
                Rs. {product.oldPrice.toLocaleString()}
              </span>
            )}
          </div>
          <p className="text-charcoal/70 leading-relaxed mb-8">{product.description}</p>

          <div className="mb-6">
            <h3 className="uppercase text-xs tracking-widest text-olive mb-3">Color</h3>
            <div className="flex gap-2 flex-wrap">
              {product.colors.map((c) => (
                <button
                  key={c}
                  onClick={() => setColor(c)}
                  className={`px-4 py-2 border text-sm ${
                    color === c
                      ? "border-charcoal bg-charcoal text-cream"
                      : "border-stitch hover:border-leather"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          <div className="mb-8">
            <h3 className="uppercase text-xs tracking-widest text-olive mb-3">Quantity</h3>
            <div className="flex items-center border border-stitch w-fit">
              <button
                onClick={() => setQty((q) => Math.max(1, q - 1))}
                className="px-4 py-2 hover:bg-stitch/30"
                aria-label="Decrease quantity"
              >
                −
              </button>
              <span className="px-4 font-mono">{qty}</span>
              <button
                onClick={() => setQty((q) => q + 1)}
                className="px-4 py-2 hover:bg-stitch/30"
                aria-label="Increase quantity"
              >
                +
              </button>
            </div>
          </div>

          <button
            onClick={handleAdd}
            className="w-full sm:w-auto bg-charcoal text-cream px-8 py-4 uppercase text-sm tracking-widest hover:bg-leatherDark transition-colors"
          >
            {added ? "Added to Cart ✓" : "Add to Cart"}
          </button>
        </div>
      </div>

      {related.length > 0 && (
        <section className="mt-24">
          <h2 className="font-display text-2xl mb-6">You May Also Like</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-5">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
