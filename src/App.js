// import './App.css';
import LearningResult from './components/LearningResult';
import LearningTracking from './components/LearningTracking';
import SightList from './components/SightList';
import { useState } from 'react';
const components = [<LearningResult/>, <SightList/>, <LearningTracking/>]
function App() {
  const [id, setID] = useState("0");
  function handleChange(e) {
    setID(e.target.value);
  }
  const component = components[id];
  return (
    <div className="App">
      <form style={{textAlign: "center"}}>
        <input 
          type="radio" 
          id="1" 
          value="0"
          checked={id === "0"}
          onChange={handleChange}>
        </input>
        <label htmlFor="1">Bài 1</label>
        <input 
          type="radio" 
          id="2" 
          value="1" 
          checked={id === "1"}
          onChange={handleChange}>
        </input>
        <label htmlFor="2">Bài 3</label>
        <input 
          type="radio" 
          id="3" 
          value="2" 
          checked={id === "2"}
          onChange={handleChange}>
        </input>
        <label htmlFor="3">Bài 4</label>
        <br></br>
        
      </form>
      {component}
    </div>
  );
}

export default App;
