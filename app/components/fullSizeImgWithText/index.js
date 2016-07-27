/**
 *
 * Img.react.js
 *
 * Renders an image, enforcing the usage of the alt="" tag
 */

import React, { PropTypes } from 'react';

import styles from './styles.css';

function FullSizeImgWithText(props) {
    return (
        <section className={styles.imgWrapper}>  
            <img src={props.src} alt={props.alt} className={styles.bg} />
            <div className={styles.arrowWrapper} > 
                <img src={props.arrowsrc} alt="scroll down" className={styles.arrow} onClick={moveDown} />
            </div>
            
        </section>
    );
}
//sdsd
// We require the use of src and alt, only enforced by react in dev mode
FullSizeImgWithText.propTypes = {
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default FullSizeImgWithText;
