/*
 *
 * FullSizeImgWithText
 *
 */

import React from 'react';
import ReactDOM from 'react-dom';

import MPC from './mpc.jpg';
import styles from './styles.css';


export class HowTo extends React.Component { // eslint-disable-line
    constructor(props) {
        super(props);

        this.state = { 
            steps : ['Find record store ', 'Blind-fold producer', 'Pick 3 random records', 'Make a beat by sampling'],
            currentStep: 0
        };
    }

    nextStep = (step) => {
        this.setState({currentStep: step});
    };

    render() {
        let step1 = this.state.currentStep == 0 ? styles.current : '';
        let step2 = this.state.currentStep == 1 ? styles.current : '';
        let step3 = this.state.currentStep == 2 ? styles.current : '';
        let step4 = this.state.currentStep == 3 ? styles.current : '';
        
        return (
            <section className={styles.HowToSection} style={{backgroundImage: 'url(' + MPC + ')',}}>
                <div className={styles.HowToDisplay}>
                    <p className={styles.stepOrder} > 00{this.state.currentStep+1}: &nbsp;</p>
                    <p > {this.state.steps[this.state.currentStep]} </p>
                </div>
                <div className={styles.HowToText}>
                    <p>How to?</p>
                </div>
                <div className={styles.HowToButton}>
                    <span>STEP: </span>
                    <button onClick={this.nextStep.bind(this, 0)} className={step1}>1</button>
                    <button onClick={this.nextStep.bind(this, 1)} className={step2}>2</button>
                    <button onClick={this.nextStep.bind(this, 2)} className={step3}>3</button>
                    <button onClick={this.nextStep.bind(this, 3)} className={step4}>4</button>
                </div>
            </section>
        );
    }
}

export default HowTo;
