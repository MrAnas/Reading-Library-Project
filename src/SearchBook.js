import React ,{Component} from 'react'
import {Link} from 'react-router-dom'
import Book from './Book'

class SearchBook extends Component{

    state = {
        query: '',
    }

    updateQuery = (query) => {      
    if(query === ''){
        this.setState({query: ''});
        this.props.queryResult();
    }else{ 
        this.setState({query});
        this.props.queryResult(query); 
    }
    }

    clearQuery = () => {
        this.setState({query: ''})
    }
    
    render(){
        
        let result = this.props.query
        return(     
            <div> 
            <div className="search-books-bar">
            <Link className="close-search" to={`/`}>Close</Link>
            
              <div className="search-books-input-wrapper">
                {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */
               
               
               }
               
                <input type="text" 
                className="" 
                placeholder="Search by title or author" 
                value={this.state.query}
                onChange={(event) => this.updateQuery(event.target.value)} />
              </div>
              
              </div>
              <div className="search-books-results">
              <ol className="books-grid">
              {result instanceof Array && 
              result.map((book)=> (
                  
              <li key={book.id}>
                 <Book content={book} onSelectShelf={this.props.onSelectShelf} />
              </li>
               ))}
              </ol>
            </div>
            </div>
        )
    }
}

export default SearchBook