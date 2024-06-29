import { useState, useEffect } from 'react'
import './App.css'
import { database } from './firebase'
import {  ref, onValue, set } from "firebase/database";

const LAMP = '/lamp_ligada'

function App() {
  const [lampLigada, setLampLigada] = useState(false)
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const lampRef = ref(database, LAMP);
    onValue(lampRef, (snapshot) => {
      const data = snapshot.val();
      setLampLigada(data);
      setLoaded(true)
    });
  }, [])

  useEffect(() => {
    if (loaded) {
      set(ref(database, LAMP), lampLigada);
    }
  }, [lampLigada, loaded])

  const toggleLamp = () => {
    setLampLigada(!lampLigada)
  }

  if (!loaded) return <p>carregando...</p>

  return (
    <>
     <h1>
    {lampLigada ? '💡': '❌'}
      </h1>
    <p>
      <button onClick={toggleLamp}>
        {lampLigada ? 'desligar ': 'ligar '}
        lâmpada
      </button>
    </p>
    </>
  )
}

export default App
