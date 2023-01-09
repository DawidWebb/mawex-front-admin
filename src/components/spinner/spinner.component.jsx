import React from 'react';
import { useSelector } from 'react-redux';
import styles from "./spinner.module.scss";


const Spinner = () => {

    const spinner = useSelector(store => store.spinner);
    return (

        spinner ? (
            <div className={ styles.ldsEllipsis } >
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div >
        ) : null


    );
};

export default React.memo(Spinner);
