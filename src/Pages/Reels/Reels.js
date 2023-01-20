import './Reels.css';
import React from 'react';

const Reels = React.memo(() => {
    const videos = [
        {film:<iframe width="300" height="225" src="https://www.youtube.com/embed/Z1D1BYl29aA?start=62" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>, title:`Fight or Flight 2 - Sifu`, director: 'Jay Kwon', camera:'Jay Kwon', choreography: `Bryan Sloyer, Jerry Quill, Jay Kwon`},
        {film:<iframe width="300" height="225" src="https://www.youtube.com/embed/XaI-EOVpDvo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>, title:`The Elder Scrolls`, director: 'Philip Silvera', camera:'Bethesda Softworks', choreography: 'Tony Vittorioso'},
        {film:<iframe width="300" height="225" src="https://www.youtube.com/embed/ZvgW-usfxTQ?start=62" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>, title:`2 Bullet Solution | Dust`, director:'Matt Mullins', camera:'Kyle Potter, Craig Henningsen', choreography:'Matt Mullins'},
        {film:<iframe width="300" height="225" src="https://www.youtube.com/embed/6sF0s8AlVuo?start=60" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>, title:`The 2-Day Four Day Shoot`, director:`Bryan Sloyer`, camera:'Bryan Sloyer', choreography: 'Bryan Sloyer'},
        {film:<iframe width="300" height="225" src="https://www.youtube.com/embed/0awAQIIChjU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>, title:`Dom Vs Caitlin`, director:'Caitlin Hutson', camera: 'Omar Zaki', choreography: 'Dominque Smith & Caitlin Hutson'},
        {film:<iframe width="300" height="225" src="https://www.youtube.com/embed/9C7dVywNs2I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>, title:`Kickboxer's Tears`, director:'Orginal By Da Wei Shen', camera: 'Omar Zaki', choreography: `Jin's Motion Picture Co.`},
        {film:<iframe width="300" height="225" src="https://www.youtube.com/embed/kzrBpYzrMTw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>, title:`Caitlin Hutson | Stunt Reel`, director:'Various', camera: 'Various', choreography: 'Various'},
        {film:<iframe width="300" height="225" src="https://www.youtube.com/embed/F361LYfB8PU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>, title: `Caitlin Hutson | Action Reel`, director:'Various', camera: 'Various', choreography: 'Various'}
    ];
    return (
        <div className='reelsContainer'>
            <div className='reelsText'>
                <h1>REELS</h1>
            </div>
            <div className='videoGrid'>
                {videos.map((video) => {
                    return(
                        <ul className='reelsContent'>
                            <h2>{video.title}</h2>
                            <p>Director: {video.director}</p>
                            <p>Filmed By: {video.camera}</p>
                            <p>Action Design: {video.choreography}</p>
                            <li className='videoList'>{video.film}</li>
                        </ul>
                )})}
            </div>
        </div>

    )
})

export default Reels