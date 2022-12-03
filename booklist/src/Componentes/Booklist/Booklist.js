import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./Booklist.css";

function Booklist() {
  const [Books, setBooks] = useState([]);
  const Navigator = useNavigate();

  useEffect(() => {
    axios.get("https://booklist-backend.onrender.com/booklist/").then((res) => {
      console.log(res.data.BooksData);
      setBooks(res.data.BooksData);
    });
  }, []);

  const Handleclick = (e) => {
    console.log(e.target.innerHTML);
    Navigator("/BookRecord");
  };

  return (
    <div className="Booklist">
      <h1 className="Heading">Booklist</h1>
      <div className="ButtonBox">
        <Link to="/">
          <button className="logOut">LogOut</button>
        </Link>
        <Link to="/Addbook">
          <button className="AddBook">AddBook</button>
        </Link>
      </div>
      <div className="BooksContainer">
        {Books.map((book) => (
          <div className="Book" onClick={Handleclick}>
            <div className="Imgboog"></div>
            <div className="Details">
              <h4>{book.title}</h4>
              <h4>{book.author}</h4>
              <h4>{book.description}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Booklist;
