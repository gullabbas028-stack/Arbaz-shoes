import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [tab, setTab] = useState("login");
  const [done, setDone] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setDone(true);
    setTimeout(() => navigate("/"), 1200);
  };

  return (
    <div className="max-w-md mx-auto px-4 py-20">
      <div className="flex border-b border-stitch mb-10">
        {["login", "signup"].map((t) => (
          <button
            key={t}
            onClick={() => {
              setTab(t);
              setDone(false);
            }}
            className={`flex-1 pb-3 uppercase text-sm tracking-widest border-b-2 ${
              tab === t ? "border-gold text-leatherDark" : "border-transparent text-charcoal/50"
            }`}
          >
            {t === "login" ? "Log In" : "Sign Up"}
          </button>
        ))}
      </div>

      {done ? (
        <p className="text-center text-olive">
          {tab === "login" ? "Logged in" : "Account created"} — welcome to {"Arbaz Shoes"}!
          Redirecting you home…
        </p>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          {tab === "signup" && (
            <div>
              <label className="block text-xs uppercase tracking-widest text-olive mb-2">
                Full Name
              </label>
              <input
                required
                className="w-full border border-stitch bg-white px-4 py-3 focus:outline-none focus:border-gold"
              />
            </div>
          )}
          <div>
            <label className="block text-xs uppercase tracking-widest text-olive mb-2">Email</label>
            <input
              required
              type="email"
              className="w-full border border-stitch bg-white px-4 py-3 focus:outline-none focus:border-gold"
            />
          </div>
          <div>
            <label className="block text-xs uppercase tracking-widest text-olive mb-2">
              Password
            </label>
            <input
              required
              type="password"
              minLength={6}
              className="w-full border border-stitch bg-white px-4 py-3 focus:outline-none focus:border-gold"
            />
          </div>
          <button className="w-full bg-charcoal text-cream px-8 py-4 uppercase text-sm tracking-widest hover:bg-leatherDark transition-colors">
            {tab === "login" ? "Log In" : "Create Account"}
          </button>
          <p className="text-xs text-center text-charcoal/50">
            This is a demo account flow — no real data is stored.
          </p>
        </form>
      )}
    </div>
  );
}
