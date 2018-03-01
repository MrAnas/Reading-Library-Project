import React, {Component} from 'react'
import Book from './Book'

class BookList extends Component{
state = {
    shelf: ''
}

    render(){
        return(
        <div className="bookshelf">
                  <h2 className="bookshelf-title">Currently Reading</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                          {this.props.books.filter((book)=> book.shelf === 'currentlyReading').map((book) => (
                            <li key={book.id}>
                                 <Book content={book}/>
                            </li>
                          )
                          )}   
                    </ol>
                  </div>
        </div>            
        )
    }
}


export default BookList