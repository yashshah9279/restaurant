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
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio minima eveniet iste similique eum delectus accusamus corrupti tempore dolorum sit. Cum perferendis quisquam soluta, id nesciunt molestiae culpa laboriosam totam, perspiciatis distinctio tempora explicabo commodi beatae doloribus error ducimus iusto sint laudantium adipisci hic. Delectus deleniti provident magni corporis aliquam?
                </p>
                <Link to={"/"}>Explore Menu{" "}
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