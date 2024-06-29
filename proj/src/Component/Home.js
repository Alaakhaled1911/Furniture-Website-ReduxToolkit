import React from 'react'
import './home.css'
import Header from './Header'
import Card from './Card';
import Signup from'../AUTH/Signup'
import Top from './Top';
import About from './About';
import Info from './Info';
import Best from './Best';
import ContactUs from './ContactUs';
const Home = () => {
  return (
    <>
    <div className="home">
      <div className="headerr">
      <Header />
      </div>
        
<section className='cardd' >
<Card/>
</section>

    </div>
    <Info/>
    <Best/>
  
    <Top />
    <About/>
   
    </>
  );
}

export default Home