import React, {Component} from 'react'
import Book from './Book'

class Read extends Component{
state = {
    shelf: ''
}

    render(){
        return(
        <div className="bookshelf">
                  <h2 className="bookshelf-title">Read</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                          {this.props.books.filter((book)=> book.shelf === 'read').map((book) => (
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


export default Read