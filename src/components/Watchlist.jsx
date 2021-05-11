import '../watchlist.css'

const Watchlist = () => {

    return (
        <div className='watchlist'>
            <div className='watchlist-category-container'>
                <h3 className='watchlist-category-header'>Watch List</h3>
                <hr className='watchlist-category-breakline'/>
                <div className='watchlist-category-browser'>
                    Component for side scroll goes here instead of image placeholders
                    <img className='watchlist-image' src="" alt="" />
                    <img className='watchlist-image' src="" alt="" />
                    <img className='watchlist-image' src="" alt="" />
                    <img className='watchlist-image' src="" alt="" />
                </div> 
            </div>
        </div>
    )
}

export default Watchlist;