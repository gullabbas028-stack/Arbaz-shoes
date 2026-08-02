import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { siteInfo } from "../data/products";
import SmartImage from "../components/SmartImage";

export default function Cart() {
  const { items, subtotal, removeItem, updateQty } = useCart();

  const whatsappMessage = encodeURIComponent(
    `Hi ${siteInfo.brand}, I'd like to place an order:\n` +
      items.map((i) => `${i.name} (${i.color}) x${i.qty}`).join("\n") +
      `\nTotal: Rs. ${subtotal.toLocaleString()}`
  );

  if (items.length === 0) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-24 text-center">
        <h1 className="font-display text-3xl mb-4">Your cart is empty</h1>
        <p className="text-charcoal/60 mb-8">Looks like you haven't added anything yet.</p>
        <Link
          to="/shop"
          className="inline-block bg-charcoal text-cream px-8 py-4 uppercase text-sm tracking-widest hover:bg-leatherDark transition-colors"
        >
          Start Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
      <h1 className="font-display text-4xl mb-10">Your Cart</h1>

      <div className="grid lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 space-y-6">
          {items.map((item) => (
            <div key={item.lineId} className="flex gap-4 border-b border-stitch pb-6">
              <SmartImage
                src={item.image}
                alt={item.name}
                className="w-24 h-24 object-cover rounded-sm bg-stitch/30"
              />
              <div className="flex-1">
                <h3 className="font-display text-lg">{item.name}</h3>
                <p className="text-sm text-charcoal/60 mb-2">Color: {item.color}</p>
                <div className="flex items-center gap-4">
                  <div className="flex items-center border border-stitch w-fit">
                    <button
                      onClick={() => updateQty(item.lineId, item.qty - 1)}
                      className="px-3 py-1 hover:bg-stitch/30"
                    >
                      −
                    </button>
                    <span className="px-3 font-mono text-sm">{item.qty}</span>
                    <button
                      onClick={() => updateQty(item.lineId, item.qty + 1)}
                      className="px-3 py-1 hover:bg-stitch/30"
                    >
                      +
                    </button>
                  </div>
                  <button
                    onClick={() => removeItem(item.lineId)}
                    className="text-sm text-charcoal/50 hover:text-leatherDark underline"
                  >
                    Remove
                  </button>
                </div>
              </div>
              <p className="font-mono text-leatherDark">
                Rs. {(item.price * item.qty).toLocaleString()}
              </p>
            </div>
          ))}
        </div>

        <div className="border border-stitch p-6 h-fit">
          <h2 className="font-display text-xl mb-4">Order Summary</h2>
          <div className="flex justify-between text-sm mb-2">
            <span>Subtotal</span>
            <span className="font-mono">Rs. {subtotal.toLocaleString()}</span>
          </div>
          <div className="flex justify-between text-sm mb-4 text-charcoal/60">
            <span>Shipping</span>
            <span>Calculated at checkout</span>
          </div>
          <div className="stitch-divider my-4" />
          <div className="flex justify-between font-display text-lg mb-6">
            <span>Total</span>
            <span>Rs. {subtotal.toLocaleString()}</span>
          </div>
          <a
            href={`https://wa.me/${siteInfo.whatsapp}?text=${whatsappMessage}`}
            target="_blank"
            rel="noreferrer"
            className="block text-center bg-charcoal text-cream px-6 py-4 uppercase text-sm tracking-widest hover:bg-leatherDark transition-colors"
          >
            Checkout via WhatsApp
          </a>
          <p className="text-xs text-charcoal/50 mt-3 text-center">
            Cash on Delivery available across Pakistan.
          </p>
        </div>
      </div>
    </div>
  );
}
