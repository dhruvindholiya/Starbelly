import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { decrement, increment } from '../redux/action/counter.action';

function Cart(props) {
    const dispatch = useDispatch();
    const counterVal = useSelector(state => state.counter.count)

    const handleIncrement = () => {
        dispatch(increment());
    }
    const handleDecrement = () => {
        dispatch(decrement());
    }
    return (
        <div id="sb-dynamic-content" className="sb-transition-fade">
            <section className="sb-banner sb-banner-sm sb-banner-color">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="sb-main-title-frame">
                                <div className="sb-main-title text-center">
                                    <span className="sb-suptitle sb-mb-30">Cart</span>
                                    <h1 className="sb-mb-30">Your order.</h1>
                                    <p className="sb-text sb-text-lg sb-mb-30">Consectetur numquam poro nemo veniam<br />eligendi rem adipisci quo modi.</p>
                                    <ul className="sb-breadcrumbs">
                                        <li><Link to="/">Home</Link></li>
                                        <li><Link to="/shop">Shop</Link></li>
                                        <li><Link to="/cart">cart</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="sb-p-90-90">
                <div className="container">
                    <div className="sb-cart-table">
                        <div className="sb-cart-table-header">
                            <div className="row">
                                <div className="col-lg-6">Product</div>
                                <div className="col-lg-3">Quantity</div>
                                <div className="col-lg-1">Price</div>
                                <div className="col-lg-1">Total</div>
                                <div className="col-lg-1" />
                            </div>
                        </div>
                        <div className="sb-cart-item">
                            <div className="row align-items-center">
                                <div className="col-lg-6">
                                    <Link className="sb-product" to="/product">
                                        <div className="sb-cover-frame">
                                            <img src="assets/img/menu/1.jpg" alt="product" />
                                        </div>
                                        <div className="sb-prod-description">
                                            <h4 className="sb-mb-10">Chevrefrit au miel</h4>
                                            <p className="sb-text sb-text-sm"><span>tomatoes</span>, <span>nori</span>, <span>feta cheese</span>, <span>mushrooms</span>, <span>rice noodles</span>, <span>corn</span>, <span>shrimp</span>.</p>
                                        </div>
                                    </Link>
                                </div>
                                <div className="col-6 col-lg-3">
                                    <div className="sb-input-number-frame">
                                        <div className="sb-input-number-btn sb-sub" onClick={() => handleDecrement()}>-</div>
                                        <input type="number" defaultValue={counterVal} onChange={(e) => e.target.value} />
                                        <div className="sb-input-number-btn sb-add" onClick={() => handleIncrement()}>+</div>
                                    </div>
                                </div>
                                <div className="col-3 col-lg-1">
                                    <div className="sb-price-1"><span>Price: </span>$14.00</div>
                                </div>
                                <div className="col-3 col-lg-1">
                                    <div className="sb-price-2"><span>Total: </span>$14.00</div>
                                </div>
                                <div className="col-1">
                                    <Link to="/error" className="sb-remove">+</Link>
                                </div>
                            </div>
                        </div>
                        <div className="sb-cart-item">
                            <div className="row align-items-center">
                                <div className="col-lg-6">
                                    <Link className="sb-product" to="/product">
                                        <div className="sb-cover-frame">
                                            <img src="assets/img/menu/2.jpg" alt="product" />
                                        </div>
                                        <div className="sb-prod-description">
                                            <h4 className="media-heading sb-mb-10">Carpaccio de daurade</h4>
                                            <p className="sb-text sb-text-sm"><span>tomatoes</span>, <span>nori</span>, <span>feta cheese</span>, <span>mushrooms</span>, <span>rice noodles</span>, <span>corn</span>, <span>shrimp</span>.</p>
                                        </div>
                                    </Link>
                                </div>
                                <div className="col-6 col-lg-3">
                                    <div className="sb-input-number-frame">
                                        <div className="sb-input-number-btn sb-sub" onClick={() => handleIncrement()}>-</div>
                                        <input type="number" defaultValue={counterVal} onChange={(e) => e.target.value} />
                                        <div className="sb-input-number-btn sb-add" onClick={() => handleDecrement()}>+</div>
                                    </div>
                                </div>
                                <div className="col-3 col-lg-1">
                                    <div className="sb-price-1"><span>Price: </span>$7.99</div>
                                </div>
                                <div className="col-3 col-lg-1">
                                    <div className="sb-price-2"><span>Total: </span>$7.99</div>
                                </div>
                                <div className="col-1">
                                    <Link href="/error" className="sb-remove">+</Link>
                                </div>
                            </div>
                        </div>
                        <div className="sb-cart-item">
                            <div className="row align-items-center">
                                <div className="col-lg-6">
                                    <Link className="sb-product" to="/product">
                                        <div className="sb-cover-frame">
                                            <img src="assets/img/menu/3.jpg" alt="product" />
                                        </div>
                                        <div className="sb-prod-description">
                                            <h4 className="media-heading sb-mb-10">Stracciatella</h4>
                                            <p className="sb-text sb-text-sm"><span>tomatoes</span>, <span>nori</span>, <span>feta cheese</span>, <span>mushrooms</span>, <span>rice noodles</span>, <span>corn</span>, <span>shrimp</span>.</p>
                                        </div>
                                    </Link>
                                </div>
                                <div className="col-6 col-lg-3">
                                    <div className="sb-input-number-frame">
                                        <div className="sb-input-number-btn sb-sub" onClick={() => handleIncrement()}>-</div>
                                        <input type="number" defaultValue={counterVal} onChange={(e) => e.target.value} />
                                        <div className="sb-input-number-btn sb-add" onClick={() => handleDecrement()}>+</div>
                                    </div>
                                </div>
                                <div className="col-3 col-lg-1">
                                    <div className="sb-price-1"><span>Price: </span>$11.00</div>
                                </div>
                                <div className="col-3 col-lg-1">
                                    <div className="sb-price-2"><span>Total: </span>$11.00</div>
                                </div>
                                <div className="col-1">
                                    <Link href="/error" className="sb-remove">+</Link>
                                </div>
                            </div>
                        </div>
                        <div className="row justify-content-end">
                            <div className="col-lg-6">
                                <div className="sb-cart-total">
                                    <div className="sb-sum">
                                        <div className="row">
                                            <div className="col-8">
                                                <div className="sb-total-title">Subtotal:</div>
                                            </div>
                                            <div className="col-4">
                                                <div className="sb-price-1 text-right">$32.99</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="sb-sum">
                                        <div className="row">
                                            <div className="col-8">
                                                <div className="sb-total-title">Estimated shipping:</div>
                                            </div>
                                            <div className="col-4">
                                                <div className="sb-price-1 text-right">$5</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="sb-realy-sum">
                                        <div className="row">
                                            <div className="col-8">
                                                <div className="sb-total-title">Total:</div>
                                            </div>
                                            <div className="col-4">
                                                <div className="sb-price-2 text-right">$37.99</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="sb-cart-btns-frame text-right">
                                    {/* button */}
                                    <Link href="shop-1.html" className="sb-btn sb-btn-2 sb-btn-gray">
                                        <span className="sb-icon">
                                            <img src="assets/img/ui/icons/arrow-2.svg" alt="icon" />
                                        </span>
                                        <span>Continue shopping</span>
                                    </Link>
                                    {/* button */}
                                    <Link href="checkout.html" className="sb-btn sb-m-0">
                                        <span className="sb-icon">
                                            <img src="assets/img/ui/icons/arrow.svg" alt="icon" />
                                        </span>
                                        <span>Checkout</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>

    );
}

export default Cart;