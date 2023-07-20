import React from 'react';
import { Link } from 'react-router-dom';

function Product(props) {
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
                                    <span className="sb-suptitle sb-mb-30">Product</span>
                                    <h1 className="sb-mb-30">Online shop</h1>
                                    <p className="sb-text sb-text-lg sb-mb-30">Consectetur numquam poro nemo veniam<br />eligendi rem adipisci quo modi.</p>
                                    <ul className="sb-breadcrumbs">
                                        <li><Link to="/">Home</Link></li>
                                        <li><Link to="/shop">Shop</Link></li>
                                        <li><Link to="/product">Product</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* product */}
            <section className="sb-p-90-0">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="sb-gallery-item sb-gallery-square sb-mb-90">
                                <img src="assets/img/menu/4.jpg" alt="pic" />
                                <div className="sb-badge sb-vegan"><i className="fas fa-leaf" /> Vegan</div>
                                {/* button */}
                                <a data-fancybox="menu" data-no-swup href="assets/img/menu/4.jpg" className="sb-btn sb-btn-2 sb-btn-icon sb-btn-gray sb-zoom">
                                    <span className="sb-icon">
                                        <img src="assets/img/ui/icons/zoom.svg" alt="icon" />
                                    </span>
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="sb-product-description sb-mb-90">
                                <div className="sb-price-frame sb-mb-30">
                                    <h3>Saumon Gravlax</h3>
                                    <div className="sb-price"><sub>$</sub> 19</div>
                                </div>
                                <ul className="sb-stars sb-mb-25">
                                    <li><i className="fas fa-star" /></li>
                                    <li><i className="fas fa-star" /></li>
                                    <li><i className="fas fa-star" /></li>
                                    <li><i className="fas fa-star" /></li>
                                    <li><i className="fas fa-star" /></li>
                                    <li><span>(4 ratings)</span></li>
                                </ul>
                                <p className="sb-text sb-mb-30"><span>tomatoes</span>, <span>nori</span>, <span>feta cheese</span>, <span>mushrooms</span>, <span>rice noodles</span>, <span>corn</span>, <span>shrimp</span>.</p>
                                <div className="row">
                                    <div className="col-lg-4">
                                        <div className="sb-features-item sb-features-item-sm sb-mb-30">
                                            <div className="sb-number">01</div>
                                            <div className="sb-feature-text">
                                                <h4 className="sb-mb-15">Add to the cart and place an order</h4>
                                                <p className="sb-text sb-text-sm">Porro comirton pera nemo veniam</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="sb-features-item sb-features-item-sm sb-mb-30">
                                            <div className="sb-number">02</div>
                                            <div className="sb-feature-text">
                                                <h4 className="sb-mb-15">Enter your phone number and address</h4>
                                                <p className="sb-text sb-text-sm">Eligendi adipisci numquam.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="sb-features-item sb-features-item-sm sb-mb-30">
                                            <div className="sb-number">03</div>
                                            <div className="sb-feature-text">
                                                <h4 className="sb-mb-15">Enjoy your favorite food at home!</h4>
                                                <p className="sb-text sb-text-sm">Nnecessitatibus praesentium</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="sb-buttons-frame">
                                    <div className="sb-input-number-frame">
                                        <div className="sb-input-number-btn sb-sub">-</div>
                                        <input type="number" defaultValue={1} min={1} max={10} />
                                        <div className="sb-input-number-btn sb-add">+</div>
                                    </div>
                                    {/* button */}
                                    <a href="/" className="sb-btn sb-atc">
                                        <span className="sb-icon">
                                            <img src="assets/img/ui/icons/cart.svg" alt="icon" />
                                        </span>
                                        <span className="sb-add-to-cart-text">Add to cart</span>
                                        <span className="sb-added-text">Added</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* filter */}
                    <div className="sb-filter">
                        <a href="/" data-filter=".sb-ingredients-tab" className="sb-filter-link sb-active">Ingredients</a>
                        <a href="/" data-filter=".sb-details-tab" className="sb-filter-link">Product details</a>
                        <a href="/" data-filter=".sb-reviews-tab" className="sb-filter-link">Reviews</a>
                    </div>
                    <div className="sb-masonry-grid sb-tabs">
                        <div className="sb-grid-sizer" />
                        <div className="sb-grid-item sb-ingredients-tab">
                            <div className="sb-tab">
                                <ul className="sb-list">
                                    <li><b>Numquam</b><span>1 pack</span></li>
                                    <li><b>Cupiditate</b><span>150g</span></li>
                                    <li><b>Adipisicing</b><span>500g</span></li>
                                    <li><b>Dolorem obcaecati</b><span>3 Teaspoon</span></li>
                                    <li><b>Porro</b><span>2 pack</span></li>
                                    <li><b>Facilis</b><span>1kg</span></li>
                                    <li><b>Goluptatem</b><span>1 Teaspoon</span></li>
                                    <li><b>Vel fuga</b><span>300g</span></li>
                                </ul>
                            </div>
                        </div>
                        <div className="sb-grid-item sb-details-tab" style={{ position: 'absolute' }}>
                            <div className="sb-tab">
                                <p className="sb-text sb-mb-15">Facilis ratione veritatis asperiores doloremque molestiae delectus iure officia earum dolores sit fugiat, repellendus, neque laboriosam optio culpa quibusdam, magnam totam quos. Mollitia dolorem, culpa,
                                    dignissimos
                                    quas et voluptates architecto in sit totam, quae animi ratione adipisci nulla ab quasi perferendis quo pariatur dolor magnam inventore. Sequi nisi ex excepturi non harum, asperiores laboriosam ipsum voluptate doloribus incidunt nam
                                    eveniet similique unde esse voluptatem minus necessitatibus eaque temporibus quaerat accusantium amet deserunt. Iste, facilis? Illo tenetur, libero, non dicta asperiores quisquam voluptas natus aperiam, at perspiciatis repellat
                                    voluptate. Autem non reprehenderit, perferendis.</p>
                                <div className="sb-text">Consectetur adipisicing elit. Delectus quibusdam repellendus nesciunt cumque fugit numquam adipisci voluptatum quam, sapiente doloribus ut eaque natus laudantium alias illum quos maiores, quia perferendis.</div>
                            </div>
                        </div>
                        <div className="sb-grid-item sb-reviews-tab" style={{ position: 'absolute' }}>
                            <div className="sb-tab">
                                <div className="row">
                                    <div className="col-lg-6">
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
                                    <div className="col-lg-6">
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
                                </div>
                            </div>
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
                            <h2 className="sb-cate-title sb-mb-30">It is usually bought together with this product</h2>
                            <p className="sb-text">Consectetur numquam poro nemo veniam<br />eligendi rem adipisci quo modi.</p>
                        </div>
                        <div className="sb-right sb-mb-30">
                            {/* slider navigation */}
                            <div className="sb-slider-nav">
                                <div className="sb-prev-btn sb-short-menu-prev"><i className="fas fa-arrow-left" /></div>
                                <div className="sb-next-btn sb-short-menu-next"><i className="fas fa-arrow-right" /></div>
                            </div>
                        </div>
                    </div>
                    <div className="swiper-container sb-short-menu-slider-4i">
                        <div className="swiper-wrapper">
                            <div className="swiper-slide">
                                <div className="sb-menu-item">
                                    <Link to="/error" className="sb-cover-frame">
                                        <img src="assets/img/menu/1.jpg" alt="product" />
                                    </Link>
                                    <div className="sb-card-tp">
                                        <h4 className="sb-card-title"><Link to="/error">Chevrefrit au miel</Link></h4>
                                        <div className="sb-price"><sub>$</sub> 14</div>
                                    </div>
                                    <div className="sb-description">
                                        <p className="sb-text sb-mb-15"><span>tomatoes</span>, <span>nori</span>, <span>feta cheese</span>, <span>mushrooms</span>, <span>rice noodles</span>, <span>corn</span>, <span>shrimp</span>.</p>
                                    </div>
                                    <div className="sb-card-buttons-frame">
                                        {/* button */}
                                        <Link to="/error" className="sb-btn sb-btn-2 sb-btn-gray sb-btn-icon sb-m-0">
                                            <span className="sb-icon">
                                                <img src="assets/img/ui/icons/arrow.svg" alt="icon" />
                                            </span>
                                        </Link>
                                        {/* button */}
                                        <a href="/" className="sb-btn sb-atc">
                                            <span className="sb-icon">
                                                <img src="assets/img/ui/icons/cart.svg" alt="icon" />
                                            </span>
                                            <span className="sb-add-to-cart-text">Add to cart</span>
                                            <span className="sb-added-text">Added</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="sb-menu-item">
                                    <Link to="/error" className="sb-cover-frame">
                                        <img src="assets/img/menu/2.jpg" alt="product" />
                                        <div className="sb-badge sb-vegan"><i className="fas fa-leaf" /> Vegan</div>
                                    </Link>
                                    <div className="sb-card-tp">
                                        <h4 className="sb-card-title"><Link to="/error">Saumon Gravlax</Link></h4>
                                        <div className="sb-price"><sub>$</sub> 9</div>
                                    </div>
                                    <div className="sb-description">
                                        <p className="sb-text sb-mb-15"><span>tomatoes</span>, <span>nori</span>, <span>feta cheese</span>, <span>mushrooms</span>, <span>rice noodles</span>, <span>corn</span>, <span>shrimp</span>.</p>
                                    </div>
                                    <div className="sb-card-buttons-frame">
                                        {/* button */}
                                        <Link to="/error" className="sb-btn sb-btn-2 sb-btn-gray sb-btn-icon sb-m-0">
                                            <span className="sb-icon">
                                                <img src="assets/img/ui/icons/arrow.svg" alt="icon" />
                                            </span>
                                        </Link>
                                        {/* button */}
                                        <a href="/" className="sb-btn sb-atc">
                                            <span className="sb-icon">
                                                <img src="assets/img/ui/icons/cart.svg" alt="icon" />
                                            </span>
                                            <span className="sb-add-to-cart-text">Add to cart</span>
                                            <span className="sb-added-text">Added</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="sb-menu-item">
                                    <Link to="/error" className="sb-cover-frame">
                                        <img src="assets/img/menu/3.jpg" alt="product" />
                                    </Link>
                                    <div className="sb-card-tp">
                                        <h4 className="sb-card-title"><Link to="/error">Stracciatella</Link></h4>
                                        <div className="sb-price"><sub>$</sub> 9</div>
                                    </div>
                                    <div className="sb-description">
                                        <p className="sb-text sb-mb-15"><span>tomatoes</span>, <span>nori</span>, <span>feta cheese</span>, <span>mushrooms</span>, <span>rice noodles</span>, <span>corn</span>, <span>shrimp</span>.</p>
                                    </div>
                                    <div className="sb-card-buttons-frame">
                                        {/* button */}
                                        <Link to="/error" className="sb-btn sb-btn-2 sb-btn-gray sb-btn-icon sb-m-0">
                                            <span className="sb-icon">
                                                <img src="assets/img/ui/icons/arrow.svg" alt="icon" />
                                            </span>
                                        </Link>
                                        {/* button */}
                                        <a href="/" className="sb-btn sb-atc">
                                            <span className="sb-icon">
                                                <img src="assets/img/ui/icons/cart.svg" alt="icon" />
                                            </span>
                                            <span className="sb-add-to-cart-text">Add to cart</span>
                                            <span className="sb-added-text">Added</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="sb-menu-item">
                                    <Link to="/error" className="sb-cover-frame">
                                        <img src="assets/img/menu/4.jpg" alt="product" />
                                    </Link>
                                    <div className="sb-card-tp">
                                        <h4 className="sb-card-title"><Link to="/error">Croustillant de poisson</Link></h4>
                                        <div className="sb-price"><sub>$</sub> 4</div>
                                    </div>
                                    <div className="sb-description">
                                        <p className="sb-text sb-mb-15"><span>tomatoes</span>, <span>nori</span>, <span>feta cheese</span>, <span>mushrooms</span>, <span>rice noodles</span>, <span>corn</span>, <span>shrimp</span>.</p>
                                    </div>
                                    <div className="sb-card-buttons-frame">
                                        {/* button */}
                                        <Link to="/error" className="sb-btn sb-btn-2 sb-btn-gray sb-btn-icon sb-m-0">
                                            <span className="sb-icon">
                                                <img src="assets/img/ui/icons/arrow.svg" alt="icon" />
                                            </span>
                                        </Link>
                                        {/* button */}
                                        <a href="/" className="sb-btn sb-atc">
                                            <span className="sb-icon">
                                                <img src="assets/img/ui/icons/cart.svg" alt="icon" />
                                            </span>
                                            <span className="sb-add-to-cart-text">Add to cart</span>
                                            <span className="sb-added-text">Added</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="sb-menu-item">
                                    <Link to="/error" className="sb-cover-frame">
                                        <img src="assets/img/menu/5.jpg" alt="product" />
                                    </Link>
                                    <div className="sb-card-tp">
                                        <h4 className="sb-card-title"><Link to="/error">Carpaccio de daurade</Link></h4>
                                        <div className="sb-price"><sub>$</sub> 6</div>
                                    </div>
                                    <div className="sb-description">
                                        <p className="sb-text sb-mb-15"><span>tomatoes</span>, <span>nori</span>, <span>feta cheese</span>, <span>mushrooms</span>, <span>rice noodles</span>, <span>corn</span>, <span>shrimp</span>.</p>
                                    </div>
                                    <div className="sb-card-buttons-frame">
                                        {/* button */}
                                        <Link to="/error" className="sb-btn sb-btn-2 sb-btn-gray sb-btn-icon sb-m-0">
                                            <span className="sb-icon">
                                                <img src="assets/img/ui/icons/arrow.svg" alt="icon" />
                                            </span>
                                        </Link>
                                        {/* button */}
                                        <a href="/" className="sb-btn sb-atc">
                                            <span className="sb-icon">
                                                <img src="assets/img/ui/icons/cart.svg" alt="icon" />
                                            </span>
                                            <span className="sb-add-to-cart-text">Add to cart</span>
                                            <span className="sb-added-text">Added</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="sb-menu-item">
                                    <Link to="/error" className="sb-cover-frame">
                                        <img src="assets/img/menu/6.jpg" alt="product" />
                                    </Link>
                                    <div className="sb-card-tp">
                                        <h4 className="sb-card-title"><Link to="/error">Chevrefrit au miel</Link></h4>
                                        <div className="sb-price"><sub>$</sub> 14</div>
                                    </div>
                                    <div className="sb-description">
                                        <p className="sb-text sb-mb-15"><span>tomatoes</span>, <span>nori</span>, <span>feta cheese</span>, <span>mushrooms</span>, <span>rice noodles</span>, <span>corn</span>, <span>shrimp</span>.</p>
                                    </div>
                                    <div className="sb-card-buttons-frame">
                                        {/* button */}
                                        <Link to="/error" className="sb-btn sb-btn-2 sb-btn-gray sb-btn-icon sb-m-0">
                                            <span className="sb-icon">
                                                <img src="assets/img/ui/icons/arrow.svg" alt="icon" />
                                            </span>
                                        </Link>
                                        {/* button */}
                                        <a href="/" className="sb-btn sb-atc">
                                            <span className="sb-icon">
                                                <img src="assets/img/ui/icons/cart.svg" alt="icon" />
                                            </span>
                                            <span className="sb-add-to-cart-text">Add to cart</span>
                                            <span className="sb-added-text">Added</span>
                                        </a>
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
                                <h2 className="sb-h1 sb-mb-15">Free delivery service.</h2>
                                <p className="sb-text sb-mb-30">*Consectetur numquam poro nemo veniam<br />eligendi rem adipisci quo modi.</p>
                                {/* button */}
                                <Link to="/shop" className="sb-btn">
                                    <span className="sb-icon">
                                        <img src="assets/img/ui/icons/cart.svg" alt="icon" />
                                    </span>
                                    <span>Order delivery</span>
                                </Link>
                                {/* button */}
                                <Link to="/menu" className="sb-btn sb-btn-2 sb-btn-gray">
                                    <span className="sb-icon">
                                        <img src="assets/img/ui/icons/menu.svg" alt="icon" />
                                    </span>
                                    <span>Menu</span>
                                </Link>
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

export default Product;