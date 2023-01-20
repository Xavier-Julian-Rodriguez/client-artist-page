import { Instagram } from '../../Images/Socials';
import Facebook  from '../../Images/facebook.png';
import Youtube  from '../../Images/youtube.png';
import IMDb  from '../../Images/IMDb.png';
import './Footer.css';

const Footer = () => {
    
    return (
        <div className="footer">
            <a href='https://www.instagram.com/caitlinhutson/?hl=en' target='blank'><Instagram className='instagramLogo' /></a>
            <a href='https://www.facebook.com/caitlin.hutson.5/' target='blank'><img  src={Facebook} alt='facebook logo' /></a>
            <a href='https://www.youtube.com/channel/UCerlQxaI0tUR1YMRdElcOYw?view_as=subscriber' target='blank'><img src={Youtube} alt='youtube logo' /></a>
            <a href='https://www.imdb.com/name/nm8600956/' target='blank'><img src={IMDb} alt='IMDb logo' /></a>
            <p className='copyright'>Copyright ©2023 Caitlin Hutson</p>
            <p className='createdBy'>Created by Kaleidoscope Designs Agency</p>
        </div>
    )
}

export default Footer;