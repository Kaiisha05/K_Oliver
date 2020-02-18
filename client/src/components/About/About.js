import React from 'react';
import '../../components/About/about.style.css';
import profile from '../../utils/images/ProfilePic.jpeg';

function About() {
    return (
        <div className="wrap">
            <div className="main_content">
                <div className="header">About Me</div>
                <div className="info">
                    <div className="profile"><img src={profile} alt=""/></div>
                    <p>I was born and raised in Savannah, Georgia. After graduating high school I moved to Atlanta, GA to attend Georgia State University. I received my Bachelor's of Business Adminstration in Marketing with a Certificate in Hospitality with a concentration in Tradeshow and Event Planning.</p>
                    <p>Upon graduation I began working for Schlesinger Associates, a Market Research facility. Within 4 years I achieved the role of Facility Manager before I made my exit. I went on to work for The Sherwin-Williams Company. After completing their Manager Trainee program I would go on to manage 3 differnt stores over the course of my 5 years. During this time, I received the award for Peek Performer within the NW Atlanta distrcit for 2 consecutive years and earned the Spectrum of Excellence President's Award for 3 consecutive years.</p>
                    <p>I made the decision to part ways with S-W and begin my journey to become a Full Stack Web Developer. I recieved my Certificate from Georgia Tech in Atlanta, GA. I am anxious to push my limits, grow my new found skills and contribute in a meanigful way with a new company!</p>
                </div>
            </div>
        </div>

    )
};


export default About;