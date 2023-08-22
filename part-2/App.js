const App = () => (
    <div>
        <Tweet username="User 1" name="Name 1" date={new Date().toDateString()} message="I am the first tweeter to tweet!" />
        <Tweet username="User 2" name="Name 2" date={new Date().toDateString()} message="I am the second tweeter to tweet!" />
        <Tweet username="User 3" name="Name 3" date={new Date().toDateString()} message="I am the third tweeter to tweet!" />
    </div>
)

ReactDOM.render(<App />, document.getElementById("root"))