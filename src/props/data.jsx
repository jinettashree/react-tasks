import DisplayPage from "./candidateDetails"
import Summary from "./summary"
import Button from "./button";

const Data = () => {

    const handleClick = () => alert("Hey Candidate!!");
    return(
        <>
        <DisplayPage 
            name="Jinetta" 
            passoutYear={2026}
            city="Coimbatore"
            jobRole="Frontend Developer"
        />

        <Summary>
            <p>Worked as an Frontend Developer intern at MentorBridge[2025 May- 2026]</p>
        </Summary>

        <Button click = {handleClick}/>
        </>
    )
}

export default Data