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

/************LEVEL 2 Component*************
What does it encaptulate: Item (level 1 component)

What does it return: default components (header)

What are the props: seems to receive items (which is an array). Note that we copy what is in the props.

What are the states:  none

Other JS elements to mention:
1) this JS element encaptulate SEVERAL items (not just one), therefore we use a map() to repeat the same element. Here seems to be the generalized formula:
disPlayArray.map((element)=><Child attribute={element}>)
  a) displayArray may be passed as a parameter
  b) map is very similar to a for each loop. Hence "element" isn't defined anywhere

2) example of for each loop and map() similarities
  a) for each (Type element: displayArray){}
  b) displayArray.map((element)=>)

3) filter() is very similar to map()  (and for each loops) except you use it to remove stuff. map() is a simple traversal

4) notice that we don't change the props directly. We make copies of it

5) if you want somethign to shop showing up, use filter()
*/
