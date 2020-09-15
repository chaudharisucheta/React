import React,{ Component } from 'react';
import './BookList.css';

class BookList extends Component{
    constructor(props){
      super(props)

      this.state={
        books:[],
        message:null
      }
      this.addBook=this.addBook.bind(this)

    }

    addBook(){
        window.localStorage.removeItem("bookNo")
        this.props.history.push("/add-book")
      }

    componentDidMount(){
      
    }
    
    editBook(){

    }

    deleteBook(){

    }

    render(){
      return(
        <div class="container">
        <div>
          <h1 class="h1">My Library</h1>
          <br/>
          <button type="button" class="button" onClick={this.addBook}>Add Book</button><br/><br/>
        </div>
      <div>
        <table class="table">
        <thead>
          <tr>
            <th>Book No</th>
            <th>Book Name</th>
            <th>Author</th>
            <th>Publisher</th>
            <th>No of Pages</th>
            <th>Price</th>
            <th>Status</th>
            <th>Rating</th>
          </tr>
        </thead>  
      <tbody> 
        {
          this.state.books.map(
            book=>
              <tr key={book.bookNo}>
                <td>{book.bookName}</td>
                <td>{book.author}</td>
                <td>{book.publisher}</td>
                <td>{book.noOfPages}</td>
                <td>{book.price}</td>
                <td>{book.status}</td>
                <td>{book.rating}</td>
                <td>
                  <button type="button" class="buttonedit" onclick={this.editBook(book.bookNo)}> Edit</button> 
                </td>
              <td>
                <button type="button" class="buttonedit" onclick={this.deleteBook(book.bookNo)}>Delete</button>
              </td>
            </tr>
          )
            }
          </tbody>
        </table>
      </div>
   </div>
      )
    }
  }

    
export default BookList;