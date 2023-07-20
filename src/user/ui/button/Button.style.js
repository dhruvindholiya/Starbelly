import styled from "styled-components";

export const PrimaryBtn = styled.button`
    height: 40px;
    padding: 20px;
    min-width: 120px;
    justify-content: center;
    opacity: 1;
    border: none;
    cursor: pointer;
    position: relative;
    display: inline-flex;
    align-items: center;
    transform: scale(1);
    letter-spacing: 0;
    font-size: 14px;
    background-color: #F5C332;
    transition: 0.3s ease-in-out;
    font-weight: 500;
    &:hover {
        filter: brightness(110%);
    }
`
export const GrayBgBtn = styled(PrimaryBtn)`
    background-color: #F2F3F5; 
    height: 55px;
    &:hover {
        filter: brightness(95%);
    }
`
export const WithIconBtn = styled(PrimaryBtn)`
    height: 55px;
    padding: 0 25px 0 5px;
`
export const GrayIconBgBtn = styled(PrimaryBtn)`
    background-color: #F2F3F5;
    height: 55px;
    padding: 0 25px 0 5px;
    &:hover {
        filter: brightness(95%);
    }
`
export const BtnIcon = styled.span`
    border-radius: 50%;
    height: 45px;
    width: 45px;
    background-image: url('${({img}) => img}');
    background-size: 18px 18px;
    background-repeat: no-repeat;
    background-position: center;
`;
