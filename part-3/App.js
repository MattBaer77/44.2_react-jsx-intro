const App = () => (

    <div>
        <Person name="Long Name 1" age={60} hobbies={["Dancing", "Extreme Knitting", "Standard Knitting", "Bare-Knuckle Knitting"]} />
        <Person name="Name 2" age={5} hobbies={["Not Voting", "Liking Turtles"]} />
        <Person name="N-3" age={18} hobbies={["Voting"]} />
    </div>

)

ReactDOM.render(<App />, document.getElementById("root"))