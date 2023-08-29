import './App.css';
import React, {MouseEvent, useState} from "react";
import {Fullinput} from "./components/Fullinput";
import {Input} from "./components/Input";
import {Button} from "./components/Button";


function App() {
    let [message, setMessage] = useState([
        {message: 'message1'},
        {message: 'message2'},
        {message: 'message3'}
        ])

    let [title,setTitle]=useState('')
    console.log(title)
    const addMessage=(title:string)=>{
       let NewMessage={message:title}
        setMessage([NewMessage,...message,])
    }
    const callBackButtonHandler=()=>{
        addMessage(title)
        setTitle('')
    }

    return(
    <div className={'App'}>
        <div>
            {/*<Fullinput addMessage={addMessage}/>*/}
            <Input setTitle={setTitle} title={title}/>
            <Button name={'+'} callback={callBackButtonHandler}/>

        </div>
        {message.map((el, index) => {
            return(
                <div key={index}>{el.message}</div>
            )
        })}
    </div>
)
}
export default App;