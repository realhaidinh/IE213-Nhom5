// import './App.css';
import LearningResult from './components/LearningResult';
import LearningTracking from './components/LearningTracking';
import SightList from './components/SightList';
import { useState } from 'react';
const components = [<LearningResult/>, <SightList/>, <LearningTracking/>]
function App() {
  const [component, setComponent] = useState(components[0]);
  const [id, setID] = useState("0");
  function handleSubmit(form) {
    form.preventDefault();
    setComponent(components[parseInt(id)]);
  }
  function handleChange(e) {
    setID(e.target.value);
  }
  return (
    <div className="App">
      <form style={{textAlign: "center"}} onSubmit={handleSubmit}>
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
        <input type="submit" value="Xác nhận"></input>
      </form>
      {component}
    </div>
  );
}

export default App;
