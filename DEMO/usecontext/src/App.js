import React, { createContext } from 'react';
import "./index.css";
import ComB from './ComB';
// Định nghĩa 1 context
const Data = createContext();
// Sau đó bao bọc toàn bộ thành phần DOM của component bằng thẻ Provider, 
// đồng thời truyền giá trị mà mình muốn chia sẻ đến các component khác
export default function App() {
  return (
    <div className="App">
      
      <Data.Provider value={"Welcome to React"}>
        <ComB />
      </Data.Provider>
    </div>
  );
}
  
export { Data };