import React, { useEffect, useState } from 'react'
import Axios from 'axios';
import { GetData } from './api/index'
import './App.css'
import TicTac from './TicTacToe'
import Creat from './CreatGuest'



function App() {
  const [Data, SetData] = useState([]);
  const [Color , SetColor] = useState(['black','yellow','blue','blueviolet','brown'])
  const [Card,SetCard] = useState('');
  var index;
  useEffect(() => {
    GetData.then(data => {
      SetData(data)
    })
  }, Data)

  function Click(props) {
    SetCard(props)   
  }

  return (
    <div className="App">
      <Creat/>
      <h1>Home PAge</h1>
 {Data.map((props)=>{
   return <h1>{props.first_name} {props.last_name}</h1>
 })}

      <div className='card' style={{ background: Card }}>
        
        {Card}
      </div>
      <br/>
      <br/>
      <br/>
      {Color.map((props)=>{
        return <button onClick={()=>Click(props)} className='card' style={{ background:props }}> {props}</button>
      })}
      <TicTac/>
    </div>
  );
}

export default App;
