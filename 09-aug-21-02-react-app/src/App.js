import logo from './logo.svg';
import './App.css'
//10-aug-2021
function CustomInput(props) {
  let callRefInput = React.createRef();

  handleClick = () => {
    callRefInput.current.focus();
  }

  return (
    <div>
      <input text="text" ref={callRefInput} />
      {/* <input text="text" ref={callRefInput} /> */}
    </div>
  );
}

function App() {
  this.callRefInput = React.createRef();
  focusRefInput = () => {
    this.callRefInput.current.focus();
  }
  return (
    <div className="App">
      <CustomInput ref={focusRefInput}/>
    </div>
  );
}

export default App;
