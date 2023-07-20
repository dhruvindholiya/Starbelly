import React from 'react';
import { Link } from 'react-router-dom';
import CountList from '../ui/countlist/CountList';
import CategorieCard from '../ui/categoriecard/CategorieCard';
import ChefCard from '../ui/chefcard/ChefCard';
import Button from '../ui/button/Button';

function Home() {
    return (
        <div id="sb-dynamic-content" className="sb-transition-fade">
            {/* banner */}
            <section className="sb-banner">
                <div className="sb-bg-1">
                    <div />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="sb-main-title-frame">
                                <div className="sb-main-title">
                                    <span className="sb-suptitle sb-mb-30">Hi, new friend!</span>
                                    <h1 className="sb-mb-30">We do not <span>cook</span>, <br />we <span>create</span> your <br />emotions!</h1>
                                    <p className="sb-text sb-text-lg sb-mb-30">Consectetur numquam poro nemo veniam<br />eligendi rem adipisci
                                        quo modi.</p>
                                    <Button variant='iconBtn' className="me-4" as={Link} to="/menu" imgPath="assets/img/ui/icons/menu.svg" text='Our menu' />
                                    <Button variant='iconWithGrayBtn' as={Link} to="/about" imgPath="assets/img/ui/icons/arrow.svg" text='About us' />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="sb-illustration-1">
                                <img src="assets/img/illustrations/girl.png" alt="girl" className="sb-girl" />
                                <div className="sb-cirkle-1" />
                                <div className="sb-cirkle-2" />
                                <div className="sb-cirkle-3" />
                                <div className="sb-cirkle-4" />
                                <div className="sb-cirkle-5" />
                                <img src="assets/img/illustrations/3.svg" alt="phones" className="sb-pik-1" />
                                <img src="assets/img/illustrations/1.svg" alt="phones" className="sb-pik-2" />
                                <img src="assets/img/illustrations/2.svg" alt="phones" className="sb-pik-3" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="sb-p-60-0">
                <div className="container">
                    <div className="row flex-md-row-reverse">
                        <div className="col-lg-6 align-self-center sb-mb-30">
                            <h2 className="sb-mb-60">We are doing more than <br />you expect</h2>
                            <div className="sb-features">
                                <CountList
                                    count='01'
                                    countTitle='We are located in the city center'
                                    countSubTitle='Porro nemo veniam necessitatibus praesentium eligendi rem temporibus adipisci quo
                                            modi numquam.'
                                />
                                <CountList
                                    count='02'
                                    countTitle='Fresh, organic ingredients'
                                    countSubTitle='Consectetur numquam porro nemo veniam necessitatibus praesentium eligendi rem
                                    temporibus adipisci quo modi.'
                                />
                                <CountList
                                    count='03'
                                    countTitle='Own fast delivery'
                                    countSubTitle='Necessitatibus praesentium eligendi rem temporibus adipisci quo modi. Lorem ipsum
                                    dolor sit.'
                                />
                            </div>
                        </div>
                        <div className="col-lg-6 align-self-center">
                            <div className="sb-illustration-2 sb-mb-90">
                                <div className="sb-interior-frame">
                                    <img src="assets/img/illustrations/interior.jpg" alt="interior" className="sb-interior" />
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
                    </div>
                </div>
            </section>
            <section className="sb-p-0-60">
                <div className="container">
                    <div className="sb-group-title sb-mb-30">
                        <div className="sb-left sb-mb-30">
                            <h2 className="sb-mb-30">What do you <span>like today?</span></h2>
                            <p className="sb-text">Consectetur numquam poro nemo veniam<br />eligendi rem adipisci quo modi.</p>
                        </div>
                        <div className="sb-right sb-mb-30">
                            <Button variant='iconBtn' as={Link} to="/shop" imgPath="assets/img/ui/icons/arrow.svg" text='Go shopping now' />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6">
                            <CategorieCard
                                to="/shop"
                                as={Link}
                                imgPath="assets/img/categories/1.png"
                                title="Starters"
                                subTitle="Lorem ipsum dolor sit amet, consectetur adipisicing."
                            />
                        </div>
                        <div className="col-lg-6">
                            <CategorieCard
                                to="/shop"
                                as={Link}
                                imgPath="assets/img/categories/2.png"
                                title="Main dishes"
                                subTitle="Lorem ipsum dolor sit amet, consectetur adipisicing."
                            />
                        </div>
                        <div className="col-lg-6">
                            <CategorieCard
                                to="/shop"
                                as={Link}
                                imgPath="assets/img/categories/3.png"
                                title="Drinks"
                                subTitle="Lorem ipsum dolor sit amet, consectetur adipisicing."
                            />
                        </div>
                        <div className="col-lg-6">
                            <CategorieCard
                                to="/shop"
                                as={Link}
                                imgPath="assets/img/categories/4.png"
                                title="Desserts"
                                subTitle="Lorem ipsum dolor sit amet, consectetur adipisicing."
                            />
                        </div>
                    </div>
                </div>
            </section>
            {/* short menu */}
            <section className="sb-short-menu sb-p-0-90">
                <div className="sb-bg-2">
                    <div />
                </div>
                <div className="container">
                    <div className="sb-group-title sb-mb-30">
                        <div className="sb-left sb-mb-30">
                            <h2 className="sb-mb-30">Most <span>popular</span> dishes</h2>
                            <p className="sb-text">Consectetur numquam poro nemo veniam<br />eligendi rem adipisci quo modi.</p>
                        </div>
                        <div className="sb-right sb-mb-30">
                            <div className="sb-slider-nav">
                                <div className="sb-prev-btn sb-short-menu-prev"><i className="fas fa-arrow-left" /></div>
                                <div className="sb-next-btn sb-short-menu-next"><i className="fas fa-arrow-right" /></div>
                            </div>
                            <Button variant='iconBtn' as={Link} to="/menu" imgPath="assets/img/ui/icons/menu.svg" text='Full menu' />
                        </div>
                    </div>
                    <div className="swiper-container sb-short-menu-slider-4i">
                        <div className="swiper-wrapper">
                            <div className="swiper-slide">
                                <a data-fancybox="menu" data-no-swup href="assets/img/menu/3.jpg" className="sb-menu-item">
                                    <div className="sb-cover-frame">
                                        <img src="assets/img/menu/3.jpg" alt="product" />
                                    </div>
                                    <div className="sb-card-tp">
                                        <h4 className="sb-card-title">Carpaccio de daurade</h4>
                                        <div className="sb-price"><sub>$</sub> 14</div>
                                    </div>
                                    <div className="sb-description">
                                        <p className="sb-text sb-mb-15"><span>tomatoes</span>, <span>nori</span>, <span>feta cheese</span>,
                                            <span>mushrooms</span>, <span>rice noodles</span>, <span>corn</span>, <span>shrimp</span>.</p>
                                        <ul className="sb-stars">
                                            <li><i className="fas fa-star" /></li>
                                            <li><i className="fas fa-star" /></li>
                                            <li><i className="fas fa-star" /></li>
                                            <li><i className="fas fa-star" /></li>
                                            <li><i className="fas fa-star" /></li>
                                        </ul>
                                    </div>
                                </a>
                            </div>
                            <div className="swiper-slide">
                                <a data-fancybox="menu" data-no-swup href="assets/img/menu/1.jpg" className="sb-menu-item">
                                    <div className="sb-cover-frame">
                                        <img src="assets/img/menu/1.jpg" alt="product" />
                                    </div>
                                    <div className="sb-card-tp">
                                        <h4 className="sb-card-title">Chevrefrit au miel</h4>
                                        <div className="sb-price"><sub>$</sub> 14</div>
                                    </div>
                                    <div className="sb-description">
                                        <p className="sb-text sb-mb-15"><span>tomatoes</span>, <span>nori</span>, <span>feta cheese</span>,
                                            <span>mushrooms</span>, <span>rice noodles</span>, <span>corn</span>, <span>shrimp</span>.</p>
                                        <ul className="sb-stars">
                                            <li><i className="fas fa-star" /></li>
                                            <li><i className="fas fa-star" /></li>
                                            <li><i className="fas fa-star" /></li>
                                            <li><i className="fas fa-star" /></li>
                                            <li><i className="fas fa-star" /></li>
                                        </ul>
                                    </div>
                                </a>
                            </div>
                            <div className="swiper-slide">
                                <a data-fancybox="menu" data-no-swup href="assets/img/menu/2.jpg" className="sb-menu-item">
                                    <div className="sb-cover-frame">
                                        <img src="assets/img/menu/2.jpg" alt="product" />
                                        <div className="sb-badge sb-vegan"><i className="fas fa-leaf" /> Vegan</div>
                                    </div>
                                    <div className="sb-card-tp">
                                        <h4 className="sb-card-title">Saumon Gravlax</h4>
                                        <div className="sb-price"><sub>$</sub> 9</div>
                                    </div>
                                    <div className="sb-description">
                                        <p className="sb-text sb-mb-15"><span>tomatoes</span>, <span>nori</span>, <span>feta cheese</span>,
                                            <span>mushrooms</span>, <span>rice noodles</span>, <span>corn</span>, <span>shrimp</span>.</p>
                                        <ul className="sb-stars">
                                            <li><i className="fas fa-star" /></li>
                                            <li><i className="fas fa-star" /></li>
                                            <li><i className="fas fa-star" /></li>
                                            <li><i className="fas fa-star" /></li>
                                            <li><i className="fas fa-star" /></li>
                                        </ul>
                                    </div>
                                </a>
                            </div>
                            <div className="swiper-slide">
                                <a data-fancybox="menu" data-no-swup href="assets/img/menu/9.jpg" className="sb-menu-item">
                                    <div className="sb-cover-frame">
                                        <img src="assets/img/menu/9.jpg" alt="product" />
                                        <div className="sb-badge sb-hot"><i className="fas fa-pepper-hot" /> Hot</div>
                                    </div>
                                    <div className="sb-card-tp">
                                        <h4 className="sb-card-title">Croustillant de poisson</h4>
                                        <div className="sb-price"><sub>$</sub> 4</div>
                                    </div>
                                    <div className="sb-description">
                                        <p className="sb-text sb-mb-15"><span>tomatoes</span>, <span>nori</span>, <span>feta cheese</span>,
                                            <span>mushrooms</span>, <span>rice noodles</span>, <span>corn</span>, <span>shrimp</span>.</p>
                                        <ul className="sb-stars">
                                            <li><i className="fas fa-star" /></li>
                                            <li><i className="fas fa-star" /></li>
                                            <li><i className="fas fa-star" /></li>
                                            <li><i className="fas fa-star" /></li>
                                            <li><i className="fas fa-star" /></li>
                                        </ul>
                                    </div>
                                </a>
                            </div>
                            <div className="swiper-slide">
                                <a data-fancybox="menu" data-no-swup href="assets/img/menu/5.jpg" className="sb-menu-item">
                                    <div className="sb-cover-frame">
                                        <img src="assets/img/menu/5.jpg" alt="product" />
                                        <div className="sb-badge sb-vegan"><i className="fas fa-leaf" /> Vegan</div>
                                    </div>
                                    <div className="sb-card-tp">
                                        <h4 className="sb-card-title">Carpaccio de daurade</h4>
                                        <div className="sb-price"><sub>$</sub> 6</div>
                                    </div>
                                    <div className="sb-description">
                                        <p className="sb-text sb-mb-15"><span>tomatoes</span>, <span>nori</span>, <span>feta cheese</span>,
                                            <span>mushrooms</span>, <span>rice noodles</span>, <span>corn</span>, <span>shrimp</span>.</p>
                                        <ul className="sb-stars">
                                            <li><i className="fas fa-star" /></li>
                                            <li><i className="fas fa-star" /></li>
                                            <li><i className="fas fa-star" /></li>
                                            <li><i className="fas fa-star" /></li>
                                            <li><i className="fas fa-star" /></li>
                                        </ul>
                                    </div>
                                </a>
                            </div>
                            <div className="swiper-slide">
                                <a data-fancybox="menu" data-no-swup href="assets/img/menu/4.jpg" className="sb-menu-item">
                                    <div className="sb-cover-frame">
                                        <img src="assets/img/menu/4.jpg" alt="product" />
                                    </div>
                                    <div className="sb-card-tp">
                                        <h4 className="sb-card-title">Stracciatella</h4>
                                        <div className="sb-price"><sub>$</sub> 11</div>
                                    </div>
                                    <div className="sb-description">
                                        <p className="sb-text sb-mb-15"><span>tomatoes</span>, <span>nori</span>, <span>feta cheese</span>,
                                            <span>mushrooms</span>, <span>rice noodles</span>, <span>corn</span>, <span>shrimp</span>.</p>
                                        <ul className="sb-stars">
                                            <li><i className="fas fa-star" /></li>
                                            <li><i className="fas fa-star" /></li>
                                            <li><i className="fas fa-star" /></li>
                                            <li><i className="fas fa-star" /></li>
                                            <li><i className="fas fa-star" /></li>
                                        </ul>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="sb-p-0-60">
                <div className="container">
                    <div className="sb-group-title sb-mb-30">
                        <div className="sb-left sb-mb-30">
                            <h2 className="sb-mb-30">They will <span>cook</span> for you</h2>
                            <p className="sb-text">Consectetur numquam poro nemo veniam<br />eligendi rem adipisci quo modi.</p>
                        </div>
                        <div className="sb-right sb-mb-30">
                        <Button variant='iconBtn' as={Link} to="/about" imgPath="assets/img/ui/icons/arrow.svg" text='More about us' />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-3">
                            <ChefCard
                                imgPath='assets/img/team/1.png'
                                title='Paul Trueman'
                                subTitle='Chef'
                            />
                        </div>
                        <div className="col-lg-3">
                            <ChefCard
                                imgPath='assets/img/team/2.png'
                                title='Emma Newman'
                                subTitle='Assistant Chef'
                            />
                        </div>
                        <div className="col-lg-3">
                            <ChefCard
                                imgPath='assets/img/team/3.png'
                                title='Oscar Oldman'
                                subTitle='Chef'
                            />
                        </div>
                        <div className="col-lg-3">
                            <ChefCard
                                imgPath='assets/img/team/4.png'
                                title='Ed Freeman'
                                subTitle='Assistant Chef'
                            />
                        </div>
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

export default Home;