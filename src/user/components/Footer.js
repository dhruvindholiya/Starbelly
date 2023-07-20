import React from 'react';

function Footer(props) {
    return (
        <>
            {/* footer */}
            < footer >
                <div className="container">
                    <div className="sb-footer-frame">
                        <a href="home-1.html" className="sb-logo-frame">
                            {/* logo img */}
                            <img src="assets/img/ui/logo.svg" alt="Starbelly" />
                        </a>
                        <ul className="sb-social">
                            <li><a href="/"><i className="fab fa-twitter" /></a></li>
                            <li><a href="/"><i className="fab fa-instagram" /></a></li>
                            <li><a href="/"><i className="fab fa-facebook-f" /></a></li>
                            <li><a href="/"><i className="fab fa-youtube" /></a></li>
                        </ul>
                        <div className="sb-copy">© late 2021 Starbelly. All Rights Reserved.</div>
                    </div>
                </div>
            </footer >
        </>
    );
}

export default Footer;