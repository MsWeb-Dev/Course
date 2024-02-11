import React, { useState } from 'react';
import "./contactform.css"
function ContactForm() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Yuborishni boshlash
    sendMail({ email, message });
  };

  const sendMail = (data) => {
    // Yuborish loyixasi (masalan, API, serverga so'rov)
    console.log('Yuborilayapti', data);
    // Bu yerda siz yuborishni boshlanganidan so'ng qo'llab-quvvatlovchi logika yozishingiz mumkin
  };

  return (
    <div className="container  d-flex justify-content-center mt-5 ">
      <div className="row   text-white home-about col-sm-6">
        <h2 >Murojaatlaringizni yozib qoldiring</h2>
        <form onSubmit={handleSubmit} >
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" value={email} onChange={handleEmailChange}/>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" value={message} onChange={handleMessageChange}></textarea>
          </div>
          <div className="btn-group d-flex justify-content-end">
            <button className='btn btn-primary home-btn' type="submit">Yuborish</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
