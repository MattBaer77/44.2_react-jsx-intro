const App = () => (
    <div>
        <Tweet username="User 1" name="Name 1" date="2023-08-21" message="I am the first tweeter to tweet!" />
        <Tweet username="User 2" name="Name 2" date="2023-08-22" message="I am the second tweeter to tweet!" />
        <Tweet username="User 3" name="Name 3" date="2023-08-23" message="I am the third tweeter to tweet!" />
    </div>
)

ReactDOM.render(<App />, document.getElementById("root"))