import React from 'react';
import './index.css';
import { useSelector, useDispatch } from 'react-redux';
import { incNum, decNum } from './actions/index';

function App() {
	
const mystate = useSelector((state) => state.change);
const dispatch = useDispatch();

return (
	<>
	<h2>Increment/Decrement the number using Redux.</h2>
	<div className="app">
		<h1>{mystate}</h1>
		<button onClick={() => dispatch(incNum())}>+</button>
		<button onClick={() => dispatch(decNum())}>-</button>
	</div>
	</>
);
}

export default App;
