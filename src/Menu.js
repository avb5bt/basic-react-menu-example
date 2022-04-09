import Meal from "./Meal.js"
import {useState} from "react"
function Menu(props) {
  // What state does my app need? Whether to show Vegetarian or not
  const [showOnlyVegetarian, setShowOnlyVegetarian] = useState(false);

  // What HTML should be displayed? The title, a button for the vegetarian option, and each meal component
  return (<>
      <h1>Menu</h1>
      {/* These two lines displayed based on a boolean condition. If the thing on the left is true, the stuff on the right is displayed */}
      {showOnlyVegetarian && <button onClick={() => setShowOnlyVegetarian(false)} > Show All </button>}
      {!showOnlyVegetarian && <button onClick={() => setShowOnlyVegetarian(true)} > Show Only Vegetarian </button>}
      {/* Object.keys(object) returns an array of the keys */}
      {/* .map() then loops through each of those keys */}
      {Object.keys(props.menu).map((mealName) => <Meal name={mealName} items={props.menu[mealName]} onlyVegetarian={showOnlyVegetarian} />)}
    </>);
}

export default Menu;
