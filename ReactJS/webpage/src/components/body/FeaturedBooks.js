import React, { useEffect, useState } from 'react';
import Cards from './Cards';
import SkeletonComponent from './SkeletonComponent';

function FeaturedBooks() {
  const [loading, setLoading] = useState(true);
  const [books, setBooks] = useState([]);

  //const [loading,setLoading] = useState(false); 

  async function fetchData() {
    try {
      // setLoading(true);
      const response = await fetch("https://mocki.io/v1/eeaf0d91-66bb-4906-ac38-69215b782ca7");
      const data = await response.json();






      setTimeout(() => {
        setBooks(data);
        setLoading(false); // Set loading to false after the delay
      }, 4000);


      
      // setBooks(data);
      // setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  // Set a default skeleton count when books are not yet loaded
  

  return (
    <div>
      <h4 className="text-center mt-5">Featured Books</h4>

      <div className="d-flex flex-wrap justify-content-center container mt-4">
        {loading ? (
          <SkeletonComponent/>
        ) : (
          books.map((data) => <Cards key={data.id} book={data} />)
        )}
      </div>
    </div>
  );
}

export default FeaturedBooks;