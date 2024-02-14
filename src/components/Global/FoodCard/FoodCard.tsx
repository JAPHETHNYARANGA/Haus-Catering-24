import './FoodCards.scss';

interface FoodCardProps{
  text:string;
  title:string;
  image:string;
}
export default function FoodCard({ text, title, image }: FoodCardProps) {
  return (
    <div>
      <div className="food-card">
        <img src={image} alt="Avatar" />
        <div className="food-container">
          <h4><b>{title}</b></h4>
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
}
