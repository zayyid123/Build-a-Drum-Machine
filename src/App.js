import './App.css';
import React from 'react';
import {audiosBank} from './constants'
import {audios} from './constants'

function App() {
  const [power, setPower] = React.useState(true)
  const [bank, setBank] = React.useState(false)
  const [dataBtn, setDataBtn] = React.useState(bank ? audiosBank : audios)

  //keep the same value with UI display
  const [vol, setVol] = React.useState(0.5)

  const regClick = (event, id) => {
    console.log(id)
    var display = document.getElementById('display');
    display.innerHTML = id
    var audio = document.getElementById(event);
    audio.play();
  }

  const bankClick = (event, id) => {
    console.log(id)
    var display = document.getElementById('display');
    display.innerHTML = id
    var audio = document.getElementById(event);
    audio.play();
  }

  const handleClick = (event)=> {
      if(power){
          if(power && bank){
              bankClick(event.target.value, event.target.id);
          } else if (power && !bank) {
              regClick(event.target.value, event.target.id);
          }
      } else if((!power && !bank) || (!power && bank)) {
          alert('Hi, power is off! Please turn on :)')
      }
  }

  window.document.onkeyup = function(event) {
    let id = ''
    let keystroke = event.key.toUpperCase()
        if (keystroke === "q" || keystroke === "Q") {
          id = dataBtn[0].myID
        } else if (keystroke === "w" || keystroke === "W") {
          id = dataBtn[1].myID 
        } else if (keystroke === "e" || keystroke === "E") {
          id = dataBtn[2].myID 
        } else if (keystroke === "a" || keystroke === "A") {
          id = dataBtn[3].myID 
        } else if (keystroke === "s" || keystroke === "S") {
          id = dataBtn[4].myID 
        } else if (keystroke === "d" || keystroke === "D") {
          id = dataBtn[5].myID 
        } else if (keystroke === "z" || keystroke === "Z") {
          id = dataBtn[6].myID 
        } else if (keystroke === "x" || keystroke === "X") {
          id = dataBtn[7].myID 
        } else if (keystroke === "c" || keystroke === "C") {
          id = dataBtn[8].myID 
        }
    if(power){
      if(power && bank){
          bankClick(keystroke, id);
      } else if (power && !bank) {
          regClick(keystroke,id);
      }
  } else if((!power && !bank) || (!power && bank)) {
      alert('Hi, power is off! Please turn on :)')
  }
  }

  function switchPower() {
    setPower(!power);
  }

  function switchBank() {
    setBank(!bank);
  }

  React.useEffect(() => {
    setDataBtn(bank ? audiosBank : audios)
  }, [bank])
  

function sliderCallback(data){
    setVol(data);
    console.log('Received volume is ' + data);
}

  return (
    <div className="App" style={{marginTop: 60}}>
      <div  id="drum-machine" style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap:'wrap', backgroundColor:'#161B22', width: 450,borderRadius: 10, margin:'auto'}}>
        <div style={{padding: 10, display: 'flex', flexWrap:'wrap', width: 170}}>
          {
            dataBtn.map((item, index) => 
            <button type="submit" style={{margin: 2, minWidth: 50, minHeight: 50}} key={index} id={item.myID} className='drum-pad' value={item.name} onClick={handleClick}>
              <audio className='clip' id={item.name} src={item.url}></audio>
              {item.name}
            </button>)
          }
        </div>
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
          <button onClick={switchPower} style={{margin: 5, width: 60}}>{power ? 'On' : 'Off'}</button>
          <button onClick={switchBank} style={{margin: 5, width: 60}}>{bank ? 'On' : 'Off'}</button>
          <div id="display" style={{backgroundColor: 'white', width: 110, padding: 5, margin: 5}}>-</div>
        </div>     
      </div>
    </div>
  );
}

export default App;
