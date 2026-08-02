const messages = [
  "Free delivery on prepaid orders",
  "Cash on Delivery available",
  "Easy 7-day returns",
  "Helpline: 0300-1234567",
];

export default function PromoBar() {
  return (
    <div className="bg-charcoal text-cream text-xs sm:text-sm py-2 overflow-hidden">
      <div className="flex whitespace-nowrap animate-none">
        <div className="flex gap-8 px-4">
          {messages.map((m, i) => (
            <span key={i} className="flex items-center gap-8">
              {m}
              <span className="text-gold">•</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
