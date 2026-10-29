import { useState } from 'react';

const WEB3FORMS_ENDPOINT = 'https://api.web3forms.com/submit';
const EMPTY = { name: '', email: '', message: '' };

function validate({ name, email, message }) {
  const errors = {};
  const trimmedName = name.trim();
  const trimmedEmail = email.trim();
  const trimmedMessage = message.trim();

  if (!trimmedName) {
    errors.name = 'Please enter your name.';
  } else if (trimmedName.length < 2) {
    errors.name = 'Name must be at least 2 characters.';
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  if (!trimmedEmail) {
    errors.email = 'Please enter your email.';
  } else if (!emailRegex.test(trimmedEmail)) {
    errors.email = 'Please enter a valid email address.';
  }

  if (!trimmedMessage) {
    errors.message = 'Please enter your message.';
  } else if (trimmedMessage.length < 10) {
    errors.message = 'Message must be at least 10 characters.';
  }

  return errors;
}

export default function ContactForm() {
  const [values, setValues] = useState(EMPTY);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | sending | success | error
  const [feedback, setFeedback] = useState('');

  const messageLength = values.message.trim().length;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));

    // Interactive error clearing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
    if (status === 'success' || status === 'error') {
      setStatus('idle');
      setFeedback('');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (status === 'sending') return;

    // Honeypot spam protection for bots
    if (e.target.botcheck?.checked) return;

    const validationErrors = validate(values);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    // Read access key from environment variable
    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;
    if (!accessKey) {
      console.warn('VITE_WEB3FORMS_ACCESS_KEY is missing. Add it to your .env file.');
      setStatus('error');
      setFeedback('The contact form is not configured yet. Please add VITE_WEB3FORMS_ACCESS_KEY to your .env file.');
      return;
    }

    setStatus('sending');
    setFeedback('');

    try {
      const res = await fetch(WEB3FORMS_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: accessKey,
          subject: 'New Portfolio Contact Message',
          from_name: values.name.trim(),
          replyto: values.email.trim(),
          name: values.name.trim(),
          email: values.email.trim(),
          message: values.message.trim(),
        }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setStatus('success');
        setFeedback("Thank you! Your message has been sent successfully. I'll get back to you soon.");
        setValues(EMPTY);
        setErrors({});
      } else {
        setStatus('error');
        setFeedback(data.message || 'Sorry, your message could not be sent. Please try again.');
      }
    } catch (err) {
      console.error('Web3Forms error:', err);
      setStatus('error');
      setFeedback('Sorry, your message could not be sent. Please check your connection and try again.');
    }
  };

  return (
    <form className="form-panel reveal" onSubmit={handleSubmit} noValidate>
      <input type="checkbox" name="botcheck" className="hp" tabIndex={-1} autoComplete="off" />

      <div className="form-field-group">
        <label htmlFor="form-name" className="field-label">Your Name</label>
        <input
          id="form-name"
          type="text"
          name="name"
          placeholder="e.g. Priya Sharma"
          value={values.name}
          onChange={handleChange}
          aria-invalid={Boolean(errors.name)}
          autoComplete="name"
        />
        {errors.name && <p className="field-error">{errors.name}</p>}
      </div>

      <div className="form-field-group">
        <label htmlFor="form-email" className="field-label">Your Email</label>
        <input
          id="form-email"
          type="email"
          name="email"
          placeholder="e.g. priya@company.com"
          value={values.email}
          onChange={handleChange}
          aria-invalid={Boolean(errors.email)}
          autoComplete="email"
        />
        {errors.email && <p className="field-error">{errors.email}</p>}
      </div>

      <div className="form-field-group">
        <div className="field-label-row">
          <label htmlFor="form-message" className="field-label">Your Message</label>
          <span className={`char-counter ${messageLength >= 10 ? 'ready' : ''}`}>
            {messageLength >= 10
              ? `✓ ${messageLength} characters (ready)`
              : `${messageLength} / 10 min chars`}
          </span>
        </div>
        <textarea
          id="form-message"
          name="message"
          placeholder="Write your project details, interview query, or opportunity here..."
          value={values.message}
          onChange={handleChange}
          aria-invalid={Boolean(errors.message)}
          rows={4}
        />
        {errors.message && <p className="field-error">{errors.message}</p>}
      </div>

      <button
        type="submit"
        className="btn btn-primary form-submit-btn"
        disabled={status === 'sending'}
      >
        {status === 'sending' ? (
          <>
            <span className="spinner-icon" />
            <span>Sending...</span>
          </>
        ) : (
          <>
            <span>Send Message</span>
            <span className="btn-icon">✉</span>
          </>
        )}
      </button>

      {feedback && (
        <div className={`form-status ${status}`} role="status" aria-live="polite">
          <span className="status-symbol">{status === 'success' ? '✓' : '⚠️'}</span>
          <span>{feedback}</span>
        </div>
      )}
    </form>
  );
}
