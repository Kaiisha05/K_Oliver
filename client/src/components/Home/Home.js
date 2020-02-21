import React from 'react';
import Header from '../Header/Header';


function Home () {
        return (
            <div>
                <Header title="Welcome!" />
                <div className="wrap">
                    <div className="main_content">
                        <div className="info">
                            <h1 className="display-4">I'm Kaiisha</h1>
                            <h3 className="lead">Front-End Web Developer with a degree in Marketing and experience providing exceptional Customer Service allows me to understand the balance of both visual appeal and conceptual functionality.</h3>
                            <hr className="my-4"></hr>
                            <p>Attention to details and setting the standard has always been my passion. I understand the importance of communication, compromise, humility and willingness to receive criticism while working collaboratively in a team environment. I desire to set the bar and be challenged. I've worked with customers to take their ideas and create a tangible representation that fully encompassed the mood and functionality they envisioned. </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    };


export default Home;