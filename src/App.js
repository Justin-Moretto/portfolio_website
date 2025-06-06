import Projects from "./Projects"
import Links from "./Links"
import Header from "./Header"
import Summary from "./Summary";

function App() {
  return (
    <div className="App">

      <Header />
      <h2>About me:</h2>
      <Summary />
      <h2>My projects:</h2>
      <Projects />
      <br/>
      
      Last updated: June 2025

    </div>
  );
}

export default App;
