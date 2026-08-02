import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import ProductCard from "../components/ProductCard";
import SmartImage from "../components/SmartImage";
import { products, testimonials, siteInfo } from "../data/products";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

function Rail({ title, category, cta }) {
  const items = products.filter((p) => p.category === category).slice(0, 4);
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
      <div className="flex items-end justify-between mb-8">
        <h2 className="font-display text-3xl sm:text-4xl">{title}</h2>
        <Link
          to={`/shop?cat=${category}`}
          className="text-sm uppercase tracking-widest border-b-2 border-gold pb-1 hover:text-leather"
        >
          {cta}
        </Link>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
        {items.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative bg-charcoal text-cream overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-24 sm:py-32 grid lg:grid-cols-2 gap-10 items-center">
          <motion.div initial="hidden" animate="show" variants={fadeUp}>
            <p className="uppercase tracking-[0.3em] text-gold text-xs mb-4">
              SS26 Collection — Live Now
            </p>
            <h1 className="font-display text-4xl sm:text-6xl leading-tight mb-6">
              {siteInfo.tagline}
            </h1>
            <p className="text-cream/70 mb-8 max-w-md">
              Handcrafted comfort for men, women &amp; kids — made for Pakistani streets,
              offices and everything in between.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/shop?cat=Men"
                className="bg-gold text-charcoal px-6 py-3 uppercase text-sm tracking-widest hover:bg-cream transition-colors"
              >
                Shop Men
              </Link>
              <Link
                to="/shop?cat=Women"
                className="border border-cream/40 px-6 py-3 uppercase text-sm tracking-widest hover:border-gold hover:text-gold transition-colors"
              >
                Shop Women
              </Link>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="relative aspect-[4/3] rounded-sm overflow-hidden border border-cream/10"
          >
            <SmartImage
              src="https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=1200&q=80"
              alt="Featured Arbaz Shoes footwear"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
        <div className="stitch-divider" />
      </section>

      {/* Category tiles */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16 grid sm:grid-cols-3 gap-5">
        {[
          { cat: "Men", img: "https://images.unsplash.com/photo-1614253429340-98b3fb1414c8?auto=format&fit=crop&w=800&q=80" },
          { cat: "Women", img: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=800&q=80" },
          { cat: "Kids", img: "https://images.unsplash.com/photo-1518002171953-a080ee817e1f?auto=format&fit=crop&w=800&q=80" },
        ].map((c) => (
          <Link
            key={c.cat}
            to={`/shop?cat=${c.cat}`}
            className="group relative aspect-[4/5] overflow-hidden rounded-sm"
          >
            <SmartImage
              src={c.img}
              alt={`Shop ${c.cat}`}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-charcoal/30 group-hover:bg-charcoal/10 transition-colors" />
            <span className="absolute bottom-5 left-5 font-display text-2xl text-cream uppercase tracking-wide">
              {c.cat}
            </span>
          </Link>
        ))}
      </section>

      <Rail title="New In Men" category="Men" cta="View All Men" />
      <Rail title="New In Women" category="Women" cta="View All Women" />
      <Rail title="New In Kids" category="Kids" cta="View All Kids" />

      {/* Testimonials */}
      <section className="bg-leatherDark text-cream py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-3xl sm:text-4xl mb-12 text-center">Happy Customers</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="border border-cream/15 p-6 rounded-sm">
                <p className="text-cream/90 mb-4 leading-relaxed">&ldquo;{t.text}&rdquo;</p>
                <p className="text-gold text-sm uppercase tracking-wide">{t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 py-20 text-center">
        <h2 className="font-display text-3xl mb-3">Keep Me Updated</h2>
        <p className="text-charcoal/70 mb-8">
          Get exclusive promotions, early drops and private sales in your inbox.
        </p>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex flex-col sm:flex-row gap-3 justify-center"
        >
          <input
            type="email"
            required
            placeholder="Your email address"
            className="border border-stitch bg-white px-4 py-3 flex-1 max-w-sm focus:outline-none focus:border-gold"
          />
          <button className="bg-charcoal text-cream px-6 py-3 uppercase text-sm tracking-widest hover:bg-leatherDark transition-colors">
            Subscribe
          </button>
        </form>
      </section>
    </div>
  );
}
