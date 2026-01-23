import { motion } from 'motion/react'
import { useInView } from 'motion/react'
import { useRef } from 'react'
import { GraduationCap, Calendar, MapPin, BookOpen } from 'lucide-react'

export function Education() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const educationItems = [
    {
      icon: GraduationCap,
      institution: 'Techno International New Town',
      degree: 'Bachelor of Technology in Computer Systems & Telecommunications',
      period: 'August 2021 - July 2025',
      location: 'Kolkata, India',
      description:
        'Graduated with a strong foundation in Computer Science, electronics and embedded systems, complemented by self-driven expertise in full-stack development, backend systems, and applied AI.',
    },
    {
      icon: BookOpen,
      institution: 'Don Bosco Academy',
      degree: 'ICSE Board',
      period: 'Completed 2020',
      location: 'Patna, India',
      description:
        'Completed secondary education with a focus on sciences and mathematics, sports and extra-curricular activities building a strong analytical foundation.',
    },
  ]

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

          {/* Education Cards */}
          <div className="space-y-6">
            {educationItems.map((item, index) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="bg-white border border-charcoal/5 p-8 md:p-10"
                >
                  <div className="flex flex-col md:flex-row md:items-start gap-6">
                    {/* Icon */}
                    <div className="w-16 h-16 flex items-center justify-center bg-cream border border-charcoal/10 flex-shrink-0">
                      <Icon size={28} className="text-bronze" />
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                        <div>
                          <h3 className="font-serif text-xl md:text-2xl font-semibold text-charcoal mb-2">
                            {item.institution}
                          </h3>
                          <p className="font-sans text-charcoal/70">
                            {item.degree}
                          </p>
                        </div>
                        <div className="flex flex-col items-start md:items-end gap-1 text-sm font-sans text-charcoal/50">
                          <span className="flex items-center gap-2">
                            <Calendar size={14} className="text-bronze/70" />
                            {item.period}
                          </span>
                          <span className="flex items-center gap-2">
                            <MapPin size={14} className="text-bronze/70" />
                            {item.location}
                          </span>
                        </div>
                      </div>

                      {/* Highlights */}
                      <div className="pt-6 border-t border-charcoal/10">
                        <p className="text-sm font-sans text-charcoal/60 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
