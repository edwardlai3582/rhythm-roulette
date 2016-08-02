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


let content = (<LoadingIndicator />);    
if (this.props.rrs) {
content = this.props.rrs.rhythmroulettes.map(function(rr) {
return <Producer  key={rr.name} name={rr.name} photo={rr.photo} youtubeLink={rr.youtubeLink} />
})
}
//handleRoute={this.props.changeRoute.bind(this,'/ep')}

                     
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
                <h2>EPISODES</h2>
                <div className={styles.ProducerItemsWrapper}>
                    {content}  
                </div>
            </section>   

        </div>
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

  onSubmitForm: React.PropTypes.func,
  username: React.PropTypes.string,
  onChangeUsername: React.PropTypes.func,
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
