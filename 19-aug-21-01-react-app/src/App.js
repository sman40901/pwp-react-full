import logo from './logo.svg';
import './App.css';

const stringLists=['a','b','c'];
// const updateLists=stringLists.map((strList)=>{
//   <li key={strList.id}>{strList}</li>
// });
// const updateLists=stringLists.map((strList, index)=>{
//   <li key={index}>{strList}</li>
// }); // if we use index like this, order could be changed

function ListItem(props){
  const item = props.item;
  return(
    // this is wrong, you should not do like this
    <li key={item.toString()}>
      {item}
    </li>
  );
}

function ManemList(props){
  const mylists=props.mylists;
  const ListItems=mylists.map((strLists)=>{
    <ListItem item={strLists} />
  })
  return(
    <div>
      <h2>aaa</h2>
      <ol>{ListItems}</ol>
    </div>

  );
}

function App() {
  return (
    <div className="App">
      {/* <header className="App-header"> */}
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        <ManemList mylists={stringLists}/>
      {/* </header> */}
    </div>
  );
}

export default App;
