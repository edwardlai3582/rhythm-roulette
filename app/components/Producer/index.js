import React from 'react';

import styles from './styles.css';

function Producer(props) {
    return (
        <a className={styles.wrapperA} >
            <div className={styles.producerImgWrapper}>
                <img src={props.photo} alt={props.name} className={styles.producerImg} />
            </div>
            <span>
                {props.name} 
            </span>   
        </a>
    );
}
//alt={props.name}
Producer.propTypes = {
    youtubeLink: React.PropTypes.string,
    photo: React.PropTypes.string,
    name: React.PropTypes.string,
};

export default Producer;
