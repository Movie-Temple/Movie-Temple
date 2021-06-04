import {Link} from 'react-router-dom';
import Logo from '../../../MTLogoPerspTrans.png'
import '../header/headBar.css';
import SearchBar from '../../website/contents/search/SearchBar'

const HeadBar = () => {

    return (
        <div className='nav'>
            <div className='nav-search-link'><SearchBar/></div>
            <p className='nav-logo-link'><Link  to="/"><img src={Logo} alt='Logo'></img></Link></p>
            <p className='nav-login-link'><Link to="/Account">Account</Link></p>
        </div>
    )
}

export default HeadBar;