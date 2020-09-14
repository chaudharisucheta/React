import React from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import AddBook from './components/AddBook';
import BookList from './components/BookList';


function App(){
    return(
        <div className="container">
            <Router>
                <div>
                    <Switch>
                        <Route path="/" exact component={BookList}/>
                        <Route path="/add-book" component={AddBook}/>
                        
                    </Switch>
                </div>

            </Router>
        </div>
    )
}



export default App;

