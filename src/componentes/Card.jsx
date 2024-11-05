import { useNavigate } from "react-router-dom";


const Card = ({acc}) => {
    const navigate = useNavigate();
    const {id, title, img, cat, price, desc, spec, avail, rating} = acc || {};
    return (
        <div className="card bg-base-100 w-96 shadow-xl">
        <figure>
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt="Shoes" />
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