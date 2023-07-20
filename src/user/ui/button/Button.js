import React from 'react';
import { GrayBgBtn,GrayIconBgBtn, WithIconBtn, PrimaryBtn, BtnIcon } from './Button.style';

function Button({ imgPath, variant, text, ...rest }) {
    const checkButtonType = () => {
        switch (variant) {
            case 'grayBgBtn':
                return GrayBgBtn;
            case 'iconBtn':
                return WithIconBtn;
            case 'iconWithGrayBtn':
                return GrayIconBgBtn;
            default:
                return PrimaryBtn;
        }
    }

    const BaseButton = checkButtonType()
    return (
        <BaseButton {...rest} >
            {imgPath && <BtnIcon img={imgPath}/>}
            {text}
        </BaseButton>
    );
}

export default Button;