import { createFileRoute } from '@tanstack/react-router'
import {
  Header,
  About,
  Experience,
  Skills,
  Projects,
  Education,
  Certifications,
  Footer,
} from '@/components/portfolio'

export const Route = createFileRoute('/_public/')({
  component: Portfolio,
})

function Portfolio() {
  return (
    <main className="min-h-screen bg-cream">
      <Header />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Education />
      <Certifications />
      <Footer />
    </main>
  )
}
