import Projects from "./Projects"
import Links from "./Links"
import Header from "./Header"
import Summary from "./Summary";

function App() {
  return (
    <div className="App">

      <Header />
      <h2>about me:</h2>
      <Summary />
      <h2>my projects:</h2>
      <Projects />
      <h2> links: </h2>
      <Links />

  Last updated: February 2021

    </div>
  );
}

export default App;
