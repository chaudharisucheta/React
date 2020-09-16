import React from 'react';
import ApiService from '../service/ApiService';
import './AddBook.css';

class EditBook extends React.Component{

    constructor(props){
      super(props)
      this.state={
        bookNo:"",
        bookName:"",
        author:"",
        publisher:"",
        noOfPages:"",
        price:"",
        status:"",
        rating:""
      }

    }

    onChange=event=>{
      this.setState({[event.target.name]:event.target.value}) 
    }

    loadBook(){
      
      ApiService.getBookById(window.localStorage.getItem("bookNo"))
        .then(response=>{
          let book=response.data.result
          this.setState(
           { bookNo:book.bookNo,
            bookName:book.bookName,
            author:book.author,
            publisher:book.publisher,
            noOfPages:book.noOfPages,
            price:book.price,
            status:book.status,
            rating:book.rating
          }
           

          )
        })
        
    }

    componentDidMount(){
      this.loadBook()
    }

    editBook=(event)=>{
      event.preventDefault()
      let book={
        bookNo:this.state.bookNo,
        bookName:this.state.bookName,
        author:this.state.author,
        publisher:this.state.publisher,
        noOfPages:this.state.noOfPages,
        price:this.state.price,
        status:this.state.status,
        rating:this.state.rating
      }
      ApiService.editBook(book)
        .then(response=>{
          this.props.history.push("/")
        })

    }
    render(){
        return(
            <div class="container">
        <form>
        <h1 class="h1">Edit Book</h1>
        <label for="Book No" className="label">Book No</label>
        <input type="text" id="bno" name="bno" className="form-control" onChange={this.onChange}/><br/>

        <label for="Book Name" class="label">Book Name</label>
        <input type="text" id="bname" name="bname" className="form-control" onChange={this.onChange}/><br/>
        
        <label for="Author" class="label">Author</label>
        <input type="text" id="bauth" name="bauth" className="form-control" onChange={this.onChange}/><br/>
        
        <label for="Publisher" class="label">Publisher</label>
        <input type="text" id="bpub" name="bpub" className="form-control" onChange={this.onChange}/><br></br>

        <label for="No of Pages" class="label">No of Pages</label>
        <input type="text" id="pgs" name="pgs" className="form-control" onChange={this.onChange}/><br></br>

        <label for="Price" class="label">Price</label>
        <input type="text" id="bprice" name="bprice" className="form-control" onChange={this.onChange}/><br></br>

      <label for="Status"class="label">Status</label>
        <select id="status" name="status" className="form-control" onChange={this.onChange}>
          <option value="Read">Read</option>
          <option value="Reading">Reading</option>
          <option value="Completed">Completed</option>
        </select><br/>
      
        <label for="Rating" class="label">Rating(out of 5)</label>
        <input type="text" id="rating" name="rating" className="form-control" onChange={this.onChange}/><br>
        </br>

        <input type="button" value="Update" className="form-control" onClick={this.editBook}/>

        </form>

      </div>
        )
    }
}

export default EditBook;