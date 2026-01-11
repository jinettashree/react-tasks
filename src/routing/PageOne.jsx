import { Link } from "react-router-dom"
import { useParams } from "react-router-dom"
const PageOne=()=>{
    const params = useParams()
    return(
        <>
        <h1>This is page one</h1>
        <h1>Age is : {params.age} </h1>
        <Link to="/page-two" >
            Page Two
        </Link>
        </>
    )
}

export default PageOne