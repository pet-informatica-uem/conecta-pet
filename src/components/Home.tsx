import { Header } from './Header'
import { Footer } from './Footer'
import { Hero } from './Hero'
import { SobreEvento } from './SobreEvento'
import { Maratona } from './Maratona'
import { Cronograma } from './Cronograma'
import { PageBackground } from './ui/Background'

export function Home() {
  return (
    <div className="relative overflow-x-clip">
      <PageBackground />
      <Header />
      <main>
        <Hero />
        <SobreEvento />
        <Maratona />
        <Cronograma />
      </main>
      <Footer />
    </div>
  )
}
