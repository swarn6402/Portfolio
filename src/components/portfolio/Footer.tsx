import { Phone, Mail, Github, Linkedin, Heart } from 'lucide-react'

const socialLinks = [
  { icon: Github, href: 'https://github.com/swarn6402', label: 'GitHub' },
  {
    icon: Linkedin,
    href: 'https://linkedin.com/in/swarn6402',
    label: 'LinkedIn',
  },
  { icon: Mail, href: 'mailto:swarnjeettiwary01@gmail.com', label: 'Email' },
  { icon: Phone, href: 'tel:+917667231930', label: 'Phone' },
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-charcoal text-cream/80">
      {/* Main Footer */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="text-center">
          {/* Name */}
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-cream mb-4">
            Swarnjeet Nath Tiwary
          </h2>

          {/* Tagline */}
          <p className="font-sans text-cream/50 text-sm mb-8">
            Software Engineer | Backend & AI Systems
          </p>

          {/* Decorative Line */}
          <div className="w-16 h-px bg-bronze mx-auto mb-8" />

          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 mb-8 text-sm font-sans">
            <a
              href="mailto:swarnjeettiwary01@gmail.com"
              className="flex items-center gap-2 text-cream/60 hover:text-bronze transition-colors"
            >
              <Mail size={16} />
              swarnjeettiwary01@gmail.com
            </a>
            <span className="hidden sm:inline text-cream/20">|</span>
            <a
              href="tel:+917667231930"
              className="flex items-center gap-2 text-cream/60 hover:text-bronze transition-colors"
            >
              <Phone size={16} />
              +91-7667231930
            </a>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={
                  link.href.startsWith('http')
                    ? 'noopener noreferrer'
                    : undefined
                }
                className="w-10 h-10 flex items-center justify-center border border-cream/20 text-cream/60 hover:border-bronze hover:text-bronze transition-all duration-300"
                aria-label={link.label}
              >
                <link.icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-cream/10">
        <div className="max-w-6xl mx-auto px-6 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-sans text-cream/40">
            <p>© {currentYear} Swarnjeet Nath Tiwary. All rights reserved.</p>
            <p className="flex items-center gap-1">
              Built with passion and precision
              <Heart size={12} className="text-bronze fill-bronze" />
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
