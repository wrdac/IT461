import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const CatDelete = ({deleteHandler}) => {
    const location = useLocation();
    const cat = location.state.cat;
    const [choose, setChoose] = useState(false);
    const navigate = useNavigate();

    const formHandler = (e) => {
        e.preventDefault();
        console.log("CHOOSE: ", choose);
        if (choose){
            deleteHandler(cat);
        }
        navigate('/cats');
    }

    return(
        <form onSubmit={formHandler}>
            <div>
                <label>Are you sure you want to delete {cat.name} from the Cat List?</label>
            </div>
            <button onClick={()=>{setChoose(true)}}>Yes</button>
            <button>No</button>
        </form> 
    );
    
}

export default CatDelete;