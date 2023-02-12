function GameOver(props) {
    return (
        <div id="gameOver" style={props.show ? {display: "flex"} : {display: "none"}}>
            <div>
                Parabéns, você completou o jogo!
            </div>
            <button id="restart" onClick={props.restart}>Jogue novamente</button>
        </div>
    );
  }
  
export default GameOver;