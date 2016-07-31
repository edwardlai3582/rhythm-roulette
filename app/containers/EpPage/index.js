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
    selectEp
} from 'containers/App/selectors';

import { loadEp } from '../App/actions';


import LoadingIndicator from 'components/LoadingIndicator';

import styles from './styles.css';

export class EpPage extends React.Component {

    componentDidMount() {
        //this.props.searchRrs();  
    }

    render() {
        return (
            <article>
                <Helmet
                    title="Ep Page"
                    meta={[
                    { name: 'description', content: 'A React.js Boilerplate application homepage' },
                    ]}
                />
                <div>
                    qq
                </div>
            </article>
        );
    }
}

EpPage.propTypes = {
  changeRoute: React.PropTypes.func,
  loading: React.PropTypes.bool,
  error: React.PropTypes.oneOfType([
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
  ep: selectEp(),
});

// Wrap the component to inject dispatch and state into it
export default connect(mapStateToProps, mapDispatchToProps)(EpPage);
