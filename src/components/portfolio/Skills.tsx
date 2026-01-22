import { motion } from 'motion/react'
import { useInView } from 'motion/react'
import { useRef } from 'react'
import { Code2, Globe, Wrench, Cpu } from 'lucide-react'

const skillCategories = [
  {
    title: 'Languages',
    icon: Code2,
    skills: [
      'JavaScript',
      'Python',
      'C++',
      'SQL',
      'Data Structures & Algorithms',
    ],
  },
  {
    title: 'Web Development',
    icon: Globe,
    skills: [
      'HTML',
      'CSS',
      'TypeScript',
      'React',
      'Next.js',
      'Express',
      'Tailwind CSS',
    ],
  },
  {
    title: 'Tools & Platforms',
    icon: Wrench,
    skills: ['Git', 'AWS', 'Docker', 'MongoDB', 'Prisma', 'Appwrite'],
  },
  {
    title: 'Other Skills',
    icon: Cpu,
    skills: [
      'Drone Technology',
      'Technical Writing',
      'Communication',
      'Problem Solving',
    ],
  },
]

export function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="skills" className="py-24 md:py-32 bg-cream">
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
              Expertise
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-charcoal mb-4">
              Technical Skills
            </h2>
            <div className="w-16 h-px bg-bronze" />
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-white border border-charcoal/5 p-6 hover:border-bronze/30 transition-all duration-300"
              >
                {/* Icon */}
                <div className="w-12 h-12 flex items-center justify-center bg-cream border border-charcoal/10 mb-6 group-hover:border-bronze/30 transition-colors">
                  <category.icon size={24} className="text-bronze" />
                </div>

                {/* Title */}
                <h3 className="font-serif text-lg font-semibold text-charcoal mb-4">
                  {category.title}
                </h3>

                {/* Skills List */}
                <ul className="space-y-2">
                  {category.skills.map((skill) => (
                    <li
                      key={skill}
                      className="text-sm font-sans text-charcoal/60 flex items-center gap-2"
                    >
                      <span className="w-1 h-1 rounded-full bg-bronze/50" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Additional Skills Bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-12 pt-8 border-t border-charcoal/10"
          >
            <p className="text-center text-sm font-sans text-charcoal/50">
              <span className="text-charcoal/70">Also proficient in:</span> REST
              APIs · GraphQL · Agile Methodologies · CI/CD · Unit Testing ·
              Responsive Design
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
