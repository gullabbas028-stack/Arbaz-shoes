import { Link } from "react-router-dom";
import {
  FacebookIcon as Facebook,
  InstagramIcon as Instagram,
  LinkedinIcon as Linkedin,
  GithubIcon as Github,
  GlobeIcon as Globe,
} from "./BrandIcons";
import { siteInfo } from "../data/products";

export default function Footer() {
  return (
    <footer className="bg-charcoal text-cream mt-24">
      <div className="stitch-divider" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <h3 className="font-display text-2xl mb-3">{siteInfo.brand}</h3>
          <p className="text-cream/70 text-sm leading-relaxed">{siteInfo.tagline}</p>
          <div className="flex gap-4 mt-5">
            <a href={siteInfo.social.facebook} target="_blank" rel="noreferrer" aria-label="Facebook">
              <Facebook size={18} className="hover:text-gold" />
            </a>
            <a href={siteInfo.social.instagram} target="_blank" rel="noreferrer" aria-label="Instagram">
              <Instagram size={18} className="hover:text-gold" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="uppercase text-xs tracking-widest text-gold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm text-cream/80">
            <li><Link to="/shop" className="hover:text-cream">Shop All</Link></li>
            <li><Link to="/about" className="hover:text-cream">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-cream">Contact</Link></li>
            <li><Link to="/login" className="hover:text-cream">My Account</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="uppercase text-xs tracking-widest text-gold mb-4">Customer Care</h4>
          <ul className="space-y-2 text-sm text-cream/80">
            <li>Helpline: {siteInfo.phone}</li>
            <li>{siteInfo.email}</li>
            <li>{siteInfo.address}</li>
          </ul>
        </div>

        <div>
          <h4 className="uppercase text-xs tracking-widest text-gold mb-4">Developer</h4>
          <p className="text-sm text-cream/80 mb-3">
            Designed &amp; built by <span className="text-cream">{siteInfo.developer.name}</span>
          </p>
          <ul className="space-y-2 text-sm">
            <li>
              <a
                href={siteInfo.developer.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-cream/80 hover:text-gold"
              >
                <Linkedin size={16} /> LinkedIn
              </a>
            </li>
            <li>
              <a
                href={siteInfo.developer.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-cream/80 hover:text-gold"
              >
                <Github size={16} /> GitHub
              </a>
            </li>
            <li>
              <a
                href={siteInfo.developer.portfolio}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-cream/80 hover:text-gold"
              >
                <Globe size={16} /> Portfolio
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="text-center text-xs text-cream/50 pb-6">
        © {new Date().getFullYear()} {siteInfo.brand}. All rights reserved.
      </div>
    </footer>
  );
}
