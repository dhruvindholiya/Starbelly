import React from 'react';
import { CfWrapper, CfImgBox, IconLink, SocialWrapper, IconWrapper, CfSubTitle, CfTitle, CfInfo, CfImg } from './ChefCard.style';

function ChefCard({ imgPath, title, subTitle }) {
    return (
        <CfWrapper>
            <CfImgBox>
                <CfImg src={imgPath} alt="Team member" />
            </CfImgBox>
            <CfInfo>
                <CfTitle>{title}</CfTitle>
                <CfSubTitle>{subTitle}</CfSubTitle>
                <SocialWrapper>
                    <IconWrapper>
                        <IconLink href='/'><i className="fab fa-twitter" /></IconLink>
                    </IconWrapper>
                    <IconWrapper>
                        <IconLink href='/'><i className="fab fa-instagram" /></IconLink>
                    </IconWrapper>
                    <IconWrapper>
                        <IconLink href='/'><i className="fab fa-facebook-f" /></IconLink>
                    </IconWrapper>
                    <IconWrapper>
                        <IconLink href='/'><i className="fab fa-youtube" /></IconLink>
                    </IconWrapper>
                </SocialWrapper>
            </CfInfo>
        </CfWrapper>
    );
}

export default ChefCard;