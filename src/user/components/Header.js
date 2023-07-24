import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../ui/button/Button';
import CustomLink from '../ui/link/Link';

function Auth() {
    return (
        <div className="sb-top-bar-frame">
            <div className="sb-top-bar-bg" />
            <div className="container">
                <div className="sb-top-bar">
                    <Link to="/" className="sb-logo-frame">
                        <img src="assets/img/ui/logo.svg" alt="Starbelly" />
                    </Link>
                    <div className="sb-right-side">
                        <nav id="sb-dynamic-menu" className="sb-menu-transition">
                            <ul className="sb-navigation">
                                <CustomLink to="/" as={Link} text='Home' />
                                <CustomLink to="/about" as={Link} text='About Us' />
                                <CustomLink to="/blog" as={Link} text='Blog' />
                                <CustomLink to="/publication" as={Link} text='Publication' />
                                <CustomLink to="/gallery" as={Link} text='Gallery' />
                                <CustomLink to="/reviews" as={Link} text='Reviews' />
                                <CustomLink to="/faq" as={Link} text='FAQ' />
                                <CustomLink to="/menu" as={Link} text='Menu' />
                                <CustomLink to="/shop" as={Link} text='Shop' />
                            </ul>
                        </nav>
                        <div className="sb-buttons-frame">
                            <Button to="/reservation" className='me-3' as={Link} text='Reservation'></Button>
                            <Button to="/contact" className='me-3' as={Link} text='Contact'></Button>
                            <Button to="/auth" className='me-3' as={Link} text='Login'></Button>
                            <div className="sb-btn sb-btn-2 sb-btn-gray sb-btn-icon sb-m-0 sb-btn-cart">
                                <span className="sb-icon">
                                    <img src="assets/img/ui/icons/cart.svg" alt="icon" />
                                </span>
                                <i className="sb-cart-number">5</i>
                            </div>
                            <div className="sb-menu-btn"><span /></div>
                            <div className="sb-info-btn"><span /></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="sb-info-bar">
                <div className="sb-infobar-content">
                    <div className="sb-ib-title-frame sb-mb-30">
                        <h4>Contact</h4><i className="fas fa-arrow-down" />
                    </div>
                    <ul className="sb-list sb-mb-30">
                        <li><b>Address:</b><span>Montréal, 1510 Rue Sauvé</span></li>
                        <li><b>Working hours:</b><span>09:00 - 23:00</span></li>
                        <li><b>Phone:</b><span>+02 (044) 756-X6-52</span></li>
                        <li><b>Email:</b><span>starbelly@mail.com</span></li>
                    </ul>
                    <div className="sb-ib-title-frame sb-mb-30">
                        <h4>Instagram</h4><i className="fas fa-arrow-down" />
                    </div>
                    <ul className="sb-instagram sb-mb-30">
                        <li><a href="/"><img src="assets/img/instagram/1.jpg" alt="instagram" /></a></li>
                        <li><a href="/"><img src="assets/img/instagram/2.jpg" alt="instagram" /></a></li>
                        <li><a href="/"><img src="assets/img/instagram/3.jpg" alt="instagram" /></a></li>
                        <li><a href="/"><img src="assets/img/instagram/4.jpg" alt="instagram" /></a></li>
                        <li><a href="/"><img src="assets/img/instagram/5.jpg" alt="instagram" /></a></li>
                        <li><a href="/"><img src="assets/img/instagram/6.jpg" alt="instagram" /></a></li>
                    </ul>
                    <hr />
                    <div className="sb-ib-title-frame sb-mb-30">
                        <h4>Latest publications</h4><i className="fas fa-arrow-down" />
                    </div>
                    <Link to="/publication" className="sb-blog-card sb-blog-card-sm sb-mb-30">
                        <div className="sb-cover-frame">
                            <img src="assets/img/blog/1.jpg" alt="cover" />
                        </div>
                        <div className="sb-blog-card-descr">
                            <h5 className="sb-mb-5">Simple Homemade Tomato Soup</h5>
                            <p className="sb-text sb-text-sm">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero optio, sed
                                expedita.</p>
                        </div>
                    </Link>
                    <Link to="/publication" className="sb-blog-card sb-blog-card-sm sb-mb-30">
                        <div className="sb-cover-frame">
                            <img src="assets/img/blog/2.jpg" alt="cover" />
                        </div>
                        <div className="sb-blog-card-descr">
                            <h5 className="sb-mb-5">Thai Coconut Soup with Tofu and Rice</h5>
                            <p className="sb-text sb-text-sm">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero optio, sed
                                expedita.</p>
                        </div>
                    </Link>
                    <Link to="/publication" className="sb-blog-card sb-blog-card-sm sb-mb-30">
                        <div className="sb-cover-frame">
                            <img src="assets/img/blog/3.jpg" alt="cover" />
                        </div>
                        <div className="sb-blog-card-descr">
                            <h5 className="sb-mb-5">21 Things You Should Absolutely Be Buying at ALDI</h5>
                            <p className="sb-text sb-text-sm">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero optio, sed
                                expedita.</p>
                        </div>
                    </Link>
                </div>
                <div className="sb-info-bar-footer">
                    <ul className="sb-social">
                        <ul className="sb-social">
                            <li><a href="/"><i className="fab fa-twitter" /></a></li>
                            <li><a href="/"><i className="fab fa-instagram" /></a></li>
                            <li><a href="/"><i className="fab fa-facebook-f" /></a></li>
                            <li><a href="/"><i className="fab fa-youtube" /></a></li>
                        </ul>
                    </ul>
                </div>
            </div>
            <div className="sb-minicart">
                <div className="sb-minicart-content">
                    <div className="sb-ib-title-frame sb-mb-30">
                        <h4>Your order.</h4><i className="fas fa-arrow-down" />
                    </div>
                    <Link to="/product" className="sb-menu-item sb-menu-item-sm sb-mb-15">
                        <div className="sb-cover-frame">
                            <img src="assets/img/menu/4.jpg" alt="product" />
                        </div>
                        <div className="sb-card-tp">
                            <h4 className="sb-card-title">Saumon Gravlax</h4>
                            <div className="sb-price"><sub>$</sub> 9</div>
                        </div>
                    </Link>
                    <Link to="/product" className="sb-menu-item sb-menu-item-sm sb-mb-15">
                        <div className="sb-cover-frame">
                            <img src="assets/img/menu/1.jpg" alt="product" />
                        </div>
                        <div className="sb-card-tp">
                            <h4 className="sb-card-title">Chevrefrit au miel</h4>
                            <div className="sb-price"><sub>$</sub> 14</div>
                        </div>
                    </Link>
                    <Link to="/product" className="sb-menu-item sb-menu-item-sm sb-mb-15">
                        <div className="sb-cover-frame">
                            <img src="assets/img/menu/2.jpg" alt="product" />
                        </div>
                        <div className="sb-card-tp">
                            <h4 className="sb-card-title">Croustillant de poisson</h4>
                            <div className="sb-price"><sub>$</sub> 4</div>
                        </div>
                    </Link>
                    <Link to="/product" className="sb-menu-item sb-menu-item-sm sb-mb-15">
                        <div className="sb-cover-frame">
                            <img src="assets/img/menu/3.jpg" alt="product" />
                        </div>
                        <div className="sb-card-tp">
                            <h4 className="sb-card-title">Stracciatella</h4>
                            <div className="sb-price"><sub>$</sub> 11</div>
                        </div>
                    </Link>
                    <Link to="/product" className="sb-menu-item sb-menu-item-sm sb-mb-15">
                        <div className="sb-cover-frame">
                            <img src="assets/img/menu/5.jpg" alt="product" />
                        </div>
                        <div className="sb-card-tp">
                            <h4 className="sb-card-title">Carpaccio de daurade</h4>
                            <div className="sb-price"><sub>$</sub> 19</div>
                        </div>
                    </Link>
                </div>
                <div className="sb-minicart-footer">
                    <Link to="/cart" className="sb-btn sb-btn-gray sb-btn-text">
                        <span>View order</span>
                    </Link>
                    <Link to="/checkout" className="sb-btn sb-btn-text">
                        <span>Checkout</span>
                    </Link>
                </div>
            </div>
        </div>

    );
}

export default Auth;