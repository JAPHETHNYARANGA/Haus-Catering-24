import './Footer.scss';
import InstagramIcom from '../../../assets/instagram.png';
import TwitterIcom from '../../../assets/twitter.png';
import FacebookIcom from '../../../assets/facebook.png';


export default function Footer() {
  return (
    <div className='footer'>
        
        <div className="first">
            <p>Contact Our Catering Team</p>

            <p>We are here to help with all your corporate catering needs.</p>

            <div className="location">
                    Kisumu
            </div>
            <div className="phone">
                    300 322 240
            </div>
            <div className="email">
              sales@hauscatering.com
            </div>

        </div>
        <div className="second">
            <p>Follow Me</p>
            <div className="facebook">
            <img src={FacebookIcom} alt="" />
               
            </div>
            <div className="twitter">
            <img src={TwitterIcom} alt="" />
                
            </div>
            <div className="instagram">
            <img src={InstagramIcom} alt="" />
               
            </div>
        </div>
        <div className="third">
            <p>Call us to your events</p>
            <p>
            HAUS CATERING is available Monday to Friday <br/>from 7.00am – 5.00pm. Orders need to be placed by 3pm<br/> on the business day prior to your meeting.
            </p>

            <h3>Ready to get started?</h3>
        </div>
        
    </div>
  )
}
