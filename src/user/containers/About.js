import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../ui/button/Button';

function About() {
    return (
        <div id="sb-dynamic-content" className="sb-transition-fade">
            <section className="sb-banner sb-banner-sm sb-banner-color">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="sb-main-title-frame">
                                <div className="sb-main-title text-center">
                                    <span className="sb-suptitle sb-mb-30">About us</span>
                                    <h1 className="sb-mb-30">There is no <span>love</span> more sincere <br /> than the love of <span>food</span>.</h1>
                                    <p className="sb-text sb-text-lg sb-mb-30">Consectetur numquam poro nemo veniam<br />eligendi rem adipisci quo modi.</p>
                                    <ul className="sb-breadcrumbs">
                                        <li><Link to="/">Home</Link></li>
                                        <li><Link to="/about">About us</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="sb-p-90-0">
                <div className="sb-bg-2" style={{ marginTop: 90 }}>
                    <div />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 align-self-center">
                            <div className="sb-illustration-2 sb-mb-90">
                                <div className="sb-interior-frame">
                                    <img src="assets/img/gallery/2.jpg" alt="interior" className="sb-interior" style={{ objectPosition: 'center' }} />
                                </div>
                                <div className="sb-square" />
                                <div className="sb-cirkle-1" />
                                <div className="sb-cirkle-2" />
                                <div className="sb-cirkle-3" />
                                <div className="sb-cirkle-4" />
                                <div className="sb-experience">
                                    <div className="sb-exp-content">
                                        <p className="sb-h1 sb-mb-10">17</p>
                                        <p className="sb-h3">Years Experiense</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 align-self-center sb-mb-60">
                            <h2 className="sb-mb-60">We are doing more than <br />you expect</h2>
                            <p className="sb-text sb-mb-30">Faudantium magnam error temporibus ipsam aliquid neque quibusdam dolorum, quia ea numquam assumenda mollitia dolorem impedit. Voluptate at quis exercitationem officia temporibus adipisci quae totam enim
                                dolorum,
                                assumenda. Sapiente soluta nostrum reprehenderit a velit obcaecati facilis vitae magnam tenetur
                                neque vel itaque inventore eaque explicabo commodi maxime! Aliquam quasi, voluptates odio.</p>
                            <p className="sb-text sb-mb-60">Consectetur adipisicing elit. Cupiditate nesciunt amet facilis numquam, nam adipisci qui voluptate voluptas enim obcaecati veritatis animi nulla, mollitia commodi quaerat ex, autem ea
                                laborum.</p>
                            <img src="assets/img/ui/signature.png" alt="Signature" className="sb-signature sb-mb-30" />
                        </div>
                    </div>
                </div>
            </section>
            <section className="sb-p-0-30">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="sb-features-item sb-mb-60">
                                <div className="sb-number">01</div>
                                <div className="sb-feature-text">
                                    <h3 className="sb-mb-15">We are located in the city center</h3>
                                    <p className="sb-text">Porro nemo veniam necessitatibus praesentium eligendi rem temporibus adipisci quo modi numquam.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="sb-features-item sb-mb-60">
                                <div className="sb-number">02</div>
                                <div className="sb-feature-text">
                                    <h3 className="sb-mb-15">Fresh ingredients from organic farms</h3>
                                    <p className="sb-text">Porro nemo veniam necessitatibus praesentium eligendi rem temporibus adipisci quo modi numquam.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="sb-features-item sb-mb-60">
                                <div className="sb-number">03</div>
                                <div className="sb-feature-text">
                                    <h3 className="sb-mb-15">Own fast delivery. 30 min Maximum</h3>
                                    <p className="sb-text">Porro nemo veniam necessitatibus praesentium eligendi rem temporibus adipisci quo modi numquam.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="sb-features-item sb-mb-60">
                                <div className="sb-number">04</div>
                                <div className="sb-feature-text">
                                    <h3 className="sb-mb-15">Professional, experienced chefs</h3>
                                    <p className="sb-text">Porro nemo veniam necessitatibus praesentium eligendi rem temporibus adipisci quo modi numquam.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="sb-features-item sb-mb-60">
                                <div className="sb-number">05</div>
                                <div className="sb-feature-text">
                                    <h3 className="sb-mb-15">The highest standards of service</h3>
                                    <p className="sb-text">Porro nemo veniam necessitatibus praesentium eligendi rem temporibus adipisci quo modi numquam.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="sb-video">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="sb-mb-90">
                                <span className="sb-suptitle sb-mb-15">Promo video</span>
                                <h2 className="sb-mb-30">Restaurant is like a theater.<br /> Our task is to amaze you!</h2>
                                <p classNam e="sb-text sb-mb-30">Repellat, dolorem a. Qui ipsam quos, obcaecati mollitia consectetur ad vero minus neque sit architecto totam distineserunt pariatur adipisci rem aspernatur illum ex!</p>
                                <Button 
                                variant='iconBtn' 
                                data-fancybox 
                                data-no-swup 
                                href="https://www.youtube.com/watch?v=F3zw1Gvn4Mk"
                                imgPath="assets/img/ui/icons/play.svg" 
                                text='Promo video' />
                            </div>
                        </div>
                        <div className="col-lg-6 align-self-center">
                            <div className="sb-illustration-7 sb-mb-90">
                                <div className="sb-interior-frame">
                                    <img src="assets/img/illustrations/interior-2.jpg" alt="interior" className="sb-interior" />
                                    <a data-fancybox data-no-swup href="https://www.youtube.com/watch?v=F3zw1Gvn4Mk" className="sb-video-play"><i className="fas fa-play" /></a>
                                </div>
                                <div className="sb-cirkle-1" />
                                <div className="sb-cirkle-2" />
                                <div className="sb-cirkle-3" />
                                <div className="sb-cirkle-4" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="sb-team sb-p-0-60">
                <div className="sb-bg-2">
                    <div />
                </div>
                <div className="container">
                    <div className="sb-group-title sb-mb-30">
                        <div className="sb-left sb-mb-30">
                            <h2 className="sb-mb-30">They will <span>cook</span> for you</h2>
                            <p className="sb-text">Consectetur numquam poro nemo veniam<br />eligendi rem adipisci quo modi.</p>
                        </div>
                        <div className="sb-right sb-mb-30">
                            <Button variant='iconBtn' as={Link} to="/menu" imgPath="assets/img/ui/icons/menu.svg" text='Open menu' />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="sb-team-member sb-mb-30">
                                <div className="sb-photo-frame sb-mb-15">
                                    <img src="assets/img/team/1.png" alt="Team member" />
                                </div>
                                <div className="sb-member-description">
                                    <h4 className="sb-mb-10">Paul Trueman</h4>
                                    <p className="sb-text sb-text-sm sb-mb-10">Chef</p>
                                    <ul className="sb-social">
                                        <li><a href="/"><i className="fab fa-twitter" /></a></li>
                                        <li><a href="/"><i className="fab fa-instagram" /></a></li>
                                        <li><a href="/"><i className="fab fa-facebook-f" /></a></li>
                                        <li><a href="/"><i className="fab fa-youtube" /></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="sb-team-member sb-mb-30">
                                <div className="sb-photo-frame sb-mb-15">
                                    <img src="assets/img/team/2.png" alt="Team member" />
                                </div>
                                <div className="sb-member-description">
                                    <h3 className="sb-mb-10">Emma Newman</h3>
                                    <p className="sb-text sb-text-sm sb-mb-10">Assistant chef</p>
                                    <ul className="sb-social">
                                        <li><a href="/"><i className="fab fa-twitter" /></a></li>
                                        <li><a href="/"><i className="fab fa-instagram" /></a></li>
                                        <li><a href="/"><i className="fab fa-facebook-f" /></a></li>
                                        <li><a href="/"><i className="fab fa-youtube" /></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="sb-team-member sb-mb-30">
                                <div className="sb-photo-frame sb-mb-15">
                                    <img src="assets/img/team/3.png" alt="Team member" />
                                </div>
                                <div className="sb-member-description">
                                    <h3 className="sb-mb-10">Oscar Oldman</h3>
                                    <p className="sb-text sb-text-sm sb-mb-10">Chef</p>
                                    <ul className="sb-social">
                                        <li><a href="/"><i className="fab fa-twitter" /></a></li>
                                        <li><a href="/"><i className="fab fa-instagram" /></a></li>
                                        <li><a href="/"><i className="fab fa-facebook-f" /></a></li>
                                        <li><a href="/"><i className="fab fa-youtube" /></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="sb-reviews sb-p-0-90">
                <div className="container">
                    <div className="sb-group-title sb-mb-30">
                        <div className="sb-left sb-mb-30">
                            <h2>Reviews <span>about</span> us</h2>
                        </div>
                        <div className="sb-right sb-mb-30">
                            <div className="sb-slider-nav">
                                <div className="sb-prev-btn sb-reviews-prev swiper-button-disabled" tabIndex={0} role="button" aria-label="Previous slide" aria-disabled="true"><i className="fas fa-arrow-left" /></div>
                                <div className="sb-next-btn sb-reviews-next" tabIndex={0} role="button" aria-label="Next slide" aria-disabled="false"><i className="fas fa-arrow-right" /></div>
                            </div>
                            <Button variant='iconBtn' as={Link} to="/reviews" imgPath="assets/img/ui/icons/dialog.svg" text='All revievs' />
                        </div>
                    </div>
                    <div className="swiper-container sb-reviews-slider swiper-container-horizontal">
                        <div className="swiper-wrapper" style={{ transform: 'translate3d(0px, 0px, 0px)' }}>
                            <div className="swiper-slide swiper-slide-active" style={{ width: 570, marginRight: 30 }}>
                                <div className="sb-review-card">
                                    <div className="sb-review-header sb-mb-15">
                                        <h3 className="sb-mb-15">Very tasty</h3>
                                        <ul className="sb-stars">
                                            <li><i className="fas fa-star" /></li>
                                            <li><i className="fas fa-star" /></li>
                                            <li><i className="fas fa-star" /></li>
                                            <li><i className="fas fa-star" /></li>
                                            <li><i className="fas fa-star" /></li>
                                        </ul>
                                    </div>
                                    <p className="sb-text sb-mb-15">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis fugiat totam nobis quas unde excepturi inventore possimus laudantium provident, rem eligendi velit. Aut molestias, ipsa itaque laborum, natus
                                        tempora, ut soluta animi ducimus dignissimos deserunt doloribus in reprehenderit rem accusamus! Quibusdam labore, aliquam dolor harum!</p>
                                    <div className="sb-author-frame">
                                        <div className="sb-avatar-frame">
                                            <img src="assets/img/faces/1.jpg" alt="Guest" />
                                        </div>
                                        <h4>Emma Newman</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide swiper-slide-next" style={{ width: 570, marginRight: 30 }}>
                                <div className="sb-review-card">
                                    <div className="sb-review-header sb-mb-15">
                                        <h3 className="sb-mb-15">I have lunch here every day</h3>
                                        <ul className="sb-stars">
                                            <li><i className="fas fa-star" /></li>
                                            <li><i className="fas fa-star" /></li>
                                            <li><i className="fas fa-star" /></li>
                                            <li><i className="fas fa-star" /></li>
                                            <li><i className="fas fa-star" /></li>
                                        </ul>
                                    </div>
                                    <p className="sb-text sb-mb-15">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis fugiat totam nobis quas unde excepturi inventore possimus laudantium provident, rem eligendi velit. Aut molestias, ipsa itaque laborum, natus
                                        tempora, ut soluta animi ducimus dignissimos deserunt doloribus in reprehenderit rem accusamus! Quibusdam labore, aliquam dolor harum!</p>
                                    <div className="sb-author-frame">
                                        <div className="sb-avatar-frame">
                                            <img src="assets/img/faces/2.jpg" alt="Guest" />
                                        </div>
                                        <h4>Paul Trueman</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide" style={{ width: 570, marginRight: 30 }}>
                                <div className="sb-review-card">
                                    <div className="sb-review-header sb-mb-15">
                                        <h3 className="sb-mb-15">Great service</h3>
                                        <ul className="sb-stars">
                                            <li><i className="fas fa-star" /></li>
                                            <li><i className="fas fa-star" /></li>
                                            <li><i className="fas fa-star" /></li>
                                            <li><i className="fas fa-star" /></li>
                                            <li className="sb-empty"><i className="fas fa-star" /></li>
                                        </ul>
                                    </div>
                                    <p className="sb-text sb-mb-15">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis fugiat totam nobis quas unde excepturi inventore possimus laudantium provident, rem eligendi velit. Aut molestias, ipsa itaque laborum, natus
                                        tempora, ut soluta animi ducimus dignissimos deserunt doloribus in reprehenderit rem accusamus! Quibusdam labore, aliquam dolor harum!</p>
                                    <div className="sb-author-frame">
                                        <div className="sb-avatar-frame">
                                            <img src="assets/img/faces/3.jpg" alt="Guest" />
                                        </div>
                                        <h4>Viktoria Freeman</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide" style={{ width: 570, marginRight: 30 }}>
                                <div className="sb-review-card">
                                    <div className="sb-review-header sb-mb-15">
                                        <h3 className="sb-mb-15">Starbelly is amazing!</h3>
                                        <ul className="sb-stars">
                                            <li><i className="fas fa-star" /></li>
                                            <li><i className="fas fa-star" /></li>
                                            <li><i className="fas fa-star" /></li>
                                            <li><i className="fas fa-star" /></li>
                                            <li><i className="fas fa-star" /></li>
                                        </ul>
                                    </div>
                                    <p className="sb-text sb-mb-15">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis fugiat totam nobis quas unde excepturi inventore possimus laudantium provident, rem eligendi velit. Aut molestias, ipsa itaque laborum, natus
                                        tempora, ut soluta animi ducimus dignissimos deserunt doloribus in reprehenderit rem accusamus! Quibusdam labore, aliquam dolor harum!</p>
                                    <div className="sb-author-frame">
                                        <div className="sb-avatar-frame">
                                            <img src="assets/img/faces/4.jpg" alt="Guest" />
                                        </div>
                                        <h4>Audrey Oldman</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <span className="swiper-notification" aria-live="assertive" aria-atomic="true" /></div>
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
                                <a href="/" target="_blank" data-no-swup className="sb-download-btn"><img src="assets/img/buttons/1.svg" alt="img" /></a>
                                <a href="/" target="_blank" data-no-swup className="sb-download-btn"><img src="assets/img/buttons/2.svg" alt="img" /></a>
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

export default About;