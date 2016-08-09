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
import Footer from 'components/Footer';
import LoadingIndicator from 'components/LoadingIndicator';
import styles from './styles.css';

import FullSizeImgWithText from 'components/fullSizeImgWithText';
import HowTo from 'components/HowTo';

import Producer from 'containers/Producer';

export class UploadPage extends React.Component {
    constructor(props) {
        super(props);
        //this.state = {sortBy: "newest"};
    }

    componentDidMount() {
        //if(!this.props.rrsForSort){this.props.searchRrsForSort();}  
    }
    
    openRoute = (route) => {
        this.props.changeRoute(route);
    }

    openFeaturesPage = () => {
        this.openRoute('/features');
    }

    render() {
        
        return (
            <article className={styles.epsPageWrapper}>
                <Helmet
                    title= "episodes"
                    meta={[
                    { name: 'description', content: "episodes" },
                    ]}
                />
            
                <section className={styles.epsSectionWrapper}>
                    eeee
                </section>
            </article>
        );
    }
}

UploadPage.propTypes = {
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
export default connect(mapStateToProps, mapDispatchToProps)(UploadPage);
