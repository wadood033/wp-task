// Images live in /public/images and are used via inline style / <img src>, never from CSS.
export const img = (n) => `/images/${n}`;

// TODO: replace with your Cloudinary video URL
export const VIDEO_URL = "https://res.cloudinary.com/cdvci63g/video/upload/v1791550935/1-Minute_Meditation.mp4";

export const links = ["Our Tracks", "Find Events", "Track Map", "Shop", "About Us"];
export const events = [["Show in USA", "USA"], ["Adidas Show in USA", "USA"], ["Adidas Show", "USA"], ["Adidas in USA", "USA"]];
export const T = "2019 National Champions Crowned at Reebok";
export const D = "Membership has its perks. Joining ADIDAS means you can race at your local tracks";
export const cards = [[T, D], ["2019 National Champions", "Membership has its perks."], [T, D]];

// clip-path shapes as inline Tailwind arbitrary properties
export const para = "[clip-path:polygon(12%_0,100%_0,88%_100%,0_100%)]";
export const paraL = "[clip-path:polygon(0_0,100%_0,88%_100%,0_100%)]";
export const zzL = "[clip-path:polygon(0_0,100%_0,89%_100%,0_100%)]";
export const zzR = "[clip-path:polygon(0_0,100%_0,100%_100%,12%_100%)]";
export const titleWhite = "[clip-path:polygon(10%_0,100%_0,100%_100%,0_100%)]";
