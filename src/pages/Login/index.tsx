import React from 'react';
import Text, {TextVariants} from "../../components/UI/Text";
import classes from "./Login.module.scss"
import {ReactComponent as Logo} from "../../assets/img/icons/logo.svg";
import {ReactComponent as Google} from "../../assets/img/icons/gogle.svg";
import {ReactComponent as Apple} from "../../assets/img/icons/apple.svg";
import Images from "../../assets/img/login/images-01.png"

const Index = () => {
    return (
        <div className={classes.container}>
            <div className={classes.content}>
                <div className={classes.images}>
                    <div className={classes.imagesImg}>
                        <img src={Images} alt="Images"/>
                    </div>
                    <Logo className={classes.imagesLogo}/>
                </div>
                <div className={classes.main}>
                    <Logo className={classes.mainLogo}/>
                    <div className={classes.mainTitle}>
                        <Text variant={TextVariants.TitleBig}>
                            Happening now
                        </Text>
                    </div>
                    <div className={classes.mainSubTitle}>
                        <Text variant={TextVariants.TitleMedium}>
                            Join Twitter today.
                        </Text>
                    </div>
                    <div className={classes.mainButtons}>
                        <button className={classes.mainButton}>
                            <Google className={classes.mainGoogle}/> Sign up with Google
                        </button>
                        <button className={classes.mainButton}>
                            <Apple className={classes.mainApple}/> <span>Sign up with Apple</span>
                        </button>
                        <div className={classes.mainOr}>or</div>
                        <button className={classes.mainButtonOr}>
                            Sign up with Apple phone or email
                        </button>
                        <p>
                            By signing up, you agree to
                            the <span>Terms of Service</span> and <span>Privacy<br/>Policy</span>, including <span>Cookie Use.</span>
                        </p>
                        <div className={classes.mainSubTitle}>
                            <Text variant={TextVariants.TitleMedium}>
                                Already have an account?
                            </Text>
                        </div>
                        <button className={classes.mainButtonSignIn}>
                            <span>Sign in</span>
                        </button>
                    </div>
                </div>
            </div>
            <footer className={classes.footer}>
                <span>About</span>
                <span>Help Center</span>
                <span>Terms of Service</span>
                <span>Terms of Service</span>
                <span>Terms of Service</span>
                <span>Terms of Service</span>
                <span>Terms of Service</span>
                <span>Terms of Service</span>
                <span>Terms of Service</span>
                <span>Terms of Service</span>
                <span>Terms of Service</span>
                <span>Terms of Service</span>
                <span>Terms of Service</span>
                <span>Terms of Service</span>
                <span>Terms of Service</span>
                <span>Terms of Service</span>
                <span>Terms of Service</span>
                <span>Terms of Service</span>
                <span>Terms of Service</span>
                <span>Terms of Service</span>
                <span>Terms of Service</span>
                <span>Terms of Service</span>
                <span>Terms of Service</span>
                <span>Terms of Service</span>
                <span>Terms of Service</span>
                <span>Terms of Service</span>
                <span>Terms of Service</span>
                <span>Terms of Service</span>
                <span>Terms of Service</span>
            </footer>
        </div>
    );
};

export default Index;