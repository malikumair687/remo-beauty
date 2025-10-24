import React from 'react'
import Hero from '../components/about/Hero'
import Tool from '../components/about/Tool';
import Vision from '../components/about/Vision';
import NavigationAbout from '../components/about/NavigationAbout';
import Feed from '../components/home/Feed';


const About = () => {
  return (
    <div>
      <Hero/>
      <Tool/>
      <NavigationAbout/>
      <Vision/>
      <Feed/>
    </div>
  )
}

export default About;