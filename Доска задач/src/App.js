import React, {useState} from 'react';
import './App.css';

const App = () => {
  const [board, setBoards] = useState([
    {id: 1, title: 'Сделать', items: [{id: 1, title: 'Пойти в магазин'}, {id: 2, title: 'Выкинуть мусор'},{id: 3, title: 'Покушать'}]},
    {id: 2, title: 'Проверить', items: [{id: 4, title: 'Код ревью'}, {id: 5, title: 'Задача на факториал'},{id: 6, title: 'Задача на фибоначи'}]},
    {id: 3, title: 'Сделано', items: [{id: 7, title: 'Снять видео'}, {id: 8, title: 'Смонтировать'},{id: 9, title: 'Отрендерить'}]}
  ])
  return (
    <div className="app">

    </div>
  )
}

export default App;
