import { useState } from "react";
import Product from "../core/Product";
import Button from "./Button";
import Entry from "./Entry";

interface FormProps {
    product: Product
    productChanged?: (product: Product) => void
    canceled: () => void
}

export default function Form(props: FormProps){
    const id = props.product?.id
    const[name, setName] = useState(props.product?.name ?? '')
    const[price, setPrice] = useState(props.product?.price ?? 0)
    
    return(
        <div>
            {id ? (
                <Entry readOnly text="ID" value={id} className="mb-5"></Entry>
            ) : false}
            <Entry text="Name" value={name} valueChanged={setName} className="mb-5"></Entry>
            <Entry text="Price" type="number" value={price} valueChanged={setPrice}></Entry>
            <div className="flex justify-end mt-7">
                <Button 
                    className="mr-2 bg-green-500 hover:bg-green-400"
                    onClick={() => props.productChanged?.(new Product(name, Number(price), id))}>                    
                    {id? 'Edit' : 'Save'}</Button>
                <Button
                    className="mr-2 bg-red-500 hover:bg-red-400" 
                    onClick={props.canceled}>Cancel</Button>
            </div>

        </div>
    )
}