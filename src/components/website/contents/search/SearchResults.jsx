import './searchResults.css'

const SearchResults = () => {

    return (
        <div className='search-results'>
            <div className='search-results-container'>
                <h3 className='search-results-header'>Showing results for: Search word</h3>
                <hr className='search-results-breakline'/>
                <div className='search-results-browser'>
                    Component for side scroll goes here instead of image placeholders
                    <img className='search-results-image' src="" alt="" />
                    <img className='search-results-image' src="" alt="" />
                    <img className='search-results-image' src="" alt="" />
                    <img className='search-results-image' src="" alt="" />
                </div> 
            </div>
        </div>
    )

}

export default SearchResults;