import { Fragment, useState } from 'react';
import { Outlet, Link } from 'react-router-dom';
import styles from "./navigation.module.scss";

const NavigationComponent = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleOpenCloseMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <Fragment>
            <div className={ styles.navWrapper }>
                <Link to="/">
                    <div className={ styles.navLogo }>
                        <img src="images/logo_3.png" alt="logo" />
                    </div>
                </Link>
                <div className={ styles.navBurger } onClick={ handleOpenCloseMenu }>
                    { !isMenuOpen ? (
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M3 18h13v-2H3v2zm0-5h10v-2H3v2zm0-7v2h13V6H3zm18 9.59L17.42 12 21 8.41 19.59 7l-5 5 5 5L21 15.59z" /></svg>
                    ) :
                        (
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0z" fill="none" /><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" /></svg>
                        )
                    }


                </div>
                <div className={ !isMenuOpen ? styles.navLinksClose : styles.navLinksOpen }>
                    <Link to="/" onClick={ handleOpenCloseMenu }>start</Link>
                </div>
            </div>
            <Outlet />
        </Fragment>
    );
};

export default NavigationComponent;