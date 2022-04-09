import Item from "./Item.js"
function Meal(props) {
  let itemsToDisplay = props.items;
  if (props.onlyVegetarian) {
    // If onlyVegetarian is true, filter out the non-vegetarian options
    itemsToDisplay = props.items.filter((item) => item.vegetarian === true)
  }
  // What should be displayed? The meal name and the Item components
  return (<>
    <h2>{props.name}</h2>
    {itemsToDisplay.map((item) => <Item info={item} />)}
    </>);
}

export default Meal;
