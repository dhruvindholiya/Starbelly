import styled from "styled-components";

export const LinkWrapper = styled.li`
    display: flex;
    align-items: center;
    position: relative;
    margin: 0 25px;
    transition: 0.3s ease-in-out;
    &:hover > a{
        color: rgb(245, 195, 50) !important;
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
`