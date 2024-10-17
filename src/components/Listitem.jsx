const Listitem = ({review , deleteReview , editReview }) => {

    return <>
    
        <li className="list-group-item bg-light p-3 my-3 rounded-1 text-dark border-0 shadow-lg">
                <h1 className={review.rating>=3 ? "display-5 fw-bold text-success" : "display-5 fw-bold text-danger"}>Rating : {review.rating}</h1>
                <p className="fs-4 display-5">Review : {review.text}</p>
                <span className="float-end">
                    <button onClick={() => editReview(review)} className="btn btn-primary rounded-1 px-3 py-2 me-3">Edit</button>
                    <button onClick={()=>deleteReview(review)} className="btn btn-danger rounded-1 px-3 py-2">Delete</button>
                </span>

        </li>
    </>
}
export default Listitem