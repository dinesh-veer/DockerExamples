import { useState , useEffect } from 'react'
import './App.css'

function App() {
  const [message, setMessage] = useState("")

  useEffect(() => {
    //Below is used in case of when we are handling cors error from front-end in 
    //vite-config which is not a recommended practice this more case useful in lower env
    //fetch("/api/message")
    //Below use case when server is handling cors issues
      fetch("http://localhost:4000/api/message")
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
      .catch ((error) => {
        console.log("Error while fetching data :" + error);
      });
  }, [])

  return (
    <>

      <h1>Welcome to Vite + React</h1>
      <p>
        Data Received from express: {message}
      </p>
    </>
  )
}

export default App
