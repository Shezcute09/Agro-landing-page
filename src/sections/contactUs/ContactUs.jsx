import "./contactUs.css";

const ContactUs = () => {
  return (
    <div className="contact_us space__horizontalC">
      <img src="/assets/farmer.svg" alt="" loading="lazy" />
      <div className="contact_us__Text">
        <p className="contact_usTextOne">Have Questions?</p>
        <p className="contact_usTextTwo">Send Us a Message</p>
        <form action="">
          <input
            className="input_name"
            type="text"
            placeholder="Name*"
            required
          />
          <div className="contact_email_nos">
            <input
              className="input_email"
              type="text"
              placeholder="Email*"
              required
            />
            <input
              className="input_phoneNos"
              type="text"
              placeholder="Phone number*"
              required
            />
          </div>
          <textarea placeholder="Enter message" required></textarea>

          <button onSubmit="" className="icon-button">
            Send Message
            <svg
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M24.2808 0.21898C24.3846 0.322979 24.4556 0.455192 24.4849 0.599196C24.5143 0.743201 24.5007 0.892651 24.4458 1.02898L15.7173 22.8495C15.6404 23.0416 15.5119 23.2089 15.3461 23.3327C15.1802 23.4566 14.9834 23.5323 14.7774 23.5515C14.5713 23.5708 14.3639 23.5328 14.178 23.4417C13.9921 23.3507 13.8349 23.2101 13.7238 23.0355L8.95677 15.543L1.46428 10.776C1.28925 10.665 1.1483 10.5077 1.05698 10.3217C0.965658 10.1356 0.927512 9.92793 0.946753 9.72156C0.965994 9.51519 1.04187 9.31814 1.16602 9.15217C1.29016 8.98619 1.45774 8.85774 1.65028 8.78098L23.4708 0.0554805C23.6071 0.0005989 23.7566 -0.0130207 23.9006 0.0163136C24.0446 0.0456478 24.1768 0.116643 24.2808 0.220481V0.21898ZM10.4538 15.105L14.5953 21.612L21.6948 3.86398L10.4538 15.105ZM20.6343 2.80348L2.88628 9.90298L9.39477 14.043L20.6343 2.80348Z"
                fill="white"
              />
            </svg>
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
