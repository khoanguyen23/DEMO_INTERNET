// import React, { useEffect, useState } from "react";

// const App = (props) => {
// const [btnText, updatebtnText] = useState("")

// const loadDataOnlyOnce = () => {
// 	updatebtnText("Hello World!")
// }
	
// // This function will called only once
// useEffect(() => {
// 	loadDataOnlyOnce();
// }, [])

// return (
// 	<div style={{ margin: 200 }}>
// 	<button onClick={() => updatebtnText("HELLO MY FRIENDS")} >
// 		{btnText}
// 	</button>
// 	</div>
// );
// }

// export default App;




import React, { useState, useEffect } from 'react';

function App() {
	
const [count, setCount] = useState(0);

useEffect(() => {
	alert(`You clicked ${count} times`)
});

const handleUpdate = ()=> {
	setCount (count + 1)
}
	
return (
	<div>
	<div>You have clicked {count} times</div>
	<button onClick={ handleUpdate} >
		Click me
	</button>
	</div>
);
}

export default App;


