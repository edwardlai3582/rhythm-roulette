import React from 'react';

import styles from './styles.css';

export class Record extends React.Component {
    
    render() {
        //let title = "";
        //let artist = "";
        let image = "";
        let discogsLink = "";
        console.log(this.props.record.data);
        if(this.props.record.data){
            if(!this.props.record.data.statusCode){
                //title = this.props.record.data.title;
                //artist = this.props.record.data.artists[0].name;
                discogsLink = (<a target="_blank" href={this.props.record.data.uri} className={styles.discogsA}>Discogs</a>); 
                if(this.props.record.data.images && this.props.record.data.images.length>0){
                    image=(<img src={this.props.record.data.images[0].uri150} />);
                }                
            }
        }
        
        return (
            <section className={styles.recordWrapper}>
                <div className={styles.recordImgWRapper}>           
                    {image}
                </div>           
                <div className={styles.textWrapper}>
                    <p>{this.props.album}</p>
                    <p>{this.props.artist}</p>
                    <p>{discogsLink}</p>                            
                </div>                
            </section>
        );
    }
}

Record.propTypes = {
    artist: React.PropTypes.string,
    album: React.PropTypes.string,
    record: React.PropTypes.oneOfType([
        React.PropTypes.object,
        React.PropTypes.bool,
     ]),
};

export default Record;

