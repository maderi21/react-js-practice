import logo from "./logo.svg";
import "./App.css";
import Accordion from "./components/accordion/accordion";
import Child from "./components/child";
import Parent from "./components/parent";

function App() {
  return (
    <div className="App">
      <Accordion />
      <Parent />
      <Child />
    </div>
  );
}

export default App;
