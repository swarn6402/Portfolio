import { motion } from 'motion/react'
import { useInView, useReducedMotion } from 'motion/react'
import { useRef } from 'react'
import { Play, Music } from 'lucide-react'

type NowPlayingItem = {
  label: string
  title: string
  artist?: string
  meta: string
  url: string
  icon: typeof Play
}

const items: NowPlayingItem[] = [
  {
    label: 'Track 01',
    title: 'Sultans of Swing',
    artist: 'Mark Knopfler',
    meta: 'Live · A Night In London · 1996',
    url: 'https://music.youtube.com/watch?v=yTcsgxU9jsA&list=LM',
    icon: Play,
  },
  {
    label: 'Track 02',
    title: 'Gimn Rossiyskoy Federatsii',
    artist: 'Red Army Choir',
    meta: 'Russian National Anthem · Orchestral',
    url: 'https://music.youtube.com/watch?v=gGuvWwmSH3Q',
    icon: Play,
  },
  {
    label: 'Playlist',
    title: "Swarn's List",
    meta: 'A public playlist · curated by me',
    url: 'https://music.youtube.com/playlist?list=PLtikKaAl-kqDAv9mb6oqw6FgIaxhlesjs',
    icon: Music,
  },
]

export function NowPlaying() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const shouldReduceMotion = useReducedMotion()

  return (
    <section id="listening" className="py-24 md:py-32 bg-cream">
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
              Listening
            </span>
            <h2 className="font-sans text-3xl md:text-4xl font-semibold text-charcoal mb-4">
              What's On
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

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {items.map((item, index) => {
              const Icon = item.icon
              return (
                <motion.a
                  key={item.title}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="group flex flex-col bg-white border border-charcoal/5 border-l-2 border-l-bronze p-6 md:p-8 transition-all duration-300 hover:border-bronze/40 hover:border-l-bronze hover:shadow-lg hover:-translate-y-0.5"
                >
                  {/* Label */}
                  <span className="text-xs font-sans text-bronze uppercase tracking-[0.3em] block mb-6">
                    {item.label}
                  </span>

                  {/* Title */}
                  <h3 className="font-sans text-xl md:text-2xl font-semibold text-charcoal mb-2 group-hover:text-bronze transition-colors">
                    {item.title}
                  </h3>

                  {/* Artist */}
                  {item.artist && (
                    <p className="font-sans text-charcoal/70 mb-1">
                      {item.artist}
                    </p>
                  )}

                  {/* Meta */}
                  <p className="font-sans text-sm text-charcoal/50 mb-6">
                    {item.meta}
                  </p>

                  {/* Play / Music button */}
                  <div className="mt-auto flex items-center gap-3">
                    <span className="w-12 h-12 flex items-center justify-center rounded-full border border-bronze text-bronze transition-all duration-300 group-hover:bg-bronze group-hover:text-cream">
                      <Icon size={18} />
                    </span>
                    <span className="text-sm font-sans text-charcoal/50 group-hover:text-bronze transition-colors">
                      Listen on YouTube Music
                    </span>
                  </div>
                </motion.a>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
