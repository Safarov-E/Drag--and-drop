import React, {useState} from 'react';
import './App.css';

const App = () => {
  const [drag, setDrag] = useState(true)

  return (
    <div className="app">
      {drag
        ? <div className="drop-area">Отпустите файлы, чтобы загрузить их</div>
        : <div>Перетащите файлы, чтобы загрузить их</div>}
    </div>
  )
}

export default App;