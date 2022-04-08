import Meal from "./Meal.js"
import {useState} from "react"
function Menu(props) {
  console.log("Menu.js", props.menu)
  const [showOnlyVegetarian, setShowOnlyVegetarian] = useState(false);
  return (<>
      <h1>Menu</h1>
      {showOnlyVegetarian && <button onClick={() => setShowOnlyVegetarian(false)} > Show All </button>}
      {!showOnlyVegetarian && <button onClick={() => setShowOnlyVegetarian(true)} > Show Only Vegetarian </button>}
      <h2>Breakfast</h2>
      <Meal items={props.menu.breakfast} onlyVegetarian={showOnlyVegetarian} />
      <h2>Lunch</h2>
      <Meal items={props.menu.lunch} onlyVegetarian={showOnlyVegetarian} />
      <h2>Dinner</h2>
      <Meal items={props.menu.dinner} onlyVegetarian={showOnlyVegetarian} />
    </>);
}

export default Menu;
