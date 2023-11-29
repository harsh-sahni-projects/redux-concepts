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

function App() {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  const cartVisible = useSelector(state => state.cartUi.cartVisible);
  const cart = useSelector(state => state.cart);
  const newNotification = useSelector(state => state.cartUi.notification);
  console.log('newNotification:', newNotification);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(uiActions.showNotification({type: 'success', msg: 'msg'}))
  }, [])

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
