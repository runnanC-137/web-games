import { useEffect, useState } from 'react';
import GameOver from './components/GameOver';
import GameBoard from './components/GaneBoard';
import game from './game';
function App() {

  const [cards, setCards] = useState([])
  const [show, setShow] = useState(false)

  useEffect(()=>{
    setCards(game.createCardsFromTechs())
  }, [setCards])

  function restart() {
    game.clearCards()
    setCards(game.createCardsFromTechs())
    setShow(false)
  }

  function flipCard(card) {
    game.flipCard(card.id, () => {
      setShow(true)
    },() => {
      setCards([...game.cards])
    })
    setCards([...game.cards])
  }
  return (
    <div className="App">
      <GameBoard cards={cards} flipCard={flipCard}></GameBoard>
      <GameOver show={show} setShow={setShow} restart={restart}></GameOver>
    </div>
  );
}

export default App;
