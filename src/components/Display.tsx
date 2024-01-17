import { useContext } from "react"
import CalculatorContext from "../contexts/CalculadoraContext"

const Display = () => {
    const { result, current } = useContext(CalculatorContext)

    return (
        <div className="display">
            <span className="display-result">{result}</span>
            <span className="display-current">{current}</span>
        </div>
    )
}

export default Display
