import './FoodCards.scss';

interface FoodCardProps{
  text:string;
  image:string;
}
export default function FoodCard({ text, image }: FoodCardProps) {
  return (
    <div>
      <div className="food-card">
        <img src={image} alt="Avatar" />
        <div className="food-container">
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
}
