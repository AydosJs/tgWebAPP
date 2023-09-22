import { useEffect } from 'react';
import './App.css'
import MainLayout from './containers/MainLayout'
import Region from './containers/Region';

const tg = window.Telegram.WebApp;

function App() {

  useEffect(() => {
    tg.ready()
  })

  return (
    <MainLayout>
      <Region />
    </MainLayout>
  )
}

export default App
