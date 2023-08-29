import React, {ChangeEvent, useState} from 'react';

type fullTitlePropsType={
    addMessage:(title:string)=>void
}
export const Fullinput = (props:fullTitlePropsType) => {
    let [title,setTitle]=useState('')
    const onChangeInputHandler=(event:ChangeEvent<HTMLInputElement>)=>{
        setTitle(event.currentTarget.value)


    }

    const onClickHandlerButtom=()=>{
        props.addMessage(title)
        setTitle('')
    }

    return (
        <div>
            <input value={title} onChange={onChangeInputHandler}/>
            <button onClick={onClickHandlerButtom}>+</button>
        </div>
    );
};
