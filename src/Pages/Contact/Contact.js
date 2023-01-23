import './Contact.css';

const Contact = () => {

    return(
        <div>
            <div>
            <h1 className='contactMe'>Contact Me</h1>
            </div>
            <div className='contactGrid' >
                <div className='lineContainer'></div>
                <div className='representation'>
                    <p><b>Representation:</b> Noelle Kim</p>
                    <p className='nationalTalent'>(National Talent LA)</p>
                </div>
                <div className='heightWeight'>
                    <p><b>Height:</b> 5'5"</p>
                    <p><b>Weight:</b>130lbs</p>
                </div>
                <div className='hairColor'>
                    <p><b>Hair Color:</b> Red</p>
                </div>
                <div className='eyeColor'>
                    <p><b>Eye Color:</b> Green</p>
                </div>
                <div className='contactForm'>
                    <form action='mailto:x2wenty6@gmail.com' method='GET' className='theForm' >
                        <input type='hidden' name='_subject' value='Caitlin Hutson Booking Request' />
                        <label for='fullName'>Your Full Name*</label><br/>
                            <input id='fullName' type='email field' name='name' placeholder='eg. John Doe' maxlength='30' required/><br/>
                        <label for='email'>Your Email*</label><br/>
                            <input id='email' type='email' placeholder='eg. me@mail.com' name='email'required /><br/>
                        <label for='phoneNumber'>Your Phone Number*</label><br/>
                            <input id='phoneNumber' name='phone' type='email field' placeholder='eg. 012 345 6789' minlength='10' maxlength='10' required/><br/>
                        <label>Booking*</label><br/>
                            <input id='theatre' type='radio' value='theatre' name='subCategory'/>
                            <label for='theatre'>Theatrical</label>
                            <input id='VO' type='radio' value='VO' name='subCategory'/>
                            <label for='VO'>VO</label>
                            <input id='commercial' type='radio' value='commercial' name='subCategory'/>
                            <label for='commercial'>Commercial</label>
                            <input id='stunts' type='radio' value='stunts' name='subCategory'/>
                            <label for='stunts'>Stunts</label>
                            <input id='other' type='radio' value='other' name='subCategory'/>
                            <label for='other'>Other</label><br/>
                        <label for='message'>Message*</label><br/>
                            <textarea className='messageArea' id='message' type='textbox' name='personalMessage' rows='5' cols='41' minlength='10' maxlength='250'required/><br/>
                        <button action='mailto:xavierjulianrod@gmail.com' type='submit' value='Send'>Submit</button>
                    </form>
                </div>   
            </div>
        </div>
    )
}

export default Contact;
//Booking
//theatrical, VO, commercial, stunts, other