import React, {FC} from 'react';
import classes from "./Text.module.scss";

export enum TextVariants {
    TitleMedium,
    TitleBig,
}

interface TextProps {
    children: any,
    variant: TextVariants,
}


const Index: FC<TextProps> =
    ({
         children,
         variant,

     }) => {
        const TitleBig =`${variant === TextVariants.TitleBig ? classes.TitleBig : ''}`
        const TitleMedium =`${variant === TextVariants.TitleMedium ? classes.TitleMedium : ''}`
        const Style: any = `${TitleBig}${TitleMedium}`

        return (
            <div className={Style}>
                {children}
            </div>
        );
    };

export default Index;
