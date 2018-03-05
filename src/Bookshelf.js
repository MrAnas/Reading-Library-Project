import React,{Component} from 'react'
import PropTypes from 'prop-types'
import Book from './Book'


function BookShelf(props){
     return(
        <div className="bookshelf">
        <h2 className="bookshelf-title">{props.shelfTitle}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
                {props.books.map((book) => (
                  <li key={book.id}>
                       <Book content={book} onSelectShelf={props.onSelectShelf}/>
                  </li>
                )
                )}   
          </ol>
        </div>
    </div>  
     )
}

export default BookShelf