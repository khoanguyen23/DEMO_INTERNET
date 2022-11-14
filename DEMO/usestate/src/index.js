import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

const Message = () => {
  const [message, setMessage] = useState("");
  const [messageList, setMessageList] = useState([]);

  return (
    <div>
      <input
        type="text"
        value={message}
        placeholder="Enter a message"
        onChange={(e) => setMessage(e.target.value)}
      />
      {/* <p>
        <strong>{message}</strong>
      </p> */}
      <input
        type="button"
        value="Add"
        onClick={(e) => {
          setMessageList([
            ...messageList,
            {
              // Use the current size as ID (needed to iterate the list later)
              id: messageList.length + 1,
              message: message
            }
          ]);
          setMessage(""); // Clear the text box
        }}
      />
      <ul>
        {messageList.map((m) => (
          <li key={m.id}>{m.message}</li>
        ))}
      </ul>
    </div>

  //   <div>
  //   <input
  //     type="text"
  //     value={message}
  //     placeholder="Enter some letters"
  //     onChange={e => {
  //       const val = e.target.value;
  //       setMessage(prev => prev + val)
  //     } }
  //   />
  //   <p>
  //     <strong>{message}</strong>
  //   </p>
  // </div>

// {/* <div>
// <input
//   type="text"
//   value={messageObj.message}
//   placeholder="Enter a message"
//   onChange={e => {
//     messageObj.message = e.target.value;
//     setMessage(messageObj); // Doesn't work
//   }}
// />
// <p>
//   <strong>{messageObj.message}</strong>
// </p>
// </div> */}
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<Message />, rootElement);



