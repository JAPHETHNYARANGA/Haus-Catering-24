import { useState } from 'react';
import ButtonComponent from '../Buttons/Button'
import './navbar.scss'


interface SendMessageParameters{
  phoneNumber:string,
  message:string,
}
interface QuoteMessageParameters{
  phoneNumber:string,
  QuoteMessage:string
}

export default function NavbarComponent() {
  const [showSidebar, setShowSidebar] = useState(false);

  const phoneNumber = '+25410259860'; // Replace with the desired phone number
  const message = 'Hello, this is a test message!';
  const QuoteMessage = 'Hello, this is a test message!';

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const sendWhatsAppMessage = ({phoneNumber, message}:SendMessageParameters) => {
    // Ensure the phone number includes the country code
    const formattedPhoneNumber = phoneNumber.replace(/[^0-9]/g, '');
    // Encode the message to make it URL-safe
    const encodedMessage = encodeURIComponent(message);
  
    // Construct the WhatsApp URL
    const whatsAppUrl = `https://wa.me/${formattedPhoneNumber}?text=${encodedMessage}`;
  
    // Open the link in a new window or tab
    window.open(whatsAppUrl, '_blank');
  };




  const sendQuoteAppMessage = ({phoneNumber, QuoteMessage}:QuoteMessageParameters) => {
    // Ensure the phone number includes the country code
    const formattedPhoneNumber = phoneNumber.replace(/[^0-9]/g, '');
    // Encode the message to make it URL-safe
    const encodedMessage = encodeURIComponent(QuoteMessage);
  
    // Construct the WhatsApp URL
    const whatsAppUrl = `https://wa.me/${formattedPhoneNumber}?text=${encodedMessage}`;
  
    // Open the link in a new window or tab
    window.open(whatsAppUrl, '_blank');
  };
 

  return (
    <>
    <div className="nav-bars" onClick={toggleSidebar}>
        <i className="fa-solid fa-bars"></i>
        </div>

        <div className={`Navbar-container${showSidebar ? ' show-sidebar' : ''}`}>
        
        <div className="image">
          <img src="https://i.pinimg.com/236x/fa/14/37/fa14379d0c120e0b7ae1e3377dbbc6de.jpg" alt="" />
        </div>
        <div className="menu-items">
          <p>HAUS CATERING</p>
        </div>
        <div className="buttons">
          <div className="button">
          <ButtonComponent text="ORDER NOW" onClick={() => sendWhatsAppMessage({phoneNumber, message})} bgColor="green"  />
          </div>
          <div className="button-test">
          <ButtonComponent text="GET A QUOTE" onClick={() => sendQuoteAppMessage({phoneNumber, QuoteMessage})} bgColor="blue"/>
          </div>
        </div>
    </div>
    </>
   
  )

  
}



