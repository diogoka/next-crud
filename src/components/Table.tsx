import Product from "../core/Product"
import { IconEdition, IconTrash } from "./Icons"

interface TableProps{
    products: Product[]
    productSelected?: (product: Product) => void
    productDeleted?: (product: Product) => void
    
}

export default function Table(props: TableProps){

    const showActions = props.productDeleted || props.productSelected


    function headerRender(){
        return(
            <tr>
                <th className="text-left p-4">ID</th>
                <th className="text-left p-4">Name</th>
                <th className="text-left p-4">Price</th>
                {showActions? <th className="p-4">Actions</th> : false}
            </tr>
        )
    }

    function infoRender(){
        return props.products?.map((product, i)=>{
            return (
                <tr key={product.id}
                    className={`${i%2 === 0 ? 'bg-gray-200' : 'bg-gray-350'}`}> 
                    <td className="text-left p-4">{product.id}</td>
                    <td className="text-left p-4">{product.name}</td>
                    <td className="text-left p-4">CA$ {product.price.toLocaleString('en-US')}</td>
                    {showActions ? actionsRender(product) : false}
                </tr>
            )
        })
    }

    function actionsRender(product: Product) {
        return (
            <td className="flex justify-center">
                {props.productSelected ? (
                    <button onClick={()=>props.productSelected?.(product)} className={`
                    flex justify-center items-center
                    text-green-600 rounded-full p-2 m-1
                    hover:bg-gray-300
                `}>
                        {IconEdition}
                    </button>
                ) : false}
                {props.productDeleted ? (
                    <button onClick={()=>props.productDeleted?.(product)} className={`
                    flex justify-center items-center
                    text-red-500 rounded-full p-2 m-1
                    hover:bg-gray-300
                `}>
                        {IconTrash}
                    </button>
                ) : false}
            </td>
        )
    }

    function footRender(){
        let total = 0
        props.products.forEach(e =>{
            total = total + e.price
            return total
        })

        return (
            <tr> 
                <td className="text-left p-4">Total</td>
                <td className="text-left p-4"></td>
                <td className={`text-left p-4`}>CA$ {total.toLocaleString('en-US')}</td>
                <td className="text-left p-4"></td>
            </tr>
        )
    }


    return(
        <table className="w-full rounded-xl overflow-hidden">
            <thead className={`
                text-gray-100
                bg-gray-500
            
            `}> 
                {headerRender()}
            </thead>
            <tbody>
                {infoRender()}
            </tbody>
            <tfoot className={
                `text-black-400
                bg-green-100`
            }>{footRender()}</tfoot>
        </table>
    )
}