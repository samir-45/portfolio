'use client';

// src/components/Contact.js
import React, { useState } from 'react';
import { Mail, Linkedin, Github, Send, Loader2, MessageSquare, Copy, Check } from 'lucide-react';
import toast from 'react-hot-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('https://formsubmit.co/ajax/mdmahinkhan621@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          ...formData,
          _subject: `New Portfolio Message from ${formData.name}`,
          _url: "https://mahin-portfolio-site.netlify.app/",
          _captcha: "false"
        })
      });

      const data = await response.json();

      if (response.ok && (data.success === "true" || data.success === true)) {
        toast.success('Message sent successfully! I will get back to you soon.');
        setFormData({ name: '', email: '', message: '' });
      } else if (data.message && data.message.includes("Activation")) {
        toast('Form activation link sent! Please check your email inbox.', {
          icon: '📩',
        });
      } else {
        throw new Error(data.message || 'Failed to submit');
      }
    } catch (error) {
      toast.error('Something went wrong. Please try again or email directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 sm:py-20 lg:py-24 bg-background relative">
      <div className="container mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 text-xs sm:text-sm font-medium text-primary bg-primary/10 rounded-full mb-3 sm:mb-4 border border-primary/20">
            <MessageSquare size={16} /> Get In Touch
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-3 sm:mb-4">Contact Me</h2>
          <p className="text-muted-foreground text-sm sm:text-base max-w-xl mx-auto">
            Have a project in mind or want to discuss a new opportunity? 
            I'm always open to new ideas and collaborations.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-start max-w-5xl mx-auto">
          
          {/* Contact Info (Left Side) */}
          <div className="space-y-6 sm:space-y-8">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Let's Talk</h3>
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                I'm currently available for freelance work and full-time positions.
                If you have a project that needs some creative touch, feel free to reach out!
              </p>
            </div>

            <div className="space-y-4 sm:space-y-6">
              {/* Special Email Contact Card with 1-Click Copy Button */}
              <EmailContactItem email="mdmahinkhan621@gmail.com" />

              <ContactItem 
                icon={<Linkedin size={20} />}
                label="LinkedIn"
                value="linkedin.com/in/devmahin"
                href="https://www.linkedin.com/in/devmahin"
              />
              <ContactItem 
                icon={<Github size={20} />}
                label="GitHub"
                value="github.com/samir-45"
                href="https://github.com/samir-45"
              />
            </div>
          </div>

          {/* Form (Right Side) */}
          <div className="bg-card border border-border rounded-xl p-5 sm:p-8 shadow-sm">
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
              <div>
                <label htmlFor="name" className="block text-xs sm:text-sm font-medium mb-1.5 sm:mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="John Doe"
                  className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-base sm:text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-0 transition-all min-h-[44px]"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-xs sm:text-sm font-medium mb-1.5 sm:mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="john@example.com"
                  className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-base sm:text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-0 transition-all min-h-[44px]"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs sm:text-sm font-medium mb-1.5 sm:mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Tell me about your project..."
                  rows="5"
                  className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-base sm:text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-0 resize-none transition-all"
                ></textarea>
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground shadow-sm hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed min-h-[44px]"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 size={18} className="animate-spin" /> Sending...
                  </>
                ) : (
                  <>
                    Send Message <Send size={18} />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

// Specialized Email Item with 1-Click Copy Button
const EmailContactItem = ({ email }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = (e) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(email);
    setCopied(true);
    toast.success('Email copied to clipboard!');
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="flex items-center justify-between p-3.5 sm:p-4 rounded-lg bg-secondary/30 hover:bg-secondary/60 transition-colors group">
      <a 
        href={`mailto:${email}`}
        className="flex items-center gap-3 sm:gap-4 flex-1 min-w-0"
      >
        <div className="flex-shrink-0 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
          <Mail size={18} />
        </div>
        <div className="min-w-0 flex-1">
          <p className="text-xs font-medium text-muted-foreground mb-0.5">Email</p>
          <p className="font-semibold text-xs sm:text-sm text-foreground group-hover:text-primary transition-colors truncate">{email}</p>
        </div>
      </a>

      <button
        onClick={handleCopy}
        className="ml-2 sm:ml-3 flex-shrink-0 inline-flex items-center gap-1.5 px-2.5 py-1.5 sm:px-3 sm:py-1.5 rounded-md border border-border bg-card hover:bg-primary/10 hover:border-primary/40 text-xs font-semibold transition-all duration-200 min-h-[36px]"
        title="Copy Email Address"
      >
        {copied ? (
          <>
            <Check size={14} className="text-primary" />
            <span className="text-primary text-[11px] sm:text-xs">Copied!</span>
          </>
        ) : (
          <>
            <Copy size={14} className="text-muted-foreground group-hover:text-primary" />
            <span className="text-[11px] sm:text-xs">Copy</span>
          </>
        )}
      </button>
    </div>
  );
};

// Helper Component for standard links
const ContactItem = ({ icon, label, value, href }) => (
  <a 
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-3 sm:gap-4 p-3.5 sm:p-4 rounded-lg bg-secondary/30 hover:bg-secondary/60 transition-colors group"
  >
    <div className="flex-shrink-0 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
      {icon}
    </div>
    <div>
      <p className="text-xs font-medium text-muted-foreground mb-0.5">{label}</p>
      <p className="font-semibold text-xs sm:text-sm text-foreground group-hover:text-primary transition-colors">{value}</p>
    </div>
  </a>
);

export default Contact;
