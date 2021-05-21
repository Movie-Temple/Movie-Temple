import React, { Component } from 'react'
import axios from 'axios';

export class Search extends Component {
    
        constructor( props ) {
            super( props );
    
            this.state = {
                query: '',
                results: {},
                loading: false,
                message: '',
                totalResults: 0,
               
            };
    
            this.cancel = '';
        }
    
        /**
         * Fetch the search results and update the state with the result.
         * Also cancels the previous query before making the new one.
         * @param {int} updatedPageNo Updated Page No.
         * @param {String} query Search Query.
         *
         */
        fetchSearchResults = ( updatedPageNo = '', query ) => {
       
            const searchUrl = `http://www.omdbapi.com/?t=$=${query}&plot=full&apikey=a79f43b6`;
    
            if( this.cancel ) {
                this.cancel.cancel();
            }
    
            this.cancel = axios.CancelToken.source();
    
            axios.get( searchUrl, {
                cancelToken: this.cancel.token
            } )
                .then( res => {
                    const total = res.data.total;
                    const totalPagesCount = this.getPageCount( total, 20 );
                    const resultNotFoundMsg = ! res.data.hits.length
                                            ? 'There are no more search results. Please try a new search'
                                            : '';
                    this.setState( {
                        results: res.data.hits,
                        message: resultNotFoundMsg,
                        totalResults: total,
                        totalPages: totalPagesCount,
                        loading: false
                    } )
                } )
                .catch( error => {
                    if ( axios.isCancel(error) || error ) {
                        this.setState({
                            loading: false,
                            message: 'Failed to fetch the data. Please check network'
                        })
                    }
                } )
        };
    
        handleOnInputChange = ( event ) => {
            const query = event.target.value;
            if ( ! query ) {
                this.setState( { query, results: {}, message: '', totalPages: 0, totalResults: 0 } );
            } else {
                this.setState( { query, loading: true, message: '' }, () => {
                    this.fetchSearchResults( 1, query );
                } );
            }
        };
    
        handlePageClick = ( type ) => {
            document.body.addEventListener('click', false).preventDefault();
            const updatePageNo = 'prev' === type
                ? this.state.currentPageNo - 1
                : this.state.currentPageNo + 1;
    
            if( ! this.state.loading  ) {
                this.setState( { loading: true, message: '' }, () => {
                    this.fetchSearchResults( updatePageNo, this.state.query );
                } );
            }
        };
    
        renderSearchResults = () => {
            const { results } = this.state;
    
            if ( Object.keys( results ).length && results.length ) {
                return (
                    <div className="results-container">
                        { results.map( result => {
                            return (
                                <a key={ result.id } href={ result.previewURL } className="result-item">
                                    <h6 className="image-username">{result.user}</h6>
                                    <div className="image-wrapper">
                                        <img className="image" src={ result.previewURL } alt={`${result.username} image`}/>
                                    </div>
                                </a>
                            )
                        } ) }
    
                    </div>
                )
            }
        };
    
        render() {
            const { query, message, } = this.state;
    
            
    
            return (
                <div className="container">
                {/*	Heading*/}
                <h2 className="heading">Search for movies</h2>
                {/* Search Input*/}
                <label className="search-label" htmlFor="search-input">
                    <input
                        type="text"
                        name="query"
                        value={ query }
                        id="search-input"
                        placeholder="Search..."
                        onChange={this.handleOnInputChange}
                    />
                    <i className="fa fa-search search-icon" aria-hidden="true"/>
                </label>
    
                {/*	Error Message*/}
                    {message && <p className="message">{ message }</p>}
    
            
    
                </div>
            )
        }
    }

export default Search

 /* {/*	Loader}
 <img src={ Loader } className={`search-loading ${ loading ? 'show' : 'hide' }`} alt="loader"/> */