import { motion } from 'motion/react'
import { useInView } from 'motion/react'
import { useRef } from 'react'
import { GraduationCap, Calendar, MapPin } from 'lucide-react'

export function Education() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="education" className="py-24 md:py-32 bg-cream">
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
              Academic
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-charcoal mb-4">
              Education
            </h2>
            <div className="w-16 h-px bg-bronze" />
          </div>

          {/* Education Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white border border-charcoal/5 p-8 md:p-10"
          >
            <div className="flex flex-col md:flex-row md:items-start gap-6">
              {/* Icon */}
              <div className="w-16 h-16 flex items-center justify-center bg-cream border border-charcoal/10 flex-shrink-0">
                <GraduationCap size={28} className="text-bronze" />
              </div>

              {/* Content */}
              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                  <div>
                    <h3 className="font-serif text-xl md:text-2xl font-semibold text-charcoal mb-2">
                      Techno International New Town
                    </h3>
                    <p className="font-sans text-charcoal/70">
                      Bachelor of Technology in Electronics and Communications
                    </p>
                  </div>
                  <div className="flex flex-col items-start md:items-end gap-1 text-sm font-sans text-charcoal/50">
                    <span className="flex items-center gap-2">
                      <Calendar size={14} className="text-bronze/70" />
                      August 2021 - July 2025
                    </span>
                    <span className="flex items-center gap-2">
                      <MapPin size={14} className="text-bronze/70" />
                      Kolkata, India
                    </span>
                  </div>
                </div>

                {/* Highlights */}
                <div className="pt-6 border-t border-charcoal/10">
                  <p className="text-sm font-sans text-charcoal/60 leading-relaxed">
                    Pursuing a comprehensive curriculum covering electronics
                    fundamentals, communication systems, signal processing, and
                    embedded systems. Complementing core studies with
                    self-directed learning in full-stack development and modern
                    web technologies.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
