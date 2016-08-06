/*
 * FeaturePage
 *
 * List all the features
 */
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { push } from 'react-router-redux';
import Helmet from 'react-helmet';

import { 
    clearShopImg, clearShop
} from '../App/actions';

import styles from './styles.css';

export class Producer extends React.Component {

  openRoute = (route) => {
    this.props.clearShop();  
    this.props.clearShopImg();    
    this.props.changeRoute(route);
  };

  render() {
    return (
        <a className={styles.wrapperA}  onClick={this.openRoute.bind(this,'/ep/'+this.props.name.replace(/\s/gi, '_'))} >
            <div className={styles.producerImgWrapper}>
                <img src={this.props.photo} alt={this.props.name} className={styles.producerImg} />
            </div>
            <div className={styles.producerNameWrapper}>
                <span>{this.props.name}</span>
            </div>       
        </a>
    );
  }
}

Producer.propTypes = {
  changeRoute: React.PropTypes.func,
};

function mapDispatchToProps(dispatch) {
  return {
    changeRoute: (url) => dispatch(push(url)),
    clearShopImg: () => dispatch(clearShopImg()),  
    clearShop: () => dispatch(clearShop()),
     
  };
}

export default connect(null, mapDispatchToProps)(Producer);

/*
        <Link className={styles.wrapperA}  to={"/ep/"+this.props.name.replace(/\s/gi, '_')}>
            <div className={styles.producerImgWrapper}>
                <img src={this.props.photo} alt={this.props.name} className={styles.producerImg} />
            </div>
            <div className={styles.producerNameWrapper}>
                <span>{this.props.name}</span>
            </div>       
        </Link>
*/
