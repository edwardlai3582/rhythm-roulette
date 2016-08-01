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



import styles from './styles.css';

export class Producer extends React.Component {
  /**
   * Changes the route
   *
   * @param  {string} route The route we want to go to
   */
  openRoute = (route) => {
    this.props.changeRoute(route);
  };
//onClick={this.openRoute.bind(this,'/ep')}
  render() {
    return (
        <Link className={styles.wrapperA}  to={"/ep/"+this.props.name.replace(/\s/gi, '_')}>
            <div className={styles.producerImgWrapper}>
                <img src={this.props.photo} alt={this.props.name} className={styles.producerImg} />
            </div>
            <span>
                {this.props.name} 
            </span>   
        </Link>
    );
  }
}

Producer.propTypes = {
  changeRoute: React.PropTypes.func,
};

function mapDispatchToProps(dispatch) {
  return {
    changeRoute: (url) => dispatch(push(url)),
  };
}

export default connect(null, mapDispatchToProps)(Producer);
