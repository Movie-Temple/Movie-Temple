import {Link} from 'react-router-dom';
import Logo from '../../../MTLogoPerspTrans.png'
import '../header/headBar.css';
import SearchBar from '../../website/contents/search/SearchBar'

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
                <Link to="/Account">Account</Link>
            </div>
        </div>
    )
}

export default HeadBar;