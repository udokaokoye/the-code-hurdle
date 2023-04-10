import Image from 'next/image'
// import { Inter } from 'next/font/google'
import styles from './page.module.css'
import Link from 'next/link'
import Showcase from './(Components)/Showcase'
import FeaturedEpisode from './(Components)/FeaturedEpisode'

// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <Showcase/>
      <FeaturedEpisode />
      
    </div>
  )
}
