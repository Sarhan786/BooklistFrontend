import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "./Addbook.css"

function Addbook() {
  const Navigator = useNavigate();
  const [BookData,setBookData] = useState({
    title: "",
    author: "",
    isbn:"",
    publisher:"",
    published_date : "",
    description: ""
  })

  let submitHandle =()=>{
    console.log(BookData);
    axios.post("https://booklist-backend.onrender.com//booklist/",BookData).then((res)=>{
      alert('Book is added');
      Navigator("/Booklist");
    })
  }

  return (
    <div className='Addbook'>
        <Link to="/Booklist"><button className='ShowBooklist'>Show Booklist</button></Link>
        <h1 className='Heading'>AddBook</h1>
        <input className='Title' type="text" placeholder='Title of the Book' value={BookData.title} onChange={(e)=>{setBookData((data )=>{return {...data, title : e.target.value }}) }}></input>
        <input className='ISBN' type="text" placeholder='ISBN' value={BookData.isbn} onChange={(e)=>{setBookData( (data )=>{return {...data, isbn : e.target.value }})}}></input>
        <input className='Author' type="text" placeholder='Author' value={BookData.author} onChange={(e)=>{setBookData( (data )=>{return {...data, author : e.target.value }})}}></input>
        <input className='Discribe' type="text" placeholder='Discribe the Book' value={BookData.description} onChange={(e)=>{setBookData( (data )=>{return {...data, description : e.target.value }})}}></input>
        <input className='Published' type="text" placeholder='Published Date' value={BookData.published_date} onChange={(e)=>{setBookData( (data )=>{return {...data, published_date : e.target.value }})}}></input>
        <input className='Publisher' type="text" placeholder='PUBLISHER OF THE BOOK'value={BookData.publisher} onChange={(e)=>{setBookData( (data )=>{return {...data, publisher : e.target.value }})}}></input>
        <button type='submit' onClick={submitHandle}>Submit</button>
    </div>
  )
}

export default Addbook