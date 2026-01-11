import { useState } from "react";
import { useNavigate } from "react-router-dom"
const PageTwo=()=>{
    const[age, setAge] = useState(null);
    const navigate = useNavigate();

    const handleSubmit = () => navigate("/" + age)
return(
    <>
    <h1>This is Page Two</h1>

    <input
    type="number"
    placeholder="Enter your age"
    value={age}
    onChange={e=> setAge(e.target.value)}
    />

    <button onClick={handleSubmit}>
        Submit
    </button>


    </>
)
}

export default PageTwo