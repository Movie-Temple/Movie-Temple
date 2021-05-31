import './purchased.css'
import { useSelector } from 'react-redux';



const Purchased = () => {

    const currentUserUid = useSelector(state => state.currentUserUid);
    

    const purchasedMovies = useSelector(state => state.purchasedMovies);

    


    return (
        <div className='purchased'>
            <h1>{currentUserUid}</h1>
            <h1>{purchasedMovies}</h1>
            <div className='purchased-browser'>
                <img className='purchased-image' src="" alt="" />
                <img className='purchased-image' src="" alt="" />
                <img className='purchased-image' src="" alt="" />
                <img className='purchased-image' src="" alt="" />
                <img className='purchased-image' src="" alt="" />
                <img className='purchased-image' src="" alt="" />
                <img className='purchased-image' src="" alt="" />
                <img className='purchased-image' src="" alt="" />
            </div> 
        </div>
    )
}

export default Purchased;