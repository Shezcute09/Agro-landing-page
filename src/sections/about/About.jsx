import "./about.css";

const About = () => {
  return (
    <div className="about__container">
      <div className="about__child space__horizontalA">
        <div className="about__childOne space__vertical">
          <p className="about"> About Us</p>
          <p className="commitment">“Our Commitment to Agriculture”</p>

          <p className="lorem">
            Lorem ipsum dolor sit amet consectetur. Arcu id maecenas adipiscing
            tempus tempor id quam venenatis. Orci eu lacus at donec. Mi volutpat
            augue vivamus lorem justo scelerisque in. Malesuada gravida urna
            pellentesque turpis magna. Semper neque eu velit aliquam in augue
            ullamcorper nisl. Et dolor urna sollicitudin praesent metus
            facilisis. Dui tellus habitasse mi aliquet consequat eget. Interdum
            semper fames consequat nisl varius fermentum elit. In et suscipit
            ullamcorper augue ac nullam porttitor elit amet. Orci cras malesuada
            ac sit hendrerit tellus fringilla risus. Turpis ultricies libero
            lobortis in viverra. Arcu imperdiet sapien mauris posuere.
            Suspendisse molestie senectus tincidunt laoreet tellus et velit
            faucibus dictum. Lectus nunc proin rhoncus elit non.
          </p>

          <button className="learn">Learn More</button>
        </div>

        <img
          src="/assets/tractorAndCarrots.svg"
          alt=""
          loading="lazy"
          className="tractor_carrots_img"
        />
      </div>
    </div>
  );
};

export default About;
