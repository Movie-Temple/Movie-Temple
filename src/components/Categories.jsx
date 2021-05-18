import '../categories.css'

const Categories = () => {

    return (
        <div className='categories'>
            <div className='categories-container'>
                <h3 className='categories-header'>Category</h3>
                <hr className='categories-breakline'/>
                <div className='categories-browser'>
                    Component for side scroll goes here instead of image placeholders
                    <img className='categories-image' src="" alt="" />
                    <img className='categories-image' src="" alt="" />
                    <img className='categories-image' src="" alt="" />
                    <img className='categories-image' src="" alt="" />
                </div> 
            </div>
        </div>
    )

}

export default Categories;