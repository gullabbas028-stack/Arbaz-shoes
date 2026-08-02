// Lucide-react no longer ships brand/logo icons, so these are small
// hand-drawn SVG stand-ins, sized to match lucide's 24x24 default.

const base = {
  width: 18,
  height: 18,
  viewBox: "0 0 24 24",
  fill: "currentColor",
};

export function FacebookIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M13.5 21v-7.5h2.5l.4-3H13.5V8.4c0-.87.24-1.46 1.5-1.46h1.6V4.3C16.3 4.2 15.3 4 14.2 4c-2.4 0-4 1.47-4 4.13v2.37H7.7v3h2.5V21h3.3z" />
    </svg>
  );
}

export function InstagramIcon(props) {
  return (
    <svg {...base} fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function LinkedinIcon(props) {
  return (
    <svg {...base} {...props}>
      <rect x="3" y="9" width="4" height="12" />
      <circle cx="5" cy="4.5" r="2.5" />
      <path d="M11 9h4v2c.7-1.4 2.2-2.3 4-2.3 3 0 5 2 5 5.3V21h-4v-6c0-1.6-.6-2.7-2-2.7-1.2 0-2 1-2 2.7V21h-4V9z" />
    </svg>
  );
}

export function GithubIcon(props) {
  return (
    <svg {...base} {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.48 2 2 6.58 2 12.19c0 4.49 2.87 8.3 6.84 9.65.5.1.68-.22.68-.49 0-.24-.01-1.03-.01-1.87-2.78.61-3.37-1.19-3.37-1.19-.45-1.17-1.11-1.48-1.11-1.48-.91-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.9 1.55 2.36 1.1 2.93.84.09-.66.35-1.11.64-1.36-2.22-.26-4.56-1.13-4.56-5.03 0-1.11.39-2.02 1.03-2.73-.1-.26-.45-1.31.1-2.73 0 0 .84-.27 2.75 1.05a9.4 9.4 0 0 1 5 0c1.91-1.32 2.75-1.05 2.75-1.05.55 1.42.2 2.47.1 2.73.64.71 1.03 1.62 1.03 2.73 0 3.91-2.34 4.77-4.57 5.02.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.6.69.49A10.02 10.02 0 0 0 22 12.19C22 6.58 17.52 2 12 2z"
      />
    </svg>
  );
}

export function GlobeIcon(props) {
  return (
    <svg {...base} fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3a14 14 0 0 1 0 18 14 14 0 0 1 0-18z" />
    </svg>
  );
}
