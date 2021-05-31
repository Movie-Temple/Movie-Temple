import './movies.css';
import GenreScroller from './GenreScroller';
import PersonalScroller from './PersonalScroller';

const Movies = () => {
    

    return (
        <div className='categories'>
            <PersonalScroller scrollerName='Purchased' category='purchased' />
            <PersonalScroller scrollerName='Purchased' category='rented' />
            <PersonalScroller scrollerName='Purchased' category='watchList' />
            <GenreScroller scrollerName='Comedy' genre={'comedy'}/>
            <GenreScroller scrollerName='Action' genre= {'action'}/>
            <GenreScroller scrollerName='Drama' genre= {'drama'}/>
            <GenreScroller scrollerName='Adventure' genre= {'adventure'}/>
            <GenreScroller scrollerName='Sport' genre= {'sport'}/>
            <GenreScroller scrollerName='Thriller' genre= {'thriller'}/>
            
        </div>
    )

}

export default Movies;