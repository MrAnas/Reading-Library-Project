import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Book from './Book'

class BooksList extends Component{
    static propTypes = {
        books: PropTypes.array.isRequired,
        onSelectShelf: PropTypes.func.isRequired
    }

    render(){
        return(
            <div>
        <div className="bookshelf">
                  <h2 className="bookshelf-title">Currently Reading</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                          {this.props.books.filter((book)=> book.shelf === 'currentlyReading').map((book) => (
                            <li key={book.id}>
                                 <Book content={book} onSelectShelf={this.props.onSelectShelf}/>
                            </li>
                          )
                          )}   
                    </ol>
                  </div>
        </div>     
        <div className="bookshelf">
        <h2 className="bookshelf-title">Want to Read</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
                {this.props.books.filter((book)=> book.shelf === 'wantToRead').map((book) => (
                  <li key={book.id}>
                       <Book content={book} onSelectShelf={this.props.onSelectShelf}/>
                  </li>
                )
                )}   
          </ol>
        </div>
</div>  
<div className="bookshelf">
                  <h2 className="bookshelf-title">Read</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                          {this.props.books.filter((book)=> book.shelf === 'read').map((book) => (
                            <li key={book.id}>
                                 <Book content={book} onSelectShelf={this.props.onSelectShelf}/>
                            </li>
                          )
                          )}   
                    </ol>
                  </div>
        </div>   
        </div>      
        )
    }
}


export default BooksList