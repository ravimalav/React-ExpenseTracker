const CandyBuyButton = (props) => {
  const id = props.itemId;
  const buyOneHandler = () => {
    const itemQuantity = 1;
    props.onClick({ itemQuantity, id });
  };
  const buyTwoHandler = () => {
    const itemQuantity = 2;
    props.onClick({ itemQuantity, id });
  };
  const buyThreeHandler = () => {
    const itemQuantity = 3;
    props.onClick({ itemQuantity, id });
  };
  return (
    <div>
      <button onClick={buyOneHandler}>Buy-1</button>
      <button onClick={buyTwoHandler}>Buy-2</button>
      <button onClick={buyThreeHandler}>Buy-3</button>
    </div>
  );
};

export default CandyBuyButton;
