import { useContext } from "react"
import CalculatorContext from "../contexts/CalculadoraContext"

interface ButtonProps {
    handleClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

interface NumberProps extends ButtonProps {
    number: number
}

interface SymbolProps extends ButtonProps {
    symbol: string
}

export const NumberButton = (props: NumberProps) => {
    return (
        <button className="keyboard-key number" onClick={props.handleClick}>
            {props.number}
        </button>
    )
}

export const OperatorButton = (props: SymbolProps) => {
    return (
        <button className="keyboard-key symbol" onClick={props.handleClick}>
            {props.symbol}
        </button>
    )
}

export const EqualsButton = () => {
    const { result, current } = useContext(CalculatorContext)

    const handleClick = () => {
        const fullEquation = result + current
        const formattedEquation = fullEquation
            .replaceAll(" ", "")
            .replaceAll("⨯", "*")
            .replaceAll("÷", "/")
            .replaceAll("x²", "**2")
            .replace(/√x([0-9]+)/g, "Math.sqrt($1)")
        console.log("eq: ", fullEquation, formattedEquation, "res:", eval(formattedEquation))
    }

    return (
        <button className="keyboard-key equals" onClick={handleClick}>
            =
        </button>
    )
}
export const ClearButton = () => {
    const { setResult, current, setCurrent } = useContext(CalculatorContext)

    const handleClick = () => {
        if (current) setCurrent("")
        else setResult("")
    }

    return (
        <button className="keyboard-key clear" onClick={handleClick}>
            C
        </button>
    )
}
// export const ClearButton = (props: ButtonProps & SymbolProps) => {
//     return (
//         <button className="keyboard-key symbol" onClick={props.handleClick}>
//             {props.symbol}
//         </button>
//     )
// }
