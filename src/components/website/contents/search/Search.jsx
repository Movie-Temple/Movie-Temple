import React, { Component } from 'react'
import SearchPage from '../search/SearchPage'

export class Search extends Component {
    render() {
        return (
            <div>
                <h1>Head component</h1>
                <SearchPage />
            </div>
             
        )
    }
}

export default Search

 /* {/*	Loader}
 <img src={ Loader } className={`search-loading ${ loading ? 'show' : 'hide' }`} alt="loader"/> */