import { siteInfo } from "../data/products";

export default function About() {
  return (
    <div>
      <section className="bg-charcoal text-cream py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <p className="uppercase tracking-[0.3em] text-gold text-xs mb-4">Our Story</p>
          <h1 className="font-display text-4xl sm:text-5xl">About {siteInfo.brand}</h1>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-4 sm:px-6 py-16 space-y-6 text-charcoal/80 leading-relaxed">
        <p>
          {siteInfo.brand} started with a simple idea: Pakistani feet deserve footwear that's
          built for Pakistani weather, Pakistani streets, and Pakistani budgets — without giving
          up on comfort or craftsmanship.
        </p>
        <p>
          Every pair is designed in-house and produced with local artisans across Lahore, blending
          traditional leatherwork like the Peshawari chappal with modern comfort engineering —
          cushioned insoles, breathable linings, and soles that hold up to daily wear.
        </p>
        <p>
          From office formals to wedding classics, playground-ready kids' shoes to everyday
          sandals, we design every collection around how our customers actually live — long
          commutes, hot summers, and everything in between.
        </p>
        <p>
          We ship nationwide with Cash on Delivery, easy 7-day returns, and a support team that
          actually replies. That's the whole promise.
        </p>
      </section>

      <section className="bg-stitch/20 py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 grid sm:grid-cols-3 gap-8 text-center">
          {[
            { n: "50,000+", l: "Pairs Delivered" },
            { n: "30+", l: "Cities Across Pakistan" },
            { n: "4.7 / 5", l: "Average Customer Rating" },
          ].map((s) => (
            <div key={s.l}>
              <p className="font-display text-4xl text-leatherDark mb-2">{s.n}</p>
              <p className="text-sm uppercase tracking-widest text-olive">{s.l}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
