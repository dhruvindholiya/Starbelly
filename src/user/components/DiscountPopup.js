import React from 'react';
import { Link } from 'react-router-dom';

function DiscountPopup() {
    return (
        <>
            {/* discount popup */}
            <div className="sb-popup-frame">
                <div className="sb-popup-body">
                    <div className="sb-close-popup">+</div>
                    <div className="sb-promo-content">
                        <div className="sb-text-frame">
                            <h3 className="sb-mb-15">Visit Starbelly and get your coffee*</h3>
                            <h3 className="sb-mb-10"><b className="sb-h2">FOR FREE!</b></h3>
                            <p className="sb-text sb-text-sm sb-mb-15">*Et modi itaque praesentium.</p>
                            {/* button */}
                            <Link to="/product" className="sb-btn sb-ppc">
                                <span className="sb-icon">
                                    <img src="assets/img/ui/icons/arrow.svg" alt="icon" />
                                </span>
                                <span>Get it now</span>
                            </Link>
                            {/* button end */}
                        </div>
                        <div className="sb-image-frame">
                            <div className="sb-illustration-5">
                                <img src="assets/img/illustrations/cup.png" alt="cup" className="sb-cup" />
                                <div className="sb-cirkle-1" />
                                <div className="sb-cirkle-2" />
                                <div className="sb-cirkle-3" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default DiscountPopup;