import React, { memo, ReactElement, useContext } from "react"
import CalculatorContext from "../contexts/CalculadoraContext"
import { NumberButton, OperatorButton, EqualsButton, ClearButton } from "./Buttons"

const Keyboard: React.FC = (): ReactElement => {
    const { result, setResult, current, setCurrent, operator, setOperator } = useContext(CalculatorContext)

    const handleNumber = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        const button = e.target as HTMLElement
        setCurrent(prev => prev + button.textContent)
    }

    const handleOperator = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        const button = e.target as HTMLElement

        const isLastSymbolOperator = result.endsWith(" ")

        if (isLastSymbolOperator && !current && button.textContent !== "√x" && button.textContent !== "x²") {
            setResult(prev => prev.slice(0, -3) + " " + button.textContent + " ")
        } else {
            setResult(prev => prev + current + " " + button.textContent + " ")
            setCurrent("")
        }
    }

    return (
        <div className="keyboard">
            <ClearButton />
            <OperatorButton symbol="x²" handleClick={handleOperator} />
            <OperatorButton symbol="√x" handleClick={handleOperator} />
            <OperatorButton symbol="÷" handleClick={handleOperator} />
            <NumberButton number={7} handleClick={handleNumber} />
            <NumberButton number={8} handleClick={handleNumber} />
            <NumberButton number={9} handleClick={handleNumber} />
            <OperatorButton symbol="⨯" handleClick={handleOperator} />
            <NumberButton number={4} handleClick={handleNumber} />
            <NumberButton number={5} handleClick={handleNumber} />
            <NumberButton number={6} handleClick={handleNumber} />
            <OperatorButton symbol="-" handleClick={handleOperator} />
            <NumberButton number={1} handleClick={handleNumber} />
            <NumberButton number={2} handleClick={handleNumber} />
            <NumberButton number={3} handleClick={handleNumber} />
            <OperatorButton symbol="+" handleClick={handleOperator} />
            <OperatorButton symbol="," handleClick={() => {}} />
            <NumberButton number={0} handleClick={handleNumber} />
            <EqualsButton />
        </div>
    )
}

export default Keyboard
