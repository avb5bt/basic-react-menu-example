import Item from "./Item.js"
function Meal(props) {
  let itemsToDisplay = props.items;
  if (props.onlyVegetarian) {
    itemsToDisplay = props.items.filter((item) => item.vegetarian === true)
  }
  console.log(itemsToDisplay)
  return (<>
    <h2>{props.name}</h2>
    {itemsToDisplay.map((item) => <Item info={item} />)}
    </>);
}

export default Meal;
