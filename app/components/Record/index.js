import React from 'react';

import styles from './styles.css';

export class Record extends React.Component {
    
    render() {
        let title = "";
        let artist = "";
        let image = "";
        let discogsLink = "";
        console.log(this.props.record.data);
        if(this.props.record.data){
            if(!this.props.record.data.statusCode){
                title = this.props.record.data.title;
                artist = this.props.record.data.artists[0].name;
                discogsLink = (<a target="_blank" href={this.props.record.data.uri}>Discogs</a>); 
                if(this.props.record.data.images && this.props.record.data.images.length>0){
                    image=(<img src={this.props.record.data.images[0].uri150} />);
                }                
            }
        }
        
        return (
            <section className={styles.recordWrapper}>
                {image}
                <p>{title}</p>
                <p>{artist}</p>
                <p>{discogsLink}</p>      
            </section>
        );
    }
}

Record.propTypes = {
    record: React.PropTypes.oneOfType([
        React.PropTypes.object,
        React.PropTypes.bool,
     ]),
};

export default Record;

