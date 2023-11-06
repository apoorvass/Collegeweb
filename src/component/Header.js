import './Header.css';
import logo from './images/logo.png'
function Header()
{
    return(
        <div>
            <div className='contact'>
                <h5 className='num1'>08373-266343, 262075</h5>
                <h5 className='num2'>Fax: 08373-266427</h5> 
                <h5 className='num3'>CET CODE : E033</h5>
                <h5 className='num4'>Research Program</h5>
                <h5 className='num5'>Alumni</h5>
            </div>
            <div className='a1'>
                <img src={logo} alt='headimg'></img>
            </div>
        </div>
    );
}
export default Header;