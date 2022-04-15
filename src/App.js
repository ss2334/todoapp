import logo from './logo.svg';
import './App.css';
import {useSelector,useDispatch} from 'react-redux';
import {addTodo , deleteTodo , removeTodo} from './action/index';
import {useState} from 'react';

function App() {
  const [inputdata , setInputdata]=useState('');
  const list=useSelector((state)=>state.todoreducers.list);
  const dispatch=useDispatch();

  return (
    <>
    <div className="App">
      <h1>Todo List</h1>
         <input type="text" placeholder='add items ...' value={inputdata} 
                 onChange={(e)=>setInputdata(e.target.value)}/>
              
              <button onClick={()=> dispatch(addTodo(inputdata),setInputdata(''))}>Add</button>

            <div>
              {
                
                list.map((elem)=>{
                   return (
                     <div>
                    <li key={elem.id}>{elem.data}</li>
                    <button onClick={()=> dispatch(deleteTodo(elem.id))}>Delete</button>
                    </div>
                   )
                  
                })
              
              }
            </div>  

            <button onClick={()=> dispatch(removeTodo(),setInputdata(''))}>Clear All</button>
  
    </div>
    </>
  );
}

export default App;
