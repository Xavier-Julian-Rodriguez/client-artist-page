import './Resume.css';
import actingResume from '../../Images/actingResume.png';
import stuntResume from '../../Images/stuntResume.png';
import { useState } from 'react';
import React from 'react';


const Resume = React.memo(() => {

    const[isResumeClicked, setIsResumeClicked] = useState(false);
    const[largeResume, setLargeResume] = useState('photoContainer hidden');
    const[thumbnails, setTheThumbnails] = useState('resume unclicked');
    const [theXMark, setTheXMark] = useState('xMark hidden');
    const [mainImage, setMainImage] = useState('');
    const [elementIsClicked, setElementIsClicked] = useState(false);

    const maxTheImage = () => {
        if(!isResumeClicked) {
            setLargeResume('photoContainer visible');
            setTheThumbnails('resume clicked')
            setTheXMark('xMark visible')
        } else {
            setLargeResume('photoContainer hidden');
            setTheThumbnails('resume unclicked');
        }
        setIsResumeClicked(!isResumeClicked);
    }
    const minTheImage = () => {
        if(isResumeClicked) {
            setLargeResume('photoContainer hidden');
            setTheThumbnails('resume unclicked');
            setTheXMark('xMark hidden')
        }
        setIsResumeClicked(isResumeClicked);
    }
    const thisElementIsClicked = () => {
        if(!elementIsClicked){
            setMainImage({stuntResume});
        } else {
            setMainImage(null);
        }
        setElementIsClicked(!elementIsClicked);
    }
    const thatElementIsClicked = () => {
        if(!elementIsClicked){
            setMainImage('../../Images/actingResume.png');
        } else {
            setMainImage(null);
        }
        setElementIsClicked(!elementIsClicked);
    }

    return (
        <div className='resumeContainer'>
            <div className='resumehOneContainer'>
                <h1>RESUMES</h1>
            </div>
            <div>
                <h2 className='h2Resume'>ACTING RESUME</h2>
                <div className='resume acting' onClick={thatElementIsClicked}>
                    <img className={thumbnails} src={actingResume} alt='acting work resume' onClick={maxTheImage} />
                </div>
            </div>
            <div>
                <h2 className='h2Resume'>STUNT RESUME</h2>
                <div className='resume stunt' onClick={thisElementIsClicked}>
                    <img className={thumbnails} src={stuntResume} alt='stunt work resume' onClick={maxTheImage} />
                </div>
            </div>
            <div className='maxItemsContainer'>
                
                <div className={largeResume}>
                    <p className={theXMark} onClick={minTheImage}>x</p>
                    <img src={mainImage} alt='work experience resume' className='enlargedResume'/>
                </div>  
            </div>
        </div>
    )
})

export default Resume;