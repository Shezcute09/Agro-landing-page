import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_firstContent">
        <div>
          <img src="/public/assets/LogoWhite.svg" alt="" loading="lazy" />
        </div>
        <p className="footer_firstContent_writeUp">
          Lorem ipsum dolor sit amet consectetur. Arcu id maecenas adipiscing
          tempus tempor id quam venenatis. Orci eu lacus at donec. Mi volutpat
          augue vivamus lorem justo scelerisque in. Malesuada{" "}
        </p>
        <div className="footer_official_handles">
          <img src="public/assets/facebook.svg" alt="" loading="lazy" />
          <img src="public/assets/instagram.svg" alt="" loading="lazy" />
          <img src="public/assets/globe.svg" alt="" loading="lazy" />
        </div>
      </div>
      <div className="footer_secondContent">
        <div className="footer_secondContent1">
          <h3>Explore</h3>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Services</li>
            <li>Our Projects</li>
            <li>Latest News</li>
          </ul>
        </div>
        <div className="footer_secondContent1">
          <h3>Others</h3>
          <ul>
            <li>Testimonial</li>
            <li>Benefit</li>
            <li>Meet the farmers</li>
          </ul>
        </div>
      </div>
      <div className="footer_thirdContent">
        <h3>Contact</h3>
        <div className="footer_thirdContent1">
          <img src="public/assets/phone.svg" alt="" />
          <p>08053789452</p>
        </div>
        <div className="footer_thirdContent1">
          <img src="public/assets/mail.svg" alt="" />
          <p>Farmsol@servicemail.com</p>
        </div>
        <div className="footer_thirdContent1">
          <img src="public/assets/location.svg" alt="" />
          <p>
            Plot345 Trans Amadi industrial layout, Port Harcourt Rivers State
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
