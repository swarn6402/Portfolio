import { motion } from 'motion/react'
import { useInView } from 'motion/react'
import { useRef } from 'react'
import { ExternalLink, Github } from 'lucide-react'

const projects = [
  {
    title: 'FreeFA – FIFA World Cup 2026 Match Hub',
    description:
      'Full-stack World Cup 2026 platform with live match pages, standings, schedules, and real-time data integrations. Engineered an automated Telegram-based stream discovery pipeline using GramJS with CI/CD deployment, reaching 10,000+ visitors across 40+ countries.',
    tech: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Supabase'],
    link: 'https://freefifa.vercel.app/',
    github: 'https://github.com/swarn6402/freefa',
    featured: true,
  },
  {
    title: 'Saspirant– Smart Job Alert Platform',
    description:
      'Full-stack job alert platform leveraging React/Flask/PostgreSQL with Google OAuth, automated scraping from 50+ recruitment sites using BeautifulSoup4/Selenium, and AI-powered job matching with personalized email notifications via SendGrid.',
    tech: ['React', 'Flask', 'PostgreSQL', 'Google OAuth', 'BeautifulSoup4', 'Selenium', 'SendGrid', 'Vercel', 'Render'],
    link: 'https://saspirant.vercel.app/',
    github: 'https://github.com/swarn6402/Saspirant',
    featured: true,
  },
  {
    title: 'KarmaChronos Chrome Extension',
    description:
      'A Chrome extension that transforms the new tab page into a visual countdown timer for tracking lifespan and important events. Features an interactive grid-based interface with real-time updates.',
    tech: ['HTML', 'CSS', 'JavaScript', 'Chrome APIs'],
    link: 'https://github.com/swarn6402/KarmaChronos',
    github: 'https://github.com/swarn6402/KarmaChronos',
  },
  {
    title: 'SwarnSports– Cricket Streaming Link Aggregator',
    description:
      'Automated cricket streaming link aggregator using Python (Telethon API, asyncio) and JavaScript with regex filtering and CI/CD deployment on GitHub Pages.',
    tech: ['Python', 'Telethon API', 'JavaScript', 'GitHub Pages'],
    link: 'https://swarn6402.github.io/SwarnSportsHD/',
    github: 'https://github.com/swarn6402/SwarnSportsHD',
  },
  {
    title: 'KarmaYogi – Focus & Productivity Chrome Extension',
    description:
      'Chrome extension (Manifest V3) with distraction blocking, analytics tracking, and audio signal generation via Web Audio API. Optimized performance bottlenecks in client-side execution and event-driven workflows.',
    tech: ['Chrome Extension', 'Manifest V3', 'Web Audio API', 'JavaScript'],
    github: 'https://github.com/swarn6402/karmayogi',
  },
]

export function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="projects" className="py-24 md:py-32 bg-white">
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
              Work
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-charcoal mb-4">
              Featured Projects
            </h2>
            <div className="w-16 h-px bg-bronze" />
          </div>

          {/* Projects Grid */}
          <div className="space-y-8">
            {projects.map((project, index) => (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className={`group relative bg-cream border border-charcoal/5 p-6 md:p-8 transition-all duration-300 hover:border-bronze/30 hover:shadow-lg hover:-translate-y-0.5 ${
                  project.featured ? 'md:p-10' : ''
                }`}
              >
                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute top-6 right-6 md:top-10 md:right-10">
                    <span className="text-xs font-sans text-bronze uppercase tracking-widest border border-bronze/30 px-3 py-1">
                      Featured
                    </span>
                  </div>
                )}

                {/* Content */}
                <div className="max-w-3xl">
                  <h3 className="font-serif text-xl md:text-2xl font-semibold text-charcoal mb-4 group-hover:text-bronze transition-colors">
                    {project.title}
                  </h3>

                  <p className="font-sans text-charcoal/70 leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs font-mono text-charcoal/50 bg-white border border-charcoal/10 px-3 py-1"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  {(project.link || project.github) && (
                    <div className="flex items-center gap-4">
                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-sm font-sans text-charcoal/60 hover:text-bronze transition-colors group/link"
                        >
                          <ExternalLink size={16} />
                          <span className="relative">
                            View Project
                            <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-bronze transition-all duration-300 group-hover/link:w-full" />
                          </span>
                        </a>
                      )}
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-sm font-sans text-charcoal/60 hover:text-bronze transition-colors group/link"
                        >
                          <Github size={16} />
                          <span className="relative">
                            Source Code
                            <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-bronze transition-all duration-300 group-hover/link:w-full" />
                          </span>
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
