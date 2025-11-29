import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";

function App() {
  return (
    <div className="container">
      <Navbar />
      <Hero />

      <div className="cards-section">
        <Card
          img="https://imgur.com/H2L3ohY.png"
          title="Declarative"
          text="React makes it painless to create interactive UIs."
        />

        <Card
          img="https://imgur.com/IHW1mFB.png"
          title="Components"
          text="Build encapsulated components that manage their own state."
        />

        <Card
          img="https://imgur.com/LtUDB9y.png"
          title="Single-Way"
          text="A set of immutable values are passed to the component’s."
        />

        <Card
          img="https://imgur.com/agN6R4Y.png"
          title="JSX"
          text="Statically-typed, designed to run on modern browsers."
        />
      </div>
    </div>
  );
}

export default App;
