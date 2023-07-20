import styled from "styled-components";

export const CtgWrapper = styled.a`
display: block;
    background-color: #F9FAFC;
    box-shadow: 0 0 0 2px #FFFFFF;
    margin-bottom: 30px;
    &:hover div:before {
        transform: scale(1.2);
    }
    &:hover img {
        transform: translateY(-10px);
    }
`

export const CtgInner = styled.div`
    display: flex;
    align-items: center;
    text-align: left;
    padding: 30px;
    transition: 0.3s ease-in-out;
`

export const CtgImgBox = styled.div`
    width: 70px;
    height: 70px;
    margin-bottom: 0;
    margin: 0 auto;
    position: relative;
    &:before {
        content: "";
        position: absolute;
        bottom: -5px;
        left: 15px;
        width: 30px;
        height: 30px;
        background-color: #F5C332;
        border-radius: 50%;
        transition: 0.3s ease-in-out;
    }
`

export const CtgImg = styled.img`
    width: 60px;
    position: relative;
    transition: 0.3s ease-in-out;
`

export const CtgInfo = styled.div`
    padding-left: 30px;
`

export const CtgTitle = styled.h3`
    margin-bottom: 10px;
`

export const CtgSubTitle = styled.p`
    color: #6F6F87;
    margin: 0;
    font-size: 15px;
`
