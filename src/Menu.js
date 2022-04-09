import Meal from "./Meal.js"
import {useState} from "react"
function Menu(props) {
  console.log("Menu.js", props.menu)
  const [showOnlyVegetarian, setShowOnlyVegetarian] = useState(false);
  return (<>
      <h1>Menu</h1>
      {showOnlyVegetarian && <button onClick={() => setShowOnlyVegetarian(false)} > Show All </button>}
      {!showOnlyVegetarian && <button onClick={() => setShowOnlyVegetarian(true)} > Show Only Vegetarian </button>}
      {Object.keys(props.menu).map((mealName) => <Meal name={mealName} items={props.menu[mealName]} onlyVegetarian={showOnlyVegetarian} />)}
    </>);
}

export default Menu;
