import { useEffect, useState } from "react"

const Form = ({addReview , edit , updateReview}) => {

  const [rating , setRating] = useState();
  const [review , setReview]= useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if(edit.isEdit){
      updateReview(edit.review.id , rating , review)
    }
    else{
      addReview(rating , review)
    }
    setRating("") 
      setReview("")
  }

  useEffect(() => {
    setRating(edit.review.rating);
    setReview(edit.review.text)
  } , [edit])

    return <>

        <h1 className="text-center display-4 text-light mb-5">WE VALUE YOUR OPINION</h1>

        <form id="form" className="form-control w-75 px-5 py-4 bg-light border-0 shadow-lg" onSubmit={(e) => handleSubmit(e)}>
          <h1 className="text-center mb-4">Rate & Review Us</h1>
          <select aria-label="Default select example" required className="form-select p-3 fs-5 shadow-lg" onChange={(e) => setRating(e.target.value)} value={rating}>
            <option value="" disabled selected>Select a Rating...</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          <textarea onChange={(e) => setReview(e.target.value)} value={review} required className="form-control shadow-lg fs-3 display-5 mt-3 px-3 py-4" placeholder="Enter Your Review here ..."></textarea>
          <span className="d-flex align-items-center justify-content-center mt-4">
            <button id="submitBtn" className="btn border-0 rounded-5 text-light mt-3 px-5 py-3 fs-5 ">Submit Review</button>
          </span>
      </form>
    
    </>
}

export default Form