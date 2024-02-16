import './styles/FourthSection.scss';
import TestimonialsCard from "../Global/TestimonialsCard/testimonialsCard";

export default function FourthSection() {
  return (
    <div className='fourth-section'>
      <p>TESTIMONIALS</p>
      <h3>What Our Clients are Saying</h3>

      <div className="cards">
        <div className="card-one">
          <TestimonialsCard
            text={`The food was fabulous, very<br />happy and loyal customer. I<br />have recommended Brisk to<br />everyone who is looking for an<br />amazing caterer.`}
            image='https://i.pinimg.com/236x/55/6c/b3/556cb37071ede2eb5b1e93de723bf943.jpg'
          />
        </div>

        <div className="card-one">
          <TestimonialsCard
            text={`The food was fabulous, very<br />happy and loyal customer. I<br />have recommended Brisk to<br />everyone who is looking for an<br />amazing caterer.`}
            image='https://i.pinimg.com/236x/6b/fb/e6/6bfbe6832fe1e55f1a4e8b90c3ffdf95.jpg'
          />
        </div>

        <div className="card-one">
          <TestimonialsCard
            text={`The food was fabulous, very<br />happy and loyal customer. I<br />have recommended Brisk to<br />everyone who is looking for an<br />amazing caterer.`}
            image='https://i.pinimg.com/236x/40/79/ac/4079ac1f400f4bab304982e2057a15c5.jpg'
          />
        </div>
      </div>
    </div>
  );
}
