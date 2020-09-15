import { Hero } from '../components/Hero'
import { About } from '../components/About'
import { Contact } from '../components/Contact'
import { Services } from '../components/Services'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'

import Head from 'next/head'
import { Horarios } from '../components/Horarios'

export default function Index() {
  return (
    <>
      <Head>
        <title>Veterinária RJ</title>
      </Head>
      <div>
        <div className="min-h-screen">
          <Header />
          <Hero />
          <Horarios />
          <About />
          <Services />
          <Contact />
          <Footer />
        </div>
      </div>
    </>
  )
}
