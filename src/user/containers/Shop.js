import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../ui/button/Button';

function Shop() {
    return (
        <div id="sb-dynamic-content" className="sb-transition-fade">
            <section className="sb-banner sb-banner-sm sb-banner-color">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="sb-main-title-frame">
                                <div className="sb-main-title text-center">
                                    <span className="sb-suptitle sb-mb-30">Shop</span>
                                    <h1 className="sb-mb-30">Taste the dishes of the restaurant without leaving home.</h1>
                                    <p className="sb-text sb-text-lg sb-mb-30">Consectetur numquam poro nemo veniam<br />eligendi rem adipisci quo modi.</p>
                                    <ul className="sb-breadcrumbs">
                                        <li><Link to="/">Home</Link></li>
                                        <li><Link to="/shop">Shop</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="sb-p-90-60">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
                            <div className="sb-categorie-card sb-mb-30">
                                <div className="sb-card-body">
                                    <div className="sb-category-icon">
                                        <img src="assets/img/categories/1.png" alt="icon" />
                                    </div>
                                    <div className="sb-card-descr">
                                        <h3 className="sb-mb-10">Starters</h3>
                                        <p className="sb-text sb-mb-15">Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
                                        <Link to="/shop" className="sb-btn sb-btn-2 sb-btn-icon sb-m-0">
                                            <span className="sb-icon">
                                                <img src="assets/img/ui/icons/arrow.svg" alt="icon" />
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="sb-categorie-card sb-mb-30">
                                <div className="sb-card-body">
                                    <div className="sb-category-icon">
                                        <img src="assets/img/categories/2.png" alt="icon" />
                                    </div>
                                    <div className="sb-card-descr">
                                        <h3 className="sb-mb-10">Main dishes</h3>
                                        <p className="sb-text sb-mb-15">Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
                                        <Link to="/shop" className="sb-btn sb-btn-2 sb-btn-icon sb-m-0">
                                            <span className="sb-icon">
                                                <img src="assets/img/ui/icons/arrow.svg" alt="icon" />
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="sb-categorie-card sb-mb-30">
                                <div className="sb-card-body">
                                    <div className="sb-category-icon">
                                        <img src="assets/img/categories/3.png" alt="icon" />
                                    </div>
                                    <div className="sb-card-descr">
                                        <h3 className="sb-mb-10">Drinks</h3>
                                        <p className="sb-text sb-mb-15">Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
                                        <Link to="/shop" className="sb-btn sb-btn-2 sb-btn-icon sb-m-0">
                                            <span className="sb-icon">
                                                <img src="assets/img/ui/icons/arrow.svg" alt="icon" />
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="sb-categorie-card sb-mb-30">
                                <div className="sb-card-body">
                                    <div className="sb-category-icon">
                                        <img src="assets/img/categories/4.png" alt="icon" />
                                    </div>
                                    <div className="sb-card-descr">
                                        <h3 className="sb-mb-10">Desserts</h3>
                                        <p className="sb-text sb-mb-15">Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
                                        <Link to="/shop" className="sb-btn sb-btn-2 sb-btn-icon sb-m-0">
                                            <span className="sb-icon">
                                                <img src="assets/img/ui/icons/arrow.svg" alt="icon" />
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
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
                            <Button variant='iconBtn' as={Link} to="/shop" imgPath="assets/img/ui/icons/arrow.svg" text='View all' />
                        </div>
                    </div>
                    <div className="swiper-container sb-short-menu-slider-3i">
                        <div className="swiper-wrapper">
                            <div className="swiper-slide">
                                <div className="sb-menu-item">
                                    <Link to="/product" className="sb-cover-frame">
                                        <img src="assets/img/menu/1.jpg" alt="product" />
                                    </Link>
                                    <div className="sb-card-tp">
                                        <h4 className="sb-card-title"><Link to="/product">Chevrefrit au miel</Link></h4>
                                        <div className="sb-price"><sub>$</sub> 14</div>
                                    </div>
                                    <div className="sb-description">
                                        <p className="sb-text sb-mb-15"><span>tomatoes</span>, <span>nori</span>, <span>feta cheese</span>, <span>mushrooms</span>, <span>rice noodles</span>, <span>corn</span>, <span>shrimp</span>.</p>
                                    </div>
                                    <div className="sb-card-buttons-frame">
                                        <Link to="/product" className="sb-btn sb-btn-gray">
                                            <span className="sb-icon">
                                                <img src="assets/img/ui/icons/arrow.svg" alt="icon" />
                                            </span>
                                            <span>Details</span>
                                        </Link>
                                        <Link to="/error" className="sb-btn sb-atc">
                                            <span className="sb-icon">
                                                <img src="assets/img/ui/icons/cart.svg" alt="icon" />
                                            </span>
                                            <span className="sb-add-to-cart-text">Add to cart</span>
                                            <span className="sb-added-text">Added</span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="sb-menu-item">
                                    <Link to="/product" className="sb-cover-frame">
                                        <img src="assets/img/menu/2.jpg" alt="product" />
                                        <div className="sb-badge sb-vegan"><i className="fas fa-leaf" /> Vegan</div>
                                    </Link>
                                    <div className="sb-card-tp">
                                        <h4 className="sb-card-title"><Link to="/product">Saumon Gravlax</Link></h4>
                                        <div className="sb-price"><sub>$</sub> 9</div>
                                    </div>
                                    <div className="sb-description">
                                        <p className="sb-text sb-mb-15"><span>tomatoes</span>, <span>nori</span>, <span>feta cheese</span>, <span>mushrooms</span>, <span>rice noodles</span>, <span>corn</span>, <span>shrimp</span>.</p>
                                    </div>
                                    <div className="sb-card-buttons-frame">
                                        <Link to="/product" className="sb-btn sb-btn-gray">
                                            <span className="sb-icon">
                                                <img src="assets/img/ui/icons/arrow.svg" alt="icon" />
                                            </span>
                                            <span>Details</span>
                                        </Link>
                                        <Link to="/error" className="sb-btn sb-atc">
                                            <span className="sb-icon">
                                                <img src="assets/img/ui/icons/cart.svg" alt="icon" />
                                            </span>
                                            <span className="sb-add-to-cart-text">Add to cart</span>
                                            <span className="sb-added-text">Added</span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="sb-menu-item">
                                    <Link to="/product" className="sb-cover-frame">
                                        <img src="assets/img/menu/3.jpg" alt="product" />
                                    </Link>
                                    <div className="sb-card-tp">
                                        <h4 className="sb-card-title"><Link to="/product">Stracciatella</Link></h4>
                                        <div className="sb-price"><sub>$</sub> 9</div>
                                    </div>
                                    <div className="sb-description">
                                        <p className="sb-text sb-mb-15"><span>tomatoes</span>, <span>nori</span>, <span>feta cheese</span>, <span>mushrooms</span>, <span>rice noodles</span>, <span>corn</span>, <span>shrimp</span>.</p>
                                    </div>
                                    <div className="sb-card-buttons-frame">
                                        <Link to="/product" className="sb-btn sb-btn-gray">
                                            <span className="sb-icon">
                                                <img src="assets/img/ui/icons/arrow.svg" alt="icon" />
                                            </span>
                                            <span>Details</span>
                                        </Link>
                                        <Link to="/error" className="sb-btn sb-atc">
                                            <span className="sb-icon">
                                                <img src="assets/img/ui/icons/cart.svg" alt="icon" />
                                            </span>
                                            <span className="sb-add-to-cart-text">Add to cart</span>
                                            <span className="sb-added-text">Added</span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="sb-menu-item">
                                    <Link to="/product" className="sb-cover-frame">
                                        <img src="assets/img/menu/4.jpg" alt="product" />
                                    </Link>
                                    <div className="sb-card-tp">
                                        <h4 className="sb-card-title"><Link to="/product">Croustillant de poisson</Link></h4>
                                        <div className="sb-price"><sub>$</sub> 4</div>
                                    </div>
                                    <div className="sb-description">
                                        <p className="sb-text sb-mb-15"><span>tomatoes</span>, <span>nori</span>, <span>feta cheese</span>, <span>mushrooms</span>, <span>rice noodles</span>, <span>corn</span>, <span>shrimp</span>.</p>
                                    </div>
                                    <div className="sb-card-buttons-frame">
                                        <Link to="/product" className="sb-btn sb-btn-gray">
                                            <span className="sb-icon">
                                                <img src="assets/img/ui/icons/arrow.svg" alt="icon" />
                                            </span>
                                            <span>Details</span>
                                        </Link>
                                        <Link to="/error" className="sb-btn sb-atc">
                                            <span className="sb-icon">
                                                <img src="assets/img/ui/icons/cart.svg" alt="icon" />
                                            </span>
                                            <span className="sb-add-to-cart-text">Add to cart</span>
                                            <span className="sb-added-text">Added</span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="sb-menu-item">
                                    <Link to="/product" className="sb-cover-frame">
                                        <img src="assets/img/menu/5.jpg" alt="product" />
                                    </Link>
                                    <div className="sb-card-tp">
                                        <h4 className="sb-card-title"><Link to="/product">Carpaccio de daurade</Link></h4>
                                        <div className="sb-price"><sub>$</sub> 6</div>
                                    </div>
                                    <div className="sb-description">
                                        <p className="sb-text sb-mb-15"><span>tomatoes</span>, <span>nori</span>, <span>feta cheese</span>, <span>mushrooms</span>, <span>rice noodles</span>, <span>corn</span>, <span>shrimp</span>.</p>
                                    </div>
                                    <div className="sb-card-buttons-frame">
                                        <Link to="/product" className="sb-btn sb-btn-gray">
                                            <span className="sb-icon">
                                                <img src="assets/img/ui/icons/arrow.svg" alt="icon" />
                                            </span>
                                            <span>Details</span>
                                        </Link>
                                        <Link to="/error" className="sb-btn sb-atc">
                                            <span className="sb-icon">
                                                <img src="assets/img/ui/icons/cart.svg" alt="icon" />
                                            </span>
                                            <span className="sb-add-to-cart-text">Add to cart</span>
                                            <span className="sb-added-text">Added</span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
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
                                <h1 className="sb-mb-15"><sup>-</sup><span className="sb-title-lg">50</span><sup>%</sup> Discount <br />for all* burgers!</h1>
                                <p className="sb-text sb-mb-30">*Consectetur numquam poro nemo veniam<br />eligendi rem adipisci quo modi.</p>
                                <Button variant='iconBtn' as={Link} to="/product" className="me-4" imgPath="assets/img/ui/icons/cart.svg" text='Get it now!' />
                                <Button variant='iconWithGrayBtn' as={Link} to="/menu" imgPath="assets/img/ui/icons/menu.svg" text='Menu' />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="sb-illustration-6">
                                <img src="assets/img/illustrations/burger-2.png" alt="burger" className="sb-burger" />
                                <div className="sb-cirkle-1" />
                                <div className="sb-cirkle-2" />
                                <div className="sb-cirkle-3" />
                                <div className="sb-cirkle-4" />
                                <div className="sb-cirkle-5" />
                                <img src="assets/img/illustrations/2.svg" alt="phones" className="sb-pik-2" />
                                <img src="assets/img/illustrations/3.svg" alt="phones" className="sb-pik-3" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="sb-short-menu sb-p-90-90">
                <div className="sb-bg-1" style={{ marginTop: '-120px' }}>
                    <div />
                </div>
                <div className="container">
                    <div className="sb-group-title sb-mb-30">
                        <div className="sb-left sb-mb-30">
                            <h2 className="sb-mb-30">Our <span>Bestsellers</span></h2>
                            <p className="sb-text">Consectetur numquam poro nemo veniam<br />eligendi rem adipisci quo modi.</p>
                        </div>
                        <div className="sb-right sb-mb-30">
                            <div className="sb-slider-nav">
                                <div className="sb-prev-btn sb-short-menu-prev-2"><i className="fas fa-arrow-left" /></div>
                                <div className="sb-next-btn sb-short-menu-next-2"><i className="fas fa-arrow-right" /></div>
                            </div>
                            <Button variant='iconBtn' as={Link} to="/shop" className="me-4" imgPath="assets/img/ui/icons/arrow.svg" text='View all' />
                        </div>
                    </div>
                    <div className="swiper-container sb-short-menu-slider-2-3i">
                        <div className="swiper-wrapper">
                            <div className="swiper-slide">
                                <div className="sb-menu-item">
                                    <Link to="/product" className="sb-cover-frame">
                                        <img src="assets/img/menu/6.jpg" alt="product" />
                                    </Link>
                                    <div className="sb-card-tp">
                                        <h4 className="sb-card-title"><Link to="/product">Chevrefrit au miel</Link></h4>
                                        <div className="sb-price"><sub>$</sub> 14</div>
                                    </div>
                                    <div className="sb-description">
                                        <p className="sb-text sb-mb-15"><span>tomatoes</span>, <span>nori</span>, <span>feta cheese</span>, <span>mushrooms</span>, <span>rice noodles</span>, <span>corn</span>, <span>shrimp</span>.</p>
                                    </div>
                                    <div className="sb-card-buttons-frame">
                                        <Link to="/product" className="sb-btn sb-btn-gray">
                                            <span className="sb-icon">
                                                <img src="assets/img/ui/icons/arrow.svg" alt="icon" />
                                            </span>
                                            <span>Details</span>
                                        </Link>
                                        <Link to="/error" className="sb-btn sb-atc">
                                            <span className="sb-icon">
                                                <img src="assets/img/ui/icons/cart.svg" alt="icon" />
                                            </span>
                                            <span className="sb-add-to-cart-text">Add to cart</span>
                                            <span className="sb-added-text">Added</span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="sb-menu-item">
                                    <Link to="/product" className="sb-cover-frame">
                                        <img src="assets/img/menu/7.jpg" alt="product" />
                                        <div className="sb-badge sb-vegan"><i className="fas fa-leaf" /> Vegan</div>
                                    </Link>
                                    <div className="sb-card-tp">
                                        <h4 className="sb-card-title"><Link to="/product">Saumon Gravlax</Link></h4>
                                        <div className="sb-price"><sub>$</sub> 9</div>
                                    </div>
                                    <div className="sb-description">
                                        <p className="sb-text sb-mb-15"><span>tomatoes</span>, <span>nori</span>, <span>feta cheese</span>, <span>mushrooms</span>, <span>rice noodles</span>, <span>corn</span>, <span>shrimp</span>.</p>
                                    </div>
                                    <div className="sb-card-buttons-frame">
                                        <Link to="/product" className="sb-btn sb-btn-gray">
                                            <span className="sb-icon">
                                                <img src="assets/img/ui/icons/arrow.svg" alt="icon" />
                                            </span>
                                            <span>Details</span>
                                        </Link>
                                        <Link to="/error" className="sb-btn sb-atc">
                                            <span className="sb-icon">
                                                <img src="assets/img/ui/icons/cart.svg" alt="icon" />
                                            </span>
                                            <span className="sb-add-to-cart-text">Add to cart</span>
                                            <span className="sb-added-text">Added</span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="sb-menu-item">
                                    <Link to="/product" className="sb-cover-frame">
                                        <img src="assets/img/menu/8.jpg" alt="product" />
                                    </Link>
                                    <div className="sb-card-tp">
                                        <h4 className="sb-card-title"><Link to="/product">Stracciatella</Link></h4>
                                        <div className="sb-price"><sub>$</sub> 9</div>
                                    </div>
                                    <div className="sb-description">
                                        <p className="sb-text sb-mb-15"><span>tomatoes</span>, <span>nori</span>, <span>feta cheese</span>, <span>mushrooms</span>, <span>rice noodles</span>, <span>corn</span>, <span>shrimp</span>.</p>
                                    </div>
                                    <div className="sb-card-buttons-frame">
                                        <Link to="/product" className="sb-btn sb-btn-gray">
                                            <span className="sb-icon">
                                                <img src="assets/img/ui/icons/arrow.svg" alt="icon" />
                                            </span>
                                            <span>Details</span>
                                        </Link>
                                        <Link to="/error" className="sb-btn sb-atc">
                                            <span className="sb-icon">
                                                <img src="assets/img/ui/icons/cart.svg" alt="icon" />
                                            </span>
                                            <span className="sb-add-to-cart-text">Add to cart</span>
                                            <span className="sb-added-text">Added</span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="sb-menu-item">
                                    <Link to="/product" className="sb-cover-frame">
                                        <img src="assets/img/menu/9.jpg" alt="product" />
                                    </Link>
                                    <div className="sb-card-tp">
                                        <h4 className="sb-card-title"><Link to="/product">Croustillant de poisson</Link></h4>
                                        <div className="sb-price"><sub>$</sub> 4</div>
                                    </div>
                                    <div className="sb-description">
                                        <p className="sb-text sb-mb-15"><span>tomatoes</span>, <span>nori</span>, <span>feta cheese</span>, <span>mushrooms</span>, <span>rice noodles</span>, <span>corn</span>, <span>shrimp</span>.</p>
                                    </div>
                                    <div className="sb-card-buttons-frame">
                                        <Link to="/product" className="sb-btn sb-btn-gray">
                                            <span className="sb-icon">
                                                <img src="assets/img/ui/icons/arrow.svg" alt="icon" />
                                            </span>
                                            <span>Details</span>
                                        </Link>
                                        <Link to="/error" className="sb-btn sb-atc">
                                            <span className="sb-icon">
                                                <img src="assets/img/ui/icons/cart.svg" alt="icon" />
                                            </span>
                                            <span className="sb-add-to-cart-text">Add to cart</span>
                                            <span className="sb-added-text">Added</span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="sb-menu-item">
                                    <Link to="/product" className="sb-cover-frame">
                                        <img src="assets/img/menu/10.jpg" alt="product" />
                                    </Link>
                                    <div className="sb-card-tp">
                                        <h4 className="sb-card-title"><Link to="/product">Carpaccio de daurade</Link></h4>
                                        <div className="sb-price"><sub>$</sub> 6</div>
                                    </div>
                                    <div className="sb-description">
                                        <p className="sb-text sb-mb-15"><span>tomatoes</span>, <span>nori</span>, <span>feta cheese</span>, <span>mushrooms</span>, <span>rice noodles</span>, <span>corn</span>, <span>shrimp</span>.</p>
                                    </div>
                                    <div className="sb-card-buttons-frame">
                                        <Link to="/product" className="sb-btn sb-btn-gray">
                                            <span className="sb-icon">
                                                <img src="assets/img/ui/icons/arrow.svg" alt="icon" />
                                            </span>
                                            <span>Details</span>
                                        </Link>
                                        <Link to="/error" className="sb-btn sb-atc">
                                            <span className="sb-icon">
                                                <img src="assets/img/ui/icons/cart.svg" alt="icon" />
                                            </span>
                                            <span className="sb-add-to-cart-text">Add to cart</span>
                                            <span className="sb-added-text">Added</span>
                                        </Link>
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
                            <h2 className="sb-mb-30">They will <span>cook</span> for you</h2>
                            <p className="sb-text">Consectetur numquam poro nemo veniam<br />eligendi rem adipisci quo modi.</p>
                        </div>
                        <div className="sb-right sb-mb-30">
                            <Button variant='iconBtn' as={Link} to="/about" imgPath="assets/img/ui/icons/arrow.svg" text='More about us' />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="sb-team-member sb-mb-30">
                                <div className="sb-photo-frame sb-mb-15">
                                    <img src="assets/img/team/1.png" alt="Team member" />
                                </div>
                                <div className="sb-member-description">
                                    <h3 className="sb-mb-10">Paul Trueman</h3>
                                    <p className="sb-text sb-text-sm sb-mb-10">Chief Chef</p>
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
                                    <p className="sb-text sb-text-sm sb-mb-10">Chief Chef</p>
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
            {/* call to action */}
            <section className="sb-call-to-action">
                <div className="sb-bg-3" />
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 align-self-center">
                            <div className="sb-cta-text">
                                <h2 className="sb-h1 sb-mb-15">Free delivery service.</h2>
                                <p className="sb-text sb-mb-30">*Consectetur numquam poro nemo veniam<br />eligendi rem adipisci quo modi.</p>
                                <Button variant='iconBtn' as={Link} to="/product" className="me-4" imgPath="assets/img/ui/icons/cart.svg" text='Order delivery' />
                                <Button variant='iconWithGrayBtn' as={Link} to="/menu" imgPath="assets/img/ui/icons/menu.svg" text='Menu' />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="sb-illustration-8">
                                <img src="assets/img/illustrations/delivery.png" alt="reserved" className="sb-reserved" />
                                <div className="sb-cirkle-1" />
                                <div className="sb-cirkle-2" />
                                <div className="sb-cirkle-3" />
                                <div className="sb-cirkle-4" />
                                <div className="sb-cirkle-5" />
                                <img src="assets/img/illustrations/2.svg" alt="icon" className="sb-pik-2" />
                                <img src="assets/img/illustrations/3.svg" alt="icon" className="sb-pik-3" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>

    );
}

export default Shop;