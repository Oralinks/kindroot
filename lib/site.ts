// All page copy lives here. Change `site.name` to rebrand the whole site.
// Every figure, name and quote below is invented demo content.

/** Prefix for files in /public when the site is served from a sub-path (GitHub Pages). */
export const asset = (path: string) => `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${path}`;

export const site = {
  name: "Kindroot",
  email: "hello@kindroot.demo",
  year: 2026,
};

export const nav = [
  { label: "About", href: "#about" },
  { label: "Programs", href: "#programs" },
  { label: "Campaigns", href: "#campaigns" },
  { label: "Stories", href: "#stories" },
];

export type ProgramIcon = "bowl" | "heart" | "book" | "shelter";

export const programs: {
  title: string;
  image: string;
  alt: string;
  icon: ProgramIcon;
  raised: string;
  goal: string;
}[] = [
  {
    title: "Food and nutrition support",
    image: asset("/images/program-food.jpg"),
    alt: "A smiling girl beside a large steaming pot of rice at a community kitchen",
    icon: "bowl",
    raised: "$18,240",
    goal: "$25,000",
  },
  {
    title: "Health and medical access",
    image: asset("/images/program-health.jpg"),
    alt: "Children in school uniforms sitting on benches at a community clinic",
    icon: "heart",
    raised: "$12,875",
    goal: "$20,000",
  },
  {
    title: "Education and skill development",
    image: asset("/images/program-education.jpg"),
    alt: "Two boys leaning together over a notebook, studying",
    icon: "book",
    raised: "$9,410",
    goal: "$15,000",
  },
  {
    title: "Disaster relief and recovery",
    image: asset("/images/program-disaster.jpg"),
    alt: "Volunteers packing relief boxes with blankets, water and food",
    icon: "shelter",
    raised: "$21,630",
    goal: "$30,000",
  },
];

export const impact = [
  { value: 843, label: "Families receiving weekly food parcels" },
  { value: 1498, label: "Children enrolled in our learning programs" },
  { value: 2341, label: "Patients reached by mobile health clinics" },
];

export type WayIcon = "donate" | "volunteer" | "sponsor" | "fundraise" | "story" | "event";

export const ways: { title: string; text: string; icon: WayIcon; tone: string }[] = [
  {
    title: "Make a donation",
    text: "Every gift, big or small, goes straight to meals, medicine and school supplies where they are needed most.",
    icon: "donate",
    tone: "bg-plum",
  },
  {
    title: "Become a volunteer",
    text: "Give your time at a food drive, a reading club or a clinic day. We will match you to work you enjoy.",
    icon: "volunteer",
    tone: "bg-coral",
  },
  {
    title: "Sponsor a child",
    text: "A monthly sponsorship covers school fees, uniforms and a hot lunch for a child all year round.",
    icon: "sponsor",
    tone: "bg-steel",
  },
  {
    title: "Organize a fundraiser",
    text: "Run, bake or host a dinner. We will send you a kit with everything you need to rally your circle.",
    icon: "fundraise",
    tone: "bg-cocoa",
  },
  {
    title: "Share your story",
    text: "Tell people why you give. Honest stories bring in new supporters faster than any advert.",
    icon: "story",
    tone: "bg-indigo",
  },
  {
    title: "Attend an event",
    text: "Join a community open day, a charity walk or a gala and meet the families your support reaches.",
    icon: "event",
    tone: "bg-olive",
  },
];

export const campaigns = [
  {
    title: "Back-to-school kits for 500 children in Kisumu",
    text: "Bags, books and uniforms before term starts.",
    image: asset("/images/campaign-1.jpg"),
    alt: "A laughing boy in a yellow T-shirt with a friend",
    raised: 7420,
    goal: 10000,
  },
  {
    title: "Clean water points for three villages in Tamale",
    text: "Boreholes and hand-washing stations.",
    image: asset("/images/campaign-2.jpg"),
    alt: "A group of young children sitting close together and smiling",
    raised: 12800,
    goal: 20000,
  },
  {
    title: "Nutritious lunches for nursery schools in Lusaka",
    text: "A warm meal every school day this year.",
    image: asset("/images/campaign-3.jpg"),
    alt: "Two girls smiling broadly with their heads together",
    raised: 5150,
    goal: 8000,
  },
  {
    title: "Emergency food aid for families in South Africa",
    text: "Grocery parcels for households hit by drought.",
    image: asset("/images/food-aid.jpg"),
    alt: "A woven bag packed with rice, vegetables, fruit and bread",
    raised: 24860,
    goal: 40000,
  },
];

export const testimonials = [
  {
    quote: "I came to pack food boxes for one Saturday. Two years later it is the best part of my week.",
    name: "Tunde Okafor",
    role: "Weekend volunteer",
    image: asset("/images/people/person-1.png"),
  },
  {
    quote: "They kept showing up for my children, month after month, until school felt normal again.",
    name: "Amara Mensah",
    role: "Parent, Accra",
    image: asset("/images/people/person-2.png"),
  },
  {
    quote: "Clear reports, real faces and money that goes where they say. That is why I give monthly.",
    name: "Samuel Adeyemi",
    role: "Monthly donor",
    image: asset("/images/people/person-3.png"),
  },
  {
    quote: "The clinic van comes every second Tuesday now. My mother finally gets her checkups.",
    name: "Grace Wanjiru",
    role: "Community leader",
    image: asset("/images/people/person-4.png"),
  },
  {
    quote: "Our office matched every gift for a month. Watching the total climb was something else.",
    name: "Kofi Boateng",
    role: "Corporate partner",
    image: asset("/images/people/person-5.png"),
  },
  {
    quote: "I sponsor a girl in Lusaka. Her letters about the science club make my whole month.",
    name: "Zainab Bello",
    role: "Child sponsor",
    image: asset("/images/people/person-6.png"),
  },
];

export const stories = [
  {
    category: "Environment",
    date: "Oct 18, 2026",
    title: "Building a greener planet for generations",
    image: asset("/images/story-1.jpg"),
    alt: "A woman in a pink top standing in the doorway of a wooden home",
  },
  {
    category: "Education",
    date: "Sep 30, 2026",
    title: "How a reading club changed one school",
    image: asset("/images/story-2.jpg"),
    alt: "Two boys smiling close to the camera in front of stacked wood",
  },
  {
    category: "Community",
    date: "Sep 12, 2026",
    title: "Planting one seedling for every new pupil",
    image: asset("/images/story-3.jpg"),
    alt: "A smiling girl holding a small green seedling outdoors",
  },
  {
    category: "Education",
    date: "Aug 27, 2026",
    title: "Inside a classroom that never closes",
    image: asset("/images/about.jpg"),
    alt: "A boy in a red school sweater writing in his exercise book at a wooden desk",
  },
];

export const faqs = [
  {
    q: "Where does my donation go?",
    a: "Most of every gift funds programs directly: food parcels, clinic days, school supplies and emergency kits. The rest keeps the lights on and the reports honest.",
  },
  {
    q: "Can I choose which program I support?",
    a: "Yes. Pick a program or a campaign when you give, or leave it open and we will send it where the need is greatest that month.",
  },
  {
    q: "How do I become a volunteer?",
    a: "Fill in a short volunteer form and we will invite you to an orientation evening, then match you to a team near you.",
  },
  {
    q: "Is my donation tax-deductible?",
    a: "In a real charity it usually would be. This site is a portfolio concept, so no payments are taken and no receipts are issued.",
  },
  {
    q: "How will I know my support made a difference?",
    a: "Every donor gets a short quarterly update with photos, numbers and stories from the communities they helped.",
  },
];

export const footerLinks = [
  {
    heading: "Get involved",
    links: [
      { label: "Donate", href: "#donate" },
      { label: "Volunteer", href: "#ways" },
      { label: "Sponsor", href: "#ways" },
    ],
  },
  {
    heading: "Learn more",
    links: [
      { label: "About", href: "#about" },
      { label: "Programs", href: "#programs" },
      { label: "Stories", href: "#stories" },
    ],
  },
  {
    heading: "Help & contact",
    links: [
      { label: "FAQ", href: "#faq" },
      { label: "Campaigns", href: "#campaigns" },
      { label: "Email us", href: `mailto:${site.email}` },
    ],
  },
];
