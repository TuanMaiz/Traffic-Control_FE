import './App.css';
import { io } from 'socket.io-client'
import { useState, useEffect } from 'react';
// import { Buffer } from 'buffer';
// import utf8 from 'utf8'
const socket = io.connect('http://localhost:3001')
console.log(socket);


function App() {
  const [data, setData] = useState([])
  useEffect(() => {
    socket.on("on-packet-react", (frameReceived) => { //frame receive dang bi sai dinh dang
      console.log(frameReceived);
      setData(frameReceived.frame)
    })
  })

  console.log(data)
  return (
    <div className="App">
      <h1>Stream frame:</h1>
        <img className='frame' src={`data:image/jpg;base64,${data}`} alt=""/>
    </div>
  );
}

export default App;
