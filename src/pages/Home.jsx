import React from 'react'



import Hero from '../components/Hero/Hero'
import Services from "../components/Services/Services";

import Subscribe from "../components/Subscribe/Subscribe";
import Banner2 from "../components/Banner/Banner2";
import Footer from "../components/Footer/Footer";
import { UpdateFollower } from "react-mouse-follower";
//import Navbar from '../components/Navbar/Navbar';

const Home = () => {
  return (
    <main className="overflow-x-hidden bg-white text-dark">
    

 <UpdateFollower
   mouseOptions={{
     backgroundColor: "white",
     zIndex: 10,
     followSpeed: 1.5,
   }}
 >
   <Hero />
 </UpdateFollower>
 <Services />
 {/* <Banner /> */}
 <Subscribe />
  <Banner2 /> 
 <Footer />


</main>
  )
}

export default Home