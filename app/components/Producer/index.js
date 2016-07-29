import React from 'react';

import styles from './styles.css';

function Producer(props) {
    return (
        <div className={styles.wrapperA}>
            <div className={styles.producerImgWrapper}>
                <img src={props.photo} alt={props.name} className={styles.producerImg} />
            </div>
            <span>
                {props.name} 
            </span>   
        </div>
    );
}
//alt={props.name}
Producer.propTypes = {
    youtubeLink: React.PropTypes.string,
    photo: React.PropTypes.string,
    name: React.PropTypes.string,
    //item: React.PropTypes.any,
};

export default Producer;
