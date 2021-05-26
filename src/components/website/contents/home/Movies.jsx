import './movies.css';
import SideScroller from './SideScroller';
import movieDb from '../../../movieDb';

const Movies = () => {
       
    

    return (
        <div className='categories'>

            <SideScroller scrollerName='Comedy' genre={'comedy'}/>
            <SideScroller scrollerName='Action' genre= {'action'}/>
            
        </div>
    )

}

export default Movies;