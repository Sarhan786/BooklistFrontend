import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Booklist() {
    const[Books, setBooks] = useState([]);
    
    useEffect(()=>{
      axios.get("http://localhost:5050/booklist/")
      .then((res)=>{
        console.log(res.data.BooksData);
        setBooks(res.data.BooksData)
      })
    },[]);

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
        {Books.map((book)=>(<div className="Book">
          <div className="Imgboog"></div>
          <div className="Details">
            <h4>{book.title}</h4>
            <h4>{book.author}</h4>
            <h4>{book.description}</h4>
          </div>
        </div>))}
      </div>
    </div>
  );
}

export default Booklist;
