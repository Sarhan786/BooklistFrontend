import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Booklist() {
    const[Books, setBooks] = useState([]);
    
    useEffect(()=>{},[]);

  return (
    <div className="Booklist">
        <h1>Booklist</h1>
      <Link to="/">
        <button>LogOut</button>
      </Link>
      <Link to ="/Addbook">
      <button>AddBook</button>
      </Link>
      <div className="BooksContainer">
        {Books.map(()=>(<></>))}
      </div>
    </div>
  );
}

export default Booklist;
