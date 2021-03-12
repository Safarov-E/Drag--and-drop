import React, {useState} from 'react'
import './App.css'

const App = () => {
  const [cardList, setCardList] = useState([
    {id: 1, order: 3, text: 'КАРТОЧКА 3'},
    {id: 2, order: 1, text: 'КАРТОЧКА 1'},
    {id: 3, order: 2, text: 'КАРТОЧКА 2'},
    {id: 4, order: 4, text: 'КАРТОЧКА 4'},
  ]);
  const [currentCard, setCurrentCard] = useState(null);

  function dragStartHandler(e, card) {
    setCurrentCard(card)
  }

  function dragEndHandler(e) {
    
  }

  function dragOverHandler(e) {
    e.preventDefault();
    e.target.style.background = 'lightgray'
  }

  function dropHandler(e, card) {
    e.preventDefault();
  }

  return (
    <div className="app">
      {cardList.map(card =>
        <div 
          onDragStart={(e) => dragStartHandler(e, card)}
          onDragLeave={(e) => dragEndHandler(e)}
          onDragEnd={(e) => dragEndHandler(e)}
          onDragOver={(e) => dragOverHandler(e)}
          onDrop={(e) => dropHandler(e, card)}
          draggable={true}
          className="card">
          {card.text}
        </div>  
      )}
    </div>
  )
}

export default App;