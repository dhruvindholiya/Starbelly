import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from '../ui/button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { getProductData } from '../redux/action/Product.action';
import CircularProgress from '@mui/material/CircularProgress';
import MenuFiltercontext from '../context/reducer/MenuFilter.Context';

function Menu() {
    const dispatch = useDispatch();
    const productVal = useSelector((state) => state.products);

    useEffect(() => {
        dispatch(getProductData());
    }, [])

    const fData = useContext(MenuFiltercontext);
    let newFilteredData = []
    if (fData.fData === 'All menu') {
        newFilteredData = productVal.products
    } else {
        newFilteredData = productVal.products.filter((product) => product.catagory === fData.fData)
    }

    const handleImgPath = (imgPath) => {
        let pathArr = imgPath.split("\\");
        return ('assets/img/menu/' + pathArr[pathArr.length - 1]);
    }
    const handleCart = (id) => {
        console.log(id)
    }

    return (
        productVal.loading ?
            <div style={{ height: 'calc(100vh - 90px' }} className='d-flex align-items-center justify-content-center'>
                <CircularProgress />
            </div> :
            productVal.error ?
                <h2>productVal.error</h2> :
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
                                <Button variant='grayBgBtn' onClick={() => fData.handleMenuFilter('All menu')} className={`me-3 ${fData.fData === 'All menu' ? 'sb-active' : null}`} text='All Menu' />
                                {
                                    productVal.products.map((product) => {
                                        return (
                                            <Button key={product.catagory} variant='grayBgBtn' onClick={() => fData.handleMenuFilter(product.catagory)} className={`me-3 ${fData.fData === product.catagory ? 'sb-active' : null}`} text={product.catagory} />
                                        )
                                    })
                                }
                            </div>
                            <div className="sb-masonry-grid">
                                <div className="sb-grid-sizer" />
                                {
                                    newFilteredData.map((product) => {
                                        return (
                                            <div key={product.id} className={`sb-grid-item sb-item-25 ${product.catagory ? product.catagory.toLowerCase().replace(/\s+/g, "-") : ""}`}>
                                                <a className="sb-menu-item sb-mb-30">
                                                    <a data-fancybox="menu" data-no-swup href={handleImgPath(product.image)} className="sb-cover-frame">
                                                        <img src={handleImgPath(product.image)} alt="product" />
                                                    </a>
                                                    <div className="sb-card-tp position-relative">
                                                        <Button variant='iconBtn' onClick={() => handleCart(product.id)} className="me-4 position-absolute add_cart_btn" imgPath="assets/img/ui/icons/cart.svg" text='Add to Cart' />
                                                        <h4 className="sb-card-title">{product.name}</h4>
                                                        <div className="sb-price"><sub>$</sub>{product.price}</div>
                                                    </div>
                                                    <div className="sb-description">
                                                        <p className="sb-text sb-mb-15">{product.desc}</p>
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




