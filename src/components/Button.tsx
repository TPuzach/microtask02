import React from 'react';


type ButtonPropsType={
    name:string;
    callback:()=>void
}


export  const Button = (props:ButtonPropsType) => {
    const OnClickButtonHandler=()=>{
        props.callback()
    }
    return (
        <button onClick={OnClickButtonHandler}>{props.name}</button>
    );
};

