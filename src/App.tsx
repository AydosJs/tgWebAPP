import { MainButton, useShowPopup } from '@vkruglikov/react-telegram-web-app';
import './App.css'


function App() {
  const showPopup = useShowPopup();

  const handleClick = () =>
    showPopup({
      message: 'Hello, I am popup',
    });
  return (
    <div>
      <h1>My React Telegram Web App</h1>
      <MainButton text="SHOW POPUP" onClick={handleClick} />
    </div>
  )
}

export default App
