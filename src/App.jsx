
import { Suspense } from "react";
import "./App.css"
import FoodSection from "./components/Food Section/FoodSection";
import Nav from "./components/Navbar/Nav";
import Spinner from "./components/loadingSpinner/Spinner";

const mealsPromises = fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=s')
  .then(res => res?.json())

const App = () => {

  return (
    <>
      <Nav></Nav>
      <Suspense fallback={<Spinner></Spinner>}>
        <FoodSection mealsPromises={mealsPromises}></FoodSection>
      </Suspense>

    </>
  )


};

export default App;