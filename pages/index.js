import Head from 'next/head'
import Image from 'next/image'
import { Contact } from '../components/Contact'
import { Experience } from '../components/Experience'
import Hero from '../components/Hero'
import { Navbar } from '../components/Navbar'
import { Slider } from '../components/Slider'
import { Team } from '../components/Team'

export default function Home() {
  return (
    <div>
      <Head>
        <title>NOGASoft LR</title>
        <meta name="description" content="NOGASoft LR" />
      </Head>
      <Hero heading='Acompañamos tu crecimiento digital.' message='Una empresa  que reune a las personas capacitadas junto a las necesidades mas complejas.'/>
      <Slider/>
      <Experience />
      <Team />
      <Contact />
      
    </div>
  )
}
