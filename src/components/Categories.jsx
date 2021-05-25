import '../categories.css'
import SideScroller from './SideScroller'
import movieDb from './movieDb';
import { useSelector } from 'react-redux';
import { useState } from 'react';

const Categories = () => {
    const movie = useSelector(state => state.currentMovie);
    const movies = useSelector(state => state.movies);

    function getByGenre(query) {
        movies.filter(function(movie){return})
    }

    return (
        <div className='categories'>

            <SideScroller scrollerName='Comedy' movies={}/>
            <SideScroller scrollerName='Action' titles={['black panther', 'avengers: endgame', 'mission: impossible - fallout', 'mad max: fury road', 'wonder woman', 'dunkirk', 'the dark knight']}/>
            <SideScroller scrollerName="Popular" titles={[movieDb[0], movieDb[1], movieDb[2], movieDb[3], movieDb[4], movieDb[5]]}/>

            {/* <div className='categories-container'>
                <h3 className='categories-header'>Category</h3>
                <hr className='categories-breakline'/>
                <div className='categories-browser'>
                    Component for side scroll goes here instead of image placeholders
                    <img className='categories-image' src="" alt="" />
                    <img className='categories-image' src="" alt="" />
                    <img className='categories-image' src="" alt="" />
                    <img className='categories-image' src="" alt="" />
                </div> 
            </div> */}
        </div>
    )

}

export default Categories;