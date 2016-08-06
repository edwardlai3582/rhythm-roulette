/*
 *
 * FullSizeImgWithText
 *
 */

import React from 'react';
import ReactDOM from 'react-dom';

import styles from './styles.css';

import BG from './rr.jpg';
//import BGVIDEO from './rropening3.mp4';
import ARROW from './arrow-206-64.png';

export class FullSizeImgWithText extends React.Component { // eslint-disable-line
    
    goDown = () => {
        let domHeight = ReactDOM.findDOMNode(this).clientHeight;
        let y = window.scrollY;
        let id = setInterval(frame, 1);
        function frame() {
            if (y >= domHeight-75) {
              clearInterval(id);
            } else {
              y+= 5; 
              window.scrollTo(0,y);
            }
        }
    };

    render() {
        if(navigator.userAgent.match(/iPhone|iPod|Android/i)){
            console.log("APPLE!");
            return (
                <section className={styles.imgWrapper} ref="myText">  
                    <img src={BG} alt="scroll down" className={styles.appleBg} />
                    <img src={ARROW} alt="scroll down" className={styles.arrow} onClick={this.goDown} />
                </section>
            );            
        }
        else {
            return (
                <section className={styles.imgWrapper} ref="myText">  
                    <video loop autoPlay="autoplay" poster={BG}  className={styles.bg}>
                      <source src="https://firebasestorage.googleapis.com/v0/b/rhythmroulette-78b71.appspot.com/o/rropening3.mp4?alt=media&token=a2e6140a-242f-4cdb-b616-a658b8b52dd5" type="video/mp4" />
                    </video>
                    <img src={ARROW} alt="scroll down" className={styles.arrow} onClick={this.goDown} />
                </section>
            );
        }    
    }
}

export default FullSizeImgWithText;
