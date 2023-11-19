import "./App.css";
import SkibidiDaydreams from "./SkibidiDaydreams.js";
import Skibidi505 from "./Skibidi505";

function App() {
  const randomvalue = Math.random();
  const componentToRender =
    randomvalue > 0.5 ? <Skibidi505 /> : <SkibidiDaydreams />;

  return (
    <div className="App">
      <div>{componentToRender}</div>
    </div>
  );
}

export default App;
