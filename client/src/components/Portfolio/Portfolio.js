import React from 'react';
import '../../components/Portfolio/portfolio.style.css';
import Header from '../Header/Header';
import TTSv1 from '../../utils/images/Tis_the_Seasoning_v1.png';
import Friend from '../../utils/images/Friend_Finder.png';
import Trivia from '../../utils/images/Trivia.png';
import Weather from '../../utils/images/Weather.jpeg';
import Liri from '../../utils/images/Liri.png';
import Seasoning from '../../utils/images/Seasoning.png';



function Portfolio() {

    return (
        <div>
            <Header title="Portfolio" />
            <div className="wrap">
                <div className="main_content">
                    <div className="info">
                        <div className="row row-cols-1 row-cols-md-3">
                            <div className="col mb-4">
                                <div className="card h-100">
                                    <div className="apps"><img src={TTSv1} alt="" /></div>
                                    <div className="card-body">
                                        <h5 className="card-title">Tis the Seasoning</h5>
                                        <p className="card-text">A Recipe Sharing App that uses Node and Express server to retrieve data with the help of MySQL to display User's recipes.</p>
                                        <a href="https://enigmatic-basin-87747.herokuapp.com/" target="blank">View App</a> {""}
                                        <a href="https://github.com/Kaiisha05/Tis-the-Seasoning-v1" target="blank">Github Repo</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col mb-4">
                                <div className="card h-100">
                                    <div className="apps"><img src={Friend} alt="" /></div>
                                    <div className="card-body">
                                        <h5 className="card-title">Friend Finder</h5>
                                        <p className="card-text">A compatibility-based "FriendFinder" application will take in results from a Users' survey, then compare their answers with those from other Users. The most compatible "match" will be displayed.</p>
                                        <a href="https://friend-finder-app-ko.herokuapp.com/" target="blank">View App</a> {""}
                                        <a href="https://github.com/Kaiisha05/Friend-Finder" target="blank">Github Repo</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col mb-4">
                                <div className="card h-100">
                                    <div className="apps"><img src={Trivia} alt="" /></div>
                                    <div className="card-body">
                                        <h5 className="card-title">Trivia Game</h5>
                                        <p className="card-text">A Disney-Inspired Trivia Game using JavaScript for the logic and jQuery to manipulate HTML.</p>
                                        <a href="https://kaiisha05.github.io/Trivia-Game/" target="blank">View App</a> {""}
                                        <a href="https://github.com/Kaiisha05/Trivia-Game" target="blank">Github Repo</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col mb-4">
                                <div className="card h-100">
                                    <div className="apps"><img src={Weather} alt="" /></div>
                                    <div className="card-body">
                                        <h5 className="card-title text-center">Weather to Drink</h5>
                                        <p className="card-text">Social App that allows User to get drink recipes based on their current or specified geographical location.</p>
                                        <a href="https://kaiisha05.github.io/Weather-to-Drink/" target="blank">View App</a> {""}
                                        <a href="https://github.com/Kaiisha05/Weather-to-Drink" target="blank">Github Repo</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col mb-4">
                                <div className="card h-100">
                                    <div className="apps"><img src={Liri} alt="" /></div>
                                    <div className="card-body">
                                        <h5 className="card-title">Liri-Node</h5>
                                        <p className="card-text">LIRI - Language Interpretation Recognition Interface. Axios packages are used to retrieve data from: Bands in Town | Spotify | OMDB using the node commands within the terminal.</p>
                                        <a href="https://drive.google.com/file/d/1WelGH8861ej5zPrEUnIfXgdeHFrJrjeA/view" target="blank">View Demo</a> {""}
                                        <a href="https://github.com/Kaiisha05/Liri-Node" target="blank">Github Repo</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col mb-4">
                                <div className="card h-100">
                                    <div className="apps"><img src={Seasoning} alt="" /></div>
                                    <div className="card-body">
                                        <h5 className="card-title">Tis the Seasoning-v2</h5>
                                        <p className="card-text">MERN Recipe Sharing App</p>
                                        <a href="https://tranquil-ocean-59356.herokuapp.com/" target="blank">View App</a> {""}
                                        <a href="https://github.com/Kaiisha05/Tis-the-Seasoning-v2-MERN" target="blank">Github Repo</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};


export default Portfolio;