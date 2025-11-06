"use client"

import React, { useState } from 'react'
import styles from './contact.module.css'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('')

    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 1000))
      setSubmitStatus('success')
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className={styles.container}>
      <header className={styles.hero}>
        <h1 className={styles.title}>GET IN TOUCH</h1>
        <p className={styles.subtitle}>
          Ready to secure your business? Contact our expert team for a consultation.
        </p>
      </header>

      <div className={styles.content}>
        <div className={styles.formSection}>
          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.formGroup}>
              <label htmlFor="name" className={styles.label}>Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className={styles.input}
                placeholder="Enter your full name"
              />
            </div>

            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label htmlFor="email" className={styles.label}>Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={styles.input}
                  placeholder="your.email@example.com"
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="phone" className={styles.label}>Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={styles.input}
                  placeholder="+1 (555) 123-4567"
                />
              </div>
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="subject" className={styles.label}>Subject</label>
              <select
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className={styles.select}
              >
                <option value="">Select a service</option>
                <option value="cctv">CCTV Installation</option>
                <option value="access-control">Access Control Systems</option>
                <option value="network-security">Network Security</option>
                <option value="consultation">Security Consultation</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="message" className={styles.label}>Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className={styles.textarea}
                placeholder="Tell us about your security needs..."
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={`${styles.submitButton} ${isSubmitting ? styles.submitting : ''}`}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>

            {submitStatus === 'success' && (
              <div className={styles.successMessage}>
                Thank you! Your message has been sent successfully.
              </div>
            )}

            {submitStatus === 'error' && (
              <div className={styles.errorMessage}>
                Sorry, there was an error sending your message. Please try again.
              </div>
            )}
          </form>
        </div>

        <div className={styles.infoSection}>
          <h3 className={styles.infoTitle}>Contact Information</h3>
          
          <div className={styles.contactItem}>
            <h4>Address</h4>
            <p>123 Security Street<br/>Business District<br/>City, State 12345</p>
          </div>

          <div className={styles.contactItem}>
            <h4>Phone</h4>
            <p>+1 (555) 123-4567</p>
          </div>

          <div className={styles.contactItem}>
            <h4>Email</h4>
            <p>info@byteguard.com</p>
          </div>

          <div className={styles.contactItem}>
            <h4>Business Hours</h4>
            <p>Monday - Friday: 9:00 AM - 6:00 PM<br/>
               Saturday: 10:00 AM - 4:00 PM<br/>
               Sunday: Closed</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact