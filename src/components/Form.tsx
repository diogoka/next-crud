import { useState } from "react";
import Client from "../core/Client";
import Button from "./Button";
import Entry from "./Entry";

interface FormProps {
    client: Client
    clientChanged?: (client: Client) => void
    canceled: () => void

}

export default function Form(props: FormProps){
    const id = props.client?.id
    const[name, setName] = useState(props.client?.name ?? '')
    const[age, setAge] = useState(props.client?.age ?? 0)
    
    return(
        <div>
            {id ? (
                <Entry readOnly text="Código" value={id} className="mb-5"></Entry>
            ) : false}
            <Entry text="Name" value={name} valueChanged={setName} className="mb-5"></Entry>
            <Entry text="Age" type="number" value={age} valueChanged={setAge}></Entry>
            <div className="flex justify-end mt-7">
                <Button 
                    className="mr-2 bg-gradient-to-r from-blue-400 to-blue-700"
                    onClick={() => props.clientChanged?.(new Client(name, +age, id))}>                    
                    {id? 'Edit' : 'Save'}</Button>
                <Button
                    className="mr-2 bg-gradient-to-r from-gray-400 to-gray-700" 
                    onClick={props.canceled}>Cancel</Button>
            </div>

        </div>
    )
}