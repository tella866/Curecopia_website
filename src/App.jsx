import { useMemo, useRef, useState } from "react";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  Boxes,
  Check,
  ChevronDown,
  CircleCheck,
  ClipboardCheck,
  Dna,
  FileCheck2,
  Globe2,
  HeartPulse,
  Menu,
  Microscope,
  PackageCheck,
  Search,
  ShieldCheck,
  Truck,
  X,
} from "lucide-react";

const products = [
  { name: "Metformin HCl", category: "APIs", cas: "1115-70-4", grade: "Pharma grade", standard: "USP / BP / IP", availability: "Ready to ship" },
  { name: "Amoxicillin Trihydrate", category: "APIs", cas: "61336-70-7", grade: "Pharma grade", standard: "USP / BP / EP", availability: "On request" },
  { name: "Atorvastatin Calcium", category: "APIs", cas: "134523-03-8", grade: "Pharma grade", standard: "USP / EP", availability: "Ready to ship" },
  { name: "Vitamin D3 Softgels", category: "Finished Dosages", cas: "58-89-9", grade: "Finished dosage", standard: "USP / BP", availability: "Ready to ship" },
  { name: "Azithromycin Tablets", category: "Finished Dosages", cas: "83905-01-5", grade: "Finished dosage", standard: "USP / IP", availability: "On request" },
  { name: "Sitagliptin Intermediate", category: "Intermediates", cas: "486460-32-6", grade: "Key intermediate", standard: "Custom spec", availability: "On request" },
  { name: "Omega-3 Concentrate", category: "Nutraceuticals", cas: "8016-13-5", grade: "Nutraceutical", standard: "USP / EP", availability: "Ready to ship" },
];

const categories = ["All", "APIs", "Finished Dosages", "Intermediates", "Nutraceuticals"];

const regions = {
  "Latin America": { detail: "Regional partners across 12 markets, with Spanish and Portuguese documentation support.", marker: "marker-latam" },
  Africa: { detail: "Reliable supply partnerships serving 18 countries across Sub-Saharan and North Africa.", marker: "marker-africa" },
  "Southeast Asia": { detail: "Established distribution network with responsive support across ASEAN markets.", marker: "marker-asia" },
  Europe: { detail: "Dossier-ready product supply aligned to the needs of regulated European markets.", marker: "marker-europe" },
  "Middle East": { detail: "Dedicated regional logistics and documentation expertise for Middle East markets.", marker: "marker-middle" },
};

function Logo({ light = false }) {
  return (
    <a className={`brand ${light ? "brand-light" : ""}`} href="#home" aria-label="Curecopia home">
      <span className="brand-mark" aria-hidden="true">
        <span className="mark-core" />
        <span className="mark-node mark-node-one" />
        <span className="mark-node mark-node-two" />
        <span className="mark-node mark-node-three" />
        <span className="mark-node mark-node-four" />
      </span>
      <span className="brand-name">curecopia<span>.</span></span>
    </a>
  );
}

function SectionEyebrow({ children, light = false }) {
  return <div className={`eyebrow ${light ? "eyebrow-light" : ""}`}><span />{children}</div>;
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const links = [
    ["Products", "#products"],
    ["Capabilities", "#capabilities"],
    ["Quality", "#quality"],
    ["Global network", "#global"],
    ["About us", "#about"],
  ];
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Logo />
        <button className="mobile-menu-toggle" aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
        <nav className={`main-nav ${menuOpen ? "nav-open" : ""}`} aria-label="Main navigation">
          {links.map(([label, href]) => <a key={label} href={href} onClick={() => setMenuOpen(false)}>{label}</a>)}
          <a className="nav-cta" href="#inquiry" onClick={() => setMenuOpen(false)}>Request a quote <ArrowUpRight size={15} /></a>
        </nav>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-orb hero-orb-one" />
      <div className="hero-orb hero-orb-two" />
      <div className="container hero-grid">
        <div className="hero-copy">
          <div className="hero-kicker"><span className="kicker-line" /> PHARMACEUTICAL SUPPLY & MANUFACTURING</div>
          <h1>Better supply.<br /><span>Better health.</span></h1>
          <p className="hero-description">Your trusted partner for pharmaceutical APIs, finished dosage forms, and manufacturing built for a world that can’t wait.</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#products">Explore our products <ArrowRight size={16} /></a>
            <a className="button button-ghost" href="#inquiry">Talk to our team <ArrowUpRight size={15} /></a>
          </div>
          <div className="hero-proof">
            <span className="proof-shield"><ShieldCheck size={17} /></span>
            <div><strong>Quality at every step</strong><p>Documentation, qualification, and delivery aligned.</p></div>
          </div>
        </div>
        <div className="hero-visual">
          <div className="assurance-panel">
            <div className="assurance-heading"><span>OUR APPROACH</span><span>01 — 03</span></div>
            <h2>Quality is built into<br />every order.</h2>
            <p>Reliable pharmaceutical supply starts well before a shipment leaves the facility.</p>
            <div className="assurance-list">
              <div><span className="assurance-icon"><ShieldCheck size={17} /></span><span><strong>Manufacturer qualification</strong><small>Carefully assessed supply partners</small></span><Check size={15} /></div>
              <div><span className="assurance-icon"><FileCheck2 size={17} /></span><span><strong>Documentation support</strong><small>Records aligned to your requirements</small></span><Check size={15} /></div>
              <div><span className="assurance-icon"><Truck size={17} /></span><span><strong>Coordinated delivery</strong><small>Logistics planned for your market</small></span><Check size={15} /></div>
            </div>
            <span className="assurance-foot">A MORE THOUGHTFUL SUPPLY PARTNER</span>
          </div>
        </div>
      </div>
      <div className="container hero-bottom">
        <div className="hero-scroll"><ArrowDown size={14} /> Scroll to explore</div>
        <div className="hero-metrics">
          <div><strong>50<span>+</span></strong><small>Export countries</small></div>
          <div><strong>1,000<span>+</span></strong><small>Products sourced</small></div>
          <div><strong>WHO-GMP</strong><small>Quality standards</small></div>
          <div><strong>99.8<span>%</span></strong><small>On-time delivery</small></div>
        </div>
      </div>
    </section>
  );
}

function ProductCard({ product, onQuote }) {
  return (
    <article className="product-card">
      <div className="product-art"><Dna size={28} strokeWidth={1.35} /><span className="product-kind">{product.category === "APIs" ? "API" : product.category === "Finished Dosages" ? "FDF" : product.category === "Intermediates" ? "INT" : "NUTRA"}</span></div>
      <div className="product-content">
        <span className="product-cas">CAS {product.cas}</span>
        <h3>{product.name}</h3>
        <div className="product-specs"><span>{product.grade}</span><span>{product.standard}</span></div>
        <div className="product-card-footer"><span className={`availability ${product.availability === "Ready to ship" ? "available" : ""}`}><span />{product.availability}</span><button aria-label={`Request a quote for ${product.name}`} onClick={() => onQuote(product.name)}><ArrowUpRight size={16} /></button></div>
      </div>
    </article>
  );
}

function ProductCatalog({ onQuote }) {
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");
  const shownProducts = useMemo(() => products.filter((product) => {
    const matchesCategory = activeCategory === "All" || product.category === activeCategory;
    const query = search.trim().toLowerCase();
    const matchesQuery = !query || [product.name, product.cas, product.category, product.grade, product.standard].some((value) => value.toLowerCase().includes(query));
    return matchesCategory && matchesQuery;
  }).slice(0, 4), [activeCategory, search]);

  return (
    <section className="section products-section" id="products">
      <div className="container">
        <div className="section-heading products-heading">
          <div><SectionEyebrow>Explore our portfolio</SectionEyebrow><h2>The right molecule.<br /><span>Right when you need it.</span></h2></div>
          <p>From trusted APIs to market-ready formulations, find the pharmaceutical products and expertise that move your business forward.</p>
        </div>
        <div className="catalog-toolbar">
          <label className="catalog-search"><Search size={17} /><input type="search" value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Search molecule, CAS number, or category..." aria-label="Search products by molecule, CAS number, or category" />{search && <button aria-label="Clear search" onClick={() => setSearch("")}><X size={15} /></button>}</label>
          <div className="category-pills" role="group" aria-label="Filter products by category">
            {categories.map((category) => <button key={category} className={activeCategory === category ? "active" : ""} onClick={() => setActiveCategory(category)}>{category}</button>)}
          </div>
        </div>
        {shownProducts.length > 0 ? <div className="product-grid">{shownProducts.map((product) => <ProductCard key={product.name} product={product} onQuote={onQuote} />)}</div> : <div className="empty-products"><Search size={21} /><strong>No matching products yet</strong><span>Try a different molecule, CAS number, or category.</span><button onClick={() => { setSearch(""); setActiveCategory("All"); }}>Clear filters</button></div>}
        <div className="catalog-foot"><span>Need something specific? Our team can source beyond the catalog.</span><a href="#inquiry">Ask our sourcing team <ArrowRight size={15} /></a></div>
      </div>
    </section>
  );
}

function Capabilities() {
  const capabilities = [
    { number: "01", icon: <Dna size={21} />, title: "Active ingredients", label: "APIs & intermediates", description: "Dependable bulk supply, high-purity materials, and access to certified manufacturer documentation.", tags: ["APIs", "Key intermediates", "Custom sourcing"], tone: "cap-mint" },
    { number: "02", icon: <HeartPulse size={21} />, title: "Finished formulations", label: "FDF & private label", description: "Market-ready tablets, capsules, injectables, and liquids tailored to your market requirements.", tags: ["Tablets & capsules", "Injectables", "Private label"], tone: "cap-blue" },
    { number: "03", icon: <Microscope size={21} />, title: "Manufacturing partner", label: "CMO / CDMO", description: "From custom synthesis and scale-up to dossier support, we help turn complex ideas into supply.", tags: ["Custom synthesis", "Scale-up", "CTD / eCTD"], tone: "cap-lilac" },
  ];
  return (
    <section className="section capabilities-section" id="capabilities">
      <div className="container">
        <div className="section-heading center-heading"><SectionEyebrow>How we help</SectionEyebrow><h2>One partner. <span>More possibilities.</span></h2><p>Flexible pharmaceutical supply and manufacturing, designed around the way you work.</p></div>
        <div className="capability-grid">{capabilities.map((item) => <article className="capability-card" key={item.number}><div className="cap-top"><span className={`cap-icon ${item.tone}`}>{item.icon}</span><span className="cap-number">{item.number}</span></div><div className="cap-label">{item.label}</div><h3>{item.title}</h3><p>{item.description}</p><div className="cap-tags">{item.tags.map((tag) => <span key={tag}>{tag}</span>)}</div><a href="#inquiry" className="cap-link">Explore capability <ArrowUpRight size={15} /></a></article>)}</div>
      </div>
    </section>
  );
}

function QualitySection() {
  const standards = [
    { label: "WHO-GMP", sub: "Manufacturing standards", icon: <ShieldCheck size={19} /> },
    { label: "ISO 9001:2015", sub: "Quality management", icon: <BadgeCheck size={19} /> },
    { label: "Regulatory-ready", sub: "US FDA & EU GMP pathways", icon: <ClipboardCheck size={19} /> },
    { label: "Halal & Kosher", sub: "Certified product options", icon: <CircleCheck size={19} /> },
  ];
  return (
    <section className="quality-section" id="quality">
      <div className="container quality-layout">
        <div className="quality-copy"><SectionEyebrow light>Quality is how we work</SectionEyebrow><h2>Confidence you<br />can <span>build on.</span></h2><p>Quality isn't a final checkpoint. It's part of every conversation, qualification, and shipment.</p><a className="quality-link" href="#inquiry">Talk quality with our team <ArrowRight size={16} /></a></div>
        <div className="quality-content"><div className="standards-grid">{standards.map((item) => <div className="standard-card" key={item.label}><span className="standard-icon">{item.icon}</span><div><strong>{item.label}</strong><small>{item.sub}</small></div><Check size={15} className="standard-check" /></div>)}</div><div className="dossier-card"><span className="dossier-icon"><FileCheck2 size={20} /></span><div><strong>Documentation that moves you forward.</strong><p>Support for DMF, US DMF, CEP, CTD/eCTD, and market-specific registration needs.</p></div><ArrowUpRight size={18} className="dossier-arrow" /></div></div>
      </div>
    </section>
  );
}

function GlobalSection() {
  const [activeRegion, setActiveRegion] = useState("Southeast Asia");
  const region = regions[activeRegion];
  return (
    <section className="section global-section" id="global">
      <div className="container">
        <div className="section-heading global-heading"><div><SectionEyebrow>Connected around the world</SectionEyebrow><h2>Local understanding.<br /><span>Global reach.</span></h2></div><p>Good supply travels further. Our network brings together regional insight, trusted logistics, and responsive support across key markets.</p></div>
        <div className="global-panel">
          <div className="map-area">
            <div className="map-topline"><span><Globe2 size={16} /> OUR GLOBAL NETWORK</span><span className="live-status"><i /> 50+ MARKETS</span></div>
            <div className="map-illustration" aria-label="Map showing Curecopia's global regions">
              <svg className="world-map" viewBox="0 0 760 340" role="img" aria-label="Abstract world map with connected export markets">
                <defs><pattern id="dots" width="8" height="8" patternUnits="userSpaceOnUse"><circle cx="2.2" cy="2.2" r="1.7" fill="currentColor" /></pattern></defs>
                <g fill="url(#dots)" className="map-land">
                  <path d="M66 70 95 52l43 5 26-15 44 14 32 21 5 20-20 11-2 16-21 7-11 25-16 7-8 26-19 8-7 24-19 8-6 28-14 3-9-24-14-12-5-25-14-13 3-23-14-23 7-19-9-19 11-27zm132 151 20 7 15 18-2 24-16 21-7 34-15 18-9-9 4-24-14-13 3-24-9-17 12-15 1-13z" />
                  <path d="m306 65 19-16 23 5 13 14-7 16-21 5-12-12zm27 31 27-16 23 6 22-13 35 9 25 19 29 3 19 16-8 20-20 8-8 20-18 7-8 20-23 7-7 22-14 19-7 31-18 29-20-4-10-24-12-18 2-23-13-24-3-31-13-22 8-18-15-22zm119 115 18 2 17 20-5 27-15 22-13 3-10-20-12-14 6-20zm106-112 28-17 37 4 22 17-8 16-25 5-6 18-21 4-14-16-22-5-12-15zm40 62 25-12 21 9 9 22-11 20-23-3-18-15-8-21z" />
                  <path d="m636 224 18-7 22 10 5 18-21 11-19-12z" />
                </g>
                <g className="map-routes"><path d="M157 128 Q292 34 412 117" /><path d="M157 128 Q310 244 409 175" /><path d="M412 117 Q474 45 548 130" /><path d="M409 175 Q493 205 548 130" /></g>
              </svg>
              {Object.entries(regions).map(([name, value]) => <button key={name} onClick={() => setActiveRegion(name)} className={`map-marker ${value.marker} ${activeRegion === name ? "marker-active" : ""}`} aria-label={`Select ${name}`} aria-pressed={activeRegion === name}><span /><small>{name}</small></button>)}
              <div className="map-origin"><span className="origin-pulse" /><span>CURECOPIA</span><small>SUPPLY NETWORK</small></div>
            </div>
            <div className="map-legend"><span><i className="legend-origin" /> Supply origin</span><span><i className="legend-market" /> Regional markets</span><span><i className="legend-route" /> Trusted routes</span></div>
          </div>
          <div className="network-details">
            <span className="network-label">YOUR MARKETS, OUR PRIORITY</span>
            <h3>Closer to the<br /><span>people you serve.</span></h3>
            <div className="region-tabs" role="group" aria-label="Select a global region">{Object.keys(regions).map((name) => <button key={name} className={activeRegion === name ? "selected" : ""} onClick={() => setActiveRegion(name)}>{name}<ArrowUpRight size={14} /></button>)}</div>
            <p className="region-detail">{region.detail}</p>
            <div className="logistics-list"><span><PackageCheck size={16} /> Market-ready documentation</span><span><Truck size={16} /> Temperature-aware logistics</span><span><Boxes size={16} /> Packaging to your specifications</span></div>
          </div>
        </div>
      </div>
    </section>
  );
}

function InquirySection({ selectedProduct }) {
  const [status, setStatus] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const formRef = useRef(null);
  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitting(true);
    setStatus("");
    const formData = new FormData(event.currentTarget);
    const name = formData.get("name");
    window.setTimeout(() => {
      setSubmitting(false);
      setStatus(`Thank you, ${name}. This demo has not sent your inquiry. Connect a submission service to deliver it to our team.`);
      formRef.current?.reset();
    }, 500);
  };
  return (
    <section className="inquiry-section" id="inquiry">
      <div className="container inquiry-layout">
        <div className="inquiry-copy"><SectionEyebrow light>Let's get started</SectionEyebrow><h2>Tell us what<br />you <span>have in mind.</span></h2><p>Share a few details and a real person from our team will be in touch to understand what you need.</p><div className="inquiry-points"><span><Check size={15} /> A response within one business day</span><span><Check size={15} /> Confidential, no-obligation conversations</span><span><Check size={15} /> Experts who understand your market</span></div><div className="inquiry-contact"><span className="contact-avatar">C</span><div><small>Prefer a direct conversation?</small><a href="mailto:hello@curecopia.com">hello@curecopia.com <ArrowUpRight size={13} /></a></div></div></div>
        <form ref={formRef} className="inquiry-form" onSubmit={handleSubmit}>
          <div className="form-heading"><div><span className="form-step">01 <i /> INQUIRY DETAILS</span><h3>How can we help?</h3></div><span className="required-note">* Required fields</span></div>
          <div className="form-grid">
            <label className="form-field"><span>Full name <b>*</b></span><input name="name" required placeholder="e.g. Alex Morgan" autoComplete="name" /></label>
            <label className="form-field"><span>Company / organization <b>*</b></span><input name="company" required placeholder="Your company name" autoComplete="organization" /></label>
            <label className="form-field"><span>Business email <b>*</b></span><input name="email" type="email" required placeholder="you@company.com" autoComplete="email" /></label>
            <label className="form-field"><span>Phone / WhatsApp</span><input name="phone" type="tel" placeholder="+1 (555) 000-0000" autoComplete="tel" /></label>
            <label className="form-field"><span>Product / CAS interest</span><input name="product" defaultValue={selectedProduct} placeholder="Molecule, CAS number, or product" /></label>
            <label className="form-field"><span>Estimated quantity</span><select name="quantity" defaultValue=""><option value="" disabled>Select quantity range</option><option>Sample / evaluation</option><option>1–10 kg</option><option>10–100 kg</option><option>100 kg+</option><option>Not sure yet</option></select><ChevronDown size={15} className="select-chevron" /></label>
            <label className="form-field"><span>Target market / country</span><input name="market" placeholder="Where will this be used?" autoComplete="country-name" /></label>
            <label className="form-field"><span>What else should we know?</span><textarea name="message" rows="3" placeholder="Tell us about your requirements, timeline, or documentation needs..." /></label>
          </div>
          <label className="attach-option"><input name="dossier" type="checkbox" /><span className="fake-checkbox"><Check size={12} /></span><span>I'd like to discuss technical specifications or dossier documentation.</span></label>
          <div className="form-submit-row"><p><ShieldCheck size={14} /> Your information is handled confidentially.</p><button className="button button-primary" type="submit" disabled={submitting}>{submitting ? "Sending..." : "Send inquiry"} <ArrowRight size={16} /></button></div>
          {status && <div className="form-status" role="status"><CircleCheck size={17} />{status}</div>}
        </form>
      </div>
    </section>
  );
}

function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const subscribe = (event) => {
    event.preventDefault();
    if (email.trim()) setSubscribed(true);
  };
  return (
    <footer className="site-footer" id="about">
      <div className="container">
        <div className="footer-main">
          <div className="footer-brand"><Logo light /><p>Making quality pharmaceutical supply feel a little more certain, wherever you do business.</p><a className="footer-email" href="mailto:hello@curecopia.com">hello@curecopia.com <ArrowUpRight size={14} /></a></div>
          <div className="footer-links"><h4>Explore</h4><a href="#products">Product catalog</a><a href="#capabilities">Our capabilities</a><a href="#quality">Quality & compliance</a><a href="#global">Global network</a></div>
          <div className="footer-links"><h4>Work with us</h4><a href="#inquiry">Request a quote</a><a href="#inquiry">Contract manufacturing</a><a href="#inquiry">Become a partner</a><a href="#inquiry">Contact our team</a></div>
          <div className="footer-newsletter"><h4>A little more in your inbox.</h4><p>Occasional market updates and industry insights. Always useful, never noisy.</p><form onSubmit={subscribe}><label className="sr-only" htmlFor="newsletter-email">Your work email</label><input id="newsletter-email" type="email" required placeholder="Your work email" value={email} onChange={(event) => { setEmail(event.target.value); setSubscribed(false); }} /><button type="submit" aria-label="Subscribe to newsletter"><ArrowRight size={16} /></button></form>{subscribed && <small className="newsletter-success"><Check size={13} /> You're on the list. Thank you.</small>}</div>
        </div>
        <div className="footer-compliance"><span><ShieldCheck size={15} /> Committed to quality, transparency, and responsible pharmaceutical supply.</span><span>Products are supplied subject to applicable local regulations and required import approvals.</span></div>
        <div className="footer-bottom"><span>© {new Date().getFullYear()} Curecopia. All rights reserved.</span><div><a href="#about">Privacy</a><a href="#about">Terms</a><a href="#about">Cookie settings</a></div><span className="footer-made">Made for better health <HeartPulse size={13} /></span></div>
      </div>
    </footer>
  );
}

function App() {
  const [selectedProduct, setSelectedProduct] = useState("");
  const requestQuote = (productName) => {
    setSelectedProduct(productName);
    document.getElementById("inquiry")?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <Hero />
        <ProductCatalog onQuote={requestQuote} />
        <Capabilities />
        <QualitySection />
        <GlobalSection />
        <InquirySection selectedProduct={selectedProduct} />
      </main>
      <Footer />
    </>
  );
}

export default App;
