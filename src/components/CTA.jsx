import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { FadeIn, HoverButton } from './motion'

export default function CTA() {
  return (
    <section id="download" className="py-16 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <motion.div
            className="cta-banner relative overflow-hidden rounded-2xl px-5 py-12 text-center sm:rounded-3xl sm:px-8 sm:py-16 lg:px-20 lg:py-20"
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.4 }}
          >
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute -top-20 -right-20 h-60 w-60 rounded-full bg-white/20 blur-3xl" />
              <div className="absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-white/15 blur-3xl" />
            </div>

            <div className="relative">
              <h2 className="font-display text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-5xl">
                Ready to Take Control of Your Finances?
              </h2>
              <p className="mx-auto mt-3 max-w-xl text-sm text-white/85 sm:mt-4 sm:text-base">
                Join 50,000+ students already learning, saving, and investing
                smarter with YoungCEO. Free to download on Google Play.
              </p>

              <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:mt-8 sm:flex-row sm:gap-4">
                <HoverButton
                  href="#"
                  className="group inline-flex w-full max-w-xs items-center justify-center gap-3 rounded-xl border border-white/30 bg-white/15 px-6 py-3 backdrop-blur-sm hover:bg-white/25 sm:w-auto"
                >
                  <svg className="h-7 w-7 text-white sm:h-8 sm:w-8" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3.609 1.814L13.792 12 3.61 22.186a1.006 1.006 0 01-.61-.92V2.734a1.006 1.006 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1.002 1.002 0 010 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.802 8.99l-2.303 2.303-8.635-8.635z" />
                  </svg>
                  <div className="text-left">
                    <p className="text-[10px] text-white/70">GET IT ON</p>
                    <p className="text-sm font-semibold text-white">Google Play</p>
                  </div>
                </HoverButton>

                <HoverButton
                  href="#"
                  className="group inline-flex w-full max-w-xs items-center justify-center gap-2 rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-navy-700 shadow-xl hover:bg-navy-50 sm:w-auto"
                >
                  Download Free
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </HoverButton>
              </div>

              <p className="mt-5 text-[11px] text-white/60 sm:mt-6 sm:text-xs">
                Available on Android · iOS coming soon
              </p>
            </div>
          </motion.div>
        </FadeIn>
      </div>
    </section>
  )
}
