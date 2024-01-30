import './App.css';
import { Button } from './components/Button';
import { Clicker } from './components/Clicker';

function App() {

  const click = () => {
    console.log ("click");
  }

  const restart = () => {
    console.log ("restart");
  }

  return (
    <div className="App">
      <div className="clicker-container">
      <Clicker 
      clickNumbers = "5"/>

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
