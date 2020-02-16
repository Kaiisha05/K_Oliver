import React from 'react';
import '../../components/Portfolio/style.css';
import { Link } from 'react-router-dom';

function Portfolio() {

    return (
        <div className="wrap">
            <div className="main_content">
                <div className="header">Portfolio</div>
                <div className="info">
                    <div className="row row-cols-1 row-cols-md-3">
                        <div className="col mb-4">
                            <div className="card h-100">
                                <img src='' className="card-img-top" alt="seasoning_v1"></img>
                                <div className="card-body">
                                    <hr />
                                    <h5 className="card-title">Tis the Seasoning</h5>
                                    <p className="card-text">A Recipe Sharing App that uses Node and Express server to retrieve data with the help of MySQL to display User's recipes.</p>
                                    <div className="card-footer bg-transparent">
                                        <Link to="https://enigmatic-basin-87747.herokuapp.com/" target="_blank">View App</Link> {""}
                                        <Link to="https://github.com/Kaiisha05/Tis-the-Seasoning-v1" target="_blank">Github Repo</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col mb-4">
                            <div className="card h-100">
                                <img src="..." className="card-img-top" alt="..."></img>
                                <div className="card-body">
                                    <hr />
                                    <h5 className="card-title">Friend Finder</h5>
                                    <p className="card-text">A compatibility-based "FriendFinder" application will take in results from a Users' survey, then compare their answers with those from other Users. The most compatible "match" will be displayed.</p>
                                    <div className="card-footer bg-transparent">
                                        <Link to="https://friend-finder-app-ko.herokuapp.com/" target="_blank">View App</Link> {""}
                                        <Link to="https://github.com/Kaiisha05/Friend-Finder" target="_blank">Github Repo</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col mb-4">
                            <div className="card h-100">
                                <img src="..." className="card-img-top" alt="..."></img>
                                <div className="card-body">
                                    <hr />
                                    <h5 className="card-title">Trivia Game</h5>
                                    <p className="card-text">A Disney-Inspired Trivia Game using JavaScript for the logic and jQuery to manipulate HTML.</p>
                                    <div className="card-footer bg-transparent">
                                        <Link to="https://kaiisha05.github.io/Trivia-Game/" target="_blank">View App</Link> {""}
                                        <Link to="https://github.com/Kaiisha05/Trivia-Game" target="_blank">Github Repo</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col mb-4">
                            <div className="card h-100">
                                <img src="..." className="card-img-top" alt="..."></img>
                                <div className="card-body">
                                    <hr />
                                    <h5 className="card-title text-center">Weather to Drink</h5>
                                    <p className="card-text">Social App that allows User to get drink recipes based on their current or specified geographical location.</p>
                                    <div className="card-footer bg-transparent">
                                        <Link to="https://kaiisha05.github.io/Weather-to-Drink/" target="_blank">View App</Link> {""}
                                        <Link to="https://github.com/Kaiisha05/Weather-to-Drink" target="_blank">Github Repo</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col mb-4">
                            <div className="card h-100">
                                <img src="..." className="card-img-top" alt="..."></img>
                                <div className="card-body">
                                    <hr />
                                    <h5 className="card-title">Liri-Node</h5>
                                    <p className="card-text">LIRI - Language Interpretation Recognition Interface. Axios packages are used to retrieve data from: Bands in Town | Spotify | OMDB using the node commands within the terminal.</p>
                                    <div className="card-footer bg-transparent">
                                        <Link to="https://drive.google.com/file/d/1WelGH8861ej5zPrEUnIfXgdeHFrJrjeA/view" target="_blank">View Demo</Link> {""}
                                        <Link to="https://github.com/Kaiisha05/Liri-Node" target="_blank">Github Repo</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col mb-4">
                            <div className="card h-100">
                                <img src="..." className="card-img-top" alt="..."></img>
                                <div className="card-body">
                                    <hr />
                                    <h5 className="card-title">Tis the Seasoning-v2</h5>
                                    <p className="card-text">MERN Recipe Sharing App</p>
                                    <div className="card-footer bg-transparent">
                                        <Link to="https://tranquil-ocean-59356.herokuapp.com/" target="_blank">View App</Link> {""}
                                        <Link to="https://github.com/Kaiisha05/Tis-the-Seasoning-v2-MERN" target="_blank">Github Repo</Link>
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