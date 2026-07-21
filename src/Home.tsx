import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { SobreEvento } from './components/SobreEvento'
import { Maratona } from './components/Maratona'
import { Cronograma } from './components/Cronograma'
import { PageBackground } from './components/ui/Background'

export default function Home() {
  return (
    <div className="relative overflow-x-clip pt-20 md:pt-31">
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
