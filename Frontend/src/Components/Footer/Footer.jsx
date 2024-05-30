import React, { useState }from 'react';
import './Footer.css'
import FooterLogo from './logos/footer.webp';


function NewsletterSubscription() {
  const [email, setEmail] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log('Subscribed with email:', email);
    alert(`Thank you for subscribing with ${email}!`);
    setEmail('');
  };

  return (
    <div className="newsletter-section">
      <h2>Subscribe Newsletter</h2>
      <p>Subscribe newsletter to get 5% off on all products.</p>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">Subscribe</button>
      </form>
      <div className="social-icons">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><i className="fa fa-facebook"></i></a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><i className="fa fa-instagram"></i></a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><i className="fa fa-twitter"></i></a>
      </div>
    </div>
  );
}


function QuickLink(props) {
  return (
    <div className="link">
      <h1>{props.title} Section</h1>
      <ul>
        {props.items.map((item, index) => (
         <li key={index}><a href="#">{item}</a></li>
        ))}
      </ul>
    </div>
  );
}

function Footer() {
  return (
    <>
    <NewsletterSubscription />
    <div className="links-sections">
      <div className="footer-logo">
        <img src={FooterLogo} alt="Footer Logo" />
      </div>
      <QuickLink title="Men's" items={['Clothing Fashion', 'Winter', 'Summer', 'Formal', 'Casual']} />
      <QuickLink title="Women's" items={['Dresses', 'Tops', 'Bottoms', 'Outerwear', 'Accessories']} />
      <QuickLink title="Baby's" items={['Newborn Essentials', 'Baby Fashion', 'Toys', 'Nursery', 'Feeding']} />
      <QuickLink title="Useful Links" items={['Track Your Orders', 'FAQ', 'Support', 'career', 'About']} />
    </div>
    <div className = "copyright-section">
    <span>Copyright &copy; 2024 All rights reserved</span>
    </div>
    </>
  );
}

export default Footer;