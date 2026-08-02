import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { products, categories } from "../data/products";

export default function Shop() {
  const [params, setParams] = useSearchParams();
  const activeCat = params.get("cat") || "All";
  const [type, setType] = useState("All");
  const [sort, setSort] = useState("featured");

  const types = useMemo(() => {
    const pool = activeCat === "All" ? products : products.filter((p) => p.category === activeCat);
    return ["All", ...new Set(pool.map((p) => p.type))];
  }, [activeCat]);

  const filtered = useMemo(() => {
    let list = [...products];
    if (activeCat !== "All") list = list.filter((p) => p.category === activeCat);
    if (type !== "All") list = list.filter((p) => p.type === type);
    if (sort === "price-asc") list.sort((a, b) => a.price - b.price);
    if (sort === "price-desc") list.sort((a, b) => b.price - a.price);
    return list;
  }, [activeCat, type, sort]);

  const setCat = (cat) => {
    setType("All");
    if (cat === "All") {
      params.delete("cat");
      setParams(params);
    } else {
      setParams({ cat });
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
      <h1 className="font-display text-4xl mb-2">
        {activeCat === "All" ? "All Shoes" : `${activeCat}'s Footwear`}
      </h1>
      <p className="text-charcoal/60 mb-8">{filtered.length} products</p>

      <div className="flex flex-col md:flex-row gap-8">
        <aside className="md:w-56 shrink-0">
          <div className="mb-8">
            <h3 className="uppercase text-xs tracking-widest text-olive mb-3">Category</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => setCat("All")}
                  className={`hover:text-leather ${activeCat === "All" ? "text-leatherDark font-semibold" : ""}`}
                >
                  All
                </button>
              </li>
              {categories.map((c) => (
                <li key={c}>
                  <button
                    onClick={() => setCat(c)}
                    className={`hover:text-leather ${activeCat === c ? "text-leatherDark font-semibold" : ""}`}
                  >
                    {c}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="uppercase text-xs tracking-widest text-olive mb-3">Type</h3>
            <ul className="space-y-2 text-sm">
              {types.map((t) => (
                <li key={t}>
                  <button
                    onClick={() => setType(t)}
                    className={`hover:text-leather ${type === t ? "text-leatherDark font-semibold" : ""}`}
                  >
                    {t}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        <div className="flex-1">
          <div className="flex justify-end mb-6">
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="border border-stitch bg-white px-3 py-2 text-sm focus:outline-none focus:border-gold"
            >
              <option value="featured">Sort: Featured</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
            </select>
          </div>

          {filtered.length === 0 ? (
            <p className="text-charcoal/60">No products match these filters yet.</p>
          ) : (
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-5">
              {filtered.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
