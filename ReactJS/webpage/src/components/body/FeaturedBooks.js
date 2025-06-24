import React from 'react';
import Cards from './Cards';

function FeaturedBooks() {
  return (
    <div>
        <h4 className='text-center mt-5'>Featured Books</h4>
        <div className='d-flex justify-content-center m-5'>


            <Cards />

            <Cards />

            <Cards />
        </div>



    </div>
  );
}

export default FeaturedBooks;
