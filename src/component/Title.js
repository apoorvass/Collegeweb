import imag from './images/college1.jpg';
import './Title.css';
function Title()
{
    return(
        <div>
            <div className='position1'>
                <p className='num6'>Home</p>
                <select className='num7'>
                    <option>About</option>
                    <option>STJ Education Society</option>
                    <option>Governing Council</option>
                    <option>GC Meeting Proceedings</option>
                    <option>Organization Structure</option>
                    <option>Mandatory Disclousures</option>
                    <option>President Message</option>
                </select>
                <p className='num8'> Admission</p>
                <p className='num9'> Department</p>
                <p className='num10'> Placement</p>
                <p className='num11'> Facilities</p>
                <p className='num12'> contact</p>
            </div>
            <div>
                <img src={imag} alt='' className='photosize'></img>
            </div>
        </div>
    );
}
export default Title;