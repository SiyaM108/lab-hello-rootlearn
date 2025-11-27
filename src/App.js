import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />

      <div className="cards">
        <Card
          img="https://imgur.com/H2L3ohY.png"
          title="Declarative"
          description="React makes it painless to create interactive UIs."
        />
        <Card
          img="https://imgur.com/IHW1mFB.png"
          title="Components"
          description="Build encapsulated components that manage their own state."
        />
        <Card
          img="https://imgur.com/LtUDB9y.png"
          title="Single-Way"
          description="A set of immutable values passed to the component’s."
        />
        <Card
          img="https://imgur.com/agN6R4Y.png"
          title="JSX"
          description="Statically-typed, designed to run on modern browsers."
        />
      </div>
    </div>
  );
}

export default App;
