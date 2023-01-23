import { useSelector, useDispatch } from 'react-redux';

import { cartActions } from '../../store/cart-slice';
import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';

const Cart = (props) => {
  const dispatch = useDispatch();
  
  const mealItems = useSelector((state) => state.cart.items);
  
  const onIncrementMeal = (id) => {
    const itemNumber = mealItems.findIndex(item => item.id === id);
    
    dispatch(cartActions.incrementMealQuantity(itemNumber))
  };
  const onDecrementMeal = (id) => {
    const itemNumber = mealItems.findIndex(item => item.id === id);

    if(mealItems[itemNumber].quantity===1){
      return(
        dispatch(cartActions.removeCart(id))
      )
    }
    
    dispatch(cartActions.decrementMealQuantity(itemNumber))
  };
  
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {mealItems.map((meal) => {
          return (
            <CartItem
              key={meal.id}
              item={{
                id: meal.id,
                title: meal.title,
                quantity: meal.quantity,
                total: meal.total,
                price: meal.price,
              }}
              onIncrement = {onIncrementMeal}
              onDecrement = {onDecrementMeal}
            />
          );
        })}
      </ul>
    </Card>
  );
};

export default Cart;
