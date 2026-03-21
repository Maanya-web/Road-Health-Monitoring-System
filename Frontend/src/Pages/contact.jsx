import React, { useState } from 'react';
import { Mail, MapPin, Github, Send, AlertTriangle, MessageSquare, CheckCircle } from 'lucide-react';
import './contact.css'; // Ensure this path matches where you save the CSS

const Contact = () => {
  // 1. Form State
  const [formData, setFormData] = useState({
    name: '',
    org: '',
    subject: '',
    message: ''
  });

  // 2. Submission Status State ('idle', 'loading', 'success', 'error')
  const [submitStatus, setSubmitStatus] = useState('idle');

  // 3. Handle Input Changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // 4. Handle Form Submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitStatus('loading');

    try {
      const response = await fetch('https://monitoring-system-zr2z.onrender.com/api/inquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', org: '', subject: '', message: '' }); // Clear form
        
        // Return to normal state after 5 seconds
        setTimeout(() => setSubmitStatus('idle'), 5000);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error("Submission failed:", error);
      setSubmitStatus('error');
    }
  };

  return (
    <div className="contact-root">
      <div className="contact-shell">
        
        {/* Hero Section */}
        <div className="contact-hero">
          <div className="contact-kicker">Command Center</div>
          <h1 className="contact-hero-title">Official Inquiries & Support</h1>
          <p className="contact-hero-text">
            For technical queries regarding the URHMS architecture, data partnerships, or access to the codebase, please reach out to the development team. 
          </p>
        </div>

        <div className="contact-content-grid">
          
          {/* Left Column: Contact Info */}
          <div className="contact-card">
            <h2 className="contact-section-title">
              <MapPin size={22} color="#6b9dfc" />
              Project Headquarters
            </h2>
            
            <div className="contact-info-list">

              <div className="contact-info-item">
                <div className="contact-icon-circle">
                  <Mail size={18} />
                </div>
                <div>
                  <div className="contact-info-label">Lead Developers</div>
                  <div className="contact-info-value">Shiv Patel, Dhruv Singh, Maanya Shah</div>
                  <div style={{ fontSize: '0.8rem', color: '#9ca3af', marginTop: '0.2rem' }}>Project Leads, URHMS</div>
                </div>
              </div>

              <div className="contact-info-item">
                <div className="contact-icon-circle">
                  <Github size={18} />
                </div>
                <div>
                  <div className="contact-info-label">Code Repository</div>
                  <div className="contact-info-value">GitHub / Inter-IIT-Civil-Conclave</div>
                  <div style={{ fontSize: '0.8rem', color: '#9ca3af', marginTop: '0.2rem' }}>*Access restricted to authorized personnel</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Inquiry Form */}
          <div className="contact-card">
            <h2 className="contact-section-title">
              <MessageSquare size={22} color="#6b9dfc" />
              Direct Inquiry
            </h2>
            
            {/* Conditional Rendering: Success Message vs Form */}
            {submitStatus === 'success' ? (
              <div style={{ padding: '2.5rem 1rem', textAlign: 'center', color: '#2ecc71', backgroundColor: 'rgba(46, 204, 113, 0.05)', borderRadius: '16px', border: '1px solid rgba(46, 204, 113, 0.2)' }}>
                <CheckCircle size={54} style={{ margin: '0 auto 1.5rem', opacity: 0.9 }} />
                <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: '#f9fafb' }}>Transmission Successful</h3>
                <p style={{ color: '#9ca3af', fontSize: '0.9rem', lineHeight: '1.6' }}>Your inquiry has been securely logged in the URHMS system.<br/>Our team will review it shortly.</p>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="contact-form-row">
                  <div className="contact-input-group">
                    <label className="contact-label">Full Name</label>
                    <input 
                      type="text" 
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="contact-input" 
                      placeholder="Enter your name" 
                      required 
                    />
                  </div>
                  <div className="contact-input-group">
                    <label className="contact-label">Organization / Agency</label>
                    <input 
                      type="text" 
                      name="org"
                      value={formData.org}
                      onChange={handleChange}
                      className="contact-input" 
                      placeholder="e.g., BRO, NDMA, Academic" 
                      required 
                    />
                  </div>
                </div>

                <div className="contact-input-group">
                  <label className="contact-label">Subject</label>
                  <select 
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="contact-input" 
                    required 
                    style={{ appearance: 'none' }}
                  >
                    <option value="" disabled>Select inquiry type...</option>
                    <option value="data_access">Satellite Data & API Access</option>
                    <option value="technical">Technical Methodology Inquiry</option>
                    <option value="collaboration">Research Collaboration</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="contact-input-group">
                  <label className="contact-label">Message</label>
                  <textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="contact-textarea" 
                    placeholder="Detail your inquiry here..." 
                    required
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="contact-submit"
                  disabled={submitStatus === 'loading'}
                  style={{ opacity: submitStatus === 'loading' ? 0.7 : 1 }}
                >
                  {submitStatus === 'loading' ? 'Transmitting...' : 'Submit Inquiry'}
                  <Send size={16} />
                </button>

                {submitStatus === 'error' && (
                  <p style={{ color: '#e74c3c', fontSize: '0.85rem', textAlign: 'center', marginTop: '0.5rem' }}>
                    Connection error. Please ensure the backend server is running.
                  </p>
                )}
              </form>
            )}
          </div>
        </div>

        {/* Disclaimer Footer */}
        <div className="contact-disclaimer">
          <AlertTriangle size={14} color="#f1c40f" />
          <span>
            <strong>CRITICAL NOTICE:</strong> URHMS is a research prototype. It is not a replacement for official emergency services. In the event of an active disaster, please contact the National Disaster Management Authority (NDMA) immediately.
          </span>
        </div>

      </div>
    </div>
  );
};

export default Contact;
