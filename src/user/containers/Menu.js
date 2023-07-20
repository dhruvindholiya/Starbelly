import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from '../ui/button/Button';

function Menu() {
    const [data, setData] = React.useState([])

    useEffect(() => {
        let l_product = JSON.parse(localStorage.getItem("_products"));
        if (l_product && l_product.length > 0) {
            setData(l_product);
        }
    }, []);


    return (
        <div id="sb-dynamic-content" className="sb-transition-fade">
            <section className="sb-banner sb-banner-sm sb-banner-color">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="sb-main-title-frame">
                                <div className="sb-main-title text-center">
                                    <span className="sb-suptitle sb-mb-30">Menu</span>
                                    <h1 className="sb-mb-30">Only <span>appetite</span> <br />Can be lacking in <span>cooking</span></h1>
                                    <p className="sb-text sb-text-lg sb-mb-30">Consectetur numquam poro nemo veniam<br />eligendi rem adipisci quo modi.</p>
                                    <ul className="sb-breadcrumbs">
                                        <li><a href="home-1.html">Home</a></li>
                                        <li><a href="menu-1.html">Menu</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="sb-menu-section sb-p-90-60">
                <div className="sb-bg-1"><div /></div>
                <div className="container">
                    <div className="sb-filter mb-30">
                        <Button variant='grayBgBtn' data-filter="*" className='me-3 sb-active' text='All dishes' />
                        <Button variant='grayBgBtn' data-filter=".starters" className='me-3' text='Starters' />
                        <Button variant='grayBgBtn' data-filter=".main-dishes" className='me-3' text='Main dishes' />
                        <Button variant='grayBgBtn' data-filter=".drinks" className='me-3' text='Drinks' />
                        <Button variant='grayBgBtn' data-filter=".dessert" text='Dessert' />
                    </div>
                    <div className="sb-masonry-grid">
                        <div className="sb-grid-sizer" />
                        {
                            data.map((product, ind) => {
                                return (
                                    <div key={product.id} className={`sb-grid-item sb-item-33 ${product.pcatagory.toLowerCase().replace(/\s+/g, "-")}`}>
                                        <a data-fancybox="menu" data-no-swup href="assets/img/menu/1.jpg" className="sb-menu-item sb-mb-30">
                                            <div className="sb-cover-frame">
                                                {ind === 0 ? <img src="assets/img/menu/9.jpg" alt="product" /> : null}
                                                {ind === 1 ? <img src="assets/img/menu/1.jpg" alt="product" /> : null}
                                                {ind === 2 ? <img src="assets/img/menu/6.jpg" alt="product" /> : null}
                                                {ind === 3 ? <img src="assets/img/menu/11.jpg" alt="product" /> : null}
                                            </div>
                                            <div className="sb-card-tp">
                                                <h4 className="sb-card-title">{product.pname}</h4>
                                                <div className="sb-price"><sub>$</sub>{product.pprice}</div>
                                            </div>
                                            <div className="sb-description">
                                                <p className="sb-text sb-mb-15">{product.pdesc}</p>
                                                <ul className="sb-stars">
                                                    <li><i className="fas fa-star" /></li>
                                                    <li><i className="fas fa-star" /></li>
                                                    <li><i className="fas fa-star" /></li>
                                                    <li><i className="fas fa-star" /></li>
                                                    <li><i className="fas fa-star" /></li>
                                                    <li><span>(4 ratings)</span></li>
                                                </ul>
                                            </div>
                                        </a>
                                    </div>
                                )
                            })
                        }

                    </div>
                </div>
            </section>
            <section className="sb-call-to-action">
                <div className="sb-bg-3" />
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 align-self-center">
                            <div className="sb-cta-text">
                                <h2 className="sb-h1 sb-mb-15">Free delivery service.</h2>
                                <p className="sb-text sb-mb-30">*Consectetur numquam poro nemo veniam<br />eligendi rem adipisci quo modi.</p>
                                <Button variant='iconBtn' className="me-4" as={Link} to="/shop" imgPath="assets/img/ui/icons/cart.svg" text='Order delivery' />
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

export default Menu;