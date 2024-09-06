import React from "react";
import NavbarLogo from '../../images/NavbarLogo.png';

const Footer = () => {
    return (
        <footer className="text-center text-lg-start bg-body-dark text-muted">
            <section>
                <div className="container text-center text-md-start mt-5">
                    <div className="row mt-3">
                        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                            <h6 className="text-uppercase fw-bold mb-4">
                                <img src={NavbarLogo} width="45" height="40" alt="" /> {'{ NASA APIs }'}
                            </h6>
                            <p style={{textAlign: "justify"}}>
                                Welcome to the NASA API portal. The objective of this site is to make NASA data, including imagery, eminently accessible to application developers. This catalog focuses on broadly useful and user-friendly APIs and does not hold every NASA API.
                            </p>
                        </div>
                        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                            <h6 className="text-uppercase fw-bold mb-4">
                                Useful links
                            </h6>
                            <p>
                                <a href="https://code.nasa.gov/" className="text-reset">code.nasa.gov</a>
                            </p>
                            <p>
                                <a href="https://data.nasa.gov/" className="text-reset">data.nasa.gov</a>
                            </p>
                            <p>
                                <a href="https://api.nasa.gov/" className="text-reset">api.nasa.gov</a>
                            </p>
                        </div>
                        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                            <h6 className="text-uppercase fw-bold mb-4">Social</h6>
                            <a href="https://twitter.com/opennasa?lang=en" className="me-4 text-reset">
                                <i className="bi bi-twitter"></i>
                            </a>
                            <a href="https://github.com/nasa" className="me-4 text-reset">
                                <i className="bi bi-github"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </footer>
        
    );
};

export default Footer;
