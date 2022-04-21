function Item(props) {
  return (
    <p>
      {props.info.food} (${props.info.price})
    </p>
  );
}

export default Item;

/*
Notes:
1) Note that the item, the most basic of components, has almost nothing in it.
    a) it takes in a prop which is a way for the parent to pass to its children. Parent passes in information using attributes in html tag.
    b) in the most basic of components (such as this), you don't use user-defined components. You use usually default components
    c) props is an OBJECT encompassing everything in those html tags. Think of it like a map kinda. 
    d) all it is displaying in the name of the food and the price. Rather than having a toString() method or converting to a string, just use ${JS expression} 
*/
