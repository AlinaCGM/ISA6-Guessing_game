import { useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState(0);
  const [resultRandom, setResultRandom] = useState(0);
  const [btnMessage, setBtnMessage] = useState("");
  const [count, setCount] = useState(0);

  let random = Math.trunc(Math.random() * 10) + 1;

  const displayResult = (input, resultRandom) => {
    const guessInput = Number(input);
    if (guessInput < resultRandom || guessInput > resultRandom)
      return "Please try again";
    else return "You have guessed the correct number!";
  };
  console.log(random, "random");

  const checkGuess = () => {
    setBtnMessage(displayResult(input, resultRandom));
    count <= 2 ? setCount((count) => count + 1) : setCount(0);
  };

  function onChangeHandler(e) {
    setInput(e.target.value);
    setResultRandom(random);
  }
  console.log(input, "input");
  const start = () => {
    setResultRandom(random);
    setCount(0);
    setBtnMessage("start again");
  };

  return (
    <div className="App">
      <form>
        <label>
          Guess the number
          <input
            // type="text"
            // name="name"
            value={input}
            onChange={onChangeHandler}
          />
        </label>
        {btnMessage !== "You have guessed the correct number!" ? (
          <button type="button" onClick={checkGuess}>
            Guess
          </button>
        ) : (
          <button type="button" onClick={start}>
            Start again!
          </button>
        )}
        <div>{btnMessage}</div>
        <div> {count} times</div>
      </form>
    </div>
  );
}

export default App;
