import React from 'react';
import './BenefitsSection.css';
import img1 from './Images/services1.svg';
import img2 from './Images/services2.svg';
import img3 from './Images/services3.svg';
import img4 from './Images/services4.svg';

function BenefitItem(props) {
  return (
    <div className="benefit-item">
      <img src={props.image} alt={props.title} /> 
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </div>
  );
}

function BenefitsSection() {
  return (
    <section className="benefits">
      <BenefitItem title="Fast & Free Delivery" image={img1} description="Free delivery on all orders" />
      <BenefitItem title="Secure Payments" image={img2} description="Transactions are encrypted and secure." />
      <BenefitItem title="Money Back Guarantee" image={img3} description="Not satisfied? Get a hassle-free refund." />
      <BenefitItem title="Online Support" image={img4} description="24/7 help for a smooth shopping experience." />
    </section>
  );
}

export default BenefitsSection;
