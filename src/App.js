import React from 'react'
import {Link,Route} from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import BooksList from './BooksList'
import SearchBook from './SearchBook';
import './App.css'



class BooksApp extends React.Component {
  state = {
    books: [],
    queryResult: []
  }


componentDidMount(){
    BooksAPI.getAll().then((books) => {
        this.setState({
            books
        });
    })
}

componentWillUpdate(){
  BooksAPI.getAll().then((books) => {
    this.setState({
        books
    });
})

}

updateShelf = (book,shelf) => {
  BooksAPI.update(book,shelf);
  }

  SearchForBook = (query) =>{
    BooksAPI.search(query).then((book)=>{
      this.setState(
        {queryResult: book}
    )
    console.log(book)
    })
}


  render() {
    return (
      <div>
      <Route exact path="/" render={()=>(
      <div className="app">
          <div className="search-books">
          </div>
          <div className="list-books">
            <div className="list-books-title">
              <h1>My Reading List</h1>
            </div>
            <div className="list-books-content">
              <div>
              <BooksList books={this.state.books} onSelectShelf={this.updateShelf}/>
              </div>
            </div>
            <div className="open-search">
              <Link to={`/search`}>Search for book</Link>
            </div>
          </div>
        )}
      </div>
      )}/>
      <Route exact path='/search' render={()=>(
        <SearchBook query={this.state.queryResult} queryResult={this.SearchForBook} onSelectShelf={this.updateShelf}/>
      )
      }/>
      </div>
    )
  }
}

export default BooksApp
