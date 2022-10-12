import React, {FC} from 'react';
import {ReactComponent as Google} from "../../../assets/img/icons/gogle.svg";
import {ReactComponent as Apple} from "../../../assets/img/icons/apple.svg";
import classes from "./Buttons.module.scss"
interface buttonProps {
    children?: any,
}

export const GoogleLogin: FC<buttonProps> = ({children}) => {
    return (
        <button className={classes.buttonGoogle}>
            <Google className={classes.iconGoogle}/>{children}
        </button>
    );
};

export const AppleGoogle: FC<buttonProps> = ({children}) => {
    return (
        <button className={classes.buttonApple}>
            <Apple className={classes.iconApple}/>{children}
        </button>
    );
};
