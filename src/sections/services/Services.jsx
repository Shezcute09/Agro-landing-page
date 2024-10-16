import "./services.css";

const Services = () => {
  return (
    <div className="services space__vertical">
      <h3 className="services__header">Our Services</h3>
      <p className="services__subheader">
        We have tailored solutions for every farm
      </p>
      <div className="services__imgs space__horizontalx">
        <div>
          <img className="service__img" src="public/assets/drone.svg" alt="" />
          <p className="service__title">Precision Agriculture</p>
          <p className="servic__content">
            Lorem ipsum dolor sit amet consectetur. Arcu id maecenas adipiscing
            tempus tempor id quam venenatis. Orci eu lacus at donec. Mi volutpat
            augue vivamus lorem justo scelerisque in. Malesuada{" "}
          </p>
          <button className="service__btn">Read More</button>
        </div>
        <div>
          <img
            className="service__img"
            src="public/assets/carrotsAndTomatoes.svg"
            alt=""
          />
          <p className="service__title">Organic Farming Input</p>
          <p className="servic__content">
            Lorem ipsum dolor sit amet consectetur. Arcu id maecenas adipiscing
            tempus tempor id quam venenatis. Orci eu lacus at donec. Mi volutpat
            augue vivamus lorem justo scelerisque in. Malesuada{" "}
          </p>
          <button className="service__btn">Read More</button>
        </div>
        <div>
          <img
            className="service__img"
            src="public/assets/sprinkler.svg"
            alt=""
          />
          <p className="service__title">Smart Irrigation Systems</p>
          <p className="servic__content">
            Lorem ipsum dolor sit amet consectetur. Arcu id maecenas adipiscing
            tempus tempor id quam venenatis. Orci eu lacus at donec. Mi volutpat
            augue vivamus lorem justo scelerisque in. Malesuada{" "}
          </p>
          <button className="service__btn">Read More</button>
        </div>
        <div className="serviceImgException">
          <img
            className="service__img "
            src="public/assets/youngLad.svg"
            alt=""
          />
          <p className="service__title">Smart Irrigation Systems</p>
          <p className="servic__content">
            Lorem ipsum dolor sit amet consectetur. Arcu id maecenas adipiscing
            tempus tempor id quam venenatis. Orci eu lacus at donec. Mi volutpat
            augue vivamus lorem justo scelerisque in. Malesuada{" "}
          </p>
          <button className="service__btn">Read More</button>
        </div>
      </div>
    </div>
  );
};

export default Services;
