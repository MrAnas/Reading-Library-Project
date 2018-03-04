import React, {Component} from 'react'


class Book extends Component{
state = {
  shelf: this.props.content.shelf
}

handleChange = (event) =>{
  this.props.onSelectShelf(this.props.content, event.target.value);
}



 render(){
   let bookImage = ''
   if(this.props.content.imageLinks !== undefined)
    bookImage = this.props.content.imageLinks.smallThumbnail;
     return(
        <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: "url("+`${bookImage}` +")" }}></div>
          <div className="book-shelf-changer">
            <select value={this.state.shelf} onChange={this.handleChange} >
              <option value="none" disabled>Move to...</option>
              <option value="none">None</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              
            </select>
          </div>
        </div>
        <div className="book-title">{this.props.content.title}</div>
        <div className="book-authors">{this.props.content.authors}</div>
      </div>
     )
 }
}

export default Book