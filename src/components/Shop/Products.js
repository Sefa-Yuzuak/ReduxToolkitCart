import { useDispatch, useSelector } from 'react-redux';

import { cartActions } from '../../store/cart-slice';
import ProductItem from './ProductItem';
import classes from './Products.module.css';

const Products = (props) => {
  const dispatch =  useDispatch();

  const existItem = useSelector((state) => state.cart.items);
  const onAddMealToCart = (mealObject) => {
    const itemNumber = existItem.findIndex((item) => item.id === mealObject.id );
    if(itemNumber === -1){
      const dispatchMeal = {
        id: mealObject.id,
        title: mealObject.title,
        price: mealObject.price,
        quantity: mealObject.quantity,
        total: totalPrice(mealObject.price, mealObject.quantity)
      }
      dispatch(cartActions.addCart(dispatchMeal))
    }else{
      dispatch(cartActions.addMealQuantity(itemNumber))
    }
    

  };

  const totalPrice = (price, quantity) => {
    return(
      price*quantity
    );
  };

  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        <ProductItem
          id={1}
          title="Kebap"
          price={6}
          description=" Middle Eastern or Central Asian origin that typically combines small pieces of meat such as lamb or beef with vegetables on a skewer and is then grilled."
          onSubmitHandler={onAddMealToCart}
        />
        <ProductItem
          id={2}
          title="Dolma"
          price={4}
          description="Dolma is a Mediterranean dish made with rice-stuffed grape leaves. Although the term dolma is a Turkish word, meaning something that is stuffed, most countries in the Mediterranean region have their own version of this dish. Occasionally dolma can be found premade in specialty stores but is more often found in Mediterranean restaurants or made at home."
          onSubmitHandler={onAddMealToCart}
        />
        <ProductItem
          id={3}
          title="Meat Ball"
          price={2}
          description="It is a ball shaped ground beef dish. In a basic kofte recipe, ground beef, lamb or a combination of these two is combined with bread crumbs, onion, garlic and spices. Then shaped in balls and cooked over grill, stove or in oven."
          onSubmitHandler={onAddMealToCart}
        />
        <ProductItem
          id={4}
          title="Baklava"
          price={8}
          description="Baklava is a traditional pastry dessert that is known for its sweet, rich flavor and flaky texture."
          onSubmitHandler={onAddMealToCart}
        />
      </ul>
    </section>
  );
};

export default Products;
