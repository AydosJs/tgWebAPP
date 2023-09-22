import { useEffect } from 'react';
import './App.css'
import Height from './containers/Height'
import MainLayout from './containers/MainLayout'

const tg = window.Telegram.WebApp;

function App() {

  useEffect(() => {
    tg.ready()
  }, [])

  return (
    <MainLayout>
      <Height />
    </MainLayout>
  )
}

export default App
