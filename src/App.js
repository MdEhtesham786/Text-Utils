import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm'
import PropTypes from 'prop-types';
import About from './components/About';
import React, { useState } from 'react'
import Alert from './components/Alert';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
function App() {
  //ALL STATES
  const [mode, setmode] = useState('light')
  const [color, setcolor] = useState('dark')
  const [bg, setbg] = useState('white')
  const [alert, setalert] = useState(null)
  const [palleteStyle, setpalleteStyle] = useState({
    display: 'none',
    color: 'black'

  })

  //TOGGLE LOGIC
  const toggleMode = () => {
    if (mode === 'light') {
      removeClasses()
      setmode('dark')
      setcolor('light')
      setbg('black')
      showAlert('success', 'Dark mode enabled')
      document.body.style.backgroundColor = 'black'
      setpalleteStyle({
        display: 'flex',
        color: 'white'
      })

    } else {
      removeClasses()

      setmode('light')
      setcolor('dark')
      setbg('white')
      showAlert('success', 'Dark mode disabled')
      document.body.style.backgroundColor = 'white'
      setpalleteStyle({
        display: 'none',
        color: 'black'
      })
    }
  }
  // ALERT FUNCTION
  const showAlert = (type, message) => {
    setalert({
      type, message
    })
    setTimeout(() => {
      setalert(null)
    }, 2000);
  }
  // CONTAINER CSS
  const myStyle = {
    position: 'absolute',
    top: '100px'
  }
  //NAVBAR CSS
  const navbarStyle = {
    zIndex: '1'
  }
  //ALERT CSS
  const alertStyle = {
    zIndex: '1'
  }
  //CUSTOM PALLETE
  const removeClasses = () => {
    document.body.classList.remove('bg-primary')
    document.body.classList.remove('bg-warning')
    document.body.classList.remove('bg-danger')
    document.body.classList.remove('bg-success')
    document.body.classList.remove('border')
    document.body.classList.remove('border-white')
  }

  const customPallete = (cls, no) => {
    removeClasses()
    document.body.classList.add(`bg-${cls}`)

  }

  return (<Router>
    <Navbar title={result.title} link={result.link} mode={mode} toggleMode={toggleMode} txtColor={color} bgColor={bg} palleteStyle={palleteStyle} navbarStyle={navbarStyle} customPallete={customPallete} removeClasses={removeClasses} />
    <Alert alert={alert} alertStyle={alertStyle} />
    <div className="container my-3" style={myStyle}>
      <Routes>
        <Route path='/Text-Utils/' element={<TextForm title='Enter the text to change it to Uppercase and Lowercase' mode={color} showAlert={showAlert} />}></Route>
        <Route path='/Text-Utils/about' element={<About mode={mode} />}></Route>
      </Routes>
    </div>
  </Router>
  );
}
export default App;
let result = { title: 'Text Utils', link: 'About' }
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired
}
Navbar.defaultProps = {
  title: 'Title',
  link: 'Link'
}





