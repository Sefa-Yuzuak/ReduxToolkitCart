import {  useDispatch, useSelector } from 'react-redux';

import { toggleActions } from '../../store/toggle-slice'
import classes from './CartButton.module.css';

const CartButton = (props) => { 
  const dispatch = useDispatch();

  const itemNumber = useSelector((state) => state.cart.items.length)
  const toggleSwitchHandler = () => {
    dispatch(toggleActions.switchToggle())
  };

  return (
    <button className={classes.button} onClick={toggleSwitchHandler}>
      <span>My Cart </span>
      <span className={classes.badge}>{itemNumber}</span>
    </button>
  );
};

export default CartButton;
