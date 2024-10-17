import { useState } from "react"
import Form from "./components/Form"
import Listgroup from "./components/Listgroup"
import Navbar from "./components/Navbar"
import "./index.css"

const App = () => {

  const [reviews , setReviews] = useState([])
  const [count , setCount] = useState(0)

  // Add Review
  const addReview = (rating , review) => {
    const newReview = {id : crypto.randomUUID() , rating : Number(rating) , text : review};
    setReviews([newReview , ...reviews]);
    setCount(count+1)
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth' // Optional: for smooth scrolling
    })
  }

  // Delete review

  const deleteReview = (review) => {
    setReviews(reviews.filter((item)=> item.id!==review.id))
    setCount(count-1)
  }

  // Edit review
  const [edit , setEdit] = useState({
    review : {} ,
    isEdit : false
  })

  const editReview = (review) => {
    window.scrollTo(top)
    setEdit(
      {
        review : review ,
        isEdit : true
      }
    )
  }

//  Update Review 

  const updateReview = (oldId , newRating , newReview) => {
    setReviews(reviews.map((item) => {
      if(item.id === oldId) {
        return {id : oldId , rating : Number(newRating) , text : newReview}
      }
      else{
        return(item)
      }
    } ))
    setEdit({
      review : {},
      isEdit : false
    })
    window.scrollTo({
      top: 1000,
      behavior: 'smooth' // Optional: for smooth scrolling
    })
  }

  

    
  return <>

    <div id="mainDiv">
        <div className="container px-5 py-5 d-flex align-items-center justify-content-center flex-column">
          <Form addReview = {addReview} edit = {edit} updateReview = {updateReview}/>

        </div>

        <div className="container mb-5 px-5 py-5 d-flex align-items-center justify-content-center flex-column">
            <Listgroup reviews = {reviews} deleteReview = {deleteReview} editReview = {editReview} count = {count}/>
          
        </div>

     

    </div>
    


    
  </>
}

export default App