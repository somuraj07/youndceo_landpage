import { useState } from 'react'
import { Send, CheckCircle2, Mail, Phone } from 'lucide-react'
import { motion } from 'framer-motion'
import { FadeIn, HoverButton } from './motion'

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="section-alt py-16 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <FadeIn>
            <p className="text-xs font-semibold tracking-wide text-brand-600 uppercase sm:text-sm">
              Get in Touch
            </p>
            <h2 className="mt-2 font-display text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">
              Have a Question?{' '}
              <span className="gradient-text">We&apos;re Here</span>
            </h2>
            <p className="text-body mt-3 text-sm sm:mt-4 sm:text-base">
              Reach out for demos, partnerships, or support. We typically reply
              within 24 hours.
            </p>

            <div className="mt-8 space-y-4">
              <motion.a
                href="mailto:hello@youngceo.app"
                className="flex items-center gap-3 rounded-xl border border-navy-100 bg-white px-4 py-3 shadow-sm"
                whileHover={{ x: 4, borderColor: 'rgba(147, 197, 253, 0.8)' }}
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-navy-50 text-navy-600">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs text-slate-500">Email us</p>
                  <p className="text-sm font-semibold text-slate-900">hello@youngceo.app</p>
                </div>
              </motion.a>
              <motion.div
                className="flex items-center gap-3 rounded-xl border border-navy-100 bg-white px-4 py-3 shadow-sm"
                whileHover={{ x: 4, borderColor: 'rgba(134, 239, 172, 0.8)' }}
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-50 text-brand-600">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs text-slate-500">Call us</p>
                  <p className="text-sm font-semibold text-slate-900">+91 98765 43210</p>
                </div>
              </motion.div>
            </div>
          </FadeIn>

          <FadeIn delay={0.15}>
            <div className="glass-card rounded-2xl p-6 sm:p-8">
              {submitted ? (
                <motion.div
                  className="flex flex-col items-center py-8 text-center"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-brand-50">
                    <CheckCircle2 className="h-8 w-8 text-brand-600" />
                  </div>
                  <h3 className="mt-4 font-display text-xl font-bold text-slate-900">
                    Message Sent!
                  </h3>
                  <p className="text-body mt-2 text-sm">
                    Thanks {form.name.split(' ')[0] || 'there'}. We&apos;ll get back to you soon.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false)
                      setForm({ name: '', email: '', message: '' })
                    }}
                    className="mt-6 text-sm font-semibold text-navy-600 hover:text-navy-700"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-slate-700">
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className="w-full rounded-xl border border-navy-100 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 outline-none transition-all focus:border-navy-400 focus:ring-2 focus:ring-navy-200"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-slate-700">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="you@email.com"
                      className="w-full rounded-xl border border-navy-100 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 outline-none transition-all focus:border-navy-400 focus:ring-2 focus:ring-navy-200"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-slate-700">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="How can we help you?"
                      className="w-full resize-none rounded-xl border border-navy-100 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 outline-none transition-all focus:border-navy-400 focus:ring-2 focus:ring-navy-200"
                    />
                  </div>

                  <HoverButton
                    type="submit"
                    className="btn-glow inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-500 py-3.5 text-sm font-semibold text-white shadow-md shadow-brand-500/25"
                  >
                    Send Message
                    <Send className="h-4 w-4" />
                  </HoverButton>
                </form>
              )}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
