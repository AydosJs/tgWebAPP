import { useEffect } from 'react';
import './App.css'
import MainLayout from './containers/MainLayout'
import Region from './containers/Region';
import { Route, Routes } from 'react-router-dom';
import Height from './containers/Height';

const tg = window.Telegram.WebApp;

function App() {

  useEffect(() => {
    tg.ready()
  })

  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Height />} />
        <Route path="region" element={<Region />} />
      </Route>
    </Routes>
  )
}

export default App
