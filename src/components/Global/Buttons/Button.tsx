import './Buttons.scss'

  interface ButtonProps {
    text: string;
    bgColor?: string; 
    onClick?: () => void;
  }
  
  const ButtonComponent = ({ text , onClick, bgColor }: ButtonProps) => {
    const buttonStyle = {
        backgroundColor: bgColor, // Set background color dynamically
    };
    return (
      <div>
        <button onClick={onClick} style = {buttonStyle}>{text}</button>
      </div>
    );
  }
  
  export default ButtonComponent;
  