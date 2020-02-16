import React from 'react';
import '../../components/Contact/style.css'
import { Link } from 'react-router-dom';



function Contact() {
    return (
        <div className="wrap">
            <div className="main_content">
                <div className="header">Let's Connect</div>
                <div className="row row-cols-1 row-cols-md-3">
                    <div className="col mb-4">
                        <div className="card h-100 text-center">
                            <Link to='https://github.com/Kaiisha05' target="_blank"><i className="fab fa-github fa-7x"></i></Link>
                            <div className="card-body">
                                <h3 className="card-title">Github</h3>
                            </div>
                        </div>
                    </div>
                    <div className="col mb-4">
                        <div className="card h-100 text-center">
                            <Link to='https://www.linkedin.com/in/kaiishao/' target="_blank"><i className="fab fa-linkedin fa-7x"></i></Link>
                            <div className="card-body">
                                <h3 className="card-title">LinkedIn</h3>
                            </div>
                        </div>
                    </div>
                    <div className="col mb-4">
                        <div className="card h-100 text-center">
                            <Link to="#"><i className="fab fa-google-drive fa-7x"></i></Link>
                            <div className="card-body">
                                <h3 className="card-title">Resume</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="contact">
                    <h3>Kaiisha Oliver</h3>
                    <h3>kaiisha.tech@gmail.com</h3>
                    <h3>(404)717-3229</h3>
                </div>
            </div>
        </div>




    )
}

export default Contact;