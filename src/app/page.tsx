import Hero from '@/components/Hero'
import InquiryForms from '@/components/InquiryForms'
import Features from '@/components/Features'
import Testimonials from '@/components/Testimonials'
import Statistics from '@/components/Statistics'

export default function Home() {
  return (
    <>
      <Hero />
      <section id="features">
        <Features />
      </section>
      <section id="statistics">
        <Statistics />
      </section>
      <section id="inquiry">
        <InquiryForms />
      </section>
      <section id="testimonials">
        <Testimonials />
      </section>
    </>
  )
}
