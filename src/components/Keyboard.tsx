import React, { memo, ReactElement, useContext } from "react"
import CalculatorContext from "../contexts/CalculadoraContext"
import NumberButtons from "./NumberButtons"

const Keyboard: React.FC = (): ReactElement => {
    const { setResult } = useContext(CalculatorContext)

    const numberButtons = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0]

    const handleClick = (value: number) => {
        setResult(value)
    }

    return (
        <div className="keyboard">
            {numberButtons.map((i) => (
                <NumberButtons number={i} handleClick={() => handleClick(i)} />
            ))}
        </div>
    )
}

export default Keyboard