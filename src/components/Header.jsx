import React from 'react'
import { Component, useState } from 'react'

function Header() {

    let [nuevoText, setNuevoText] = useState('')

 function handleClick(e){
    let texto =  document.getElementById('text')
    console.log(e.target ,  texto.value)
    setNuevoText(texto.value);
    e.preventDefault()
 }

  return (
    <header>
        <div>header</div>
        <nav>
            <form className='submit'>
            <input type="text" name="text" id="text" /><br/>
            <button onClick={handleClick}> uno </button>
            </form>

            <ul>
                <li>{nuevoText}</li>
            </ul>
        </nav>
    </header>
  )
}

export default Header