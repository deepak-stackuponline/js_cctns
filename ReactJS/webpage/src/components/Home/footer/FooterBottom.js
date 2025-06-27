import React from 'react';
import { Button } from 'reactstrap';

function FooterBottom() {
  return (
    <footer className="text-center mt-5" style={{ fontFamily: 'Poppins, sans-serif' }}>
      <h2>Ready to Dive In?</h2>
      <p>Join our community of book lovers today. It's free to sign up!</p>
      
      <div>
        <Button color="primary" style={{ backgroundColor: '#c084fc', border: 'none' }} className="btn-lg mt-3">
          List Your Book
        </Button>
        <Button color="secondary" className="btn-lg mt-3 ms-3">
          Get AI Recommendations
        </Button>
      </div>

      <div>
        <p className="mt-5 mb-0 text-muted">@2025 Literary Ledger. All Rights Reserved</p>
      </div>
    </footer>
  );
}

export default FooterBottom;
