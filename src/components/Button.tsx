interface ButtonProps{
    color?: 'green' | 'blue' | 'gray'
    className?: string
    children: any
    onClick?:() => void
}

export default function Button(props:ButtonProps){
    const cor = props.color ?? 'gray'
    return(
        <button onClick={props.onClick} className={`            
            bg-blue-500 hover:bg-blue-700
            text-white px-4 py-2 rounded-md
            ${props.className} 
        `}>
            {props.children}
        </button>
    )
}