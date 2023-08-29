import React, {ChangeEvent} from 'react';

type InputPropsTYpe={
    setTitle:(title:string)=>void;
    title:string;
}


export const Input = (props:InputPropsTYpe) => {
    const onChangeInputHandler=(event:ChangeEvent<HTMLInputElement>)=>{
        props.setTitle(event.currentTarget.value)
    }

    return (
        <div>
        <input value={props.title} onChange={onChangeInputHandler}/>
        </div>
    );
};

