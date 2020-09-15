import axios from 'axios'
const USER_BASE_URL="http://localhost:8080/"

class ApiService{
    addBook(book){
        return axios.post(USER_BASE_URL+'/addbook',book)

    }

    fetchBooks(){
        return axios.get(USER_BASE_URL+'/getallbooks')
    }
}

export default new ApiService();