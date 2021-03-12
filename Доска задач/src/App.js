import React, {useState} from 'react';
import './App.css';

const App = () => {
  const [boards, setBoards] = useState([
    {id: 1, title: 'Сделать', items: [{id: 1, title: 'Пойти в магазин'}, {id: 2, title: 'Выкинуть мусор'},{id: 3, title: 'Покушать'}]},
    {id: 2, title: 'Проверить', items: [{id: 4, title: 'Код ревью'}, {id: 5, title: 'Задача на факториал'},{id: 6, title: 'Задача на фибоначи'}]},
    {id: 3, title: 'Сделано', items: [{id: 7, title: 'Открыть редактор'}, {id: 8, title: 'Смонтировать'},{id: 9, title: 'Отрендерить'}]}
  ])

  function dragOverHandler(e, board, item) {
    e.preventDefault();
    if(e.target.className === 'item') {
      e.target.style.boxShadow = '0 4px 3px gray'
    }
  }
  function dragLeaveHandler(e) {
    e.target.style.boxShadow = 'none'
  }
  function dragStartHandler(e) {
    
  }
  function dragEndHandler(e) {
    e.target.style.boxShadow = 'none'
  }
  function dropHandler(e, board, item) {
    e.preventDefault();
  }
  return (
    <div className="app">
      {boards.map(board =>
        <div className="board" key={board.id}>
          <div className="board__title">{board.title}</div>
          {board.items.map(item => 
            <div 
              onDragOver={(e) => dragOverHandler(e, board, item)}
              onDragLeave={(e) => dragLeaveHandler(e)}
              onDragStart={(e) => dragStartHandler(e)}
              onDragEnd={(e) => dragEndHandler(e)}
              onDrop={(e) => dropHandler(e, board, item)}
              draggable={true}
              className="item" 
              key={item.id}
            >
              {item.title}
            </div>  
          )}
        </div>
      )}
    </div>
  )
}

export default App;
