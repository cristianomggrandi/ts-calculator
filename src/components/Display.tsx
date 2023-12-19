import React, { ReactElement, useContext } from "react"
import CalculatorContext from "../contexts/CalculadoraContext"

const Display = () => {
    const { result, current, operator } = useContext(CalculatorContext)

    console.log(current)

    return (
        <div className="display">
            <span className="display-result">{result}</span>
            <span className="display-current">{current}</span>
        </div>
    )
}

export default Display
