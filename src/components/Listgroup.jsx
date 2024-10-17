import Listitem from "./Listitem"

const Listgroup = ({reviews , deleteReview , editReview , count}) => {

    const avg = reviews.reduce((p , c)=> p+c.rating , 0) / count
    console.log(avg)


    return <>

        <div className={count>0 ? "d-flex w-100 mb-5 flex-column align-items-center justify-content-center" : "d-none"}>
            <h1 className="text-center text-light display-4"> Latest Reviews  </h1>
            <span className="d-flex align-items-center w-50 justify-content-between">
                <p className="text-center text-light fs-4">Avg Rating : {avg.toFixed(2)}</p>
                <p className="text-center text-light fs-4">Total Reviews : {count}</p>
            </span>
        </div>

        <ul className="list-group container w-75">

            
            
            {
                reviews.map((review) => <Listitem key = {review.id} review = {review} deleteReview = {deleteReview} editReview = {editReview} />)
            }

      </ul>

        <button onClick={(e) => window.scrollTo(top)} id="addBtn" className={count>0 ? "btn w-75 btn-primary fs-5 d-block px-4 py-2 mt-4 border-0 rounded-5" : "btn btn-primary d-none"}>Add another review</button>

    </>

}

export default Listgroup