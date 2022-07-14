import React from 'react';
import Avatar from '../assets/images/avatar.png';
import '../App.css';

const About = () => {
    return (
        <React.Fragment>
            <div className='container'>
                <div className='row'>
                    <div className='col'>
                        <div className='card'>

                            <div className='card-body'>
                                <div className="row abstract-back ">
                                    <img className='avatar' src={Avatar} />
                                    <h1>Mohammad Asad Khilji</h1>
                                </div>
                            </div>

                            <div className='card-body'>
                                <div className="row">
                                    <p className='p-about'>
                                        My Name is Asad Khilji and I am a Software Engineer. I have skills in several programming languages such as HTML, CSS, JavaScript, Node.js, MySQL, and React.
                                    </p>
                                </div>
                            </div>

                            <div className="modal-footer" />

                            <div className='card-body'>
                                <h2 className='edu'>Education</h2>
                                <br />

                                <div className='grid-container-profile'>
                                    <div className='grid-item'>
                                        <div className='title-uni'>Rutgers University</div>
                                        <div className='title-concentration'>Full Stack Web Development</div>
                                    </div>

                                   

                                    <div className="grid-item">
                                        <div className='title-uni'>Felician University</div>
                                        <div className='title-concentration'>MBA</div>
                                    </div>

                                    

                                    <div className="grid-item">
                                        <div className='title-uni'>Felician College</div>
                                        <div className='title-concentration'>Bachelor in Marketing</div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default About;
