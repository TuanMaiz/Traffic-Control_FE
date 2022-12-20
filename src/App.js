import './App.css';
import { io } from 'socket.io-client'
import { useState, useEffect } from 'react';
import { Buffer } from 'buffer';
import utf8 from 'utf8'
const socket = io.connect('http://localhost:3001')
console.log(socket);


function App() {
  const [data, setData] = useState([])
  useEffect(() => {
    // socket.on("on-chat-react", (dataReceived) => {
    //   setData(dataReceived)
    // })
    socket.on("on-frame-react", (frameReceived) => { //frame receive dang bi sai dinh dang
      console.log(frameReceived);
      // let base64ImageString = Buffer.from(frameReceived.frame, 'binary').toString('base64')
      // let imageURL = utf8.encode(base64ImageString)
      setData(frameReceived.frame)
      // setData(imageURL)
    })
  })

  console.log(data)
  return (
    <div className="App">
      <h1>This is test socket app</h1>
        <img className='frame' src={`data:image/jpg;base64,${data}`} alt=""/>
    </div>
  );
}

export default App;
