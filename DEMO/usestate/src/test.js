import React , {useState} from "react";
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
                placeholder="Type a message"
                onChange={(e) => setMessage(e.target.value)}
            />
            <p>
                <strong>{message}</strong>
            </p>
            <input 
                type="button"  
                value="Add"
                onClick={(e) => {
                    setMessageList([...messageList, {
                        id:messageList.length+1,message:message
                    }]);
                    setMessage("");
                }}
            />
            <ul>
                {messageList.map((m) => (
                    <li key={m.id}>{m.message}</li>
                ))}
            </ul>
        </div>
    )
}