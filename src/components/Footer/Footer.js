import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div>
            <section id="footer">
                <div className="container">
                    <div className="row text-center text-xs-center text-sm-left text-md-left">
                        <div className="col-xs-12 col-sm-4 col-md-4">
                            <h5>Contact us</h5>
                            <ul className="list-unstyled quick-links">
                                <li><p ><i className="fa fa-angle-double-right"></i>Home</p></li>
                                <li><p ><i className="fa fa-angle-double-right"></i>About</p></li>
                                <li><p ><i className="fa fa-angle-double-right"></i>FAQ</p></li>
                                <li><p ><i className="fa fa-angle-double-right"></i>Get Started</p></li>
                                <li><p ><i className="fa fa-angle-double-right"></i>Videos</p></li>
                            </ul>
                        </div>
                        <div className="col-xs-12 col-sm-4 col-md-4">
                            <h5>Help line</h5>
                            <ul className="list-unstyled quick-links">
                                <li><p ><i className="fa fa-angle-double-right"></i>Home</p></li>
                                <li><p ><i className="fa fa-angle-double-right"></i>About</p></li>
                                <li><p><i className="fa fa-angle-double-right"></i>FAQ</p></li>
                                <li><p ><i className="fa fa-angle-double-right"></i>Get Started</p></li>
                                <li><p ><i className="fa fa-angle-double-right"></i>Videos</p></li>
                            </ul>
                        </div>
                        <div className="col-xs-12 col-sm-4 col-md-4">
                            <h5>About us</h5>
                            <ul className="list-unstyled quick-links">
                                <li><p ><i className="fa fa-angle-double-right"></i>Home</p></li>
                                <li><p ><i className="fa fa-angle-double-right"></i>About</p></li>
                                <li><p ><i className="fa fa-angle-double-right"></i>FAQ</p></li>
                                <li><p ><i className="fa fa-angle-double-right"></i>Get Started</p></li>
                                <li><p ><i className="fa fa-angle-double-right"></i>Videos</p></li>
                            </ul>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-5">
                            <ul className="list-unstyled list-inline social text-center">
                                <li className="list-inline-item"><p ><i className="fa fa-facebook"></i></p></li>
                                <li className="list-inline-item"><p ><i className="fa fa-twitter"></i></p></li>
                                <li className="list-inline-item"><p ><i className="fa fa-instagram"></i></p></li>
                                <li className="list-inline-item"><p><i className="fa fa-google-plus"></i></p></li>
                                <li className="list-inline-item"><p target="_blank"><i className="fa fa-envelope"></i></p></li>
                            </ul>
                        </div>
                        <hr />
                    </div>
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-2 text-center text-white">

                            <p className="h6 text-black">© Ali motor bike. </p>
                        </div>
                        <hr />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Footer;