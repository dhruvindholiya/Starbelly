import styled from "styled-components";

export const LinkWrapper = styled.li`
    display: flex;
    align-items: center;
    position: relative;
    padding: 15px 33px;
    transition: 0.3s ease-in-out;
    &:hover a{
        color: #231E41 !important;
    }
    &:hover a:after {
        transform: scale(1);
        right: -10px;
    }
    &:hover a:before {
        transform: scale(1);
        left: -10px;
    }
`
export const Link = styled.a`
    position: relative;
    display: inline-block;
    font-weight: 400;
    height: 100%;
    color: #231E41;
    font-size: 14px;
    transition: 0.3s ease-in-out;
    cursor: pointer;
    &:before , &:after {
        content: '';
        position: absolute;
        top: 50%;
        left: calc(100% + 10px);
        margin-top: -3px;
        height: 8px;
        width: 8px;
        border-radius: 50%;
        background-color: #F5C332;
        transform: scale(0);
        transition: 0.5s ease-out;
        z-index: -1;
    }
    &:after {
        left: auto;
        right: calc(100% + 10px);
    }
`