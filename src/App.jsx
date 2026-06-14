import { useState } from "react";
import Nav from "./Nav";



const App = () => {
  const [num, setNum] = useState(0)
  function increaseNums() {
    setNum(num + 1);
  };
  // console.log(num)
  return (
    <>
      <Nav></Nav>
      <h1>My Numbers: {num}</h1>
      <button onClick={increaseNums} className="btn">Increase Nums: {num}</button>

    </>
  )
};

export default App;