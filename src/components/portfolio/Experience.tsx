import { motion } from 'motion/react'
import { useInView } from 'motion/react'
import { useRef } from 'react'
import { MapPin, Calendar } from 'lucide-react'

const experiences = [
  {
    company: 'StarX91 Technologies',
    role: 'Full-Stack Developer',
    type: 'Remote',
    period: 'July 2023 - May 2024',
    location: 'Kolkata, IN',
    highlights: [
      'Developed, maintained, and optimized company website ensuring high availability and performance',
      'Implemented responsive design principles, improving load times by 40% and enhancing user experience across devices',
      'Integrated new features and functionalities using React and Node.js, collaborating with cross-functional teams',
      'Worked on cutting-edge web technologies to deliver scalable and maintainable solutions',
    ],
  },
  {
    company: 'The Unfolder',
    role: 'Technical Writing Intern',
    type: 'On-site',
    period: 'May 2021 - July 2021',
    location: 'Patna, IN',
    highlights: [
      'Produced clear, concise documentation for software products, improving user comprehension and adoption',
      'Enhanced website traffic through strategic SEO implementation and content optimization',
      'Collaborated with development teams to translate technical concepts into accessible content',
    ],
  },
]

export function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="experience" className="py-24 md:py-32 bg-white">
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
              Career
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-charcoal mb-4">
              Experience
            </h2>
            <div className="w-16 h-px bg-bronze" />
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-charcoal/10" />

            {/* Experience Items */}
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.company}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="relative pl-8 md:pl-24"
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-0 md:left-8 top-2 -translate-x-1/2 w-3 h-3 rounded-full bg-bronze border-4 border-cream" />

                  {/* Content */}
                  <div className="bg-cream/50 p-6 md:p-8 border border-charcoal/5">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                      <div>
                        <h3 className="font-serif text-xl md:text-2xl font-semibold text-charcoal mb-1">
                          {exp.company}
                        </h3>
                        <p className="font-sans text-charcoal/70">
                          {exp.role}
                          <span className="text-bronze mx-2">·</span>
                          <span className="text-charcoal/50">{exp.type}</span>
                        </p>
                      </div>
                      <div className="flex flex-col items-start md:items-end gap-1 text-sm font-sans text-charcoal/50">
                        <span className="flex items-center gap-2">
                          <Calendar size={14} className="text-bronze/70" />
                          {exp.period}
                        </span>
                        <span className="flex items-center gap-2">
                          <MapPin size={14} className="text-bronze/70" />
                          {exp.location}
                        </span>
                      </div>
                    </div>

                    <ul className="space-y-3">
                      {exp.highlights.map((highlight, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-3 text-charcoal/70 font-sans text-sm md:text-base leading-relaxed"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-bronze/50 mt-2 flex-shrink-0" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
