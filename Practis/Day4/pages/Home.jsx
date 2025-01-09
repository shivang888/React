import React from "react"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Section from "../components/Section"



const Home = () => {
 
    let Maroon = "maroon"   

    return(
        <>
        
         <Navbar color={Maroon} />
         <Section/>
         <Footer/>
        </>
    )

}

export default Home;