import { useRef } from "react";
import { useScrolling } from "react-use";
import Header from "./components/Header";
import About from "./components/About";

const App = () => {
  return (
    <div className="App">
      <Header />
      <About />
    </div>
  );
};

export default App;
