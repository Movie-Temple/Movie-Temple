import '../welcome.css';

const Welcome = () => {

    return (
        <div className='welcome'>
            <div className='welcome-category-container'>
                <h3 className='welcome-category-header'>Category 1</h3>
                <hr className='welcome-category-breakline'/>
                <div className='welcome-category-browser'>
                    Component for side scroll goes here instead of image placeholders
                    <img className='welcome-image' src="" alt="" />
                    <img className='welcome-image' src="" alt="" />
                    <img className='welcome-image' src="" alt="" />
                    <img className='welcome-image' src="" alt="" />
                </div> 
            </div>
            <div className='welcome-category-container'>
                <h3 className='welcome-category-header'>Category 2</h3>
                <hr className='welcome-category-breakline'/>
                <div className='welcome-category-browser'>
                    This whole welcome-category-container is just for show
                    <img className='welcome-image' src="" alt="" />
                    <img className='welcome-image' src="" alt="" />
                    <img className='welcome-image' src="" alt="" />
                    <img className='welcome-image' src="" alt="" />
                </div> 
            </div>
        </div>
    )
}

export default Welcome;