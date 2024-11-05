import { useNavigate } from "react-router-dom";


const Card = ({acc}) => {
    const navigate = useNavigate();
    const {id, title, img, cat, price, desc, spec, avail, rating} = acc || {};
    return (
        <div className="card bg-base-100 w-96 shadow-xl">
        <figure>
          <img
            src={img}
            alt={title}/>
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>Price: {price}</p>
          <div className="card-actions ">
            <button onClick={() => navigate(`/acc/${id}`)} className="btn text-[#9538E2] bg-transparent border border-[#9538E2] rounded-3xl">View Details</button>
          </div>
        </div>
      </div>
    );
};

export default Card;