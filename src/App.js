import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm'
import PropTypes from 'prop-types';
// import About from './components/About';
import React, { useState } from 'react'
import Alert from './components/Alert';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
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
  // PALLETE LOGIC

  // const [palleteBg, setpalleteBg] = useState({
  //   backgroundColor: 'black'
  // })
  // const blackRadio = document.querySelector('.blackRadio')
  // if (blackRadio) {
  //   blackRadio.checked = true

  // }
  // const handleOnChangePallete = (e) => {
  //   if (blackRadio.checked === true) {

  //     blackRadio.checked = false
  //   }

  //   e.target.checked = true
  //   if (e.target.id === 'flexRadioDefault1') {
  //     console.log('1')
  //   } else if (e.target.id === 'flexRadioDefault2') {
  //     setpalleteBg({
  //       backgroundColor: 'purple'
  //     })
  //     setmode('')
  //     document.body.style.backgroundColor = undefined
  //     console.log('Working')
  //   }
  //   else if (e.target.id === 'flexRadioDefault3') {
  //     console.log('3')

  //   }
  //   else if (e.target.id === 'flexRadioDefault4') {
  //     console.log('3')
  //   }

  // }

  return (<>
    <Navbar title={result.title} link={result.link} mode={mode} toggleMode={toggleMode} txtColor={color} bgColor={bg} palleteStyle={palleteStyle} />
    <Alert alert={alert} />
    <div className="container my-3" style={myStyle}>
      <TextForm title='Enter the text to change it to Uppercase and Lowercase' mode={color} showAlert={showAlert} />
    </div>
  </>
  );
}
export default App;
let result = { title: 'Text Utils', link: 'Link' }
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired
}
Navbar.defaultProps = {
  title: 'Title',
  link: 'Link'
}





