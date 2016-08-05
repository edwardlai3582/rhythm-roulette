/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import Helmet from 'react-helmet';

import messages from './messages';
import { createStructuredSelector } from 'reselect';

import {
  selectLoading,
  selectError,
    selectRrs
} from 'containers/App/selectors';

import {
  selectUsername,
} from './selectors';

import { changeUsername } from './actions';
import { loadRrs } from '../App/actions';

import { FormattedMessage } from 'react-intl';

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

export class HomePage extends React.Component {
  /**
   * when initial state username is not null, submit the form to load repos
   */
  componentDidMount() {
    if(!this.props.rrs){this.props.searchRrs();}  
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
      console.log("rrrr");
    let content = (<LoadingIndicator />);
    let contentMostViewed = (<LoadingIndicator />);
                   
    if (this.props.rrs) {
        content = this.props.rrs.rhythmroulettes.map(function(rr, i) {
            if(i>3){ return; }
            return <Producer  key={rr.name} name={rr.name} photo={rr.photo} youtubeLink={rr.youtubeLink} />
        });
    }
    
    /*  
    if (this.props.rrs.rhythmroulettes && this.props.rrs.rhythmroulettes[this.props.rrs.rhythmroulettes.length-1].youtubeData) {
        
        let sortByViewed = this.props.rrs.rhythmroulettes.sort(function(a, b) {
            var viewA = a.youtubeData.data.items[0].statistics.viewCount;
            var viewB = b.youtubeData.data.items[0].statistics.viewCount;
            return viewB - viewA;
        });
        for(let i=0; i<sortByViewed.length; i++){
            console.log(sortByViewed[i].youtubeData.data.items[0].statistics.viewCount);    
        }
        
        contentMostViewed = sortByViewed.map(function(rr, i) {
            if(i>3){ return; }
            return <Producer  key={rr.name} name={rr.name} photo={rr.photo} youtubeLink={rr.youtubeLink} />
        });
    }      
    */
                     
    return (
      <article>
        <Helmet
          title="Home Page"
          meta={[
            { name: 'description', content: 'A React.js Boilerplate application homepage' },
          ]}
        />
        <div>
                     
            <FullSizeImgWithText />
            <HowTo />

            <section className={styles.ProducerlistWrapper}>
                <h2>LATEST EPISODES</h2>
                <div className={styles.ProducerItemsWrapper}>
                    {content}  
                </div>
            </section> 
        

        
        </div>
        
        <Footer />
      </article>
    );
  }
}

/*
          <section className={`${styles.textSection} ${styles.centered}`}>
            <H2>
              How to Rhythm Roulette?
            </H2>
            <p> 1. Find record store </p>
            <p> 2. Blind-fold producer </p>
            <p> 3. Pick 3 random records </p>
            <p> 4. Make a beat by sampling </p>
          </section>
*/

HomePage.propTypes = {
  changeRoute: React.PropTypes.func,
  loading: React.PropTypes.bool,
  error: React.PropTypes.oneOfType([
    React.PropTypes.object,
    React.PropTypes.bool,
  ]),
  rrs: React.PropTypes.oneOfType([
    React.PropTypes.object,
    React.PropTypes.bool,
  ]),    
};

function mapDispatchToProps(dispatch) {
  return {
    onChangeUsername: (evt) => dispatch(changeUsername(evt.target.value)),
    changeRoute: (url) => dispatch(push(url)),


    searchRrs: () => dispatch(loadRrs()),

    dispatch,
  };
}

const mapStateToProps = createStructuredSelector({

  username: selectUsername(),
  loading: selectLoading(),
  error: selectError(),
  rrs: selectRrs(),
});

// Wrap the component to inject dispatch and state into it
export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
