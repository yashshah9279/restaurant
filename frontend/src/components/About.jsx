import React from 'react'
import {Link} from 'react-router-dom';
import {HiOutlineArrowNarrowRight} from 'react-icons/hi';

const About = () => {
  return (
    <section className="about" id='about'>
        <div className="container">
            <div className="banner">
                <div className="top">
                    <h1 className="heading">ABOUT US</h1>
                    <p>The only thing we are serious about is food.</p>
                </div>
                <p className="mid">
                Welcome to Foody Fresh Company, where culinary excellence meets global flavors. With a passion for crafting diverse and delectable dishes, we invite you on a journey of international cuisine. Our commitment to quality ingredients and innovative recipes ensures a dining experience that is fresh, flavorful, and unforgettable.
                </p>
                <Link to={"/"} onClick={()=>{
            document.getElementById('menu').scrollIntoView({behaviour: 'smooth'});
        }}>Explore Menu{" "}
                <span>
                    <HiOutlineArrowNarrowRight/>
                </span>
                </Link>
            </div>
            <div className="banner">
                <img src="/about.png" alt="about" />
            </div>
        </div>
    </section>
  )
}

export default About