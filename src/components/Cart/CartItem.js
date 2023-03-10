import classes from './CartItem.module.css';

const CartItem = (props) => {
  const { id, title, quantity, total, price } = props.item; //destruction
  
  const incrementMeal = () => {
    props.onIncrement(id);
  };
  const decrementMeal = () => {
    props.onDecrement(id);
  };



  return (
    <li className={classes.item} id={id} key={id}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{" "}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={id => decrementMeal(id)}>-</button>
          <button onClick={id => incrementMeal(id)}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
