import { useState, useEffect } from "react";

const FetchError = () => {

    const[users, setUsers]=useState(null);
    const [error, setError] = useState("");
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/userssss")
        .then(response => {
        if (!response.ok) {
          throw new Error("Can't fetch users");
        }
        return response.json();
        })

        .then(data => {
            setUsers(data);
        })

        .catch(error => {console.log("Error:", error.message)
        setError(error.message);
        });
    }, [])

    return(
        <>
        <h3>Fetch Error Handling Example</h3>

        {error && <p style={{ color: "red" }}>{error}</p>}
        {users && <p>Data fetched successfully</p>}
        </>
    )
}

export default FetchError