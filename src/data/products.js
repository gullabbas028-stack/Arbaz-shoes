// Centralized data layer for Arbaz Shoes
// Image sources: Unsplash (free-to-use, hotlinked). Swap with your own product
// photography before going live — see README for instructions.

export const categories = ["Men", "Women", "Kids"];

export const products = [
  // ---------------- MEN ----------------
  {
    id: "m-01",
    name: "Rehbar Formal Slip-On",
    category: "Men",
    type: "Formal",
    price: 6499,
    oldPrice: null,
    colors: ["Black", "Brown"],
    image:
      "https://images.unsplash.com/photo-1614252369475-531eba835eb1?auto=format&fit=crop&w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1614252369475-531eba835eb1?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1533867617858-e7b97e060509?auto=format&fit=crop&w=900&q=80",
    ],
    description:
      "A waterproof formal slip-on built for long office days — cushioned footbed, genuine leather upper, and a low-profile sole that keeps you comfortable from the morning commute to evening meetings.",
    badge: "New In",
  },
  {
    id: "m-02",
    name: "Sikander Banker Lace-Up",
    category: "Men",
    type: "Formal",
    price: 7299,
    oldPrice: 8999,
    colors: ["Dark Brown", "Black"],
    image:
      "https://images.unsplash.com/photo-1614253429340-98b3fb1414c8?auto=format&fit=crop&w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1614253429340-98b3fb1414c8?auto=format&fit=crop&w=900&q=80",
    ],
    description:
      "Classic banker lace-ups with a hand-finished leather upper and a stitched welt sole — a wardrobe staple for weddings, interviews, and Friday prayers alike.",
    badge: "Sale",
  },
  {
    id: "m-03",
    name: "Toofan Peshawari Chappal",
    category: "Men",
    type: "Casual",
    price: 3999,
    oldPrice: null,
    colors: ["Tan", "Black"],
    image:
      "https://images.unsplash.com/photo-1596703263926-eb0762ee17e4?auto=format&fit=crop&w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1596703263926-eb0762ee17e4?auto=format&fit=crop&w=900&q=80",
    ],
    description:
      "Hand-crafted Peshawari chappal in full-grain leather, made by local artisans — breathable, durable, and built for the Pakistani summer.",
    badge: "Bestseller",
  },
  {
    id: "m-04",
    name: "Fauji Flyknit Sneaker",
    category: "Men",
    type: "Sneaker",
    price: 8499,
    oldPrice: null,
    colors: ["Grey", "Navy", "Black"],
    image:
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=900&q=80",
    ],
    description:
      "Lightweight flyknit upper with a cushioned midsole for all-day walking — engineered for city streets and long shifts on your feet.",
    badge: "New In",
  },
  {
    id: "m-05",
    name: "Sahara Roma Sandal",
    category: "Men",
    type: "Sandal",
    price: 3499,
    oldPrice: null,
    colors: ["Black", "Tan"],
    image:
      "https://images.unsplash.com/photo-1603808033176-3e7f3435e0d4?auto=format&fit=crop&w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1603808033176-3e7f3435e0d4?auto=format&fit=crop&w=900&q=80",
    ],
    description:
      "An everyday sandal with extra arch support and a non-slip outsole — built for comfort on hot Lahore afternoons.",
    badge: null,
  },
  {
    id: "m-06",
    name: "Qaid Wedding Classic",
    category: "Men",
    type: "Wedding",
    price: 9999,
    oldPrice: 12999,
    colors: ["Black", "Maroon"],
    image:
      "https://images.unsplash.com/photo-1533867617858-e7b97e060509?auto=format&fit=crop&w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1533867617858-e7b97e060509?auto=format&fit=crop&w=900&q=80",
    ],
    description:
      "Hand-polished patent leather made for the big day — pairs perfectly with sherwanis and formal suits.",
    badge: "Sale",
  },

  // ---------------- WOMEN ----------------
  {
    id: "w-01",
    name: "Noor Birken Slipper",
    category: "Women",
    type: "Casual",
    price: 4999,
    oldPrice: null,
    colors: ["Rust", "Black", "Green"],
    image:
      "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=900&q=80",
    ],
    description:
      "A cushioned everyday slipper with a contoured footbed — the one you'll reach for around the house and out for chai.",
    badge: "New In",
  },
  {
    id: "w-02",
    name: "Zeenat Heeled Pump",
    category: "Women",
    type: "Heels",
    price: 5999,
    oldPrice: 7499,
    colors: ["Black", "Tan"],
    image:
      "https://images.unsplash.com/photo-1596703263926-eb0762ee17e4?auto=format&fit=crop&w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1596703263926-eb0762ee17e4?auto=format&fit=crop&w=900&q=80",
    ],
    description:
      "A comfort-first block heel designed for weddings and formal events — sturdy enough to dance in.",
    badge: "Sale",
  },
  {
    id: "w-03",
    name: "Hina Flat Mule",
    category: "Women",
    type: "Flats",
    price: 4499,
    oldPrice: null,
    colors: ["Black", "Beige"],
    image:
      "https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&w=900&q=80",
    ],
    description:
      "A minimal flat mule that goes from office to iftar dinners — soft lining, memory foam insole.",
    badge: null,
  },
  {
    id: "w-04",
    name: "Aiza Comfort Sneaker",
    category: "Women",
    type: "Sneaker",
    price: 6999,
    oldPrice: null,
    colors: ["White", "Blush"],
    image:
      "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=900&q=80",
    ],
    description:
      "A breathable knit sneaker built for daily walks and travel days — light enough to forget you're wearing it.",
    badge: "New In",
  },
  {
    id: "w-05",
    name: "Sana Sendai Sandal",
    category: "Women",
    type: "Sandal",
    price: 4299,
    oldPrice: null,
    colors: ["Pistachio", "Tan", "Beige"],
    image:
      "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=900&q=80&sat=-40",
    gallery: [
      "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=900&q=80&sat=-40",
    ],
    description:
      "A soft-strap sandal with cushioned support — made for long days of running errands in the city heat.",
    badge: null,
  },

  // ---------------- KIDS ----------------
  {
    id: "k-01",
    name: "Chotu Racer Sneaker",
    category: "Kids",
    type: "Sneaker",
    price: 2999,
    oldPrice: null,
    colors: ["Black", "Blue"],
    image:
      "https://images.unsplash.com/photo-1518002171953-a080ee817e1f?auto=format&fit=crop&w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1518002171953-a080ee817e1f?auto=format&fit=crop&w=900&q=80",
    ],
    description:
      "Velcro-strap sneakers built for the playground — durable soles that survive recess, every single day.",
    badge: "New In",
  },
  {
    id: "k-02",
    name: "Gudiya School Shoe",
    category: "Kids",
    type: "School",
    price: 2799,
    oldPrice: null,
    colors: ["Black", "White"],
    image:
      "https://images.unsplash.com/photo-1503919545889-aef636e10ad4?auto=format&fit=crop&w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1503919545889-aef636e10ad4?auto=format&fit=crop&w=900&q=80",
    ],
    description:
      "School-uniform-approved shoes with reinforced toe caps and a machine-washable upper.",
    badge: "Bestseller",
  },
  {
    id: "k-03",
    name: "Nanha Sandal",
    category: "Kids",
    type: "Sandal",
    price: 2199,
    oldPrice: null,
    colors: ["Pink", "Green"],
    image:
      "https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&w=900&q=80&sat=-20",
    gallery: [
      "https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&w=900&q=80&sat=-20",
    ],
    description:
      "Adjustable-strap sandals with a soft rubber sole — easy for small hands to put on themselves.",
    badge: null,
  },
];

export const testimonials = [
  {
    name: "Ahmad Saeed Khan",
    text: "Very comfortable and perfect for everyday wear. Great quality.",
  },
  { name: "Hamdaan Raza", text: "Perfect mix of casual and formal — my go-to brand now." },
  { name: "Ali Zaidi", text: "I wear them every day to work. Still feels like new." },
  { name: "Zunair Khan", text: "Great value for money, ordering my second pair already." },
  {
    name: "Arbaz Malik",
    text: "Perfect for office and casual wear. Really happy with the purchase.",
  },
  { name: "Sameen Rudaba", text: "Didn't expect this level of comfort — really impressed." },
];

export const siteInfo = {
  brand: "Arbaz Shoes",
  tagline: "Polished. Poised. Perfectly Comfy.",
  phone: "03471426033",
  whatsapp: "923471426033",
  email: "support@arbazshoes.pk",
  address: "Liberty Market, Gulberg III, Lahore, Pakistan",
  social: {
    facebook: "https://www.linkedin.com/in/gull-abbas-122255381",
    instagram: "https://www.linkedin.com/in/gull-abbas-122255381",
    tiktok: "https://www.linkedin.com/in/gull-abbas-122255381",
  },
  developer: {
    name: "Gull Abbas",
    linkedin: "https://www.linkedin.com/in/gull-abbas-122255381",
    github: "https://github.com/gullabbas028-stack",
    portfolio: "https://portfolio-final-2026-nu.vercel.app",
  },
};
