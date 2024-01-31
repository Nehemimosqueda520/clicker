import './App.css';
import { Button } from './components/Button';
import { Clicker } from './components/Clicker';
import { useState } from 'react';

function App() {

  const [clickNumbers, setClickNumbers] = useState(0);
  const click = () => {
   setClickNumbers(clickNumbers + 1) ;
  };

  const restart = () => {
    setClickNumbers(0); 
  };

  return (
    <div className="App">
      <div className="clicker-container">
      <Clicker 
      clickNumbers = {clickNumbers}/>

      <div className='buttons-container'>

      <Button 
      isClickButton={true}
      text="Click me!"
      click={click}
      />
      <Button 
      isClickButton={false}
      text="restart"
      click={restart}
      />
      </div>
      </div>
    </div>
    
  );
}

export default App;
