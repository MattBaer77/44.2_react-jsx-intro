const Person = ({name, age, hobbies}) => {

    let votingStatus;

    if(age < 18) {
        votingStatus = "you must be 18"
    } else {
        votingStatus = "please go vote!"
    }

    if (name.length > 6) {
        name = name.slice(0,6);
    }
    
    return(
        <div>
            <p>
                Learn some information about this person:
            </p>
            <p>
                Name: {name}
            </p>
            <p>
                Age: {age}
            </p>
            <h3>{votingStatus}</h3>
            <ol>
                {hobbies.map(h => <li>{h}</li>)}
            </ol>

            <br/>

        </div>
    )
}