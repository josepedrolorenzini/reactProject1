import { Component, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App(){

  let saludo = "Hello Mundo" ; 

  let myProgramming = ['php' , 'javascript' , 'prestashop' , 'sql' , 'html' , 'react' , 'jquery' , 'css'];

  let [newText , setNewText] = useState('hello world');
  let count = 0;
  
  let kapadona = (e) =>{
    count++;
    console.log(e.target.innerText , count)
    setNewText(e.target.innerText )
    e.preventDefault()
  }

  return (
    <>
    <a href="www.vientodelsur.cl" onClick={kapadona}>{saludo}</a>
    <p>{newText}</p>
    <ul>
      {myProgramming.map((languages , index ) => (
        <li key={index}>{languages}</li>
      )
    //  .filter((list) => list.contains('p'))

      )}
    </ul>
    </>
    
  )

}
export default App;