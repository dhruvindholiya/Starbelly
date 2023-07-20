import React from 'react';
import { Link } from 'react-router-dom';

function Reviews(props) {
    return (
        <div id="sb-dynamic-content" className="sb-transition-fade">
            {/* banner */}
            <section className="sb-banner sb-banner-sm sb-banner-color">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            {/* main title */}
                            <div className="sb-main-title-frame">
                                <div className="sb-main-title text-center">
                                    <span className="sb-suptitle sb-mb-30">Reviews</span>
                                    <h1 className="sb-mb-30">Feedback from our guests</h1>
                                    <p className="sb-text sb-text-lg sb-mb-30">Consectetur numquam poro nemo veniam<br />eligendi rem adipisci quo modi.</p>
                                    <ul className="sb-breadcrumbs">
                                        <li><Link to="/">Home</Link></li>
                                        <li><Link to="/reviews">Reviews</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* reviews */}
            <section className="sb-reviews sb-p-90-90">
                <div className="sb-bg-2" style={{ marginTop: 190 }}>
                    <div />
                </div>
                <div className="container">
                    <div className="sb-masonry-grid">
                        <div className="sb-grid-sizer" />
                        <div className="sb-grid-item sb-item-50">
                            <div className="sb-review-card sb-mb-60">
                                <div className="sb-review-header sb-mb-15">
                                    <h4 className="sb-mb-10">Very tasty</h4>
                                    <ul className="sb-stars">
                                        <li><i className="fas fa-star" /></li>
                                        <li><i className="fas fa-star" /></li>
                                        <li><i className="fas fa-star" /></li>
                                        <li><i className="fas fa-star" /></li>
                                        <li><i className="fas fa-star" /></li>
                                    </ul>
                                </div>
                                <p className="sb-text sb-mb-15">Inventore possimus laudantium provident, rem eligendi velit. Aut molestias, ipsa itaque laborum, natus
                                    tempora, ut soluta animi ducimus dignissimos deserunt doloribus in reprehenderit rem accusamus! Quibusdam labore, aliquam dolor harum!</p>
                                <div className="sb-author-frame">
                                    <div className="sb-avatar-frame">
                                        <img src="assets/img/faces/1.jpg" alt="Guest" />
                                    </div>
                                    <h4>Emma Newman</h4>
                                </div>
                            </div>
                        </div>
                        <div className="sb-grid-item sb-item-50">
                            <div className="sb-review-card sb-mb-60">
                                <div className="sb-review-header sb-mb-15">
                                    <h4 className="sb-mb-10">I have lunch here every day</h4>
                                    <ul className="sb-stars">
                                        <li><i className="fas fa-star" /></li>
                                        <li><i className="fas fa-star" /></li>
                                        <li><i className="fas fa-star" /></li>
                                        <li><i className="fas fa-star" /></li>
                                        <li><i className="fas fa-star" /></li>
                                    </ul>
                                </div>
                                <p className="sb-text sb-mb-15">Tempora ut soluta animi ducimus dignissimos deserunt doloribus in reprehenderit Reprehenderit rem accusamus! Quibusdam labore, aliquam dolor harum!</p>
                                <div className="sb-author-frame">
                                    <div className="sb-avatar-frame">
                                        <img src="assets/img/faces/2.jpg" alt="Guest" />
                                    </div>
                                    <h4>Paul Trueman</h4>
                                </div>
                            </div>
                        </div>
                        <div className="sb-grid-item sb-item-50">
                            <div className="sb-review-card sb-mb-60">
                                <div className="sb-review-header sb-mb-15">
                                    <h4 className="sb-mb-10">Great service</h4>
                                    <ul className="sb-stars">
                                        <li><i className="fas fa-star" /></li>
                                        <li><i className="fas fa-star" /></li>
                                        <li><i className="fas fa-star" /></li>
                                        <li><i className="fas fa-star" /></li>
                                        <li className="sb-empty"><i className="fas fa-star" /></li>
                                    </ul>
                                </div>
                                <p className="sb-text sb-mb-15">Quis fugiat totam nobis quas unde excepturi inventore possimus laudantium provident, rem eligendi velit. Aut molestias, ipsa itaque laborum, natus
                                    tempora, ut soluta animi ducimus dignissimos deserunt doloribus in reprehenderit rem accusamus! Quibusdam labore, aliquam dolor harum.</p>
                                <div className="sb-author-frame">
                                    <div className="sb-avatar-frame">
                                        <img src="assets/img/faces/3.jpg" alt="Guest" />
                                    </div>
                                    <h4>Viktoria Freeman</h4>
                                </div>
                            </div>
                        </div>
                        <div className="sb-grid-item sb-item-50">
                            <div className="sb-review-card sb-mb-60">
                                <div className="sb-review-header sb-mb-15">
                                    <h4 className="sb-mb-10">Starbelly is amazing!</h4>
                                    <ul className="sb-stars">
                                        <li><i className="fas fa-star" /></li>
                                        <li><i className="fas fa-star" /></li>
                                        <li><i className="fas fa-star" /></li>
                                        <li><i className="fas fa-star" /></li>
                                        <li><i className="fas fa-star" /></li>
                                    </ul>
                                </div>
                                <p className="sb-text sb-mb-15">Adipisicing elit. Quis fugiat totam nobis quas unde excepturi inventore possimus laudantium provident, rem eligendi velit. Aut molestias, ipsa itaque laborum, natus
                                    tempora, ut soluta animi ducimus dignissimos deserunt doloribus in reprehenderit rem accusamus.</p>
                                <div className="sb-author-frame">
                                    <div className="sb-avatar-frame">
                                        <img src="assets/img/faces/4.jpg" alt="Guest" />
                                    </div>
                                    <h4>Audrey Oldman</h4>
                                </div>
                            </div>
                        </div>
                        <div className="sb-grid-item sb-item-50">
                            <div className="sb-review-card sb-mb-60">
                                <div className="sb-review-header sb-mb-15">
                                    <h4 className="sb-mb-10">Very tasty</h4>
                                    <ul className="sb-stars">
                                        <li><i className="fas fa-star" /></li>
                                        <li><i className="fas fa-star" /></li>
                                        <li><i className="fas fa-star" /></li>
                                        <li><i className="fas fa-star" /></li>
                                        <li><i className="fas fa-star" /></li>
                                    </ul>
                                </div>
                                <p className="sb-text sb-mb-15">Laudantium provident, rem eligendi velit. Aut molestias, ipsa itaque laborum, natus
                                    tempora, ut soluta animi ducimus dignissimos deserunt doloribus in reprehenderit rem accusamus! Quibusdam labore, aliquam dolor harum!</p>
                                <div className="sb-author-frame">
                                    <div className="sb-avatar-frame">
                                        <img src="assets/img/faces/1.jpg" alt="Guest" />
                                    </div>
                                    <h4>Emma Newman</h4>
                                </div>
                            </div>
                        </div>
                        <div className="sb-grid-item sb-item-50">
                            <div className="sb-review-card sb-mb-60">
                                <div className="sb-review-header sb-mb-15">
                                    <h4 className="sb-mb-10">I have lunch here every day</h4>
                                    <ul className="sb-stars">
                                        <li><i className="fas fa-star" /></li>
                                        <li><i className="fas fa-star" /></li>
                                        <li><i className="fas fa-star" /></li>
                                        <li><i className="fas fa-star" /></li>
                                        <li><i className="fas fa-star" /></li>
                                    </ul>
                                </div>
                                <p className="sb-text sb-mb-15">Ducimus dignissimos deserunt doloribus in reprehenderit rem accusamus! Quibusdam labore, aliquam dolor harum!</p>
                                <div className="sb-author-frame">
                                    <div className="sb-avatar-frame">
                                        <img src="assets/img/faces/2.jpg" alt="Guest" />
                                    </div>
                                    <h4>Paul Trueman</h4>
                                </div>
                            </div>
                        </div>
                        <div className="sb-grid-item sb-item-50">
                            <div className="sb-review-card sb-mb-60">
                                <div className="sb-review-header sb-mb-15">
                                    <h4 className="sb-mb-10">Great service</h4>
                                    <ul className="sb-stars">
                                        <li><i className="fas fa-star" /></li>
                                        <li><i className="fas fa-star" /></li>
                                        <li><i className="fas fa-star" /></li>
                                        <li><i className="fas fa-star" /></li>
                                        <li className="sb-empty"><i className="fas fa-star" /></li>
                                    </ul>
                                </div>
                                <p className="sb-text sb-mb-15">Inventore possimus laudantium provident, rem eligendi velit. Aut molestias, ipsa itaque laborum, natus
                                    tempora, ut soluta animi tempora, ut soluta animi ducimus dignissimos deserunt doloribus in reprehenderit rem accusamus ducimus reprehenderit rem accusamu.</p>
                                <div className="sb-author-frame">
                                    <div className="sb-avatar-frame">
                                        <img src="assets/img/faces/3.jpg" alt="Guest" />
                                    </div>
                                    <h4>Viktoria Freeman</h4>
                                </div>
                            </div>
                        </div>
                        <div className="sb-grid-item sb-item-50">
                            <div className="sb-review-card sb-mb-60">
                                <div className="sb-review-header sb-mb-15">
                                    <h4 className="sb-mb-10">Starbelly is amazing!</h4>
                                    <ul className="sb-stars">
                                        <li><i className="fas fa-star" /></li>
                                        <li><i className="fas fa-star" /></li>
                                        <li><i className="fas fa-star" /></li>
                                        <li><i className="fas fa-star" /></li>
                                        <li><i className="fas fa-star" /></li>
                                    </ul>
                                </div>
                                <p className="sb-text sb-mb-15">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis fugiat totam nobis quas unde excepturi inventore possimus laudantium provident, rem eligendi velit. Deserunt doloribus in reprehenderit rem
                                    accusamus! Quibusdam labore, aliquam dolor harum!</p>
                                <div className="sb-author-frame">
                                    <div className="sb-avatar-frame">
                                        <img src="assets/img/faces/4.jpg" alt="Guest" />
                                    </div>
                                    <h4>Audrey Oldman</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <ul className="sb-pagination sb-mt-0">
                            <li className="sb-active"><a href="#.">1</a></li>
                            <li><a href="#.">2</a></li>
                            <li><a href="#.">3</a></li>
                            <li><a href="#.">4</a></li>
                            <li><a href="#.">...</a></li>
                        </ul>
                    </div>
                </div>
            </section>
            {/* call to action */}
            <section className="sb-call-to-action">
                <div className="sb-bg-3" />
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 align-self-center">
                            <div className="sb-cta-text">
                                <h2 className="sb-h1 sb-mb-30">Download our mobile app.</h2>
                                <p className="sb-text sb-mb-30">Consectetur numquam poro nemo veniam<br />eligendi rem adipisci quo modi.</p>
                                <a href="#." target="_blank" data-no-swup className="sb-download-btn"><img src="assets/img/buttons/1.svg" alt="img" /></a>
                                <a href="#." target="_blank" data-no-swup className="sb-download-btn"><img src="assets/img/buttons/2.svg" alt="img" /></a>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="sb-illustration-3">
                                <img src="assets/img/illustrations/phones.png" alt="phones" className="sb-phones" />
                                <div className="sb-cirkle-1" />
                                <div className="sb-cirkle-2" />
                                <div className="sb-cirkle-3" />
                                <div className="sb-cirkle-4" />
                                <img src="assets/img/illustrations/1.svg" alt="phones" className="sb-pik-1" />
                                <img src="assets/img/illustrations/2.svg" alt="phones" className="sb-pik-2" />
                                <img src="assets/img/illustrations/3.svg" alt="phones" className="sb-pik-3" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Reviews;