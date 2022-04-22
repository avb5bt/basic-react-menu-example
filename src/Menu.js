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
/****************LEVEL 3: MENU******************
What does it encaptulate: Meal (Level 2)

What does it return: default components 

What are the props: Reveice an object with 3d array (really an object)

What are the states:  showOnlyVegetarian=>used only when we declare a button

Other JS elements to mention:
1) notice that the state is only declared when we have an event handler object (we have this event handler object in the parent class)

2) The object is really a 3d object. Object.keys() turns this object into an array (breakfast, lunch, dinner). It passes on all those things: the mealName (breakfast,lunch, dinner) and the meals array

3) it also passes the showOnlyVegetarian state. Notice that each item has a state that indicates this (notice how the parent and child at both ends have some information to use for state use)
***********/
