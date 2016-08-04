
import React from 'react';
import { connect } from 'react-redux';
//import Helmet from 'react-helmet';

import { createStructuredSelector } from 'reselect';

import {
    selectShopimg
} from 'containers/App/selectors';

import { 
    loadShopimg
} from '../App/actions';

import LoadingIndicator from 'components/LoadingIndicator';

import styles from './styles.css';

export class Shopimg extends React.Component {

    render() {
        let imgSrc="";
        if(this.props.photo_reference!="" && this.props.shopimg){
            imgSrc = (<img src={this.props.shopimg.data[0]} />);
        }
        
        return (
            <div className={styles.shopimg}>
            {imgSrc}
            </div>
        );
    }
}

Shopimg.propTypes = {
    photo_reference: React.PropTypes.string,
    shopimg: React.PropTypes.oneOfType([
        React.PropTypes.object,
        React.PropTypes.bool,
     ]),
};
/*
function mapDispatchToProps(dispatch) {
  return {
    searchShopimg: (photo_reference) => dispatch(loadShopimg(photo_reference)),

    dispatch,
  };
}
*/
const mapStateToProps = createStructuredSelector({
    shopimg: selectShopimg(),
});


// Wrap the component to inject dispatch and state into it
export default connect(mapStateToProps, null)(Shopimg);
