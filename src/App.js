import { useState } from "react";
import Header from "./components/Header";
import About from "./components/About";
import Resume from "./components/Resume";

const App = () => {
  const [currentSection, setCurrentSection] = useState("#home");
  const handleInView = (href) => {
    setCurrentSection(href);
  };
  return (
    <div className="App">
      <Header currentSection={currentSection} />
      <About setCurrentSection={handleInView} />
      <Resume setCurrentSection={handleInView} />
    </div>
  );
};

export default App;
