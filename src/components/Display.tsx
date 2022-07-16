import React, { ReactElement, useContext } from "react"
import CalculatorContext from "../contexts/CalculadoraContext"

const Display: React.FC = (): ReactElement => {
    const { result } = useContext(CalculatorContext)

    console.log(result)

    return (
        <span>
            <>{result}</>
        </span>
    )
}

export default Display