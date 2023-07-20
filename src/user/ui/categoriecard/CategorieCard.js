import React from 'react';
import { CtgWrapper, CtgInner, CtgImg, CtgImgBox, CtgInfo, CtgTitle, CtgSubTitle } from './CategorieCard.style';

function CategorieCard({to, as, imgPath, title, subTitle}) {
    return (
        <CtgWrapper to={to} as={as}>
            <CtgInner>
                <CtgImgBox>
                    <CtgImg src={imgPath} alt="icon" />
                </CtgImgBox>
                <CtgInfo>
                    <CtgTitle>{title}</CtgTitle>
                    <CtgSubTitle>{subTitle}</CtgSubTitle>
                </CtgInfo>
            </CtgInner>
        </CtgWrapper>
    );
}

export default CategorieCard;