import Counter from './components/counter/counter';
import Header from './components/Header/Header';
import Form from './components/Form/Form';
import './App.css';
import CartHeader from './components/CartComponents/CartHeader/CartHeader';
import Cart from './components/CartComponents/Cart/Cart';
import Menu from './components/CartComponents/Menu/Menu';
import Notification from './components/CartComponents/Notification/Notification';

import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { uiActions } from './store/cart/ui';
import { saveCart, fetchCartData } from './store/cart/cart';

let initialRun = true;

function App() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  const cartVisible = useSelector(state => state.cartUi.cartVisible);
  const cart = useSelector(state => state.cart);
  const newNotification = useSelector(state => state.cartUi.notification);

  if (newNotification) {
    setTimeout(() => {
      dispatch(uiActions.hideNotification());
    }, 1000);
  }

  useEffect(() => {
    dispatch(fetchCartData());
  }, [])

  useEffect(() => {
    if (initialRun) {
      initialRun = false; // Don't save cart if initial run
      return;
    }
    if (cart.isChanged) 
      dispatch(saveCart(cart)); // only update cart if item added/removed. Don't update when cart data is initially fetched from server
    
      // --- Commented code at end of this file ---
  }, [cart])

  return (
    <>
    {/* <Header/> */}
    {/* {!isLoggedIn && <Form/>} */}
    {/* {isLoggedIn && <Counter/>} */}

    <CartHeader/>
    {cartVisible && <Cart/>}
    <Menu/>
    {newNotification && <Notification/>}
    </>
  )
}

export default App

/*
--- BECAUSE THIS IS "LOGIC" (AND ASYNC), WE CAN ----
--- MOVE IT TO THUNK (in store/cart.js file). SO ---
--- THAT OUR UI COMPONENT REMAINS CLEAR AND EASY ---
--- TO USE ---

const saveCart = async () => {
  dispatch(uiActions.showNotification({type: 'loading', msg: 'Saving...'}));
  
  let res = await axios.post(endpoint + '/updateCart', cart)

  dispatch(uiActions.showNotification({
    type: 'success',
    msg: 'Saved'
  }));
  console.log('Updated cart on server');
  
  // No need to try..catch err here
  // coz we will catch ALL errs below in catch
}
    
// Errs catched here (including n/w err + other err if this component will throw)
// saveCart() is async, so we can use catch.
saveCart().catch(err => {
  dispatch(uiActions.showNotification({
    type: 'error',
    msg: err.message
  }));
  console.log(err.message);
});
*/