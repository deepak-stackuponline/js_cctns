import React from 'react'
import { Button } from 'reactstrap'

function FooterBottom() {
  return (
    <div className="text-center mt-5">
      <h1>Ready to Dive In?</h1>
      <p>Join our community of book lovers today. It's free to sign up!</p>

      <Button color="primary" className="btn-lg mt-3">
        List Your Book
      </Button>
      <Button color="secondary" className="btn-lg mt-3 ms-3">
        Get AI Recommendations
      </Button>

      <p className="mt-4 mb-0">@2025 Literary Ledger. All Rights Reserved</p>
    </div>
  )
}

export default FooterBottom
