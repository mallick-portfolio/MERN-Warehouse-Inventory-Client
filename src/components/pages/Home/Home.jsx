import React from 'react'
import Banner from '../Banner/Banner.jsx'
import HomeBlog from '../HomeBlog/HomeBlog.jsx'
import HomeInventory from '../HomeInventory/HomeInventory.jsx'
import OrganicFood from '../OrganicFood/OrganicFood.jsx'

const Home = () => {
  return (
    <div>
      <Banner />
      <HomeInventory />
      <OrganicFood />
      <HomeBlog />
    </div>
  )
}

export default Home
