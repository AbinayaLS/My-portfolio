import { useState } from 'react';
import ContactForm from '../components/ContactForm';

export default function Contact() {
  const [copiedItem, setCopiedItem] = useState(null);

  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopiedItem(type);
    setTimeout(() => setCopiedItem(null), 2200);
  };

  return (
    <section id="contact">
      <div className="container">
        <div className="kicker">get in touch</div>
        <h2 className="section-title reveal">Let's talk opportunities</h2>
        <p className="lead-text reveal">
          Open to entry-level Full Stack Developer, Software Engineer roles, and internships. Feel free to reach out directly or send a message below.
        </p>

        <div className="contact-wrap">
          {/* Direct contact details with interactive quick-copy */}
          <div className="contact-list reveal">
            <div className="contact-info-header">
              <span className="info-badge">Direct Contact Channels</span>
              <p className="info-sub">Feel free to call, email, or connect via professional platforms.</p>
            </div>

            <div className="contact-channel-item">
              <a href="mailto:lsabinaya001@gmail.com" className="channel-link">
                <span className="channel-icon">✉</span>
                <span className="channel-text">lsabinaya001@gmail.com</span>
              </a>
              <button
                type="button"
                className="copy-btn"
                onClick={() => handleCopy('lsabinaya001@gmail.com', 'email')}
                title="Copy email address"
                aria-label="Copy email"
              >
                {copiedItem === 'email' ? '✓ Copied!' : 'Copy'}
              </button>
            </div>

            <div className="contact-channel-item">
              <a href="tel:9043510135" className="channel-link">
                <span className="channel-icon">☎</span>
                <span className="channel-text">9043510135</span>
              </a>
              <button
                type="button"
                className="copy-btn"
                onClick={() => handleCopy('9043510135', 'phone')}
                title="Copy phone number"
                aria-label="Copy phone"
              >
                {copiedItem === 'phone' ? '✓ Copied!' : 'Copy'}
              </button>
            </div>

            <div className="contact-channel-item">
              <a href="https://linkedin.com/in/abi-l-s" target="_blank" rel="noopener noreferrer" className="channel-link">
                <span className="channel-icon">in</span>
                <span className="channel-text">linkedin.com/in/abi-l-s</span>
              </a>
              <span className="channel-ext-arrow">↗</span>
            </div>

            <div className="contact-channel-item">
              <a href="https://github.com/AbinayaLS" target="_blank" rel="noopener noreferrer" className="channel-link">
                <span className="channel-icon">GH</span>
                <span className="channel-text">github.com/AbinayaLS</span>
              </a>
              <span className="channel-ext-arrow">↗</span>
            </div>

            <div className="contact-channel-item" style={{ cursor: 'default' }}>
              <div className="channel-link">
                <span className="channel-icon">📍</span>
                <span className="channel-text">Kanniyakumari, Tamil Nadu</span>
              </div>
            </div>
          </div>

          {/* Interactive Web3Forms contact form */}
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
