import React from 'react'
import MainCarousel from '../components/HomeCarousel/MainCarousel'
import HomeSectionCarousel from '../components/HomeCarousel/HomeSectionCarousel'
import { MensKurta } from '../../Data/MensKurta'

const HomePage = () => {
  return (
    <div>
        <MainCarousel/>
        <div className='py-20 space-y-10 px-5 lg:px-10'>
            <HomeSectionCarousel data={MensKurta} sectionName={"mens's kurta"}/>
            <HomeSectionCarousel data={MensKurta} sectionName={"mens's shoes"}/>
            <HomeSectionCarousel data={MensKurta} sectionName={"mens's shirt"}/>
            <HomeSectionCarousel data={MensKurta} sectionName={"womens's saree"}/>
            <HomeSectionCarousel data={MensKurta} sectionName={"womens's dress"}/>
            {/* <HomeSectionCarousel data={MensKurta} sectionName={"mens's kurta"}/> */}
        </div>
    </div>
  )
}

export default HomePage
