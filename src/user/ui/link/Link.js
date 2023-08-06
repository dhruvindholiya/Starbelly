import React from 'react';
import { Link, LinkWrapper } from './Link.style';

function CustomLink({ text, children, ...rest }) {
    return (
        <LinkWrapper>
            <Link {...rest}>{text}{children}</Link>
        </LinkWrapper>
    );
}

export default CustomLink;