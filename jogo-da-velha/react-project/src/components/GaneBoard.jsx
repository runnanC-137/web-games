import CardElement from "./CardElement";
function GameBoard(props) {
    
    return (
        <div id="gameBoard" >
            {
                props.cards.map(card => <CardElement flipCard={props.flipCard} key={card.id} card={card}></CardElement>)
            }
        </div>
    );
  }
  
export default GameBoard;