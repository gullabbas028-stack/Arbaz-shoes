import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="max-w-xl mx-auto px-4 py-32 text-center">
      <h1 className="font-display text-6xl mb-4 text-leatherDark">404</h1>
      <p className="text-charcoal/70 mb-8">This page walked off somewhere. Let's get you back on track.</p>
      <Link to="/" className="bg-charcoal text-cream px-8 py-4 uppercase text-sm tracking-widest hover:bg-leatherDark transition-colors">
        Back to Home
      </Link>
    </div>
  );
}
