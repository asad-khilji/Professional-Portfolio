import React from 'react';
import Logo from '../assets/images/logo.png';
import JqueryLogo from '../assets/images/jquery-logo.png';
import BootstrapLogo from '../assets/images/bootstrap-logo.png';
import ReduxLogo from '../assets/images/redux-logo.png';
import MernLogo from '../assets/images/mern-logo.png';
import WebpackLogo from '../assets/images/webpack-logo.png';
import VueLogo from '../assets/images/vuejs-logo.png';
import HandlebarsLogo from '../assets/images/handlebars-logo.png';
import SqlLogo from '../assets/images/sql-logo.png';
import MongoLogo from '../assets/images/mongodb-logo.png';
import '../App.css';
import '../portfolio.css';

const Resume = () => {
    return (
        <React.Fragment>
            <div className='container'>
                <div className='row'>
                    <div className='col'>
                        <div className='card'>
                            <div className="header">
                                <h3>Asad Khilji</h3>
                                <p>8 Sergeant Ct Budd Lake, NJ 07828 - (201) 937-9699 - khiljiasad2@gmail.com</p>
                            </div>

                            <div className="modal-footer"/>

                            <div className="header">
                                <h3>Objective</h3>
                                <p>To become a full stack web developer</p>
                            </div>

                            <div className="header">
                                <h3>Skills</h3>
                                <p>Website Designing</p>
                                <p>Catalog Designing</p>
                                <p>Data Entry</p>
                            </div>

                            <div className="header">
                                <h3>Education</h3>
                                <p>Rutgers University</p>
                                <p>Full Stack Web Development</p>
                            </div>

                            <div className="header">
                                <p>Felician University</p>
                                <p>MBA</p>
                            </div>

                            <div className="header">
                                <p>Felician College</p>
                                <p>Bachelor's in Marketing</p>
                            </div>

                            <div className="header">
                                <h3>Work Experience</h3>
                                <p>Unik International Inc</p>
                                <p>IT Specialists</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Resume;
