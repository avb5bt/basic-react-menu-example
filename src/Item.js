function Item(props) {
  return (
    <p>
      {props.info.food} (${props.info.price})
    </p>
  );
}

export default Item;
