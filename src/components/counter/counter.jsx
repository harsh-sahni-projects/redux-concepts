import styles from './counter.module.css';
import { useSelector, useDispatch } from 'react-redux';

// --- Using @reactjs/toolkit --- 
import { counterActions } from '../../store/counter-slice.js';

// --- Using react-redux ------
// import { INCREMENT, DECREMENT, TOGGLE } from '../../store/redux-toolkit-store';

const Counter = () => {
	const counter = useSelector(state => state.counter.counter);
	const visible = useSelector(state => state.counter.visible);
	const dispatch = useDispatch();
	// --- Using @reactjs/toolkit --- 
	const increment = () => {
		dispatch(counterActions.increment());
	}
	const decrement = () => {
		dispatch(counterActions.decrement());
	}
	const incrementBy5 = () => {
		dispatch(counterActions.incrementBy(5));
	}
	const toggle = () => {
		dispatch(counterActions.toggle());
	}
	
	// --- Using react-redux ------
	// const increment = () => {
	// 	dispatch({ type: INCREMENT });
	// }
	// const decrement = () => {
	// 	dispatch({ type: DECREMENT });
	// }
	// const toggle = () => {
	// 	dispatch({ type: TOGGLE });
	// }

	return (
	<div className={styles.counterContainer}>
		{visible && <p>{counter}</p>}
		{!visible && <p>Counter hidden</p>}
		<div>
			<button onClick={increment}>Increment</button>
			<button onClick={incrementBy5}>Increment by 5</button>
			<button onClick={decrement}>Decrement</button>
		</div>
		<button onClick={toggle}>Toggle counter visibility</button>
	</div>
	)
}

export default Counter;