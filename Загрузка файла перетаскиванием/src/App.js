import React, {useState} from 'react';
import './App.css';

const App = () => {
  const [drag, setDrag] = useState(false)

  function dragStartHandler(e) {
    e.preventDefault();
    setDrag(true);
  }
  return (
    <div className="app">
      {drag
        ? <div className="drop-area">Отпустите файлы, чтобы загрузить их</div>
        : <div
            onDragStart={e => dragStartHandler(e)}
            onDragLeave={e => }
            onDragOver={e => dragStartHandler(e)}
          >Перетащите файлы, чтобы загрузить их</div>}
    </div>
  )
}

export default App;