import { useEffect, useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import Certifications from './sections/Certifications';
import Achievements from './sections/Achievements';
import Resume from './sections/Resume';
import Contact from './sections/Contact';

const CERT_IMAGES = {
  nptel: '/images/nptel.jpg',
  infosys: '/images/infosys.jpg',
  kaashiv: '/images/kaashiv.jpg',
  geosi: '/images/geosi.jpg',
  matt: '/images/matt.jpg',
};

export default function App() {
  const [modal, setModal] = useState(null);

  // Dynamic cursor spotlight positioning for interactive cards
  useEffect(() => {
    const handleMouseMove = (e) => {
      document.documentElement.style.setProperty('--mouse-x', `${e.clientX}px`);
      document.documentElement.style.setProperty('--mouse-y', `${e.clientY}px`);
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Intersection Observer for scroll reveal animations
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in');
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    );
    document.querySelectorAll('.reveal').forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  // Close certificate modal on Escape key
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') setModal(null);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  // Open certificate modal on delegated click
  const handleMainClick = (e) => {
    const card = e.target.closest('.cert-card, .tl-cert');
    if (!card) return;
    const d = card.dataset;
    if (d.img && CERT_IMAGES[d.img]) {
      setModal({
        src: CERT_IMAGES[d.img],
        title: d.title || 'Certificate Credential',
        meta: d.issuer ? `${d.issuer} ${d.date ? `· ${d.date}` : ''}` : '',
      });
    }
  };

  return (
    <>
      <Header />
      <main onClick={handleMainClick}>
        <Hero />
        <hr className="divider" />
        <About />
        <Skills />
        <hr className="divider" />
        <Experience />
        <Projects />
        <hr className="divider" />
        <Certifications />
        <Achievements />
        <hr className="divider" />
        <Resume />
        <Contact />
      </main>
      <Footer />
      <BackToTop />

      {/* Certificate Lightbox Modal */}
      {modal && (
        <div
          className="modal-bg open"
          onClick={(e) => e.target === e.currentTarget && setModal(null)}
          role="dialog"
          aria-modal="true"
        >
          <div className="modal-box cert-modal-box">
            <div className="modal-head">
              <strong>{modal.title}</strong>
              <button
                className="modal-close"
                onClick={() => setModal(null)}
                aria-label="Close Certificate Modal"
              >
                ×
              </button>
            </div>
            <div className="modal-img-container">
              <img src={modal.src} alt={modal.title} />
            </div>
            <div className="modal-body">{modal.meta}</div>
          </div>
        </div>
      )}
    </>
  );
}
