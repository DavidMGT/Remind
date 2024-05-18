export const metadata = {
  title: 'Home - Open PRO',
  description: 'Page description',
}

import Hero from '@/src/app/components/hero'
import Features from '@/src/app/components/features'
import Newsletter from '@/src/app/components/newsletter'
import Zigzag from '@/src/app/components/zigzag'
import Testimonials from '@/src/app/components/testimonials'

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Zigzag />
      <Testimonials />
      <Newsletter />
    </>
  )
}
