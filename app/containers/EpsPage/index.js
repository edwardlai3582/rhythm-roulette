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
    selectRrsForSort,
    selectRrsForSortLoading    
} from 'containers/App/selectors';

import { loadRrsForSort } from '../App/actions';

import Button from 'components/Button';
import H2 from 'components/H2';
import List from 'components/List';
import ListItem from 'components/ListItem';
import LoadingIndicator from 'components/LoadingIndicator';
import Footer from 'components/Footer';
import styles from './styles.css';

import FullSizeImgWithText from 'components/fullSizeImgWithText';
import HowTo from 'components/HowTo';

import Producer from 'containers/Producer';

export class EpsPage extends React.Component {

  componentDidMount() {
    if(!this.props.rrsForSort){this.props.searchRrsForSort();}  
  }
    
  /**
   * Changes the route
   *
   * @param  {string} route The route we want to go to
   */
  openRoute = (route) => {
    this.props.changeRoute(route);
  };

  /**
   * Changed route to '/features'
   */
  openFeaturesPage = () => {
    this.openRoute('/features');
  };

    render() {
        let content = (<LoadingIndicator />);    
        if (this.props.rrsForSort) {
            content = this.props.rrsForSort.rhythmroulettes.map(function(rr) {
                return <Producer  key={rr.name} name={rr.name} photo={rr.photo} youtubeLink={rr.youtubeLink} />
            });
        }
        
        return (
            <article className={styles.epsPageWrapper}>
                <Helmet
                    title= "episodes"
                    meta={[
                    { name: 'description', content: "episodes" },
                    ]}
                />
            
                <section className={styles.epsSectionWrapper}>
                    <h1>EPISODES</h1>
                    <div >
                        {content}  
                    </div> 
                </section>
            
                <Footer />
            </article>
        );
    }
}

EpsPage.propTypes = {
  changeRoute: React.PropTypes.func,
  rrsForSort: React.PropTypes.oneOfType([
    React.PropTypes.object,
    React.PropTypes.bool,
  ]),
  rrsForSortLoading: React.PropTypes.bool,
};

function mapDispatchToProps(dispatch) {
  return {
    changeRoute: (url) => dispatch(push(url)),


    searchRrsForSort: () => dispatch(loadRrsForSort()),

    dispatch,
  };
}

const mapStateToProps = createStructuredSelector({
    rrsForSort: selectRrsForSort(),
    rrsForSortLoading: selectRrsForSortLoading(),
});

// Wrap the component to inject dispatch and state into it
export default connect(mapStateToProps, mapDispatchToProps)(EpsPage);
