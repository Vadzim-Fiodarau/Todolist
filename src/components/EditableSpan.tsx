import React, {ChangeEvent, useState} from "react";


type propsType = {
    title: string
    updateTasks:(todolistId:string,id:string,title:string)=>void
    todolistId:string
    id:string
}

export const EditableSpan = (props: propsType) => {

    let [title, setTitle] = useState(props.title)
    const onChangeHandler=(event:ChangeEvent<HTMLInputElement>)=>{
        setTitle(event.currentTarget.value);
        console.log()
    }
    let [edit, setEdit] = useState(false)
    const onDoubleClickHandler=()=>{
        setEdit(true)
    }
    const onBlurHandler=()=>{
        setEdit(false)
        props.updateTasks(props.todolistId, props.id, title)
    }
    return (
        edit
            ? <input value={title} onChange={onChangeHandler} onBlur={onBlurHandler} autoFocus={true} />
            : <span onDoubleClick={onDoubleClickHandler}>{props.title}</span>
    )
}