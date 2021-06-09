import {Link} from 'react-router-dom';
import Logo from '../../../MTLogoTurqPerspTrans.png'
import '../header/headBar.css';
import SearchBar from '../../website/contents/search/SearchBar'
import userIcon from '../../images/user.png';
const HeadBar = () => {

    return (
        <div className='nav'>
            <div className='nav-search-link'>
                <SearchBar/>
            </div>
            <div className='nav-logo-link'>
                <Link  to="/">
                    <img src={Logo} alt='Logo'></img>
                </Link>
            </div>
            <div className='nav-login-link'>
                <Link to="/Account"> <img src={userIcon} alt='User Icon'></img></Link>
            </div>
        </div>
    )
}

export default HeadBar;