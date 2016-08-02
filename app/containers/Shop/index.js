
import React from 'react';
import { connect } from 'react-redux';
//import Helmet from 'react-helmet';

import { createStructuredSelector } from 'reselect';

import {
    selectShop
} from 'containers/App/selectors';

import { 
    loadShop
} from '../App/actions';

import LoadingIndicator from 'components/LoadingIndicator';

import styles from './styles.css';

export class Shop extends React.Component {

    componentDidMount() {
        if(this.props.placeid !== ""){
            //console.log("FIRE (didMount)loadShop: "+nextProps.placeid);
            //this.props.searchShop(this.props.placeid);  
        }
    }
    
    componentWillReceiveProps(nextProps){
        console.log("===================");
        console.log("nextProps");
        console.log(nextProps);
        console.log("===================");
        if(nextProps.placeid !== this.props.placeid && nextProps.placeid!==""){
            console.log("FIRE (receivedProps)loadShop: "+nextProps.placeid);
            this.props.searchShop(nextProps.placeid);  
        }        
    }

    render() {
        let qq="ssss";
        ///*
        if(this.props.shop.data){
            if(this.props.shop.data.status==="OK"){
                qq =  this.props.shop.data.result.name;
                //console.log(qq);   
            }
        }
        //*/
        return (
            <article>
                <section >
                    {qq}
                </section>
            </article>
        );
    }
}

Shop.propTypes = {
    placeid: React.PropTypes.string,
    shop: React.PropTypes.oneOfType([
        React.PropTypes.object,
        React.PropTypes.bool,
     ]),
};

function mapDispatchToProps(dispatch) {
  return {
    searchShop: (placeid) => dispatch(loadShop(placeid)),

    dispatch,
  };
}

const mapStateToProps = createStructuredSelector({
    shop: selectShop(),
});


// Wrap the component to inject dispatch and state into it
export default connect(mapStateToProps, mapDispatchToProps)(Shop);
