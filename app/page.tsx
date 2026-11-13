const GOOGLE_FORM_EMBED_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSfVrVq2z-dpRiRUK2YnYy5kYgEz8Xq59bu8VppIV3YYejtkgw/viewform?embedded=true";

const GOOGLE_FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSfVrVq2z-dpRiRUK2YnYy5kYgEz8Xq59bu8VppIV3YYejtkgw/viewform";


const specializations = [
  ["Marketing", "Brand strategy, sales and customer growth"],
  ["Finance", "Banking, investments and financial planning"],
  ["Human Resources", "People management and talent development"],
  ["Business Analytics", "Data-led decisions and business insights"],
  ["Operations", "Supply chain, logistics and process management"],
  ["International Business", "Global markets and international trade"],
];
const steps = [
  { number: "01", title: "Share your details", text: "Tell us about your education, preferred MBA mode and study budget." },
  { number: "02", title: "Choose a convenient time", text: "Select when you would like an admission counsellor to contact you." },
  { number: "03", title: "Discuss your options", text: "Ask questions about courses, eligibility, fees and the admission process." },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#home" aria-label="MBA Connect home"><span className="brand-mark">M</span><span>MBA<span className="brand-light">Connect</span></span></a>
        <nav aria-label="Main navigation"><a href="#mba-options">MBA options</a><a href="#how-it-works">How it works</a><a href="#faq">FAQs</a></nav>
        <a className="header-cta" href="#enquiry">Get free counselling <span>↗</span></a>
      </header>

      <section className="hero" id="home">
        <div className="hero-copy">
          <div className="eyebrow"><span className="eyebrow-dot" /> MBA ADMISSION GUIDANCE</div>
          <h1>Find an MBA path that <span>fits your goals.</span></h1>
          <p className="hero-description">Exploring an MBA? Get a clearer picture of courses, specializations, eligibility and fees. Submit a free enquiry and choose a convenient time for a counselling call.</p>
          <div className="hero-actions"><a className="primary-button" href="#enquiry">Get free counselling <span>→</span></a><span className="no-pressure">Free enquiry · No obligation</span></div>
          <div className="hero-note"><span className="note-icon">✓</span> Share your details and preferred callback time.</div>
          <div className="hero-points"><span><b>01</b> Course guidance</span><span><b>02</b> Fee information</span><span><b>03</b> Admission queries</span></div>
        </div>
        <div className="hero-art" aria-label="Illustration of a graduate holding a diploma">
          <div className="art-orbit orbit-one" /><div className="art-orbit orbit-two" />
          <div className="art-card card-top"><span className="mini-icon">✦</span><span><b>Explore your options</b><small>Find a course that suits you</small></span></div>
          <div className="graduate-scene"><div className="sun-disc" /><div className="person-shadow" /><div className="person-body" /><div className="person-neck" /><div className="person-head" /><div className="person-hair" /><div className="person-cap" /><div className="person-cap-top" /><div className="diploma"><span>✦</span></div><div className="scene-book book-one" /><div className="scene-book book-two" /><div className="scene-plant"><i /><i /><i /><b /></div></div>
          <div className="art-card card-bottom"><span className="check-bubble">✓</span><span><b>Free counselling enquiry</b><small>Choose when we can call you</small></span></div>
          <span className="spark spark-one">✳</span><span className="spark spark-two">✦</span>
        </div>
      </section>

      <section className="quick-info" aria-label="MBA enquiry information">
        <div><span className="quick-icon">⌂</span><span><b>Explore MBA formats</b><small>Regular, online and distance options</small></span></div>
        <div><span className="quick-icon">◎</span><span><b>Understand eligibility</b><small>Ask about admission requirements</small></span></div>
        <div><span className="quick-icon">₹</span><span><b>Discuss your budget</b><small>Request course and fee information</small></span></div>
      </section>

      <section className="options-section" id="mba-options">
        <div className="section-heading"><div><div className="eyebrow">EXPLORE YOUR INTERESTS</div><h2>Popular MBA <span>specializations.</span></h2></div><p>Not sure which area is right for you? Use the free counselling enquiry to discuss your interests and goals.</p></div>
        <div className="specialization-grid">{specializations.map(([name, description], index) => <article className="specialization-card" key={name}><span className="specialization-number">0{index + 1}</span><h3>{name}</h3><p>{description}</p><a href="#enquiry" aria-label={`Ask about ${name}`}>Ask about this ↗</a></article>)}</div>
        <p className="disclaimer">Course availability, eligibility, fees and admission requirements vary by institution. Confirm current details directly with the relevant college.</p>
      </section>

      <section className="steps-section" id="how-it-works">
        <div className="section-heading"><div><div className="eyebrow">A SIMPLE THREE-STEP PROCESS</div><h2>Start with a <span>conversation.</span></h2></div><p>There is no payment or admission commitment required to submit an enquiry.</p></div>
        <div className="steps-grid">{steps.map((item) => <article className="step-card" key={item.number}><span className="step-number">{item.number}</span><div className="step-arrow">↗</div><h3>{item.title}</h3><p>{item.text}</p></article>)}</div>
      </section>

      <section className="enquiry-section" id="enquiry">
        <div className="enquiry-intro">
          <div className="eyebrow eyebrow-light"><span className="eyebrow-dot" /> FREE MBA COUNSELLING</div>
          <h2>Let's talk about<br />your MBA plans.</h2>
          <p>Fill in the student enquiry form to request a free counselling call. Add your preferred date and time so the team can plan a callback.</p>
          <div className="counselling-list"><div><span>✓</span> Discuss MBA courses and specializations</div><div><span>✓</span> Ask about eligibility and admission steps</div><div><span>✓</span> Request available fee information</div><div><span>✓</span> Choose a preferred callback slot</div></div>
          <div className="privacy-note"><span>🔒</span><span><b>Your information matters</b><small>Your details should only be used to respond to your enquiry and handled according to the published privacy notice.</small></span></div>
        </div>
        <div className="form-panel">
          <div className="form-panel-heading"><div><span className="form-kicker">STUDENT ENQUIRY</span><h3>Request free counselling</h3></div><span className="form-step">TAKES 2–3 MIN <b>↘</b></span></div>
          <p className="form-lead">Enter your details and preferred callback time in the form below.</p>
          



<div className="form-panel">

  {/* Scrollable Google Form */}
  <div className="form-frame-wrap">
    <iframe
      title="MBA Admission Free Counselling Form"
      src={GOOGLE_FORM_EMBED_URL}
      width="100%"
      height="700"
      frameBorder="0"
      marginHeight={0}
      marginWidth={0}
      scrolling="yes"
      loading="lazy"
    >
      Loading…
    </iframe>
  </div>

</div>

          <p className="form-fallback">Having trouble viewing the form? <a href={GOOGLE_FORM_URL} target="_blank" rel="noreferrer">Open it in a new tab ↗</a>.</p>
          <p className="form-setup-note">Website owner: replace the sample Google Forms URL in <code>app/page.tsx</code> with your own form's embed URL before publishing.</p>
        </div>
      </section>

      <section className="faq-section" id="faq">
        <div className="section-heading"><div><div className="eyebrow">GOOD TO KNOW</div><h2>Frequently asked <span>questions.</span></h2></div><p>Some quick answers before you request a call.</p></div>
        <div className="faq-list">
          <details><summary>Is the counselling enquiry free?</summary><p>Yes. Submitting this enquiry is free. Any college fees or other charges, if applicable, should be confirmed directly with the institution.</p></details>
          <details><summary>Does submitting the form guarantee admission?</summary><p>No. The form only requests information and a counselling call. Admission depends on each institution's eligibility criteria, selection process and available seats.</p></details>
          <details><summary>What information should I keep ready?</summary><p>You can share your graduation details, preferred MBA format, area of interest, approximate budget and callback preference.</p></details>
          <details><summary>When will I receive a call?</summary><p>You can request a preferred date and time in the form. A callback is subject to counsellor availability and confirmation.</p></details>
        </div>
      </section>

      <footer className="footer"><a className="brand footer-brand" href="#home"><span className="brand-mark">M</span><span>MBA<span className="brand-light">Connect</span></span></a><span>© {new Date().getFullYear()} MBA Connect. All rights reserved.</span><a href="#enquiry">Get free counselling ↑</a></footer>
    </main>
  );
}
