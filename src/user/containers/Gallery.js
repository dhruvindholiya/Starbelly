import React from 'react';
import { Link } from 'react-router-dom';

function Gallery(props) {
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
                                    <span className="sb-suptitle sb-mb-30">Gallery</span>
                                    <h1 className="sb-mb-30">It's a pity that the photo <br />does not convey the taste!</h1>
                                    <p className="sb-text sb-text-lg sb-mb-30">Consectetur numquam poro nemo veniam<br />eligendi rem adipisci quo modi.</p>
                                    <ul className="sb-breadcrumbs">
                                        <li><Link to="/">Home</Link></li>
                                        <li><Link to="/menu">Gallery</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* gallery */}
            <div className="sb-p-90-60">
                <div className="container">
                    <div className="sb-masonry-grid" style={{ position: 'relative', height: '1495.32px' }}>
                        <div className="sb-grid-sizer" />
                        <div className="sb-grid-item sb-item-33" style={{ position: 'absolute', left: '0%', top: 0 }}>
                            <div className="sb-gallery-item sb-mb-30">
                                <img src="assets/img/gallery/1.jpg" alt="pic" />
                                {/* button */}
                                <a data-fancybox="gallery" data-no-swup href="assets/img/gallery/1.jpg" className="sb-btn sb-btn-2 sb-btn-icon sb-btn-gray sb-zoom">
                                    <span className="sb-icon">
                                        <img src="assets/img/ui/icons/zoom.svg" alt="icon" />
                                    </span>
                                </a>
                                {/* button end */}
                            </div>
                        </div>
                        <div className="sb-grid-item sb-item-33" style={{ position: 'absolute', left: '33.3323%', top: 0 }}>
                            <div className="sb-gallery-item sb-gallery-vert sb-mb-30">
                                <img src="assets/img/gallery/2.jpg" alt="pic" />
                                {/* button */}
                                <a data-fancybox="gallery" data-no-swup href="assets/img/gallery/2.jpg" className="sb-btn sb-btn-2 sb-btn-icon sb-btn-gray sb-zoom">
                                    <span className="sb-icon">
                                        <img src="assets/img/ui/icons/zoom.svg" alt="icon" />
                                    </span>
                                </a>
                                {/* button end */}
                            </div>
                        </div>
                        <div className="sb-grid-item sb-item-33" style={{ position: 'absolute', left: '66.6645%', top: 0 }}>
                            <div className="sb-gallery-item sb-mb-30">
                                <img src="assets/img/gallery/3.jpg" alt="pic" />
                                {/* button */}
                                <a data-fancybox="gallery" data-no-swup href="assets/img/gallery/3.jpg" className="sb-btn sb-btn-2 sb-btn-icon sb-btn-gray sb-zoom">
                                    <span className="sb-icon">
                                        <img src="assets/img/ui/icons/zoom.svg" alt="icon" />
                                    </span>
                                </a>
                                {/* button end */}
                            </div>
                        </div>
                        <div className="sb-grid-item sb-item-33" style={{ position: 'absolute', left: '0%', top: '272.087px' }}>
                            <div className="sb-gallery-item sb-gallery-vert sb-mb-30">
                                <img src="assets/img/gallery/4.jpg" alt="pic" />
                                {/* button */}
                                <a data-fancybox="gallery" data-no-swup href="assets/img/gallery/4.jpg" className="sb-btn sb-btn-2 sb-btn-icon sb-btn-gray sb-zoom">
                                    <span className="sb-icon">
                                        <img src="assets/img/ui/icons/zoom.svg" alt="icon" />
                                    </span>
                                </a>
                                {/* button end */}
                            </div>
                        </div>
                        <div className="sb-grid-item sb-item-33" style={{ position: 'absolute', left: '66.6645%', top: '272.087px' }}>
                            <div className="sb-gallery-item sb-gallery-vert sb-mb-30">
                                <img src="assets/img/gallery/5.jpg" alt="pic" />
                                {/* button */}
                                <a data-fancybox="gallery" data-no-swup href="assets/img/gallery/5.jpg" className="sb-btn sb-btn-2 sb-btn-icon sb-btn-gray sb-zoom">
                                    <span className="sb-icon">
                                        <img src="assets/img/ui/icons/zoom.svg" alt="icon" />
                                    </span>
                                </a>
                                {/* button end */}
                            </div>
                        </div>
                        <div className="sb-grid-item sb-item-33" style={{ position: 'absolute', left: '33.3323%', top: '475.575px' }}>
                            <div className="sb-gallery-item sb-mb-30">
                                <img src="assets/img/gallery/6.jpg" alt="pic" />
                                {/* button */}
                                <a data-fancybox="gallery" data-no-swup href="assets/img/gallery/6.jpg" className="sb-btn sb-btn-2 sb-btn-icon sb-btn-gray sb-zoom">
                                    <span className="sb-icon">
                                        <img src="assets/img/ui/icons/zoom.svg" alt="icon" />
                                    </span>
                                </a>
                                {/* button end */}
                            </div>
                        </div>
                        <div className="sb-grid-item sb-item-33" style={{ position: 'absolute', left: '0%', top: '747.662px' }}>
                            <div className="sb-gallery-item sb-mb-30">
                                <img src="assets/img/gallery/7.jpg" alt="pic" />
                                {/* button */}
                                <a data-fancybox="gallery" data-no-swup href="assets/img/gallery/7.jpg" className="sb-btn sb-btn-2 sb-btn-icon sb-btn-gray sb-zoom">
                                    <span className="sb-icon">
                                        <img src="assets/img/ui/icons/zoom.svg" alt="icon" />
                                    </span>
                                </a>
                                {/* button end */}
                            </div>
                        </div>
                        <div className="sb-grid-item sb-item-33" style={{ position: 'absolute', left: '33.3323%', top: '747.662px' }}>
                            <div className="sb-gallery-item sb-gallery-vert sb-mb-30">
                                <img src="assets/img/gallery/8.jpg" alt="pic" />
                                {/* button */}
                                <a data-fancybox="gallery" data-no-swup href="assets/img/gallery/8.jpg" className="sb-btn sb-btn-2 sb-btn-icon sb-btn-gray sb-zoom">
                                    <span className="sb-icon">
                                        <img src="assets/img/ui/icons/zoom.svg" alt="icon" />
                                    </span>
                                </a>
                                {/* button end */}
                            </div>
                        </div>
                        <div className="sb-grid-item sb-item-33" style={{ position: 'absolute', left: '66.6645%', top: '747.662px' }}>
                            <div className="sb-gallery-item sb-mb-30">
                                <img src="assets/img/gallery/9.jpg" alt="pic" />
                                {/* button */}
                                <a data-fancybox="gallery" data-no-swup href="assets/img/gallery/9.jpg" className="sb-btn sb-btn-2 sb-btn-icon sb-btn-gray sb-zoom">
                                    <span className="sb-icon">
                                        <img src="assets/img/ui/icons/zoom.svg" alt="icon" />
                                    </span>
                                </a>
                                {/* button end */}
                            </div>
                        </div>
                        <div className="sb-grid-item sb-item-33" style={{ position: 'absolute', left: '0%', top: '1019.75px' }}>
                            <div className="sb-gallery-item sb-gallery-vert sb-mb-30">
                                <img src="assets/img/gallery/10.jpg" alt="pic" />
                                {/* button */}
                                <a data-fancybox="gallery" data-no-swup href="assets/img/gallery/10.jpg" className="sb-btn sb-btn-2 sb-btn-icon sb-btn-gray sb-zoom">
                                    <span className="sb-icon">
                                        <img src="assets/img/ui/icons/zoom.svg" alt="icon" />
                                    </span>
                                </a>
                                {/* button end */}
                            </div>
                        </div>
                        <div className="sb-grid-item sb-item-33" style={{ position: 'absolute', left: '66.6645%', top: '1019.75px' }}>
                            <div className="sb-gallery-item sb-gallery-vert sb-mb-30">
                                <img src="assets/img/gallery/11.jpg" alt="pic" />
                                {/* button */}
                                <a data-fancybox="gallery" data-no-swup href="assets/img/gallery/11.jpg" className="sb-btn sb-btn-2 sb-btn-icon sb-btn-gray sb-zoom">
                                    <span className="sb-icon">
                                        <img src="assets/img/ui/icons/zoom.svg" alt="icon" />
                                    </span>
                                </a>
                                {/* button end */}
                            </div>
                        </div>
                        <div className="sb-grid-item sb-item-33" style={{ position: 'absolute', left: '33.3323%', top: '1223.24px' }}>
                            <div className="sb-gallery-item sb-mb-30">
                                <img src="assets/img/gallery/12.jpg" alt="pic" />
                                {/* button */}
                                <a data-fancybox="gallery" data-no-swup href="assets/img/gallery/12.jpg" className="sb-btn sb-btn-2 sb-btn-icon sb-btn-gray sb-zoom">
                                    <span className="sb-icon">
                                        <img src="assets/img/ui/icons/zoom.svg" alt="icon" />
                                    </span>
                                </a>
                                {/* button end */}
                            </div>
                        </div>
                    </div>
                    <div>
                        <ul className="sb-pagination">
                            <li className="sb-active"><a href="#.">1</a></li>
                            <li><a href="gallery-2.html">2</a></li>
                            <li><a href="gallery-2.html">3</a></li>
                            <li><a href="gallery-2.html">4</a></li>
                            <li><a href="gallery-2.html">...</a></li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* call to action */}
            <section className="sb-call-to-action">
                <div className="sb-bg-3" />
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 align-self-center">
                            <div className="sb-cta-text">
                                <h2 className="sb-h1 sb-mb-30">Download our mobile app.</h2>
                                <p className="sb-text sb-mb-30">Consectetur numquam poro nemo veniam<br />eligendi rem adipisci quo modi.</p>
                                <a href="#." target="_blank" data-no-swup className="sb-download-btn"><img src="assets/img/buttons/1.svg" alt="img" /></a>
                                <a href="#." target="_blank" data-no-swup className="sb-download-btn"><img src="assets/img/buttons/2.svg" alt="img" /></a>
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

export default Gallery;