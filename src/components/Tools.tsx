import "../styles/Tool.css"

type ToolProps = {
    readonly name: string
}

type ToolsProps = {
    readonly tools: string[]
}

export function Tool ({name}: ToolProps) {

    return (
        <div className="tool-container">
            <p className="tool-name">{name}</p>
        </div>
    )
}




export default function Tools({tools}: ToolsProps) {
    return (

        tools.map((name) => {
            return (
                <Tool key={name} name={name} />
            )
        })
        
    )
   
}

