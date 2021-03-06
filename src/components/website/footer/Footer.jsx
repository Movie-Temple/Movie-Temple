import './footer.css';
import { useHistory } from 'react-router-dom';


const Footer = () => {

    const history = useHistory();
  
    function clickAboutUs() {
      history.push("/AboutUs");
    }

    function clickSupport() {
        history.push("/Support");
    }

    function clickCareer() {
        history.push("/Career");
    }
      
    function clickPolicy() {
        history.push("/Policy");
    }
    
    function clickFaq() {
        history.push("/FAQ");
    }

    return (
        <div className="footer">
            <p className='footer-element' onClick={clickAboutUs} >About</p>
            <p className='footer-element' onClick={clickSupport}>Support</p>
            <p className='footer-element' onClick={clickCareer}>Career</p>
            <p className='footer-element' onClick={clickPolicy}>Policy</p>
            <p className='footer-element' onClick={clickFaq}>FAQ</p>
            </div>
    );
}

export default Footer;
