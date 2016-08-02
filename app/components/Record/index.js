import React from 'react';

import styles from './styles.css';

export class Record extends React.Component {
    
    render() {
        let title = "";
        let artist = "";
        let image = "";
        if(this.props.record.data){
            title = this.props.record.data.title;
            artist = this.props.record.data.artists[0].name;
            if(this.props.record.data.images && this.props.record.data.images.length>0){
                image=(<img src={this.props.record.data.images[0].uri150} />);
            }
        }
        
        return (
            <section>
                       {image}
                <p>{title}</p>
                <p>{artist}</p>
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

