import React from 'react';
import { Link } from 'react-router-dom';

function Checkout(props) {
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
                                    <span className="sb-suptitle sb-mb-30">Checkout</span>
                                    <h1 className="sb-mb-30">Welcom for the checkout</h1>
                                    <p className="sb-text sb-text-lg sb-mb-30">Consectetur numquam poro nemo veniam<br />eligendi rem adipisci quo modi.</p>
                                    <ul className="sb-breadcrumbs">
                                        <li><Link to="/">Home</Link></li>
                                        <li><Link to="/shop">Shop</Link></li>
                                        <li><Link to="/checkout">Checkout</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* checkout */}
            <section className="sb-p-90-90">
                <div className="container" data-sticky-container>
                    <div className="row">
                        <div className="col-lg-8">
                            <form className="sb-checkout-form">
                                <div className="sb-mb-30">
                                    <h3>Billing details</h3>
                                </div>
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="sb-group-input">
                                            <input type="text" required />
                                            <span className="sb-bar" />
                                            <label>First name</label>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="sb-group-input">
                                            <input type="text" required />
                                            <span className="sb-bar" />
                                            <label>Last name</label>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="sb-group-input">
                                            <input type="text" required />
                                            <span className="sb-bar" />
                                            <label>Company name</label>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="sb-group-input">
                                            <input type="text" required />
                                            <span className="sb-bar" />
                                            <label>Country</label>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="sb-group-input">
                                            <input type="text" required />
                                            <span className="sb-bar" />
                                            <label>City</label>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="sb-group-input">
                                            <input type="text" required />
                                            <span className="sb-bar" />
                                            <label>State / Province</label>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="sb-group-input">
                                            <input type="text" required />
                                            <span className="sb-bar" />
                                            <label>Street</label>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="sb-group-input">
                                            <input type="text" required />
                                            <span className="sb-bar" />
                                            <label>Postcode</label>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="sb-group-input">
                                            <input type="tel" required />
                                            <span className="sb-bar" />
                                            <label>Phone</label>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="sb-group-input">
                                            <input type="email" required />
                                            <span className="sb-bar" />
                                            <label>Email</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="sb-mb-30">
                                    <h3>Additional information</h3>
                                </div>
                                <div className="sb-group-input">
                                    <textarea name="name" required defaultValue={""} />
                                    <span className="sb-bar" />
                                    <label>Order notes</label>
                                </div>
                                <div className="sb-mb-30">
                                    <h3 className="sb-mb-30">Payment method</h3>
                                    <ul>
                                        <li className="sb-radio">
                                            <input type="radio" id="option-1" name="selector" defaultChecked />
                                            <label htmlFor="option-1">Direct bank transfer</label>
                                            <div className="sb-check" />
                                        </li>
                                        <li className="sb-radio">
                                            <input type="radio" id="option-2" name="selector" />
                                            <label htmlFor="option-2">Check payments</label>
                                            <div className="sb-check" />
                                        </li>
                                        <li className="sb-radio">
                                            <input type="radio" id="option-3" name="selector" />
                                            <label htmlFor="option-3">Cash on delivery</label>
                                            <div className="sb-check" />
                                        </li>
                                    </ul>
                                </div>
                                {/* button */}
                                <button type="submit" className="sb-btn sb-m-0">
                                    <span className="sb-icon">
                                        <img src="assets/img/ui/icons/arrow.svg" alt="icon" />
                                    </span>
                                    <span>Place order</span>
                                </button>
                            </form>
                        </div>
                        <div className="col-lg-4">
                            <div className="sb-pad-type-2 sb-sticky" data-margin-top={120}>
                                <div className="sb-co-cart-frame">
                                    <div className="sb-cart-table">
                                        <div className="sb-cart-table-header">
                                            <div className="row">
                                                <div className="col-lg-9">Product</div>
                                                <div className="col-lg-3 text-right">Total</div>
                                            </div>
                                        </div>
                                        <div className="sb-cart-item">
                                            <div className="row align-items-center">
                                                <div className="col-lg-9">
                                                    <Link className="sb-product" to="/product">
                                                        <div className="sb-cover-frame">
                                                            <img src="assets/img/menu/1.jpg" alt="product" />
                                                        </div>
                                                        <div className="sb-prod-description">
                                                            <h4 className="sb-mb-10">Chevrefrit au miel</h4>
                                                            <p className="sb-text sb-text-sm">x2</p>
                                                        </div>
                                                    </Link>
                                                </div>
                                                <div className="col-lg-3 text-md-right">
                                                    <div className="sb-price-2"><span>Total: </span>$14.00</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="sb-cart-item">
                                            <div className="row align-items-center">
                                                <div className="col-lg-9">
                                                    <Link className="sb-product" to="/product">
                                                        <div className="sb-cover-frame">
                                                            <img src="assets/img/menu/2.jpg" alt="product" />
                                                        </div>
                                                        <div className="sb-prod-description">
                                                            <h4 className="sb-mb-10">Carpaccio de daurade</h4>
                                                            <p className="sb-text sb-text-sm">x1</p>
                                                        </div>
                                                    </Link>
                                                </div>
                                                <div className="col-lg-3 text-md-right">
                                                    <div className="sb-price-2"><span>Total: </span>$7.99</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="sb-cart-item">
                                            <div className="row align-items-center">
                                                <div className="col-lg-9">
                                                    <Link className="sb-product" to="/product">
                                                        <div className="sb-cover-frame">
                                                            <img src="assets/img/menu/3.jpg" alt="product" />
                                                        </div>
                                                        <div className="sb-prod-description">
                                                            <h4 className="sb-mb-10">Stracciatella</h4>
                                                            <p className="sb-text sb-text-sm">x1</p>
                                                        </div>
                                                    </Link>
                                                </div>
                                                <div className="col-lg-3 text-md-right">
                                                    <div className="sb-price-2"><span>Total: </span>$11.00</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="sb-cart-total sb-cart-total-2">
                                            <div className="sb-sum">
                                                <div className="row">
                                                    <div className="col-6">
                                                        <div className="sb-total-title">Subtotal:</div>
                                                    </div>
                                                    <div className="col-6">
                                                        <div className="sb-price-1 text-right">$32.99</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="sb-realy-sum">
                                                <div className="row">
                                                    <div className="col-6">
                                                        <div className="sb-total-title">Total:</div>
                                                    </div>
                                                    <div className="col-6">
                                                        <div className="sb-price-2 text-right">$37.99</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>

    );
}

export default Checkout;