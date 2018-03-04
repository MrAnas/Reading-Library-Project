import React from 'react'
import {Link,Route} from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import BookShelf from './Bookshelf'
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
    // Please help me with this
    BooksAPI.search(query).then((bookInSearchResults)=>{
      this.state.books.map((bookOnHomePage) => {
      bookInSearchResults.shelf = 'none'
      console.log(bookInSearchResults.shelf)
      console.log(bookInSearchResults.id === bookOnHomePage.id)
      if(bookInSearchResults.id === bookOnHomePage.id){
      bookInSearchResults.shelf = bookOnHomePage.shelf
      
    }
    console.log(bookInSearchResults.shelf)
    this.setState(
      {queryResult: bookInSearchResults}
  )})

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
              <BookShelf 
                books={this.state.books.filter((book)=> book.shelf ==='currentlyReading')} 
                shelfTitle="Currently Reading"
                onSelectShelf={this.updateShelf}
              />
              <BookShelf 
                books={this.state.books.filter((book)=> book.shelf ==='wantToRead')} 
                shelfTitle="Want To Read"
                onSelectShelf={this.updateShelf}
              />
              <BookShelf 
                books={this.state.books.filter((book)=> book.shelf ==='read')} 
                shelfTitle="Read"
                onSelectShelf={this.updateShelf}
              />
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
        <SearchBook 
        query={this.state.queryResult} 
        queryResult={this.SearchForBook} 
        onSelectShelf={this.updateShelf}
        />
      )
      }/>
      </div>
    )
  }
}

export default BooksApp
