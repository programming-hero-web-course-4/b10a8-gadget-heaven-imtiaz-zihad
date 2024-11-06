import { useLoaderData } from "react-router-dom";


const Hello = ({categories}) => {
    const data = useLoaderData();
    return (
        <div>
           <h3>{categories}</h3>
        </div>
    );
};

export default Hello;