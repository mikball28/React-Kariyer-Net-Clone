import React from 'react'
import Search from '../component/Search';
import Slider from '../component/Slider';
import Featured from '../component/Featured';
import Post from '../component/Post';
import CareerPlan from '../component/CareerPlan';
import CareerGuide from '../component/CareerGuide';
import Info from '../component/Info';
import Footer from '../component/Footer';

export default function Home() {
  return (
    <>
      <Search/>
      <Slider/>
      <Featured/>
      <Post/>   
      <CareerPlan/>
      <CareerGuide/>
      <Info/>
      <Footer/>
    </>
  )
}
