import { motion } from 'motion/react'
import { useInView } from 'motion/react'
import { useRef } from 'react'

export function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

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
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-charcoal mb-4">
              About
            </h2>
            <div className="w-16 h-px bg-bronze" />
          </div>

          {/* Content Grid */}
          <div className="grid md:grid-cols-12 gap-8 md:gap-16">
            {/* Left Column - Quote */}
            <div className="md:col-span-4">
              <div className="border-l-2 border-bronze/30 pl-6">
                <p className="font-serif text-xl md:text-2xl text-charcoal/80 italic leading-relaxed">
                  "Building bridges between hardware and software, one line of
                  code at a time."
                </p>
              </div>
            </div>

            {/* Right Column - Bio */}
            <div className="md:col-span-8">
              <div className="space-y-6 text-charcoal/70 font-sans leading-relaxed">
                <p className="text-lg">
                  I'm a{' '}
                  <span className="text-charcoal font-medium">
                    Full-Stack Developer
                  </span>{' '}
                  and Electronics & Communications Engineering student with a
                  passion for creating innovative digital solutions that merge
                  software excellence with hardware understanding.
                </p>
                <p>
                  My expertise spans modern web technologies—React, Next.js,
                  Node.js—combined with hands-on experience in drone technology
                  and embedded systems. This unique intersection allows me to
                  approach problems from multiple angles, delivering solutions
                  that are both technically robust and user-centric.
                </p>
                <p>
                  Currently pursuing my B.Tech at Techno International New Town,
                  Kolkata, I've contributed to production-grade applications,
                  improved website performance by 40%, and built autonomous
                  systems from the ground up. I believe in writing clean,
                  maintainable code and creating experiences that make a
                  difference.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-charcoal/10">
                <div>
                  <span className="font-serif text-3xl md:text-4xl text-charcoal font-semibold">
                    2+
                  </span>
                  <p className="text-sm text-charcoal/50 mt-1 font-sans">
                    Years Experience
                  </p>
                </div>
                <div>
                  <span className="font-serif text-3xl md:text-4xl text-charcoal font-semibold">
                    10+
                  </span>
                  <p className="text-sm text-charcoal/50 mt-1 font-sans">
                    Projects Built
                  </p>
                </div>
                <div>
                  <span className="font-serif text-3xl md:text-4xl text-charcoal font-semibold">
                    40%
                  </span>
                  <p className="text-sm text-charcoal/50 mt-1 font-sans">
                    Performance Boost
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
