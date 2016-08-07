/**
 *
 * App.react.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { push } from 'react-router-redux';
import Helmet from 'react-helmet';

import { createStructuredSelector } from 'reselect';

import {
  selectLocationState
} from './selectors';

// Import the CSS reset, which HtmlWebpackPlugin transfers to the build folder
import 'sanitize.css/sanitize.css';

import Img from 'components/Img';
import Footer from 'components/Footer';
//import Banner from './banner-metal.jpg';
import A from 'components/A';

import styles from './styles.css';
import logoBlack from './logo.svg';
import logoWhite from './logo-white.svg';
import logoYellow from './logo-yellow.svg';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {backgroundClass: false};
    }
    
    componentDidMount(){
        window.addEventListener('scroll', this.handleScroll.bind(this));
    }
    
    handleScroll(){
        if(window.pageYOffset > 75){
            this.setState({backgroundClass: true})
        }
        else{
            this.setState({backgroundClass: false})    
        }
    }
    
    openRoute = (route) => {
        this.props.changeRoute(route);
    };

    openHomePage = () => {
        if(this.props.location.locationBeforeTransitions.pathname.split("/")[1] !== ""){
            this.openRoute('/');    
        }
    };
    
    render() {
        let isHomePage = this.props.location.locationBeforeTransitions.pathname.split("/")[1]===""?true:false;
        let headerWrapperClass = styles.headerWrapper;
        
        if(!isHomePage){
            headerWrapperClass= `${styles.headerWrapper} ${styles.headerWrapperBlack}`;    
        }        
        else if(this.state.backgroundClass){
            headerWrapperClass= `${styles.headerWrapper} ${styles.headerWrapperBlack}`;
        }
        
        return (
            <div className={styles.wrapper}>
                <Helmet
                    titleTemplate="%s - Rhythm Roulette"
                    defaultTitle="Rhythm Roulette"
                    meta={[
                    { name: 'description', content: 'A Rhythm Roulette information site' },
                    ]}
                />
                
                <header className={headerWrapperClass}>
                    <Link className={styles.headerA}  to="/">
                        <img src={logoWhite} alt="massappeal" className={styles.logo} />
                        <h1>RHYTHM ROULETTE</h1>
                    </Link>
                    <nav>
                        <Link className={styles.epLink}  to={"/ep"}>
                            EPISODES
                        </Link>
                    </nav>
                </header>
            
                {this.props.children}
                
            </div>
        );
    }
}
//onClick={this.openHomePage}
/*
      <A className={styles.logoWrapper} href="https://twitter.com/mxstbr">
        <Img className={styles.logo} src={Banner} alt="react-boilerplate - Logo" />
      </A>
      
      <Footer />
*/

App.propTypes = {
  children: React.PropTypes.node,
  location: React.PropTypes.object,   
};

const mapStateToProps = createStructuredSelector({
  location: selectLocationState(),
});

function mapDispatchToProps(dispatch) {
  return {
    changeRoute: (url) => dispatch(push(url)),
  };
}

// Wrap the component to inject dispatch and state into it
export default connect(mapStateToProps, mapDispatchToProps)(App);
