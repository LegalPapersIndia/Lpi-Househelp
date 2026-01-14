import React from 'react'
import Hero from '../Components/Hero'
import Services from '../Components/Services'
import Blog from '../Components/Blogs'
import Testimonials from '../Components/Testimonials'
import WhyChooseUs from '../Components/WhyChooseUs'

const Home = () => {
  return (
    <div>
        <Hero />
        <Services />
        <WhyChooseUs />
        <Blog />
        <Testimonials />
    </div>
  )
}

export default Home