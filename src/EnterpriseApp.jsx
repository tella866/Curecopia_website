import { useEffect, useMemo, useState } from "react";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  Check,
  ChevronDown,
  CircleHelp,
  ClipboardCheck,
  Dna,
  FileCheck2,
  FileText,
  FlaskConical,
  Globe2,
  Menu,
  PackageCheck,
  Search,
  ShieldCheck,
  ShoppingBasket,
  Truck,
  X,
} from "lucide-react";
import {
  documentOptions,
  markets,
  pharmacopeias,
  productCategories,
  products,
  regulatoryStatuses,
} from "./data/products.js";
import "./enterprise.css";

function Logo() {
  return (
    <a className="ep-brand" href="#home" aria-label="Curecopia home">
      <span className="ep-brand-mark"><Dna size={22} strokeWidth={1.7} /></span>
      <span>CURECOPIA<span className="ep-brand-period">.</span><small>PHARMA SOURCING</small></span>
    </a>
  );
}

function Header({ market, onMarketChange, itemCount, onOpenRfQ }) {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="ep-header">
      <div className="ep-topbar"><div className="ep-container ep-topbar-inner"><span><Globe2 size={13} /> Global pharmaceutical sourcing</span><span>Quality documentation available on request</span></div></div>
      <div className="ep-container ep-header-main">
        <Logo />
        <button className="ep-menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? "Close navigation" : "Open navigation"} aria-expanded={menuOpen}>{menuOpen ? <X size={20} /> : <Menu size={20} />}</button>
        <nav className={`ep-nav ${menuOpen ? "ep-nav-open" : ""}`} aria-label="Main navigation">
          <a href="#catalog" onClick={() => setMenuOpen(false)}>Product catalog</a>
          <a href="#quality" onClick={() => setMenuOpen(false)}>Quality & compliance</a>
          <a href="#inquiry" onClick={() => setMenuOpen(false)}>Request a quote</a>
          <button className="ep-market-switch" aria-label="Select target market" onClick={() => onMarketChange(market === "Human" ? "Veterinary" : "Human")}>
            <span className={market === "Human" ? "current" : ""}>Human Health</span><span className="ep-switch-divider">/</span><span className={market === "Veterinary" ? "current" : ""}>Animal Health</span>
          </button>
          <button className="ep-rfq-button" onClick={onOpenRfQ}><ShoppingBasket size={16} /> Inquiry list <span>{itemCount}</span></button>
        </nav>
      </div>
    </header>
  );
}

function Hero({ market, search, onSearch, onSearchSubmit }) {
  const quickSearches = ["Albendazole", "Fenbendazole", "Meglumine", "Buparvaquone", "Carprofen"];
  return (
    <section className="ep-hero" id="home">
      <div className="ep-container ep-hero-grid">
        <div className="ep-hero-copy">
          <div className="ep-eyebrow"><span /> HUMAN & ANIMAL HEALTH · GLOBAL B2B SOURCING</div>
          <h1>Your Direct Partner for High-Purity APIs, Excipients &amp; Fine Chemicals</h1>
          <p>Global B2B sourcing platform for commercial APIs, functional excipients, and specialty fine chemicals backed by complete regulatory &amp; compliance documentation (DMF, CEP, EU-GMP, US-FDA).</p>
          <form className="ep-global-search" onSubmit={onSearchSubmit}>
            <Search size={19} />
            <input aria-label="Search by product, CAS number, therapeutic category, or synonym" value={search} onChange={(event) => onSearch(event.target.value)} placeholder="Search product name, CAS number, or therapeutic use" />
            <button type="submit">Search <ArrowRight size={15} /></button>
          </form>
          <div className="ep-quick-searches"><span>QUICK SEARCH</span>{quickSearches.map((item) => <button key={item} onClick={() => { onSearch(item); document.querySelector("#catalog")?.scrollIntoView({ behavior: "smooth" }); }}>{item}</button>)}</div>
          <div className="ep-hero-links"><a href="#catalog">Browse product catalog <ArrowDownRight size={15} /></a><span>Human and animal health supply chains</span></div>
        </div>
        <div className="ep-hero-aside">
          <div className="ep-aside-top"><span>PROCUREMENT SUPPORT</span><span>01 / 04</span></div>
          <h2>More clarity at<br />every supply step.</h2>
          <div className="ep-aside-list">
            <div><span><BadgeCheck size={17} /></span><div><strong>Qualified supply partners</strong><small>Source and specification reviewed</small></div><Check size={15} /></div>
            <div><span><FileCheck2 size={17} /></span><div><strong>Documentation coordination</strong><small>Request documents with each inquiry</small></div><Check size={15} /></div>
            <div><span><Truck size={17} /></span><div><strong>Market-aware logistics</strong><small>Discuss route, terms, and timelines</small></div><Check size={15} /></div>
          </div>
          <div className="ep-aside-foot"><span>HUMAN HEALTH</span><i /><span>ANIMAL HEALTH</span></div>
        </div>
      </div>
      <div className="ep-container ep-hero-trust">
        <span><ShieldCheck size={17} /> Quality documentation</span>
        <span><Globe2 size={17} /> International sourcing</span>
        <span><PackageCheck size={17} /> Bulk procurement support</span>
        <span><ClipboardCheck size={17} /> Supplier qualification focus</span>
      </div>
    </section>
  );
}

function StandardsBar({ market }) {
  const vet = market === "Veterinary";
  const standards = vet
    ? ["Veterinary GMP alignment", "WHO-GMP", "EU-GMP pathways", "Destination-market registration"]
    : ["GMP-aligned sources", "US FDA pathways", "EU-GMP", "CEP / COS support"];
  return <section className="ep-standards"><div className="ep-container ep-standards-inner"><span className="ep-standards-label">QUALITY & REGULATORY FOCUS</span>{standards.map((item) => <span className="ep-standard" key={item}><Check size={14} />{item}</span>)}</div></section>;
}

function MarketSolutions({ onSearch }) {
  const solutions = [
    { key: "API", overline: "01 · ACTIVE PHARMACEUTICAL INGREDIENTS", title: "APIs", description: "High-purity human and veterinary bulk active drug substances. Regulatory documentation and source status are confirmed for each inquiry.", tags: ["Albendazole", "Fenbendazole", "Triclabendazole", "Buparvaquone", "Carprofen"], icon: <FlaskConical size={21} /> },
    { key: "Excipient", overline: "02 · FUNCTIONAL EXCIPIENTS", title: "Functional excipients", description: "Binders, solubilizers, and stabilizers selected to support formulation performance and manufacturing requirements.", tags: ["Meglumine", "N-Ethyl-D-Glucamine"], icon: <Dna size={21} /> },
    { key: "Fine Chemical", overline: "03 · SPECIALTY & FINE CHEMICALS", title: "Specialty & fine chemicals", description: "Specialty intermediates, chemical building blocks, and sourcing support for specific project requirements.", tags: ["Halquinol", "S-Methoprene", "Disinfectants", "Insect growth regulators"], icon: <PackageCheck size={21} /> },
  ];
  return (
    <section className="ep-market-section" id="categories"><div className="ep-container">
      <div className="ep-section-heading"><div><div className="ep-eyebrow">OUR PRODUCT CATEGORIES</div><h2>Three core categories.<br /><span>One sourcing partner.</span></h2></div><p>Focused product families for procurement, quality, and formulation teams across human and animal health.</p></div>
      <div className="ep-market-cards">{solutions.map((solution) => <article key={solution.key} className="ep-market-card">
        <div className="ep-market-card-top"><span className="ep-market-icon">{solution.icon}</span><span className="ep-market-overline">{solution.overline}</span><ArrowUpRight size={17} /></div>
        <h3>{solution.title}</h3><p>{solution.description}</p><div className="ep-market-tags">{solution.tags.map((tag) => <button key={tag} onClick={() => { onSearch(tag); document.querySelector("#catalog")?.scrollIntoView({ behavior: "smooth" }); }}>{tag}</button>)}</div>
      </article>)}</div>
    </div></section>
  );
}

function Catalog({ marketTab, onMarketTabChange, search, onSearch, onQuickView, onAdd }) {
  const [category, setCategory] = useState("All categories");
  const [regulatory, setRegulatory] = useState("Any regulatory status");
  const [grade, setGrade] = useState("Any grade");
  const [area, setArea] = useState("Any therapeutic area");
  const [productMarket, setProductMarket] = useState("Any market");
  const areas = useMemo(() => [...new Set(products.flatMap((product) => product.therapeuticArea))].sort(), []);
  const filtered = useMemo(() => products.filter((product) => {
    const query = search.trim().toLowerCase();
    const matchesSearch = !query || [product.name, product.cas, ...product.synonyms, product.therapeuticArea].some((value) => value.toLowerCase().includes(query));
    const matchesCategory = category === "All categories" || product.category === category;
    const matchesSegment = marketTab === "All Categories"
      || (marketTab === "Human Health APIs" && product.category === "API" && product.markets.includes("Human"))
      || (marketTab === "Veterinary APIs" && product.category === "API" && product.markets.includes("Veterinary"));
    const matchesMarket = productMarket === "Any market" || product.markets.includes(productMarket) || product.markets.length === 2;
    const matchesRegulatory = regulatory === "Any regulatory status" || product.regulatory.includes(regulatory);
    const matchesGrade = grade === "Any grade" || product.grade.includes(grade);
    const matchesArea = area === "Any therapeutic area" || product.therapeuticArea === area;
    return matchesSearch && matchesCategory && matchesSegment && matchesMarket && matchesRegulatory && matchesGrade && matchesArea;
  }), [search, category, marketTab, productMarket, regulatory, grade, area]);
  const clearFilters = () => { setCategory("All categories"); setRegulatory("Any regulatory status"); setGrade("Any grade"); setArea("Any therapeutic area"); setProductMarket("Any market"); onSearch(""); };
  return (
    <section className="ep-catalog-section" id="catalog">
      <div className="ep-container">
        <div className="ep-section-heading ep-catalog-heading"><div><div className="ep-eyebrow">PRODUCT DISCOVERY</div><h2>Search the <span>catalog.</span></h2></div><p>Search by product name, synonym, CAS number, or therapeutic area. Refine by specification and documentation needs.</p></div>
        <div className="ep-catalog-search"><Search size={18} /><input value={search} onChange={(event) => onSearch(event.target.value)} aria-label="Search product catalog" placeholder="Product name, synonym, CAS number, therapeutic area..." />{search && <button aria-label="Clear search" onClick={() => onSearch("")}><X size={16} /></button>}<span>{filtered.length} products</span></div>
        <div className="ep-segment-tabs" role="group" aria-label="Filter by health segment">
          {["All Categories", "Human Health APIs", "Veterinary APIs"].map((tab) => <button key={tab} className={marketTab === tab ? "selected" : ""} aria-pressed={marketTab === tab} onClick={() => onMarketTabChange(tab)}>{tab}</button>)}
        </div>
        <div className="ep-filters" aria-label="Product filters">
          <label><span>Category</span><select value={category} onChange={(event) => setCategory(event.target.value)}><option>All categories</option>{productCategories.map((item) => <option key={item}>{item}</option>)}</select><ChevronDown size={14} /></label>
          <label><span>Market</span><select value={productMarket} onChange={(event) => setProductMarket(event.target.value)}><option>Any market</option>{markets.map((item) => <option key={item}>{item}</option>)}</select><ChevronDown size={14} /></label>
          <label><span>Regulatory status</span><select value={regulatory} onChange={(event) => setRegulatory(event.target.value)}><option>Any regulatory status</option>{regulatoryStatuses.map((item) => <option key={item}>{item}</option>)}</select><ChevronDown size={14} /></label>
          <label><span>Pharmacopoeia</span><select value={grade} onChange={(event) => setGrade(event.target.value)}><option>Any grade</option>{pharmacopeias.map((item) => <option key={item}>{item}</option>)}</select><ChevronDown size={14} /></label>
          <label><span>Therapeutic area</span><select value={area} onChange={(event) => setArea(event.target.value)}><option>Any therapeutic area</option>{areas.map((item) => <option key={item}>{item}</option>)}</select><ChevronDown size={14} /></label>
          <button className="ep-clear-filters" onClick={clearFilters}>Clear filters</button>
        </div>
        <div className="ep-active-market"><span className="ep-market-dot" />Showing {marketTab === "All Categories" ? "all product categories" : marketTab.toLowerCase()} · {filtered.length} matches</div>
        {filtered.length ? <div className="ep-table-wrap"><table className="ep-product-table"><thead><tr><th>Product name</th><th>CAS number</th><th>Category</th><th>Therapeutic / application use</th><th>Regulatory status</th><th>Action</th></tr></thead><tbody>{filtered.map((product) => <tr key={product.id}>
          <td><button className="ep-table-product-name" onClick={() => onQuickView(product)}>{product.name}</button><small>{product.markets.join(" · ")}</small></td>
          <td className="ep-table-cas">{product.cas}</td><td><span className={`ep-table-category ep-product-${product.color}`}>{product.category}</span></td><td>{product.therapeuticArea}</td>
          <td>{product.regulatory.length ? <div className="ep-table-statuses">{product.regulatory.map((status) => <span key={status}>{status}</span>)}</div> : <span className="ep-status-request">Confirm on inquiry</span>}</td>
          <td><div className="ep-table-actions"><button onClick={() => onQuickView(product)}>Inquire</button><button aria-label={`Add ${product.name} to inquiry list`} onClick={() => onAdd(product)}><ShoppingBasket size={15} /> Add to List</button></div></td>
        </tr>)}</tbody></table></div> : <div className="ep-empty"><CircleHelp size={22} /><strong>No products match those filters.</strong><span>Adjust your criteria or contact our sourcing team for a specific requirement.</span><button onClick={clearFilters}>Reset search and filters</button></div>}
        <p className="ep-data-note">Product examples and specification values are for demonstration only. Confirm current specifications, regulatory status, lead time, and MOQ with Curecopia and the supplying manufacturer.</p>
      </div>
    </section>
  );
}

function ProductModal({ product, onClose, onAdd }) {
  if (!product) return null;
  return <div className="ep-overlay" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) onClose(); }}>
    <section className="ep-product-modal" role="dialog" aria-modal="true" aria-labelledby="modal-title">
      <div className="ep-modal-top"><div><span className="ep-modal-kicker">{product.category} · CAS {product.cas}</span><h2 id="modal-title">{product.name}</h2><p>{product.synonyms.join(" · ")}</p></div><button className="ep-icon-button" aria-label="Close product details" onClick={onClose}><X size={19} /></button></div>
      <div className="ep-modal-badges">{product.markets.map((item) => <span key={item}>{item} health</span>)}{product.grade.map((item) => <span key={item}>{item}</span>)}{!product.grade.length && <span>Grade to be confirmed</span>}</div>
      <div className="ep-spec-grid">
        <div><span>Molecular formula</span><strong>{product.formula}</strong></div><div><span>Assay / purity</span><strong>{product.assay}</strong></div>
        <div><span>Indicative lead time</span><strong>{product.leadTime}</strong></div><div><span>Indicative MOQ</span><strong>{product.moq}</strong></div>
        <div className="ep-spec-wide"><span>Storage conditions</span><strong>{product.storage}</strong></div>
        <div className="ep-spec-wide"><span>Impurity profile</span><strong>{product.impurity}</strong></div>
      </div>
      <div className="ep-dossier-box"><FileText size={18} /><div><strong>Regulatory dossier status</strong><p>{product.dossier}</p><div className="ep-reg-tags">{product.regulatory.length ? product.regulatory.map((status) => <span key={status}><Check size={12} />{status}</span>) : <span>Not provided — request confirmation</span>}</div></div></div>
      <p className="ep-modal-disclaimer">Illustrative product information only; final specifications and dossier access are confirmed during supplier qualification.</p>
      <div className="ep-modal-actions"><button className="ep-secondary-button" onClick={onClose}>Close</button><button className="ep-primary-button" onClick={() => { onAdd(product); onClose(); }}><ShoppingBasket size={16} /> Add to inquiry list</button></div>
    </section>
  </div>;
}

function RfqDrawer({ open, items, onClose, onRemove, onToggleDoc, onUpdate }) {
  const [batch, setBatch] = useState("");
  const [timeline, setTimeline] = useState("");
  if (!open) return null;
  return <div className="ep-drawer-backdrop" onMouseDown={(event) => { if (event.target === event.currentTarget) onClose(); }}>
    <aside className="ep-rfq-drawer" role="dialog" aria-modal="true" aria-labelledby="rfq-drawer-title">
      <div className="ep-drawer-header"><div><span>PROCUREMENT WORKSPACE</span><h2 id="rfq-drawer-title">Inquiry list <b>{items.length}</b></h2></div><button className="ep-icon-button" aria-label="Close inquiry list" onClick={onClose}><X size={19} /></button></div>
      <div className="ep-drawer-content">
        {!items.length ? <div className="ep-empty ep-drawer-empty"><ShoppingBasket size={24} /><strong>Your inquiry list is empty.</strong><span>Add catalog products to request a quote and technical documents.</span><button onClick={onClose}>Browse catalog</button></div> : <>
          <p className="ep-drawer-intro">Select the documents you need for each item. Final availability is confirmed by the supplier.</p>
          {items.map((item) => <article className="ep-rfq-item" key={item.product.id}>
            <div className="ep-rfq-item-title"><div><span>CAS {item.product.cas}</span><strong>{item.product.name}</strong></div><button aria-label={`Remove ${item.product.name}`} onClick={() => onRemove(item.product.id)}><X size={15} /></button></div>
            <div className="ep-doc-label">Requested documentation</div>
            <div className="ep-doc-options">{documentOptions.map((doc) => <label key={doc} className={item.documents.includes(doc) ? "checked" : ""}><input type="checkbox" checked={item.documents.includes(doc)} onChange={() => onToggleDoc(item.product.id, doc)} /><span><Check size={11} /></span>{doc}</label>)}</div>
          </article>)}
          <div className="ep-drawer-fields">
            <label>Target batch size <input placeholder="e.g. 500 kg or 2 MT" value={batch} onChange={(event) => { setBatch(event.target.value); onUpdate({ batch: event.target.value }); }} /></label>
            <label>Target delivery timeline <select value={timeline} onChange={(event) => { setTimeline(event.target.value); onUpdate({ timeline: event.target.value }); }}><option value="">Select a timeline</option><option>As soon as possible</option><option>Within 4–6 weeks</option><option>Within 2–3 months</option><option>Flexible / planning stage</option></select></label>
          </div>
        </>}
      </div>
      <div className="ep-drawer-footer"><span><ShieldCheck size={15} /> Product and document details are subject to confirmation.</span><button className="ep-primary-button" disabled={!items.length} onClick={() => { onClose(); document.getElementById("inquiry")?.scrollIntoView({ behavior: "smooth" }); }}>Continue to RFQ <ArrowRight size={16} /></button></div>
    </aside>
  </div>;
}

function QualityVault() {
  const stages = [
    ["01", "Site & quality-system review", "Review manufacturing site information, quality systems, and relevant certifications."],
    ["02", "Analytical capability", "Assess method, specification, and testing documentation relevant to the product."],
    ["03", "Regulatory file review", "Coordinate applicable DMF, CEP/COS, and market-specific dossier information."],
    ["04", "Batch consistency", "Review historical quality information and agree on ongoing supply expectations."],
  ];
  return <section className="ep-quality" id="quality"><div className="ep-container">
    <div className="ep-section-heading"><div><div className="ep-eyebrow ep-eyebrow-light">QUALITY & REGULATORY VAULT</div><h2>Qualification before<br /><span>commitment.</span></h2></div><p>Supplier qualification is product- and market-specific. We help coordinate the information procurement and quality teams need to assess a source.</p></div>
    <div className="ep-audit-grid">{stages.map(([number, title, description]) => <article key={number} className="ep-audit-stage"><span>{number}</span><h3>{title}</h3><p>{description}</p></article>)}</div>
    <div className="ep-sla-row"><div><FileCheck2 size={19} /><span><strong>COA coordination</strong><small>Request with your inquiry; turnaround confirmed by source</small></span></div><div><ClipboardCheck size={19} /><span><strong>Audit pack coordination</strong><small>Supplier document scope and timing confirmed on request</small></span></div><div><Truck size={19} /><span><strong>Cold-chain planning</strong><small>Temperature requirements reviewed per product</small></span></div></div>
    <p className="ep-quality-disclaimer">Quality review descriptions are intended to explain our sourcing workflow. They do not imply that Curecopia owns, operates, audits, or certifies a manufacturing site.</p>
  </div></section>;
}

function BuyerInquiry({ items, rfqDetails }) {
  const [step, setStep] = useState(1);
  const [status, setStatus] = useState("");
  const [form, setForm] = useState({ buyerType: "", company: "", name: "", email: "", phone: "", country: "", incoterms: "", deliveryDate: "", additional: "" });
  const update = (event) => setForm((current) => ({ ...current, [event.target.name]: event.target.value }));
  const submit = (event) => {
    event.preventDefault();
    setStatus("Your RFQ details are complete in this demo. Connect a backend endpoint to submit inquiries to Curecopia.");
  };
  return <section className="ep-inquiry-section" id="inquiry"><div className="ep-container ep-inquiry-layout">
    <div className="ep-inquiry-copy"><div className="ep-eyebrow ep-eyebrow-light">REQUEST FOR QUOTATION</div><h2>Make your next<br />sourcing step <span>clear.</span></h2><p>Tell us about your organization, destination, and timing. Include products in your inquiry list or share a sourcing requirement directly.</p>
      <div className="ep-inquiry-points"><span><Check size={15} /> Product-level document requests</span><span><Check size={15} /> Destination and delivery terms</span><span><Check size={15} /> Human and animal-health sourcing</span></div>
      <div className="ep-inquiry-note"><ShieldCheck size={17} /><span>Confidential business inquiries are reviewed by the sourcing team.</span></div>
    </div>
    <form className="ep-rfq-form" onSubmit={submit}>
      <div className="ep-form-heading"><div><span>STEP {step} OF 3</span><h3>{step === 1 ? "Buyer & company" : step === 2 ? "Shipping requirements" : "Review inquiry"}</h3></div><div className="ep-step-track"><i className={step >= 1 ? "active" : ""} /><i className={step >= 2 ? "active" : ""} /><i className={step >= 3 ? "active" : ""} /></div></div>
      {step === 1 && <div className="ep-form-grid">
        <label>Buyer type <select required name="buyerType" value={form.buyerType} onChange={update}><option value="">Select buyer type</option><option>Formulator</option><option>Manufacturer</option><option>Trader / distributor</option><option>Other</option></select></label>
        <label>Company name <input required name="company" value={form.company} onChange={update} placeholder="Legal company name" /></label>
        <label>Contact name <input required name="name" value={form.name} onChange={update} placeholder="Full name" autoComplete="name" /></label>
        <label>Business email <input required type="email" name="email" value={form.email} onChange={update} placeholder="name@company.com" autoComplete="email" /></label>
        <label>Phone / WhatsApp <input name="phone" value={form.phone} onChange={update} placeholder="+ country code" autoComplete="tel" /></label>
        <label>Target market / country <input required name="country" value={form.country} onChange={update} placeholder="Country of destination" autoComplete="country-name" /></label>
      </div>}
      {step === 2 && <div className="ep-form-grid">
        <label>Incoterms <select required name="incoterms" value={form.incoterms} onChange={update}><option value="">Select delivery terms</option><option>FOB</option><option>CIF</option><option>DDP</option><option>To be discussed</option></select></label>
        <label>Target delivery date <input required type="date" name="deliveryDate" value={form.deliveryDate} onChange={update} /></label>
        <label className="ep-form-wide">Additional requirements <textarea name="additional" value={form.additional} onChange={update} placeholder="Quality requirements, packaging, registration market, or other details" rows="4" /></label>
        <div className="ep-rfq-summary"><strong>Inquiry list summary</strong><span>{items.length} product{items.length === 1 ? "" : "s"} added</span>{rfqDetails.batch && <span>Target batch: {rfqDetails.batch}</span>}{rfqDetails.timeline && <span>Timeline: {rfqDetails.timeline}</span>}</div>
      </div>}
      {step === 3 && <div className="ep-review-panel">
        <div><span>BUYER</span><strong>{form.name} · {form.company}</strong><small>{form.buyerType} · {form.email}</small></div>
        <div><span>DESTINATION & TERMS</span><strong>{form.country} · {form.incoterms}</strong><small>Target delivery: {form.deliveryDate}</small></div>
        <div><span>PRODUCTS</span><strong>{items.length ? items.map((item) => item.product.name).join(", ") : "No catalog products added"}</strong><small>{rfqDetails.batch ? `Target batch: ${rfqDetails.batch}` : "Batch size can be specified in your message"}</small></div>
        {form.additional && <div><span>ADDITIONAL REQUIREMENTS</span><strong>{form.additional}</strong></div>}
      </div>}
      <div className="ep-form-actions">{step > 1 ? <button type="button" className="ep-secondary-button" onClick={() => setStep(step - 1)}>Back</button> : <span className="ep-privacy-note"><ShieldCheck size={14} /> Information kept for RFQ handling.</span>}{step < 3 ? <button type="button" className="ep-primary-button" onClick={() => { const formElement = document.querySelector(".ep-rfq-form"); if (formElement?.reportValidity()) setStep(step + 1); }}>Continue <ArrowRight size={15} /></button> : <button type="submit" className="ep-primary-button">Complete RFQ <ArrowRight size={15} /></button>}</div>
      {status && <p className="ep-form-status" role="status"><CircleHelp size={16} />{status}</p>}
      <p className="ep-demo-note">Demo form only — no inquiry is sent until a submission service is connected.</p>
    </form>
  </div></section>;
}

function Footer() {
  return <footer className="ep-footer"><div className="ep-container">
    <div className="ep-footer-main"><div><Logo /><p>Pharmaceutical, excipient, and fine chemical sourcing for human and animal health markets.</p><a href="mailto:hello@curecopia.com">hello@curecopia.com <ArrowUpRight size={14} /></a></div>
      <div><strong>PRODUCTS</strong><a href="#catalog">Active ingredients</a><a href="#catalog">Pharmaceutical excipients</a><a href="#catalog">Fine chemicals</a><a href="#catalog">Veterinary & premix</a></div>
      <div><strong>SUPPORT</strong><a href="#quality">Quality & regulatory</a><a href="#inquiry">Request a quotation</a><a href="#inquiry">Supplier documentation</a><a href="#inquiry">Contact sourcing</a></div>
      <div className="ep-footer-compliance"><ShieldCheck size={21} /><strong>Responsible sourcing.<br />Market-specific review.</strong><span>Product claims, regulatory status, and documentation require supplier and destination-market confirmation.</span></div>
    </div>
    <div className="ep-footer-bottom"><span>© {new Date().getFullYear()} Curecopia. All rights reserved.</span><span>Information on this site is for B2B inquiry and sourcing purposes only.</span></div>
  </div></footer>;
}

export default function EnterpriseApp() {
  const [market, setMarket] = useState("Human");
  const [marketTab, setMarketTab] = useState("All Categories");
  const [search, setSearch] = useState("");
  const [quickView, setQuickView] = useState(null);
  const [rfqOpen, setRfqOpen] = useState(false);
  const [rfqItems, setRfqItems] = useState([]);
  const [rfqDetails, setRfqDetails] = useState({ batch: "", timeline: "" });
  const [toast, setToast] = useState("");
  useEffect(() => {
    if (!quickView && !rfqOpen) return undefined;
    const closeOnEscape = (event) => {
      if (event.key === "Escape") {
        setQuickView(null);
        setRfqOpen(false);
      }
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [quickView, rfqOpen]);
  useEffect(() => {
    if (!toast) return undefined;
    const timeout = window.setTimeout(() => setToast(""), 3200);
    return () => window.clearTimeout(timeout);
  }, [toast]);
  const scrollToCatalog = (event) => {
    event.preventDefault();
    document.getElementById("catalog")?.scrollIntoView({ behavior: "smooth" });
  };
  const addProduct = (product) => {
    if (rfqItems.some((item) => item.product.id === product.id)) {
      setToast(`${product.name} is already in your inquiry list.`);
      return;
    }
    setRfqItems((current) => [...current, { product, documents: ["COA"] }]);
    setToast(`${product.name} added to your inquiry list.`);
  };
  const removeProduct = (id) => setRfqItems((current) => current.filter((item) => item.product.id !== id));
  const toggleDocument = (id, document) => setRfqItems((current) => current.map((item) => {
    if (item.product.id !== id) return item;
    const documents = item.documents.includes(document) ? item.documents.filter((entry) => entry !== document) : [...item.documents, document];
    return { ...item, documents };
  }));
  return <>
    <Header market={market} onMarketChange={(nextMarket) => { setMarket(nextMarket); setMarketTab(nextMarket === "Human" ? "Human Health APIs" : "Veterinary APIs"); }} itemCount={rfqItems.length} onOpenRfQ={() => setRfqOpen(true)} />
    <main>
      <Hero market={market} search={search} onSearch={setSearch} onSearchSubmit={scrollToCatalog} />
      <StandardsBar market={market} />
      <MarketSolutions onSearch={setSearch} />
      <Catalog marketTab={marketTab} onMarketTabChange={(tab) => { setMarketTab(tab); if (tab === "Human Health APIs") setMarket("Human"); if (tab === "Veterinary APIs") setMarket("Veterinary"); }} search={search} onSearch={setSearch} onQuickView={setQuickView} onAdd={addProduct} />
      <QualityVault />
      <BuyerInquiry items={rfqItems} rfqDetails={rfqDetails} />
    </main>
    <Footer />
    <ProductModal product={quickView} onClose={() => setQuickView(null)} onAdd={addProduct} />
    <RfqDrawer open={rfqOpen} items={rfqItems} onClose={() => setRfqOpen(false)} onRemove={removeProduct} onToggleDoc={toggleDocument} onUpdate={(details) => setRfqDetails((current) => ({ ...current, ...details }))} />
    {toast && <div className="ep-toast" role="status"><PackageCheck size={17} /><span>{toast}</span><button aria-label="Dismiss notification" onClick={() => setToast("")}><X size={15} /></button></div>}
  </>;
}
