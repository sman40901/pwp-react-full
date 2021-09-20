// import logo from './logo.svg';
import React, { useEffect, useState, useRef } from 'react';
import { getList, setItem } from '../../Services/List';
import './App.css';


function App() {
  const [alert, setAlert] = useState(false);
  const [itemInput, setItemInput] = useState('');
  const [list, setList] = useState([]);
  const mounted = useRef(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    setItem(itemInput)
      .then(() => {
        if(mounted.current) {
          setItemInput('');
          setAlert(true);
        }
      })
  };
  
  useEffect(() => {
    mounted.current = true;
    if(list.length && !alert) {
      return;
    }
    getList()
      .then(items => {
        if(mounted.current) {
          setList(items)
        }
      })
    return () => mounted.current = false;
  }, [alert, list])

  useEffect(() => {
    if(alert) {
      setTimeout(() => {
        if(mounted.current) {
          setAlert(false);
        }
      }, 1000)
    }
  }, [alert])

  return (
    <div className='App'>
      <h1>My Grocery List</h1>
      <ul>
        {list.map(item => <li key={item.item}>{item.item}</li>)}
      </ul>
      {alert && <h2>Submit successful</h2>}
      <form onSubmit={handleSubmit}>
        <label>
          <p>New Item</p>
          <input type="text"
            onChange={event => setItemInput(event.target.value)}
            value={itemInput} />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}


export default App;
