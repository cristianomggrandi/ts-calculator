import React, { memo, ReactElement, useContext } from "react"
import CalculatorContext from "../contexts/CalculadoraContext"
import NumberButtons from "./NumberButtons"

const Keyboard: React.FC = (): ReactElement => {
    const { setResult } = useContext(CalculatorContext)

    const buttons = ['%', 'CE', 'C', '<', '1/x', '^2', '√', '/', '7', '8', '9', 'x', '4', '5', '6', '-', '1', '2', '3', '+', '+/-', '0', ',', '=']

    const handleClick = (value: string) => {
        if (Number.isInteger(Number(value))) setResult(Number(value))
    }

    return (
        <div className="keyboard">
            {buttons.map((symbol, i) => (
                <NumberButtons keySymbol={symbol} key={i} handleClick={() => handleClick(symbol)} />
            ))}
        </div>
    )
}

export default Keyboard