import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./BooksRecord.css";

function BooksRecord() {
  const [Bookrecord, setBookrecord] = useState({
    title: "",
    author: "",
    isbn: "",
    publisher: "",
    published_date: "",
    description: "",
  });

  useEffect(() => {}, []);

  return (
    <div className="BooksRecord">
      <Link to="/Booklist">
        <button className="ShowBooklist">Show Booklist</button>
      </Link>
      <h1 className="HeadingBookRecord">BooksRecord</h1>
      <ol className="BookData">
        <li> Title : {Bookrecord.title}</li>
        <li> Author : {Bookrecord.author}</li>
        <li> ISBN : {Bookrecord.isbn}</li>
        <li> Publisher : {Bookrecord.publisher}</li>
        <li> Published Date : {Bookrecord.published_date}</li>
        <li> Description : {Bookrecord.description}</li>
      </ol>
      <div className="Buttons">
        <button onClick={()=>{alert('your book is deleted')}}>Delete Book</button>
        <Link to="/EditBooks">
          <button>Edit Book</button>
        </Link>
      </div>
    </div>
  );
}

export default BooksRecord;
