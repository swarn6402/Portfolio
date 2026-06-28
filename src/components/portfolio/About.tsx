import { motion } from 'motion/react'
import { useInView, useReducedMotion } from 'motion/react'
import { useRef } from 'react'

export function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const shouldReduceMotion = useReducedMotion()

  return (
    <section id="about" className="py-24 md:py-32 bg-cream">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          {/* Section Header */}
          <div className="mb-16">
            <span className="text-xs font-sans text-bronze uppercase tracking-[0.3em] block mb-4">
              Introduction
            </span>
            <h2 className="font-sans text-3xl md:text-4xl font-semibold text-charcoal mb-4">
              About
            </h2>
            <motion.div
              className="h-px bg-bronze"
              initial={shouldReduceMotion ? false : { width: 0 }}
              animate={{ width: isInView || shouldReduceMotion ? 64 : 0 }}
              transition={{
                duration: shouldReduceMotion ? 0 : 0.6,
                ease: 'easeOut',
              }}
            />
          </div>

          {/* Content Grid */}
          <div className="grid md:grid-cols-12 gap-8 md:gap-16">
            {/* Left Column - Quote */}
            <div className="md:col-span-4">
              <div className="border-l-2 border-bronze/30 pl-6">
                <p className="font-sans text-xl md:text-2xl text-charcoal/80 italic leading-relaxed">
                  "I care about what happens after the code ships."
                </p>
              </div>
            </div>

            {/* Right Column - Bio */}
            <div className="md:col-span-8">
              <div className="space-y-6 text-charcoal/70 font-sans leading-relaxed">
                <p className="text-lg">
                  I'm a{' '}
                  <span className="text-charcoal font-medium">
                    backend-leaning full-stack engineer
                  </span>{' '}
                  who thinks in systems. Most of my work lives at the
                  intersection of clean architecture, real-world constraints,
                  and occasionally shipping something people actually use.
                </p>
                <p>
                  I've built job alert platforms that scrape 50+ sites, stream
                  discovery pipelines that reached 10,000 visitors across 40
                  countries, and embedded drone systems from scratch. Strong DSA
                  fundamentals, practical AI integration, and a habit of not
                  leaving performance problems for later.
                </p>
              </div>

              {/* Stats */}
              <div className="flex gap-4 sm:gap-8 mt-12 pt-8 border-t border-charcoal/10">
                <div className="flex-1 min-w-0">
                  <span className="block whitespace-nowrap font-sans text-2xl sm:text-3xl md:text-4xl text-charcoal font-semibold">
                    10+
                  </span>
                  <p className="text-sm text-charcoal/50 mt-1 font-sans">
                    Things shipped
                  </p>
                </div>
                <div className="flex-1 min-w-0">
                  <span className="block whitespace-nowrap font-sans text-2xl sm:text-3xl md:text-4xl text-charcoal font-semibold">
                    40%
                  </span>
                  <p className="text-sm text-charcoal/50 mt-1 font-sans">
                    Faster, measurably
                  </p>
                </div>
                <div className="flex-1 min-w-0">
                  <span className="block whitespace-nowrap font-sans text-2xl sm:text-3xl md:text-4xl text-charcoal font-semibold">
                    Both
                  </span>
                  <p className="text-sm text-charcoal/50 mt-1 font-sans">
                    Frontend and back
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
