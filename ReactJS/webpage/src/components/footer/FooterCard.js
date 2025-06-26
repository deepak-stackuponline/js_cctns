
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
 

function FooterCard() {

    const cardData = [
  {
    icon: 'bi-book',
    title: 'Discover & Read',
    text: 'Explore a vast collection of books. Buy your favorites or rent them for a period.',
  },
  {
    icon: 'bi-people',
    title: 'List Your Books',
    text: 'Share your collection. Easily list books for sale or rent to other valid readers.',
  },
  {
    icon: 'bi-star',
    title: 'Get Recommendations',
    text: 'Our AI suggests books tailored to your taste based on your reading history.',
  },
  {
    icon: 'bi-globe',
    title: 'Join the Community',
    text: 'Connect with fellow readers and be part of a literary network.',
  },
];
  return (

    <div>
<h4 className='text-center mt-5 mb-5'>How it works</h4>


  
   <div className="d-flex flex-wrap justify-content-center" style={{ gap: '20px' }}>
      {cardData.map((card, index) => (
        <div className="card text-center shadow-lg" style={{ width: '18rem' }} key={index}>
          <div className="card-body">
            <div className="mb-3">
              <i className={`bi ${card.icon}`} style={{ fontSize: '2.5rem', color: 'purple' }}></i>
            </div>
            <h5 className="card-title">{card.title}</h5>
            <p className="card-text">{card.text}</p>
          </div>
        </div>
      ))}
    </div>



    </div>
  )
}

export default FooterCard