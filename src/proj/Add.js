import React, {useState} from "react";
import Context from "../context";

function useInputValue(defaultValue = ''){
    const[value, setValue]=useState(defaultValue)

    return {
        value,
        onChange: event => setValue(event.target.value)
    }
}

function Add({ onCreate }){
    // const [value, setValue] = useState('')
    const input = useInputValue('')

    function SubmitHandler(event){
        event.preventDefault()
    }
    if (input.value.trim()){
        onCreate(input.value)
        // setValue('')
    }
    return (
        <form onSubmit={SubmitHandler}>
            {/*<input value={value} onChange={event => setValue(event.target.value)}/>*/}
            <input {...input}/>
            <button type='submit'>ADD</button>
        </form>
    )
}

export default Add