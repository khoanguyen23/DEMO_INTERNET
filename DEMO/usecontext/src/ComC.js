import React, { useContext } from 'react';
import { Data } from './App';
  
const ComC = ({ name }) => {
  const context = useContext(Data);
  return <h1>{context}</h1>
}
  
export default ComC;