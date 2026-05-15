/**
 * Real business data for La Vie En Rose Addis | Bole Rwanda Branch
 * Update this file to change info across the entire site.
 */

export const CAFE = {
  name: "La Vie En Rose Addis",
  branch: "Bole Rwanda Branch",
  tagline: "Where Addis Meets Paris",
  description:
    "The first instagrammable café and restaurant in Ethiopia. At La Vie En Rose, we don't just serve meals; we create moments. We offer a large selection of dishes, cakes, pastries and beverages.",
  established: "2020",
  rating: "4.2",
  reviewCount: "257",
  totalGuests: "5,000+",
};

export const CONTACT = {
  phone: "+251 98 505 9000",
  phoneTel: "+251985059000",
  whatsapp: "251985059000",
  email: "hello@lavieenroseaddis.com",
  address: "Rwanda St, Addis Ababa, Ethiopia",
  addressShort: "Bole Rwanda, Addis Ababa",
  mapEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.5!2d38.7969!3d9.0054!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOcKwMDAnMTkuNCJOIDM4wrA0Nyc0OS4wIkU!5e0!3m2!1sen!2set!4v1234567890",
};

export const HOURS = [
  { day: "Monday – Sunday", hours: "Open · Closes 9:00 PM" },
];

export const HOURS_DETAIL = [
  { day: "Monday",    hours: "Closes 9:00 PM" },
  { day: "Tuesday",   hours: "Closes 9:00 PM" },
  { day: "Wednesday", hours: "Closes 9:00 PM" },
  { day: "Thursday",  hours: "Closes 9:00 PM" },
  { day: "Friday",    hours: "Closes 9:00 PM" },
  { day: "Saturday",  hours: "Closes 9:00 PM" },
  { day: "Sunday",    hours: "Closes 9:00 PM" },
];

export const SOCIAL = {
  instagram: "https://www.instagram.com/lavieenroseaddis",
  tiktok:    "https://www.tiktok.com/@lavieenroseaddis",
  facebook:  "https://facebook.com/lavieenroseaddis",
  twitter:   "https://twitter.com/lavieaddis",
  instagramHandle: "@lavieenroseaddis",
  tiktokHandle:    "@lavieenroseaddis",
};

export const WHATSAPP_MESSAGE = encodeURIComponent(
  "Hello! I'd like to make a reservation at La Vie En Rose Addis — Bole Rwanda Branch."
);

/** Real Google reviews */
export const REVIEWS = [
  {
    name: "Bez G",
    avatar: "BG",
    rating: 5,
    date: "3 months ago",
    meal: "Lunch",
    text: "I went to both La Vie En Rose locations on my recent visit to Addis. This location is centrally located in Bole and the food is some of the best I had in Addis. Even though this is a café they have a large menu. I ordered the Tuscan fish with mashed potatoes, a salad, a macchiato and red velvet cake. The food was so delicious, the staff were so kind, the space is so big and airy and the bathrooms are super clean. This is a must-try café in Addis!",
    highlights: { food: 5, service: 5, atmosphere: 5 },
    tags: ["Quiet, easy to talk", "Suitable for all group sizes", "No wait"],
  },
  {
    name: "E. Demisse",
    avatar: "ED",
    rating: 5,
    date: "2 months ago",
    meal: "Lunch",
    text: "Such a cute spot! Love the design and ambiance, and everything was so clean! The food was amazing!! I was so impressed with the selection — it definitely goes beyond what your traditional café offers. Staff were also super sweet. Will be making this my go-to spot whenever I'm back in Addis for sure.",
    highlights: { food: 5, service: 5, atmosphere: 5 },
    tags: ["Really good vegetarian selection", "No wait", "2 people"],
  },
  {
    name: "Swiss Note",
    avatar: "SN",
    rating: 4,
    date: "1 year ago",
    meal: "Breakfast",
    text: "An elegant establishment and cozy setting in conjunction with an overindulgent experience. I appreciated the texture of the French toast and enjoyed the hash brown addition alongside the scrambled egg. The ambiance stole it for me and the food delivered giving me a memorable experience in the country. I would recommend it to anyone travelling to the country.",
    highlights: { food: 4, service: 5, atmosphere: 5 },
    tags: ["Mixed Juice", "Iced Latte", "Iced Caramel Latte"],
  },
  {
    name: "Abdalla Khalil",
    avatar: "AK",
    rating: 5,
    date: "2 years ago",
    meal: "Breakfast",
    text: "I had an amazing experience at La Vie En Rose Addis. From the moment we walked in, the atmosphere was warm and welcoming. The staff were attentive and friendly. We ordered the classic Eggs Benedict and the Middle Eastern Shakshouka. The eggs were perfectly poached, and the hollandaise sauce was rich but not overwhelming. A perfect spot for anyone looking to start their day off right.",
    highlights: { food: 5, service: 5, atmosphere: 5 },
    tags: ["Eggs Benedict", "Shakshouka", "Warm atmosphere"],
  },
  {
    name: "Hanan Seid",
    avatar: "HS",
    rating: 5,
    date: "4 months ago",
    meal: "Lunch",
    text: "AN AMAZING PLACE, very cute interior — best for pictures and I loved their food so much! Best for lunch.",
    highlights: { food: 5, service: 5, atmosphere: 5 },
    tags: ["Great for photos", "5–8 people", "30–60 min wait"],
  },
  {
    name: "E S",
    avatar: "ES",
    rating: 5,
    date: "6 months ago",
    meal: "Brunch",
    text: "Their food is consistent with a really fair price. I love everything about this place since day 1.",
    highlights: { food: 5, service: 5, atmosphere: 5 },
    tags: ["Breakfast Combo 3", "French Toast", "Pancakes"],
  },
];

/** Real café images from public folder */
export const CAFE_IMAGES = [
  { src: "/images/unnamed.jpg",      alt: "La Vie En Rose café interior — elegant rose-themed décor" },
  { src: "/images/unnamed (1).jpg",  alt: "Signature dish at La Vie En Rose Addis" },
  { src: "/images/unnamed (2).jpg",  alt: "Coffee and pastries at La Vie En Rose" },
  { src: "/images/unnamed (3).jpg",  alt: "Beautiful café ambiance — Bole Rwanda branch" },
  { src: "/images/unnamed (4).jpg",  alt: "Artisan food presentation at La Vie En Rose" },
  { src: "/images/unnamed (5).jpg",  alt: "Café seating area with rose décor" },
  { src: "/images/unnamed (6).jpg",  alt: "Specialty coffee at La Vie En Rose Addis" },
  { src: "/images/unnamed (7).jpg",  alt: "Desserts and cakes at La Vie En Rose" },
  { src: "/images/unnamed (8).jpg",  alt: "Instagram-worthy food photography" },
  { src: "/images/unnamed (9).jpg",  alt: "La Vie En Rose dining experience" },
  { src: "/images/unnamed (10).jpg", alt: "Premium food and beverages" },
  { src: "/images/unnamed (1).webp", alt: "La Vie En Rose café atmosphere" },
  { src: "/images/unnamed (2).webp", alt: "Elegant interior design" },
  { src: "/images/unnamed (3).webp", alt: "Café lifestyle photography" },
  { src: "/images/2024-01-19.webp",  alt: "La Vie En Rose Addis — 2024" },
];
