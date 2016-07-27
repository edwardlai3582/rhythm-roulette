/*
 *
 * FullSizeImgWithText
 *
 */

import React from 'react';
import ReactDOM from 'react-dom';

import styles from './styles.css';

import BG from './rr.jpg';
import ARROW from './arrow-206-64.png';

export class FullSizeImgWithText extends React.Component { // eslint-disable-line
    
    goDown = () => {
        let domHeight = ReactDOM.findDOMNode(this).clientHeight;
        let y = window.scrollY;
        let id = setInterval(frame, 1);
        function frame() {
            if (y >= domHeight) {
              clearInterval(id);
            } else {
              y+= 5; 
              window.scrollTo(0,y);
            }
        }
    };

    render() {
        return (
            <section className={styles.imgWrapper} ref="myText">  
                <img src={BG} alt='RHYTHM ROULETTE' className={styles.bg} />
                <img src={ARROW} alt="scroll down" className={styles.arrow} onClick={this.goDown} />
            </section>
        );
    }
}

export default FullSizeImgWithText;
