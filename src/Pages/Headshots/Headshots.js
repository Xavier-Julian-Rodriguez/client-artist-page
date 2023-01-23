import './Headshots.css';
import React from 'react';
import firstH from '../../Images/IMG_0444.JPG';
import secondH from '../../Images/IMG_0445.JPG';
import thirdH from '../../Images/IMG_0446.JPG';
import fourthH from '../../Images/IMG_0447.JPG';
import fifthH from '../../Images/IMG_0448.JPG';
import sixthH from '../../Images/IMG_0449.JPG';
import seventhH from '../../Images/IMG_0450.JPG';

const Headshots = React.memo(() => {
    const headshotPhotos = [
       firstH, secondH, thirdH, fourthH, fifthH, sixthH, seventhH
    ];
    return (
        <div className='headshotsContainer'>
            <div className='Headshots'>
                <h1>HEADSHOTS</h1>
            </div>
            <div className='headshotsGrid'>
                {headshotPhotos.map((image) => {
                    return(
                        <ul className='headshotsContent'>
                            <li className='imageList'><img className='individualPic' src={image} alt='Caitlin headshot' />'</li>
                        </ul>
                )})}
            </div>
        </div>

    )
})

export default Headshots;