import { useEffect, useState } from "react"

const ApiCall = () => {

    const[users, setUsers]=useState(null);
    const[error, setError]=useState(null);

    useEffect(() => {
        fetch("https://wrong-url-endpoint.com/users")
        .then(response => {
            if(!response.ok){
                throw new Error("Failed to fecth users")
            }
            return response.json();
        })
        .then(data => setUsers(data) )

        .catch (error =>{
            setError(error);
        });
    },[])

    if (error) throw error;
    return(
    <>
        <h3>Users Loaded Successfully</h3>
    </>
    )
}

export default ApiCall