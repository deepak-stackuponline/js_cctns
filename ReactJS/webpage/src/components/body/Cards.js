import React from 'react'

function Cards() {
  return (
     <div className="card mb-3 mx-3 mt-0" style={{ width: '18rem' }}>
        <img src="https://placehold.co/600x400" className="card-img-top" alt="Book Cover" />
        <div className="card-body">
          <h5 className="card-title">The Great Gatsby</h5>
          <p className="card-text">
            by F. Scott Fitzgerald
          </p>
         
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">An item</li>

        </ul>
     
      </div>
  )
}

export default Cards