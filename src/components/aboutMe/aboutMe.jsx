import React from 'react';
import './aboutMe.css';
import headshot from '../../assets/headshot.jpg';

const AboutMe = () => {
    return (
        <div className="about-me-container">
            <div className="left">
                <h1>About Me</h1>
                <p>
                    Hey there, my name is Megan! I am passionately in love with the world and the diverse tapestry that is humanity. Adventure is a key part of who I am, whether it’s exploring new places or encountering fresh perspectives. I thrive on connecting with people and hearing their unique stories. In my downtime, you can find me deeply enjoying the pleasures of baking, cooking, and crafting. I'm an avid fan of electronic music and the vibrant atmosphere of music festivals. At my core, I strongly believe in the power of self-influence and steering my own journey. I value the freedom to make my own choices and the autonomy to shape my destiny, principles that inspire me every day.</p>
                <p> As a dedicated and enthusiastic learner, I am currently immersed in the dynamic world of coding at UT Austin's Coding Bootcamp. My academic journey will further expand as I embark on a pursuit of a Bachelor's degree in Computer Science with Colorado State Global starting in 2024. This follows my successful completion of an Associate's Degree in Psychology from Austin Community College, where I graduated as a distinguished student with the highest honors, maintaining a flawless grade point average.

                    My academic path reflects a deep-seated fascination with the human mind, a subject that has captivated me endlessly. However, my true calling lies in the realm of computer science—a field that I have discovered resonates with my core passions more profoundly. I firmly believe in the power of consistent action over mere ideas. The practical application of knowledge, particularly in technology, holds immense value in shaping our future. This belief drives my enthusiasm for diving into the depths of computer science, a field where innovation and problem-solving converge.

                   My commitment to this path is fueled by a desire to contribute meaningfully. I am excited about the growth opportunities that lie ahead and am committed to making a significant impact in the field.
                </p>
            </div>
            <img src={headshot} alt="Me" className="about-me-photo" />
        </div>
    );
};

export default AboutMe;
