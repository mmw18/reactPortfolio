import React from 'react';
import './aboutMe.css';
import headshot from '../../assets/headshot.jpg';

const AboutMe = () => {
    return (
        <div className="about-me-container">
            <div className="left">
                <h1>About Me</h1>
                <p>
                    Hey there, my name is Megan! My life is driven by a genuine curiosity about the world and a passion for making meaningful connections. When I'm not immersed in technology, you'll likely find me enjoying the simple pleasures of baking, cooking, or crafting. I also have a deep love for electronic music and the lively spirit of music festivals.</p>

                    <p>I’ve recently achieved a significant milestone by graduating from UT Austin's Coding Bootcamp, where I maintained an A average throughout the course. This program has profoundly transformed my professional path and deepened my love for development. I am immensely grateful for the unparalleled guidance, knowledge, and support I received, which have been pivotal in shaping my approach to technology and innovation. Looking ahead, I'm excited to further my education with a Bachelor’s degree in Computer Science at Colorado State Global in 2024, building on my Associate's Degree in Psychology from Austin Community College, where I graduated with the highest honors. Balancing my academic pursuits, I have also thrived in a professional capacity, working full-time as a leasing consultant. This role has not only honed my ability to manage multiple responsibilities effectively but has also been a testament to my commitment to excellence. Recently, I was honored with the Star Sales Award, recognizing me in the top 5% of leasing consultants nationwide. This accolade underscores my proficiency in time management, my ability to excel under pressure, and my dedication to maintaining a healthy work-life balance.</p>

                    <p>I'm drawn to computer science for its potential to solve real-world problems and its capacity for innovation. My journey bridges the gap between the analytical rigor of computer science and a comprehensive understanding of human behavior. Drawn to the potential for innovation, my goal is to improve lives, leveraging insights from my studies in psychology to inform a compassionate approach to development.</p>

                    <p>Thank you for visiting my page. I'm eager to see where this journey takes us!
                </p>
            </div>
            <img src={headshot} alt="Me" className="about-me-photo" />
        </div>
    );
};

export default AboutMe;
