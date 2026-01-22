import { useState, useEffect } from 'react'
import { Phone, Mail, Globe, Github, Linkedin, Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'motion/react'
import { ThemeToggle } from './ThemeToggle'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
]

const contactLinks = [
  { icon: Phone, label: '+91-7667231930', href: 'tel:+917667231930' },
  {
    icon: Mail,
    label: 'swarnjeettiwary01@gmail.com',
    href: 'mailto:swarnjeettiwary01@gmail.com',
  },
  { icon: Globe, label: 'Portfolio', href: '#' },
  { icon: Github, label: 'swarn6402', href: 'https://github.com/swarn6402' },
  {
    icon: Linkedin,
    label: 'swarn6402',
    href: 'https://linkedin.com/in/swarn6402',
  },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (href: string) => {
    setIsMobileMenuOpen(false)
    if (href === '#') return
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      {/* Fixed Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-cream/95 backdrop-blur-sm shadow-sm py-3'
            : 'bg-transparent py-4'
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          <button
            onClick={() => scrollToSection('#hero')}
            className="font-serif text-lg font-semibold text-charcoal tracking-wide hover:text-bronze transition-colors"
          >
            SNT
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => scrollToSection(link.href)}
                className="text-sm font-sans text-charcoal/70 hover:text-charcoal transition-colors relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-1/2 w-0 h-px bg-bronze transition-all duration-300 group-hover:w-full group-hover:left-0" />
              </button>
            ))}
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-3 md:hidden">
            <ThemeToggle />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-charcoal"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed top-0 right-0 bottom-0 w-72 bg-cream z-40 shadow-xl md:hidden"
          >
            <div className="pt-20 px-8">
              <div className="space-y-6">
                {navLinks.map((link, index) => (
                  <motion.button
                    key={link.label}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    onClick={() => scrollToSection(link.href)}
                    className="block text-lg font-serif text-charcoal hover:text-bronze transition-colors"
                  >
                    {link.label}
                  </motion.button>
                ))}
              </div>
              <div className="mt-12 pt-8 border-t border-charcoal/10">
                <p className="text-xs font-sans text-charcoal/50 uppercase tracking-widest mb-4">
                  Contact
                </p>
                <div className="space-y-3">
                  {contactLinks.slice(0, 2).map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      className="flex items-center gap-3 text-sm text-charcoal/70 hover:text-bronze transition-colors"
                    >
                      <link.icon size={16} />
                      <span className="truncate">{link.label}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsMobileMenuOpen(false)}
            className="fixed inset-0 bg-charcoal/20 z-30 md:hidden"
          />
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <header
        id="hero"
        className="relative min-h-screen flex flex-col justify-center bg-cream pt-16"
      >
        <div className="max-w-6xl mx-auto px-6 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-center"
          >
            {/* Decorative Line */}
            <div className="flex items-center justify-center gap-4 mb-8">
              <span className="w-12 h-px bg-bronze" />
              <span className="text-xs font-sans text-bronze uppercase tracking-[0.3em]">
                Portfolio
              </span>
              <span className="w-12 h-px bg-bronze" />
            </div>

            {/* Name */}
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-charcoal tracking-wide leading-tight mb-6">
              SWARNJEET NATH
              <br />
              <span className="text-charcoal/80">TIWARY</span>
            </h1>

            {/* Subtitle */}
            <p className="font-sans text-lg md:text-xl text-charcoal/60 font-light tracking-wide mb-12">
              Full-Stack Developer & Electronics Engineer
            </p>

            {/* Decorative Divider */}
            <div className="w-24 h-px bg-charcoal/20 mx-auto mb-12" />

            {/* Contact Bar */}
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
              {contactLinks.map((link, index) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={
                    link.href.startsWith('http')
                      ? 'noopener noreferrer'
                      : undefined
                  }
                  className="flex items-center gap-2 text-sm font-sans text-charcoal/60 hover:text-bronze transition-colors group"
                >
                  <link.icon
                    size={16}
                    className="text-bronze/70 group-hover:text-bronze"
                  />
                  <span className="hidden sm:inline">{link.label}</span>
                  {index < contactLinks.length - 1 && (
                    <span className="hidden lg:inline text-charcoal/20 ml-4">
                      |
                    </span>
                  )}
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <button
            onClick={() => scrollToSection('#about')}
            className="flex flex-col items-center gap-2 text-charcoal/40 hover:text-bronze transition-colors"
            aria-label="Scroll to about section"
          >
            <span className="text-xs font-sans uppercase tracking-widest">
              Scroll
            </span>
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="w-px h-8 bg-current"
            />
          </button>
        </motion.div>
      </header>
    </>
  )
}
