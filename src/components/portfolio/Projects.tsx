import { motion } from 'motion/react'
import { useInView, useReducedMotion } from 'motion/react'
import { useRef } from 'react'
import { ExternalLink, Github } from 'lucide-react'

const projects = [
  {
    title: 'FreeFA – FIFA World Cup 2026 Match Hub',
    description:
      'Built a full-stack World Cup 2026 hub with live match data, standings, and real-time scores. The interesting part: an automated Telegram pipeline using GramJS that discovers and surfaces stream links without manual curation. Reached 10,000 visitors across 40+ countries organically.',
    tech: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Supabase'],
    link: 'https://freefifa.vercel.app/',
    github: 'https://github.com/swarn6402/freefa',
    featured: true,
  },
  {
    title: 'Saspirant– Smart Job Alert Platform',
    description:
      'Job hunting is tedious. This platform automates the tedious part. Scrapes 50+ recruitment sites with BeautifulSoup4 and Selenium, matches listings to your profile with AI, and sends personalized alerts via email. Full-stack: React frontend, Flask API, PostgreSQL, deployed on Vercel and Render.',
    tech: ['React', 'Flask', 'PostgreSQL', 'Google OAuth', 'BeautifulSoup4', 'Selenium', 'SendGrid', 'Vercel', 'Render'],
    link: 'https://saspirant.vercel.app/',
    github: 'https://github.com/swarn6402/Saspirant',
    featured: true,
  },
  {
    title: 'KarmaChronos Chrome Extension',
    description:
      "A Chrome extension that turns your new tab into a lifespan countdown. Sounds morbid. Turns out it's clarifying. Grid-based interface, real-time updates, no dependencies.",
    tech: ['HTML', 'CSS', 'JavaScript', 'Chrome APIs'],
    link: 'https://github.com/swarn6402/KarmaChronos',
    github: 'https://github.com/swarn6402/KarmaChronos',
  },
  {
    title: 'SwarnSports– Cricket Streaming Link Aggregator',
    description:
      'Automated aggregator for cricket streaming links. Python handles the Telegram scraping via Telethon, regex filters the noise, and the whole thing deploys via CI/CD to GitHub Pages. Set it and forget it.',
    tech: ['Python', 'Telethon API', 'JavaScript', 'GitHub Pages'],
    link: 'https://swarn6402.github.io/SwarnSportsHD/',
    github: 'https://github.com/swarn6402/SwarnSportsHD',
  },
  {
    title: 'KarmaYogi – Focus & Productivity Chrome Extension',
    description:
      'Distraction blocker and focus tracker as a Chrome extension. Manifest V3, Web Audio API for audio cues, analytics built in. The performance work here was the interesting part: client-side event-driven code has more bottlenecks than people expect.',
    tech: ['Chrome Extension', 'Manifest V3', 'Web Audio API', 'JavaScript'],
    github: 'https://github.com/swarn6402/karmayogi',
  },
]

export function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const shouldReduceMotion = useReducedMotion()

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
            <h2 className="font-sans text-3xl md:text-4xl font-semibold text-charcoal mb-4">
              Featured Projects
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

          {/* Projects Grid */}
          <div className="space-y-8">
            {projects.map((project, index) => (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                whileHover={
                  shouldReduceMotion
                    ? undefined
                    : {
                        rotateX: 2,
                        rotateY: -1,
                        scale: 1.01,
                        translateY: -2,
                        transition: { duration: 0.2 },
                      }
                }
                style={{ transformPerspective: 1000 }}
                className={`group relative overflow-hidden bg-cream border border-charcoal/5 p-6 md:p-8 transition-[border-color,box-shadow] duration-300 hover:border-bronze/30 hover:shadow-lg ${
                  project.featured ? 'md:p-10' : ''
                }`}
              >
                {/* Content */}
                <div className="max-w-3xl">
                  {/* Featured Badge */}
                  {project.featured && (
                    <span className="inline-block text-xs font-sans text-bronze uppercase tracking-widest border border-bronze/30 px-3 py-1 mb-4">
                      Featured
                    </span>
                  )}

                  <h3 className="font-sans text-xl md:text-2xl font-semibold text-charcoal mb-4 group-hover:text-bronze transition-colors">
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
