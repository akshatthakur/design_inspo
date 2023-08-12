import Image from 'next/image'

//components
import Navbar from '@/components/Navbar'
import HeroAction from "@/components/HeroAction"
import HeroProcess from "@/components/HeroProcess"
import HeroPrinciples from "@/components/HeroPrinciples"
import HeroQuote from '@/components/HeroQuote'
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <main>
        <Navbar/>    
        <HeroAction /> 
        <HeroProcess />
        <HeroPrinciples />
        <HeroQuote />
        <Footer />
    </main>
  )
}
