import React, { useEffect, useState } from 'react';
import Cards from './Cards';

function FeaturedBooks() {
  const [books, setBooks] = useState([]);

  async function fetchData() {
    try {
      const response = await fetch("https://mocki.io/v1/eeaf0d91-66bb-4906-ac38-69215b782ca7");
      const data = await response.json();
      setBooks(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h4 className='text-center mt-5'>Featured Books</h4>

      <div className='d-flex flex-wrap justify-content-center container mt-4'>
        {books.map((data) => (
          <Cards key={data.id} book={data} />
        ))}
      </div>
    </div>
  );
}

export default FeaturedBooks;
