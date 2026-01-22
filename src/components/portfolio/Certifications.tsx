import { motion } from 'motion/react'
import { useInView } from 'motion/react'
import { useRef } from 'react'
import { Award } from 'lucide-react'

const certifications = [
  {
    title: 'AI Infrastructure and Operations Fundamentals',
    issuer: 'NVIDIA',
    icon: '🎯',
  },
  {
    title: 'Stanford Machine Learning Specialization',
    issuer: 'Stanford University / Coursera',
    icon: '🧠',
  },
  {
    title: '100xDevs Full Stack Development Specialization',
    issuer: '100xDevs',
    icon: '💻',
  },
]

export function Certifications() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="certifications" className="py-24 md:py-32 bg-white">
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
              Credentials
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-charcoal mb-4">
              Certifications
            </h2>
            <div className="w-16 h-px bg-bronze" />
          </div>

          {/* Certifications List */}
          <div className="space-y-0">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group flex items-center gap-6 py-6 border-b border-charcoal/10 first:border-t hover:bg-cream/50 transition-colors px-4 -mx-4"
              >
                {/* Icon */}
                <div className="w-12 h-12 flex items-center justify-center bg-cream border border-charcoal/10 flex-shrink-0 group-hover:border-bronze/30 transition-colors">
                  <span className="text-xl">{cert.icon}</span>
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <h3 className="font-serif text-lg font-semibold text-charcoal group-hover:text-bronze transition-colors truncate">
                    {cert.title}
                  </h3>
                  <p className="text-sm font-sans text-charcoal/50 mt-1">
                    {cert.issuer}
                  </p>
                </div>

                {/* Verified Badge */}
                <div className="hidden sm:flex items-center gap-2 text-xs font-sans text-bronze/70">
                  <Award size={14} />
                  <span>Verified</span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Note */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-center text-sm font-sans text-charcoal/40 mt-12"
          >
            Continuously learning and expanding expertise in emerging
            technologies
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
