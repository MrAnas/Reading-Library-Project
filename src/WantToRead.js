import React, {Component} from 'react'
import Book from './Book'

class WantToRead extends Component{
state = {
    shelf: ''
}

    render(){
        return(
        <div className="bookshelf">
                  <h2 className="bookshelf-title">Want To Read</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                          {this.props.books.filter((book)=> book.shelf === 'wantToRead').map((book) => (
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


export default WantToRead