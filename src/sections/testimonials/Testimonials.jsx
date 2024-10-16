import "./testimonials.css";

const Testimonials = () => {
  return (
    <div className="testimonial">
      <h3>What Our Clients Say</h3>
      <div className="testimonial__container space__horizontal">
        <div className="testimonial__content">
          <div className="testimonial__contentFirstImg">
            <img src="/assets/invertedComma.svg" alt="" />
          </div>
          <p className="testimonial__contentOne">
            Lorem ipsum dolor sit amet consectetur. Eget arcu pharetra lorem
            venenatis velit neque ullamcorper. Vel sed enim bibendum turpis
            sagittis curabitur. Purus euismod sem elementum mattis. Molestie id
            dis mi orci enim.
          </p>

          <img className="testifier" src="/assets/john.svg" alt="" />

          <p className="testimonial__contentTwo">JOHN SMITH</p>
          <p className="testimonial__contentThree">
            Founder of Awesomeux Technology
          </p>
        </div>

        <div className="testimonial__content">
          <div className="testimonial__contentFirstImg">
            <img src="/assets/invertedComma.svg" alt="" />
          </div>
          <p className="testimonial__contentOne">
            Lorem ipsum dolor sit amet consectetur. Eget arcu pharetra lorem
            venenatis velit neque ullamcorper. Vel sed enim bibendum turpis
            sagittis curabitur. Purus euismod sem elementum mattis. Molestie id
            dis mi orci enim.
          </p>

          <img className="testifier" src="/assets/alvin.svg" alt="" />

          <p className="testimonial__contentTwo">ALVIN GAP</p>
          <p className="testimonial__contentThree">Team Lead QEP AgroTech</p>
        </div>

        <div className="testimonial__content">
          <div className="testimonial__contentFirstImg">
            <img src="/assets/invertedComma.svg" alt="" />
          </div>
          <p className="testimonial__contentOne">
            Lorem ipsum dolor sit amet consectetur. Eget arcu pharetra lorem
            venenatis velit neque ullamcorper. Vel sed enim bibendum turpis
            sagittis curabitur. Purus euismod sem elementum mattis. Molestie id
            dis mi orci enim.
          </p>
          <img className="testifier" src="/assets/roland.png" alt="" />
          <p className="testimonial__contentTwo">ROLAND GRIFFEN</p>
          <p className="testimonial__contentThree">Founder AgroNig Robotics</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
