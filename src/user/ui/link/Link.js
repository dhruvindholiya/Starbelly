import React from 'react';
import { Link, LinkWrapper } from './Link.style';

function CustomLink({text, ...rest }) {
    return (
        <LinkWrapper>
            <Link {...rest}>{text}</Link>
        </LinkWrapper>
    );
}

export default CustomLink;