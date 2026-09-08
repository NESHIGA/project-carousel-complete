import serviceWeb from "@/assets/service-web.jpg.asset.json";
import serviceMobile from "@/assets/service-mobile.jpg.asset.json";
import serviceUx from "@/assets/service-ux.jpg.asset.json";
import serviceCloud from "@/assets/service-cloud.jpg.asset.json";
import productFlowdesk from "@/assets/product-flowdesk.jpg.asset.json";
import productPulseboard from "@/assets/product-pulseboard.jpg.asset.json";
import productCartsuite from "@/assets/product-cartsuite.jpg.asset.json";
import productCustom from "@/assets/product-custom.jpg.asset.json";

export type CatalogItem = { title: string; text: string; image: string; alt: string };

export const services: CatalogItem[] = [
  { title: "Web Development", text: "High-performance websites and applications built on modern, maintainable foundations.", image: serviceWeb.url, alt: "Modern web application interfaces in a digital workspace" },
  { title: "Mobile Applications", text: "Thoughtful iOS and Android experiences from prototype through store launch.", image: serviceMobile.url, alt: "Two modern mobile application interfaces" },
  { title: "UI & UX Design", text: "Research-led product design that makes complex workflows feel direct and intuitive.", image: serviceUx.url, alt: "Product interface wireframes and design system materials" },
  { title: "Cloud, Data & AI", text: "Infrastructure, automation and applied intelligence designed around measurable value.", image: serviceCloud.url, alt: "Cloud infrastructure and artificial intelligence visualization" },
];

export type ContentItem = { title: string; text: string };

export const stats: [string, string][] = [
  ["120+", "Projects"], ["40+", "Clients"], ["98%", "Retention"], ["6 yrs", "Building"],
];

export const projects: ContentItem[] = [
  { title: "NeoBank Dashboard", text: "A unified finance workspace serving payments, statements and fraud signals at scale." },
  { title: "CarePath", text: "A patient and clinic platform connecting appointments, records and care journeys." },
  { title: "StoreFront OS", text: "A headless commerce system unifying inventory, checkout and fulfilment." },
  { title: "RouteSense", text: "Live fleet visibility and route optimization for a growing logistics operator." },
];

export const advantages: ContentItem[] = [
  { title: "Dedicated Pods", text: "The same focused team stays close to your product from kickoff to delivery." },
  { title: "Visible Progress", text: "Shared plans, regular demos and direct access keep every decision transparent." },
  { title: "Designed to Scale", text: "Architecture choices account for the next stage—not only the first release." },
  { title: "Long-term Support", text: "Monitoring, iteration and technical guidance continue as your product grows." },
];

export const posts: ContentItem[] = [
  { title: "Why we chose edge-first rendering", text: "The performance, reliability and delivery trade-offs behind a major platform decision." },
  { title: "Dashboards people actually check", text: "How hierarchy and restraint turn data-heavy interfaces into daily tools." },
  { title: "What we look for in new engineers", text: "The habits, curiosity and evidence of craft that stand out beyond a résumé." },
  { title: "Scaling without losing clarity", text: "Simple operating patterns for keeping product and engineering aligned as teams grow." },
];


export const products: CatalogItem[] = [
  { title: "FlowDesk", text: "A clear, lightweight project and task workspace for focused engineering teams.", image: productFlowdesk.url, alt: "FlowDesk project management workspace" },
  { title: "Pulseboard", text: "Live business dashboards that bring essential signals into one dependable view.", image: productPulseboard.url, alt: "Pulseboard analytics dashboard with live charts" },
  { title: "CartSuite", text: "A fast headless commerce foundation for brands ready to own their customer experience.", image: productCartsuite.url, alt: "CartSuite commerce storefront on desktop and mobile" },
  { title: "Custom Platforms", text: "Domain-specific systems built with the same product rigor as our own tools.", image: productCustom.url, alt: "Modular custom enterprise software platform" },
];