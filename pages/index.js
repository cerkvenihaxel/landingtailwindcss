import Head from 'next/head'
import Image from 'next/image'
import { Contact } from '../components/Contact'
import { Experience } from '../components/Experience'
import { Hero2 } from '../components/Hero2'
import { Join } from '../components/Join'
import { Navbar } from '../components/Navbar'
import { Services2 } from '../components/Services2'
import { Slider } from '../components/Slider'
import { Team } from '../components/Team'
import Team2 from '../components/Team2'

export default function Home() {
  return (
    <div>
      <Head>
        <title>NOGASoft LR</title>
        <meta name="description" content="NOGASoft LR" />
      </Head>
      <Hero2 />
      <Services2 />
      <Join />     
      <Team2 /> 
      <Contact />
    </div>
  )
}
