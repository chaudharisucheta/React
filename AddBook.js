import React,{ Component } from 'react'
import './AddBook.css';
import ApiService from '../service/ApiService'


class AddBook extends Component{

    constructor(){
      super();
      this.state={
        bookNo:"",
        bookName:"",
        author:"",
        publisher:"",
        noOfPages:"",
        price:"",
        status:"",
        rating:"",
        message:""
      }

    }

    onChange=event=>{
      this.setState({[event.target.name]:event.target.value}) 
    }

    saveBook=e=>{
      e.preventDefault()
      let book={
        bookName:this.state.bookName,
        author:this.state.author,
        publisher:this.state.publisher,
        noOfPages:this.state.noOfPages,
        price:this.state.price,
        status:this.state.status,
        rating:this.state.rating
      }
      ApiService.addBook(book)
            .then(response=>{
              this.setState({message:"Book added successfully"})
              this.props.history.push("/")
            })
      }

    render(){
        return(
        <div className="container">
        <form>
        <h1 className="h1">Add Book</h1>

        <label  className="label">Book No</label>
        <input type="text" id="bno" name="bookNo" className="form-control" value={this.state.bookNo} onChange={this.onChange}/><br/>

        <label  className="label">Book Name</label>
        <input type="text" id="bname" name="bookName" className="input" value={this.state.bookName} onChange={this.onChange}/><br/>
        
        <label  className="label">Author</label>
        <input type="text" id="bauth" name="author" className="input" value={this.state.author} onChange={this.onChange}/><br/>
        
        <label  className="label">Publisher</label>
        <input type="text" id="bpub" name="publisher" className="input" value={this.state.publisher} onChange={this.onChange}/><br></br>

        <label  className="label">No of Pages</label>
        <input type="text" id="pgs" name="noOfPages" className="input" value={this.state.noOfPages} onChange={this.onChange}/><br></br>

        <label  className="label">Price</label>
        <input type="text" id="bprice" name="price" className="input" value={this.state.price} onChange={this.onChange}/><br></br>

      <label className="label">Status</label>
        <select id="status" name="status" className="input" value={this.state.status} onChange={this.onChange}>
          <option value="Read">Read</option>
          <option value="Reading">Reading</option>
          <option value="Completed">Completed</option>
        </select><br/><br/>
          
        <label  className="label">Rating(out of 5)</label>
        <input type="text" id="rating" name="rating" className="input" value={this.state.rating} onChange={this.onChange}/><br>
        </br><br/>

        <input type="button" value="Submit" className="button" onClick={this.saveBook}/>

        </form>

      </div>
        )
    }
}

export default AddBook;