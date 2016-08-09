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

export class EpsPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {sortBy: "newest"};
    }

    componentDidMount() {
        if(!this.props.rrsForSort){this.props.searchRrsForSort();}  
    }

    sortByViews = (a, b) => {
        var viewA = a.youtubeData.data.viewCount;
        var viewB = b.youtubeData.data.viewCount;
        return viewB - viewA;
    }

    sortByLikes = (a, b) => {
        var likeA = a.youtubeData.data.likeCount;
        var likeB = b.youtubeData.data.likeCount;
        return likeB - likeA;
    }
    
    sortByNewest = (a, b) => {
        var dateA = a.date;
        var dateB = b.date;
        
        return dateB - dateA;
    }
    
    changeSort = (name) => {
        this.setState({sortBy: name});
    }
    
    openRoute = (route) => {
        this.props.changeRoute(route);
    }

    openFeaturesPage = () => {
        this.openRoute('/features');
    }

    render() {
        let content = "";
        let sortedArray = [];
        let selectnewest ="", selectviews="", selectlikes="";
        
        if (this.props.rrsForSortLoading) {
            content = (<LoadingIndicator />);     
        }         
                       
        if (this.props.rrsForSort) {
            if(this.state.sortBy === "newest" ){
                sortedArray = this.props.rrsForSort.rhythmroulettes.sort(this.sortByNewest);
                selectnewest = styles.sortSelected;
            }
            else if(this.state.sortBy === "views" ){
                sortedArray = this.props.rrsForSort.rhythmroulettes.sort(this.sortByViews);
                selectviews = styles.sortSelected;
            } 
            else if(this.state.sortBy === "likes" ){
                sortedArray = this.props.rrsForSort.rhythmroulettes.sort(this.sortByLikes);  
                selectlikes = styles.sortSelected;
            }     
                
            content = sortedArray.map(function(rr) {
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
                    
                    <div className={styles.sortWrapper}>
                        <button className={selectnewest} onClick={this.changeSort.bind(this, 'newest')} >NEWEST</button>
                        <button className={selectviews} onClick={this.changeSort.bind(this, 'views')} >VIEWS</button>
                        <button className={selectlikes} onClick={this.changeSort.bind(this, 'likes')} >LIKES</button>            
                    </div>        
            
                    <div >
                        {content}  
                    </div> 
                </section>
            
         
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
