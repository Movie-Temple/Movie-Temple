import './movies.css';
import SideScroller from './SideScroller';
import movieDb from '../../../movieDb';

const Movies = () => {
       
    

    return (
        <div className='categories'>

            <SideScroller scrollerName='Comedy' genre={'comedy'}/>
            <SideScroller scrollerName='Action' genre= {'action'}/>
            <SideScroller scrollerName='Drama' genre= {'drama'}/>
            <SideScroller scrollerName='Adventure' genre= {'adventure'}/>
            <SideScroller scrollerName='Sport' genre= {'sport'}/>
            <SideScroller scrollerName='Thriller' genre= {'thriller'}/>
            
        </div>
    )

}

export default Movies;