import * as React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../user/containers/Home';
import Header from '../user/components/Header';
import Footer from '../user/components/Footer';
import ExtraTheme from '../user/components/ExtraTheme';
import About from '../user/containers/About';
import Blog from '../user/containers/Blog';
import Publication from '../user/containers/Publication';
import Gallery from '../user/containers/Gallery';
import Reviews from '../user/containers/Reviews';
import Reservation from '../user/containers/Reservation';
import Faq from '../user/containers/Faq';
import Error from '../user/containers/Error';
import Menu from '../user/containers/Menu';
import Shop from '../user/containers/Shop';
import Product from '../user/containers/Product';
import Cart from '../user/containers/Cart';
import Checkout from '../user/containers/Checkout';
import Contact from '../user/containers/Contact';
import DiscountPopup from '../user/components/DiscountPopup';

function UserRoutes() {
    return (
        <div className="sb-app">
            <ExtraTheme />
            <Header />
            <Routes >
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/blog' element={<Blog />} />
                <Route path='/publication' element={<Publication />} />
                <Route path='/gallery' element={<Gallery />} />
                <Route path='/reviews' element={<Reviews />} />
                <Route path='/reservation' element={<Reservation />} />
                <Route path='/faq' element={<Faq />} />
                <Route path='/menu' element={<Menu />} />
                <Route path='/shop' element={<Shop />} />
                <Route path='/product' element={<Product />} />
                <Route path='/cart' element={<Cart />} />
                <Route path='/checkout' element={<Checkout />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/*' element={<Error />} />
            </Routes>
            <Footer />
            <DiscountPopup />
        </div>
    );
}

export default UserRoutes;