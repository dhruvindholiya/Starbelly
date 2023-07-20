import React from 'react';
import Button from '../ui/button/Button';

function Reservation(props) {
    return (
        <div id="sb-dynamic-content" className="sb-transition-fade">
            <section className="sb-banner sb-banner-color">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-7">
                            <div className="sb-main-title-frame">
                                <div className="sb-main-title">
                                    <span className="sb-suptitle sb-mb-30">Reservation</span>
                                    <h1 className="sb-mb-30">Mmm...! <br />Your evening <br />will be great!</h1>
                                    <p className="sb-text sb-text-lg sb-mb-30">Consectetur numquam poro nemo veniam<br />eligendi rem adipisci quo modi.</p>
                                    <ul className="sb-breadcrumbs">
                                        <li><a href="home-1.html">Home</a></li>
                                        <li><a href="menu-1.html">Contact</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="sb-contact-form-frame">
                                <div className="sb-illustration-9">
                                    <img src="assets/img/illustrations/reservation.png" alt="envelope" className="sb-envelope-1" />
                                    <div className="sb-cirkle-1" />
                                    <div className="sb-cirkle-2" />
                                    <div className="sb-cirkle-3" />
                                </div>
                                <div className="sb-form-content">
                                    <div className="sb-main-content">
                                        <h3 className="sb-mb-30">Reservation details</h3>
                                        <form id="form">
                                            <div className="row">
                                                <div className="col-lg-12">
                                                    <div className="sb-group-input">
                                                        <input type="text" name="name" required />
                                                        <span className="sb-bar" />
                                                        <label>Name</label>
                                                    </div>
                                                </div>
                                                <div className="col-lg-12">
                                                    <div className="sb-group-input">
                                                        <input type="tel" name="email" required />
                                                        <span className="sb-bar" />
                                                        <label>Phone</label>
                                                    </div>
                                                </div>
                                                <div className="col-lg-12">
                                                    <div className="sb-group-input">
                                                        <input type="text" name="date" data-language="en" className="datepicker-here sb-datepicker" data-timepicker="true" data-position="bottom left" required />
                                                        <span className="sb-bar" />
                                                        <label>Time and Date</label>
                                                    </div>
                                                </div>
                                                <div className="col-lg-12">
                                                    <div className="sb-group-input">
                                                        <input type="number" name="preson" required />
                                                        <span className="sb-bar" />
                                                        <label>Person</label>
                                                    </div>
                                                </div>
                                            </div>
                                            <Button variant='iconBtn' imgPath="assets/img/ui/icons/arrow.svg" text='Reserve' />
                                        </form>
                                    </div>
                                    <div className="sb-success-result">
                                        <img src="assets/img/ui/success.jpg" alt="success" className="sb-mb-15" />
                                        <div className="sb-success-title sb-mb-15">Success!</div>
                                        <p className="sb-text sb-mb-15">Your message has been sent <br />successfully</p>
                                        <a href="home-1.html" className="sb-btn sb-btn-2">
                                            <span className="sb-icon">
                                                <img src="assets/img/ui/icons/arrow-2.svg" alt="icon" />
                                            </span>
                                            <span>Back to home</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="sb-p-90-30">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="sb-features-item sb-mb-60">
                                <div className="sb-number">01</div>
                                <div className="sb-feature-text">
                                    <h3 className="sb-mb-15">Welcome</h3>
                                    <p className="sb-text">Montréal, 1510 Rue Sauvé</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="sb-features-item sb-mb-60">
                                <div className="sb-number">02</div>
                                <div className="sb-feature-text">
                                    <h3 className="sb-mb-15">Call</h3>
                                    <p className="sb-text">+02 (044) 756-X6-52</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="sb-features-item sb-mb-60">
                                <div className="sb-number">03</div>
                                <div className="sb-feature-text">
                                    <h3 className="sb-mb-15">Write</h3>
                                    <p className="sb-text">starbelly@mail.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="sb-map-frame">
                <div id="map" className="sb-map" />
                <div className="sb-lock"><i className="fas fa-lock" /></div>
            </div>
        </div>

    );
}

export default Reservation;