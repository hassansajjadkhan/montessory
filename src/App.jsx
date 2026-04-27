import { useEffect, useState } from 'react'
import './App.css'

const sections = [
  { id: 'home', label: 'Home' },
  { id: 'approach', label: 'Approach' },
  { id: 'programs', label: 'Programs' },
  { id: 'campus', label: 'Campus' },
  { id: 'expansion', label: 'Future Sections' },
]

function App() {
  const [navOpen, setNavOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.45 },
    )

    const targets = document.querySelectorAll('main section[id]')
    targets.forEach((target) => observer.observe(target))

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show')
            revealObserver.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.2 },
    )

    const revealElements = document.querySelectorAll('.reveal')
    revealElements.forEach((element) => revealObserver.observe(element))

    return () => revealObserver.disconnect()
  }, [])

  const handleNavClick = (sectionId) => {
    setActiveSection(sectionId)
    setNavOpen(false)
  }

  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>

      <header className="site-header" id="top">
        <div className="container nav-wrap">
          <a className="brand" href="#top" aria-label="Sprout Path Montessori home">
            <span className="brand-mark" aria-hidden="true"></span>
            <span className="brand-text">
              <strong>Sprout Path</strong>
              <small>Montessori School</small>
            </span>
          </a>

          <button
            className="nav-toggle"
            aria-expanded={navOpen}
            aria-controls="site-nav"
            onClick={() => setNavOpen((currentState) => !currentState)}
          >
            <span className="line"></span>
            <span className="line"></span>
            <span className="line"></span>
            <span className="sr-only">Toggle navigation</span>
          </button>

          <nav
            className={`site-nav${navOpen ? ' open' : ''}`}
            id="site-nav"
            aria-label="Primary navigation"
          >
            {sections.map((section) => (
              <a
                key={section.id}
                className={activeSection === section.id ? 'active' : ''}
                href={`#${section.id}`}
                onClick={() => handleNavClick(section.id)}
              >
                {section.label}
              </a>
            ))}
            <a className="btn btn-nav" href="#contact" onClick={() => setNavOpen(false)}>
              Schedule a Tour
              <span className="btn-nav-leaf" aria-hidden="true"></span>
            </a>
          </nav>
        </div>
      </header>

      <main id="main-content">
        <section className="hero" id="home">
          <div className="container hero-grid">
            <div className="hero-copy reveal">
              <p className="eyebrow">Education Website Foundation</p>
              <h1>
                <span className="hero-line">A prepared</span>
                <span className="hero-line">environment for</span>
                <span className="hero-line hero-line-accent">concentration.</span>
                <span className="hero-flourish" aria-hidden="true">
                  <span></span>
                  <span></span>
                  <span></span>
                </span>
              </h1>
              <span className="hero-rule" aria-hidden="true"></span>
              <p className="lead">
                Nurturing independent minds and kind hearts through calm classrooms,
                purposeful materials, and guides who respect the pace of development.
              </p>
              <div className="hero-actions">
                <a className="btn btn-primary hero-btn" href="#programs">
                  <span className="hero-btn-leaf" aria-hidden="true"></span>
                  Explore Programs
                </a>
                <a className="btn btn-secondary hero-btn" href="#approach">
                  Our Montessori Method
                  <span className="hero-btn-arrow" aria-hidden="true"></span>
                </a>
              </div>
              <ul className="hero-stats" aria-label="Quick school highlights">
                <li>
                  <span className="stat-icon stat-icon-family" aria-hidden="true"></span>
                  <strong>1:8</strong>
                  <span>Guide to child ratio</span>
                </li>
                <li>
                  <span className="stat-icon stat-icon-school" aria-hidden="true"></span>
                  <strong>3-12</strong>
                  <span>Mixed-age classrooms</span>
                </li>
                <li>
                  <span className="stat-icon stat-icon-leaf" aria-hidden="true"></span>
                  <strong>100%</strong>
                  <span>Child-led work cycles</span>
                </li>
              </ul>
            </div>

            <div className="hero-visual reveal delay-1" aria-hidden="true">
              <div className="hero-branch">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>

              <aside className="hero-panel" aria-label="Montessori highlights">
                <span className="panel-mark"></span>
                <h2>Prepared Montessori Environment</h2>
                <p className="panel-text">
                  Beautiful, orderly classrooms invite independence, concentration,
                  and joyful discovery through purposeful daily work.
                </p>
                <div className="panel-divider" aria-hidden="true">
                  <span></span>
                </div>
                <div className="logo-concept">
                  <div className="logo-chip">SP</div>
                  <div>
                    <p className="label">Montessori focus</p>
                    <p>Hands-on materials, calm routines, and guides who follow the child.</p>
                  </div>
                </div>

                <div className="palette-grid" aria-label="Color palette">
                  <div>
                    <span className="swatch swatch-1"></span>
                    <small>Canopy</small>
                  </div>
                  <div>
                    <span className="swatch swatch-2"></span>
                    <small>Clay</small>
                  </div>
                  <div>
                    <span className="swatch swatch-3"></span>
                    <small>Sand</small>
                  </div>
                  <div>
                    <span className="swatch swatch-4"></span>
                    <small>Mist</small>
                  </div>
                </div>
              </aside>

              <div className="hero-rainbow">
                <span className="rainbow-arch rainbow-arch-1"></span>
                <span className="rainbow-arch rainbow-arch-2"></span>
                <span className="rainbow-arch rainbow-arch-3"></span>
                <span className="rainbow-arch rainbow-arch-4"></span>
                <span className="rainbow-arch rainbow-arch-5"></span>
                <span className="rainbow-base"></span>
              </div>
            </div>
          </div>
        </section>

        <section className="approach-section" id="approach">
          <div className="container approach-shell">
            <div className="approach-branch" aria-hidden="true">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>

            <header className="approach-head show">
              <p className="eyebrow">Montessori Themes</p>
              <h2>
                <span className="approach-line">Built around clarity, order,</span>
                <span className="approach-line">
                  and self-directed <em>discovery</em>
                </span>
                <span className="approach-flourish" aria-hidden="true">
                  <span></span>
                  <span></span>
                  <span></span>
                </span>
              </h2>
              <span className="approach-rule" aria-hidden="true"></span>
              <p className="approach-intro">
                Our Montessori approach is rooted in respect, independence,
                and meaningful learning through experience.
              </p>
            </header>

            <div className="approach-grid">
              <article className="approach-card show">
                <span className="approach-icon approach-icon-environment" aria-hidden="true"></span>
                <h3>Prepared Environment</h3>
                <span className="approach-card-rule" aria-hidden="true"></span>
                <p>
                  Spaces are intentionally arranged so children can choose, focus,
                  and return materials independently.
                </p>
                <span className="approach-card-leaf" aria-hidden="true">
                  <span></span>
                  <span></span>
                  <span></span>
                </span>
              </article>

              <article className="approach-card show">
                <span className="approach-icon approach-icon-respect" aria-hidden="true"></span>
                <h3>Respect for the Child</h3>
                <span className="approach-card-rule" aria-hidden="true"></span>
                <p>
                  Guides observe before intervening, protecting concentration and helping
                  each learner build confidence.
                </p>
                <span className="approach-card-leaf" aria-hidden="true">
                  <span></span>
                  <span></span>
                  <span></span>
                </span>
              </article>

              <article className="approach-card show">
                <span className="approach-icon approach-icon-materials" aria-hidden="true"></span>
                <h3>Hands-on Materials</h3>
                <span className="approach-card-rule" aria-hidden="true"></span>
                <p>
                  Concrete experiences build deep understanding before abstraction
                  in language, math, and culture.
                </p>
                <span className="approach-card-leaf" aria-hidden="true">
                  <span></span>
                  <span></span>
                  <span></span>
                </span>
              </article>
            </div>
          </div>
        </section>

        <section className="programs-section" id="programs">
          <div className="container programs-shell">
            <div className="programs-branch" aria-hidden="true">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>

            <header className="programs-head show">
              <p className="eyebrow">Core Structure</p>
              <h2>
                <span className="programs-line">Program pathways for</span>
                <span className="programs-line">
                  every <em>growth</em> stage
                </span>
              </h2>
              <span className="programs-rule" aria-hidden="true"></span>
              <p className="programs-intro">
                Thoughtfully designed programs that meet children where they are and
                inspire where they can go.
              </p>
            </header>

            <div className="programs-grid">
              <article className="program-entry show">
                <div className="program-image program-image-early" aria-hidden="true">
                  <span className="stack-ring stack-ring-1"></span>
                  <span className="stack-ring stack-ring-2"></span>
                  <span className="stack-ring stack-ring-3"></span>
                  <span className="stack-ring stack-ring-4"></span>
                  <span className="stack-ring stack-ring-5"></span>
                  <span className="plant-pot"></span>
                </div>
                <div className="program-copy">
                  <div className="program-title-row">
                    <span className="program-icon program-icon-sprout" aria-hidden="true"></span>
                    <div>
                      <h3>Early Childhood</h3>
                      <p className="program-age">Ages 3-6</p>
                    </div>
                  </div>
                  <p>
                    Focused on practical life, sensorial exploration, and language
                    foundations.
                  </p>
                  <a className="program-link" href="#contact">
                    Learn more
                    <span className="program-link-arrow" aria-hidden="true"></span>
                  </a>
                  <span className="program-card-leaf" aria-hidden="true">
                    <span></span>
                    <span></span>
                    <span></span>
                  </span>
                </div>
              </article>

              <article className="program-entry show">
                <div className="program-image program-image-elementary" aria-hidden="true">
                  <span className="globe-orb"></span>
                  <span className="globe-axis"></span>
                  <span className="pencil-cup"></span>
                  <span className="desk-card"></span>
                </div>
                <div className="program-copy">
                  <div className="program-title-row">
                    <span className="program-icon program-icon-book" aria-hidden="true"></span>
                    <div>
                      <h3>Lower Elementary</h3>
                      <p className="program-age">Ages 6-9</p>
                    </div>
                  </div>
                  <p>
                    With integrated studies in math, storytelling, science, and
                    geography.
                  </p>
                  <a className="program-link" href="#contact">
                    Learn more
                    <span className="program-link-arrow" aria-hidden="true"></span>
                  </a>
                  <span className="program-card-leaf" aria-hidden="true">
                    <span></span>
                    <span></span>
                    <span></span>
                  </span>
                </div>
              </article>
            </div>

            <aside className="programs-values show" aria-label="Program principles">
              <div className="programs-values-lead">
                <span className="programs-values-icon" aria-hidden="true"></span>
                <div>
                  <h3>A clear path. A lifetime of growth.</h3>
                </div>
              </div>

              <div className="programs-values-list">
                <article>
                  <span className="value-icon value-icon-leaf" aria-hidden="true"></span>
                  <h4>Sequential learning</h4>
                  <p>Builds skills step by step.</p>
                </article>
                <article>
                  <span className="value-icon value-icon-heart" aria-hidden="true"></span>
                  <h4>Holistic development</h4>
                  <p>Nurtures mind, body, and character.</p>
                </article>
                <article>
                  <span className="value-icon value-icon-people" aria-hidden="true"></span>
                  <h4>Prepared for life</h4>
                  <p>Confident, capable learners for the future.</p>
                </article>
                <article>
                  <span className="value-icon value-icon-compass" aria-hidden="true"></span>
                  <h4>Guided with purpose</h4>
                  <p>Children discover their potential.</p>
                </article>
              </div>
              <span className="programs-values-wave" aria-hidden="true"></span>
            </aside>
          </div>
        </section>

        <section className="campus-section" id="campus">
          <div className="container campus-shell">
            <div className="campus-grid">
              <div className="campus-copy show">
                <p className="eyebrow">Readability First</p>
                <h2>
                  <span className="campus-line">Clear information architecture</span>
                  <span className="campus-line campus-line-accent">
                    for <em>families</em>
                  </span>
                  <span className="campus-flourish" aria-hidden="true">
                    <span></span>
                    <span></span>
                    <span></span>
                  </span>
                </h2>
                <p className="campus-intro">
                  This homepage uses a reusable section system, consistent
                  typography, and modular cards so future pages can be built
                  quickly without visual drift.
                </p>

                <div className="campus-features" aria-label="Readability benefits">
                  <article>
                    <span className="campus-feature-icon campus-feature-icon-screen" aria-hidden="true"></span>
                    <p>Responsive navigation and footer map</p>
                  </article>
                  <article>
                    <span className="campus-feature-icon campus-feature-icon-type" aria-hidden="true"></span>
                    <p>Balanced heading scale for mobile and desktop</p>
                  </article>
                  <article>
                    <span className="campus-feature-icon campus-feature-icon-lines" aria-hidden="true"></span>
                    <p>Consistent spacing rhythm across sections</p>
                  </article>
                  <article>
                    <span className="campus-feature-icon campus-feature-icon-puzzle" aria-hidden="true"></span>
                    <p>Simple content blocks for future CMS integration</p>
                  </article>
                </div>
              </div>

              <article className="campus-story show">
                <div className="campus-story-copy">
                  <span className="campus-story-icon" aria-hidden="true"></span>
                  <h3>Campus Story</h3>
                  <p>
                    Placeholder for future photography, team introduction, and
                    enrollment narrative.
                  </p>
                  <a className="campus-story-link" href="#contact">
                    Future Content Slot
                    <span className="program-link-arrow" aria-hidden="true"></span>
                  </a>
                </div>
                <div className="campus-story-visual" aria-hidden="true">
                  <span className="campus-branch-stem"></span>
                  <span className="campus-branch-leaf campus-branch-leaf-1"></span>
                  <span className="campus-branch-leaf campus-branch-leaf-2"></span>
                  <span className="campus-branch-leaf campus-branch-leaf-3"></span>
                  <span className="campus-branch-leaf campus-branch-leaf-4"></span>
                  <span className="campus-branch-leaf campus-branch-leaf-5"></span>
                  <span className="campus-branch-leaf campus-branch-leaf-6"></span>
                  <span className="campus-camera-shadow"></span>
                  <span className="campus-camera-body"></span>
                  <span className="campus-camera-lens"></span>
                  <span className="campus-camera-lens-core"></span>
                  <span className="campus-camera-top"></span>
                  <span className="campus-camera-button"></span>
                  <span className="campus-camera-strap"></span>
                  <span className="campus-block campus-block-a"></span>
                  <span className="campus-block campus-block-b"></span>
                  <span className="campus-stone"></span>
                </div>
              </article>
            </div>

            <aside className="campus-values show" aria-label="Site qualities">
              <article>
                <span className="campus-value-icon campus-value-icon-family" aria-hidden="true"></span>
                <h4>Family focused</h4>
                <p>Designed for clarity, trust, and peace of mind.</p>
              </article>
              <article>
                <span className="campus-value-icon campus-value-icon-compass" aria-hidden="true"></span>
                <h4>Easy to navigate</h4>
                <p>Information is easy to find and understand.</p>
              </article>
              <article>
                <span className="campus-value-icon campus-value-icon-growth" aria-hidden="true"></span>
                <h4>Built to grow</h4>
                <p>Flexible structure for future content and programs.</p>
              </article>
              <article>
                <span className="campus-value-icon campus-value-icon-shield" aria-hidden="true"></span>
                <h4>Consistent &amp; reliable</h4>
                <p>A unified experience across every page.</p>
              </article>
              <article>
                <span className="campus-value-icon campus-value-icon-heart" aria-hidden="true"></span>
                <h4>Rooted in purpose</h4>
                <p>Every detail supports meaningful learning and connection.</p>
              </article>
              <span className="campus-values-leafmark" aria-hidden="true">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </span>
            </aside>
          </div>
        </section>

        <section className="expansion-section" id="expansion">
          <div className="container expansion-shell">
            <div className="expansion-branch" aria-hidden="true">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>

            <header className="expansion-head show">
              <p className="eyebrow">Expansion Ready</p>
              <h2>
                <span className="expansion-line">Planned sections for the</span>
                <span className="expansion-line">
                  ongoing <em>project timeline</em>
                </span>
                <span className="expansion-flourish" aria-hidden="true">
                  <span></span>
                  <span></span>
                  <span></span>
                </span>
              </h2>
              <span className="expansion-rule" aria-hidden="true"></span>
              <p className="expansion-intro">
                Thoughtfully designed areas that grow with our school-supporting
                communication, connection, and community.
              </p>
            </header>

            <div className="expansion-grid">
              <article className="expansion-card show">
                <div className="expansion-card-copy">
                  <div className="expansion-card-head">
                    <span className="expansion-card-icon expansion-card-icon-megaphone" aria-hidden="true"></span>
                    <div>
                      <h3>Landing Variants</h3>
                      <span className="expansion-card-rule" aria-hidden="true"></span>
                    </div>
                  </div>
                  <p>
                    Admissions-focused landing pages for campaigns and local
                    outreach.
                  </p>
                </div>
                <div className="expansion-card-visual expansion-card-visual-landing" aria-hidden="true">
                  <span className="landing-house"></span>
                  <span className="landing-book"></span>
                  <span className="landing-book-copy"></span>
                  <span className="landing-shadow"></span>
                </div>
                <a className="expansion-card-link" href="#contact">
                  Explore landing options
                  <span className="program-link-arrow" aria-hidden="true"></span>
                </a>
                <span className="expansion-card-leafmark" aria-hidden="true">
                  <span></span>
                  <span></span>
                  <span></span>
                </span>
              </article>

              <article className="expansion-card show">
                <div className="expansion-card-copy">
                  <div className="expansion-card-head">
                    <span className="expansion-card-icon expansion-card-icon-parents" aria-hidden="true"></span>
                    <div>
                      <h3>Parent Dashboard</h3>
                      <span className="expansion-card-rule" aria-hidden="true"></span>
                    </div>
                  </div>
                  <p>
                    Secure area for announcements, child progress snapshots, and
                    resources.
                  </p>
                </div>
                <div className="expansion-card-visual expansion-card-visual-dashboard" aria-hidden="true">
                  <span className="dashboard-cup"></span>
                  <span className="dashboard-tablet"></span>
                  <span className="dashboard-screen-line dashboard-screen-line-1"></span>
                  <span className="dashboard-screen-line dashboard-screen-line-2"></span>
                  <span className="dashboard-screen-pill dashboard-screen-pill-1"></span>
                  <span className="dashboard-screen-pill dashboard-screen-pill-2"></span>
                  <span className="dashboard-avatar dashboard-avatar-1"></span>
                  <span className="dashboard-avatar dashboard-avatar-2"></span>
                </div>
                <a className="expansion-card-link" href="#contact">
                  See dashboard preview
                  <span className="program-link-arrow" aria-hidden="true"></span>
                </a>
                <span className="expansion-card-leafmark" aria-hidden="true">
                  <span></span>
                  <span></span>
                  <span></span>
                </span>
              </article>

              <article className="expansion-card show">
                <div className="expansion-card-copy">
                  <div className="expansion-card-head">
                    <span className="expansion-card-icon expansion-card-icon-folder" aria-hidden="true"></span>
                    <div>
                      <h3>Resource Library</h3>
                      <span className="expansion-card-rule" aria-hidden="true"></span>
                    </div>
                  </div>
                  <p>
                    Downloadable guides, FAQs, and Montessori-at-home support
                    materials.
                  </p>
                </div>
                <div className="expansion-card-visual expansion-card-visual-library" aria-hidden="true">
                  <span className="library-plant-pot"></span>
                  <span className="library-plant-leaf library-plant-leaf-1"></span>
                  <span className="library-plant-leaf library-plant-leaf-2"></span>
                  <span className="library-plant-leaf library-plant-leaf-3"></span>
                  <span className="library-box"></span>
                  <span className="library-book library-book-1"></span>
                  <span className="library-book library-book-2"></span>
                  <span className="library-book library-book-3"></span>
                  <span className="library-rainbow"></span>
                </div>
                <a className="expansion-card-link" href="#contact">
                  Browse resources
                  <span className="program-link-arrow" aria-hidden="true"></span>
                </a>
                <span className="expansion-card-leafmark" aria-hidden="true">
                  <span></span>
                  <span></span>
                  <span></span>
                </span>
              </article>
            </div>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="container contact-shell">
            <div className="contact-copy show">
              <p className="eyebrow">Schedule A Tour</p>
              <h2>
                <span className="contact-line">Let&apos;s plan a calm,</span>
                <span className="contact-line">
                  welcoming <em>first visit</em>
                </span>
              </h2>
              <span className="contact-rule" aria-hidden="true"></span>
              <p className="contact-intro">
                Share a few details and we&apos;ll follow up with tour times, admissions
                information, and the best next step for your family.
              </p>

              <div className="contact-notes" aria-label="Contact details">
                <article>
                  <span className="contact-note-icon contact-note-icon-mail" aria-hidden="true"></span>
                  <div>
                    <h3>Email us</h3>
                    <p>hello@sproutpath.edu</p>
                  </div>
                </article>
                <article>
                  <span className="contact-note-icon contact-note-icon-phone" aria-hidden="true"></span>
                  <div>
                    <h3>Call the office</h3>
                    <p>(000) 000-0000</p>
                  </div>
                </article>
                <article>
                  <span className="contact-note-icon contact-note-icon-clock" aria-hidden="true"></span>
                  <div>
                    <h3>Best response window</h3>
                    <p>Monday-Friday, 8:00 AM to 4:00 PM</p>
                  </div>
                </article>
              </div>
            </div>

            <form className="contact-form show" action="#contact" method="post">
              <div className="contact-form-grid">
                <label>
                  <span>Parent or guardian name</span>
                  <input type="text" name="guardianName" placeholder="Your full name" />
                </label>
                <label>
                  <span>Email address</span>
                  <input type="email" name="email" placeholder="hello@example.com" />
                </label>
                <label>
                  <span>Phone number</span>
                  <input type="tel" name="phone" placeholder="(555) 123-4567" />
                </label>
                <label>
                  <span>Child age group</span>
                  <select name="ageGroup" defaultValue="">
                    <option value="" disabled>
                      Select a program
                    </option>
                    <option value="early-childhood">Early Childhood (3-6)</option>
                    <option value="lower-elementary">Lower Elementary (6-9)</option>
                    <option value="elementary-plus">Elementary and beyond</option>
                  </select>
                </label>
                <label className="contact-form-message">
                  <span>What would you like to ask?</span>
                  <textarea
                    name="message"
                    rows="5"
                    placeholder="Tell us what you're hoping to learn during your visit."
                  ></textarea>
                </label>
              </div>

              <div className="contact-form-actions">
                <button className="btn btn-primary contact-submit" type="submit">
                  Request A Tour
                </button>
                <p>We&apos;ll reach out with available times and next steps.</p>
              </div>
            </form>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-grid">
          <div>
            <h2>Sprout Path Montessori</h2>
            <p>Education-focused website foundation. No e-commerce features included.</p>
          </div>
          <nav aria-label="Footer navigation" className="footer-nav">
            {sections.map((section) => (
              <a key={section.id} href={`#${section.id}`}>
                {section.label}
              </a>
            ))}
          </nav>
          <div className="footer-contact">
            <p>
              <strong>Email:</strong> hello@sproutpath.edu
            </p>
            <p>
              <strong>Phone:</strong> (000) 000-0000
            </p>
          </div>
        </div>
      </footer>
    </>
  )
}

export default App
