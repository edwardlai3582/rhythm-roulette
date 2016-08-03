/*
 * EpPage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import Helmet from 'react-helmet';


import { createStructuredSelector } from 'reselect';

import {
    selectLocationState,
    selectEp,
    selectRecord1, selectRecord1Loading,
    selectRecord2, selectRecord2Loading,
    selectRecord3, selectRecord3Loading
} from 'containers/App/selectors';

import { 
    loadEp
} from '../App/actions';

import LoadingIndicator from 'components/LoadingIndicator';
import Record from 'components/Record';

import styles from './styles.css';

import Shop from 'containers/Shop';

export class EpPage extends React.Component {

    componentWillMount() {
        //console.log(this.props.params.name);
        if(!this.props.ep || this.props.ep.name !== this.props.params.name.replace(/\_/gi, ' ')){
          this.props.searchEp();     
        } 
        
        //http://edwardlai3582.com/goo?placeid=ChIJCabEhUJbwokRRogoDkVJzTM
        
    }

    render() {
        let producerName="";
        let pathNameArray;
        let youtubeSrc="";
        let placeid="";
        if(this.props.location.locationBeforeTransitions){
            pathNameArray= this.props.location.locationBeforeTransitions.pathname.split("/");
            producerName=pathNameArray[pathNameArray.length-1].replace(/\_/gi, ' ');            
        }
        
        if(this.props.ep){
            //console.log(this.props.ep);
            youtubeSrc = "https://www.youtube.com/embed/"+this.props.ep.youtubeId;
            placeid = this.props.ep.placeid;
            //console.log("EP: placeid="+this.props.ep.placeid);
        }
        
        return (
            <article className={styles.epPageWrapper}>
                <Helmet
                    title={producerName}
                    meta={[
                    { name: 'description', content: {producerName} },
                    ]}
                />
                <section className={styles.epSectionWrapper}>
                    <h1 className={styles.epSectionH1}> 
                        {producerName} 
                    </h1>
                    <section className={styles.epContentUpperWrapper}>
                        <div className={styles.videoAndShopWrapper}>
                            <div className={styles.iframeWrapper}>
                                <iframe src={youtubeSrc} frameBorder="0" allowFullScreen></iframe>
                            </div>
                        </div>
                        <div className={styles.shopWrapper}>
                            <Shop placeid={placeid}/>
                        </div>
                        
                    </section>
                    <section className={styles.recordsWrapper}>
                        <div className={styles.recordWrapper}>
                            <Record record={this.props.record1} />
                        </div>
                        <div className={styles.recordWrapper}>
                            <Record record={this.props.record2} />
                        </div>
                        <div className={styles.recordWrapper}>
                            <Record record={this.props.record3} />
                        </div>
                    </section>
                </section>
            </article>
        );
    }
}

EpPage.propTypes = {
    changeRoute: React.PropTypes.func,
    ep: React.PropTypes.oneOfType([
        React.PropTypes.object,
        React.PropTypes.bool,
     ]),
};

function mapDispatchToProps(dispatch) {
  return {
    changeRoute: (url) => dispatch(push(url)),

    searchEp: () => dispatch(loadEp()),

    dispatch,
  };
}

const mapStateToProps = createStructuredSelector({
    location: selectLocationState(),
    ep: selectEp(),
    record1 : selectRecord1(),
    record2 : selectRecord2(),
    record3 : selectRecord3(),
});


// Wrap the component to inject dispatch and state into it
export default connect(mapStateToProps, mapDispatchToProps)(EpPage);
