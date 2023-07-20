import styled from "styled-components";

export const CfWrapper = styled.div`
    margin-bottom: 30px;
    &:hover div:before {
        transform: scale(0.9) translateY(-10%);
    }
    &:hover img {
        transform: scale(1.05) translateY(3%);
    }
`

export const CfImgBox = styled.div`
    overflow: hidden;
    background-color: #F9FAFC;
    border: 2px solid #FFFFFF;
    position: relative;
    padding-bottom: 120%;
    margin-bottom: 15px;
    &:before {
        content: "";
        background-color: #F5C332;
        border-radius: 50%;
        width: 70%;
        height: 57%;
        position: absolute;
        bottom: 15%;
        left: 15%;
        border: dotted 3px #FFFFFF;
        box-shadow: 0 0 0 3px #F5C332;
        filter: blur(5px);
        transition: 0.3s ease-in-out;
    }
`

export const CfImg = styled.img`
    width: 80%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 10%;
    object-fit: cover;
    object-position: bottom;
    transform: scale(1.001) translateY(0);
    transition: 0.3s ease-in-out;
`

export const CfInfo = styled.div`
    text-align: center;
`

export const CfTitle = styled.h3`
    margin-bottom: 10px;
`

export const CfSubTitle = styled.p`
    font-size: 14px;
    margin-bottom: 10px;
`

export const SocialWrapper = styled.ul`
    margin: 0 auto;
    width: 33.333%;
    display: flex;
    justify-content: center;
`
export const IconWrapper  = styled.li`
    margin-right: 15px;
`
    
export const IconLink  = styled.a`
    transition: 0.3s ease-in-out;
    font-size: 14px;
    &:hover {
        color: #F5C332;
    }
`
    