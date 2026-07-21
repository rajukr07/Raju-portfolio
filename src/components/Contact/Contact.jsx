import "./Contact.css";

function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact__container">
        <p className="contact__eyebrow">Contact</p>

        <h2 className="contact__title">
          Let's Build Something Amazing Together
        </h2>

        <p className="contact__description">
          I am actively looking for full-time roles, internships, and freelance opportunities as a Web or Mobile App Developer. Feel free to reach out for exciting projects and collaborations.
        </p>

        <div className="contact__info">

          <div className="contact__card">
            <h3>Email</h3>
            <p>rajukumarsdr95@gmail.com</p>
          </div>

          <div className="contact__card">
            <h3>Phone</h3>
            <p>+91 7667030776</p>
          </div>

          <div className="contact__card">
            <h3>Location</h3>
            <p>Bangalore,karnataka,india</p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Contact;