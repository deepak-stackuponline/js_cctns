import React from 'react';
import { Button } from 'reactstrap';
import { useNavigate } from 'react-router-dom';


function FooterBottom() {

  
       const navigate = useNavigate();

    const browseButtonClick = () => {
        navigate('/list');
    }
  return (
    <footer className="text-center mt-5" style={{ fontFamily: 'Poppins, sans-serif' }}>
      <h2>Ready to Dive In?</h2>
      <p>Join our community of book lovers today. It's free to sign up!</p>
      
      <div>
        <Button color="primary" style={{ backgroundColor: '#c084fc', border: 'none' }} className="btn-lg mt-3" onClick={browseButtonClick}>
          List Your Book
        </Button>
        <Button color="secondary" className="btn-lg mt-3 ms-3" onClick={browseButtonClick}>
          Get AI Recommendations
        </Button>
      </div>
     

     
    </footer>
  );
}

export default FooterBottom;
