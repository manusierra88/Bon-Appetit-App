import { useState } from "react"


export const useForm = (initialState = {})=> {

    const [values, setValue] = useState(initialState);

    const reset = ()=>{
        setValue(initialState);
    }


    const handleInputchange = ({target})=>{
        

        setValue({
            ...values,
            [target.name] : target.value
        });
    }

    return [values, handleInputchange, reset]
}