
import "./App.css"
import Nav from "./components/Nav";

const mealsPromises = fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a')
  .then(res => res.json())

const App = () => {

  return (
    <>
      <Nav></Nav>

    </>
  )


};

export default App;