import logo from "./logo.svg";
import "./App.css";
import Accordion from "./components/accordion/accordion";
import Editable from "./components/editable/Editable";

function App() {
  return (
    <div className="App">
      <Accordion />
      <Editable />
    </div>
  );
}

export default App;
