const DisplayPage = ({name, passoutYear, jobRole, city}) => {
    return(
        <>
        <h2> Hello Candidate!!!</h2>

        <h3> Congratulations {name}!, you are selected.<br/>
            You are a {passoutYear} passedout student.<br/>
            Appointed as a {jobRole} employee at {city}.
        </h3>
        </>
    )
}

export default DisplayPage