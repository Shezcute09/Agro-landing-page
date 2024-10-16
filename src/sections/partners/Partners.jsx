import "./partners.css";

const Partners = () => {
  return (
    <div className="partners">
      <div className="youtube_Bg">
        <img
          className="bg_img"
          src="public/assets/youtubeIcon.svg"
          alt="YouTube Icon"
          loading="lazy" // Lazy loading for the background image
        />
        <p className="youtube_title">
          Introducing Robotics and AI into the World of Farming
        </p>
      </div>
      <div className="partner__names">
        <img src="public/assets/partner1.svg" alt="Partner 1" loading="lazy" />
        <img src="public/assets/partner2.svg" alt="Partner 2" loading="lazy" />
        <img src="public/assets/partner3.svg" alt="Partner 3" loading="lazy" />
        <img src="public/assets/partner4.svg" alt="Partner 4" loading="lazy" />
        <img src="public/assets/partner5.svg" alt="Partner 5" loading="lazy" />
      </div>
    </div>
  );
};

export default Partners;
