import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import './home.css';

const Home = () => {
    return (
        <div className="home-container">
            <h1>Megan Wright</h1>
            <div className="welcome-message">
                <TypeAnimation
                    sequence={[
                        'Website Developer', 1000, // Display time 2000ms
                        'Passionate Learner', 1000,
                        'Strategic Problem-Solver', 1000,
                        'Spirited Adventurer', 1000,
                        'Psychology Enthusiast', 1000,
                        'Kind-Hearted Friend', 1000,
                        () => {
                            return '';
                        }
                    ]}
                    wrapper="h1"
                    cursor={true}
                    repeat={Infinity}
                    speed={185} // Typing speed in ms
                    className="typing-animation"
                />
            </div>
        </div>
    );
};

export default Home;

