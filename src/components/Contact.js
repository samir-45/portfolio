'use client';

import React, { useState } from 'react';
import { Mail, Linkedin, Github, Send, Loader2, Copy, Check, ArrowRight } from 'lucide-react';
import { BsTwitterX } from 'react-icons/bs';
import toast from 'react-hot-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCopy = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText('mdmahinkhan621@gmail.com');
    setCopied(true);
    toast.success('Email copied to clipboard');
    setTimeout(() => setCopied(false), 2500);
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
          _subject: `Production Inquiry from ${formData.name}`,
          _url: "https://mahin-portfolio-site.netlify.app/",
          _captcha: "false"
        })
      });

      const data = await response.json();

      if (response.ok && (data.success === "true" || data.success === true)) {
        toast.success('Message dispatched successfully');
        setFormData({ name: '', email: '', message: '' });
      } else if (data.message && data.message.includes("Activation")) {
        toast('Form activation email dispatched. Please check inbox.');
      } else {
        throw new Error(data.message || 'Dispatch failed');
      }
    } catch (error) {
      toast.error('Dispatch failed. Please email mdmahinkhan621@gmail.com directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 lg:py-24 bg-paper-white relative border-t border-graphite-hairline">
      <div className="container mx-auto px-4 sm:px-6">
        
        {/* Section Header with Step Indicator Badge */}
        <div className="flex items-center gap-3.5 mb-4">
          <span className="badge-step">07</span>
          <span className="text-xs font-mono uppercase tracking-wider text-ash">
            Dispatch Communication
          </span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12 pb-4 border-b border-graphite-hairline">
          <div>
            <h2 className="font-display text-3xl sm:text-4xl text-obsidian tracking-tight">
              Initiate Communication
            </h2>
            <p className="text-smoke text-sm sm:text-base mt-2 max-w-xl font-sans">
              Have an engineering role, contract platform, or consulting project? Direct channels are open.
            </p>
          </div>
          <div className="font-mono text-xs text-ash">
            <span>RESPONSE WINDOW: &lt; 24 HOURS</span>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 max-w-5xl">
          
          {/* Left: Communication Endpoints (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Primary Email Card with 1-Click Copy */}
            <div className="p-5 rounded-[2px] border border-graphite-hairline bg-paper-white">
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-graphite-hairline text-xs font-mono text-ash">
                <span>PRIMARY ENDPOINT</span>
                <span className="text-mint-signal">● ACTIVE</span>
              </div>
              <p className="font-mono text-xs text-smoke mb-1">Direct Inbox</p>
              <p className="font-mono text-sm font-semibold text-obsidian break-all mb-4">
                mdmahinkhan621@gmail.com
              </p>

              <button
                onClick={handleCopy}
                className="w-full inline-flex items-center justify-center gap-2 py-2 px-3 rounded-[2px] border border-graphite-hairline hover:border-obsidian text-xs font-mono text-obsidian transition-colors"
              >
                {copied ? (
                  <>
                    <Check size={13} className="text-mint-signal" />
                    <span>COPIED TO CLIPBOARD</span>
                  </>
                ) : (
                  <>
                    <Copy size={13} className="text-ash" />
                    <span>COPY EMAIL ADDRESS</span>
                  </>
                )}
              </button>
            </div>

            {/* Structured Channels */}
            <div className="p-5 rounded-[2px] border border-graphite-hairline bg-paper-white space-y-4">
              <div className="pb-3 border-b border-graphite-hairline text-xs font-mono text-ash">
                <span>SECONDARY CHANNELS</span>
              </div>

              <ChannelLink
                label="Direct Phone / WhatsApp"
                value="+880 1707-472851"
                href="https://wa.me/8801707472851"
              />
              <ChannelLink
                label="LinkedIn Network"
                value="linkedin.com/in/devmahin"
                href="https://www.linkedin.com/in/devmahin"
              />
              <ChannelLink
                label="GitHub Activity"
                value="github.com/samir-45"
                href="https://github.com/samir-45"
              />
              <ChannelLink
                label="X Profile"
                value="x.com/mdmahinkhan621"
                href="https://x.com/mdmahinkhan621"
              />
              <div className="pt-2 text-xs font-mono text-ash flex items-center justify-between">
                <span>LOCATION: DHAKA, BD</span>
                <span>STATUS: AVAILABLE</span>
              </div>
            </div>

          </div>

          {/* Right: Clean Minimalist Form (7 Cols) */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-[2px] border border-graphite-hairline bg-paper-white">
            <div className="pb-4 mb-6 border-b border-graphite-hairline flex items-center justify-between">
              <span className="font-mono text-xs font-semibold uppercase tracking-wider text-obsidian">
                Message Transmission Form
              </span>
              <span className="text-[11px] font-mono text-ash">via formsubmit.co</span>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-xs font-mono uppercase text-smoke mb-1.5">
                  Sender Identity *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="e.g. Sarah Jenkins"
                  className="w-full rounded-[2px] border border-graphite-hairline bg-paper-white px-3.5 py-2.5 text-sm text-obsidian font-sans placeholder:text-ash/60 focus:outline-none focus:border-obsidian transition-colors"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-xs font-mono uppercase text-smoke mb-1.5">
                  Return Address (Email) *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="e.g. s.jenkins@company.com"
                  className="w-full rounded-[2px] border border-graphite-hairline bg-paper-white px-3.5 py-2.5 text-sm text-obsidian font-sans placeholder:text-ash/60 focus:outline-none focus:border-obsidian transition-colors"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-mono uppercase text-smoke mb-1.5">
                  Transmission Payload (Message) *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  placeholder="Project specifications, engineering scope, or interview scheduling..."
                  className="w-full rounded-[2px] border border-graphite-hairline bg-paper-white px-3.5 py-2.5 text-sm text-obsidian font-sans placeholder:text-ash/60 focus:outline-none focus:border-obsidian resize-none transition-colors"
                ></textarea>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full py-3 text-sm font-mono tracking-tight justify-center disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 size={16} className="animate-spin" />
                      <span>DISPATCHING PAYLOAD...</span>
                    </>
                  ) : (
                    <>
                      <span>TRANSMIT MESSAGE</span>
                      <ArrowRight size={14} />
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
};

const ChannelLink = ({ label, value, href }) => (
  <div className="flex items-center justify-between py-1 border-b border-graphite-hairline/60 text-xs font-mono">
    <span className="text-ash">{label}</span>
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-obsidian hover:text-plasma-violet transition-colors font-medium truncate max-w-[200px]"
    >
      {value}
    </a>
  </div>
);

export default Contact;
