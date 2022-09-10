import React, { memo, ReactElement, useContext } from "react"
import CalculatorContext from "../contexts/CalculadoraContext"
import NumberButtons from "./NumberButtons"

const Keyboard: React.FC = (): ReactElement => {
    const { result, setResult, current, setCurrent, operator, setOperator } = useContext(CalculatorContext)

    const buttons = [
        '%', 'CE', 'C', '<',
        '1/x', '^2', '√', '/',
        '7', '8', '9', 'x',
        '4', '5', '6', '-',
        '1', '2', '3', '+',
        '+/-', '0', ',', '=',
    ]

    const handleClick = (value: string) => {
        if (Number.isInteger(Number(value))) setCurrent(prevCurrent => prevCurrent ? Number(prevCurrent.toString() + value) : Number(value))
        else {
            switch (value) {
                case 'CE':
                    setCurrent(0)
                    break
                case 'C':
                    setResult(0)
                    setCurrent(undefined)
                    setOperator(undefined)
                    break
                case '<':
                    setCurrent(prevCurrent => {
                        if (!prevCurrent) return 0
                        const stringNumber = prevCurrent.toString()
                        if (stringNumber.length > 1)
                            return parseInt(stringNumber.slice(0, -1))
                        else
                            return 0
                    })
                    break
                case '1/x':
                    setCurrent(prevCurrent => {
                        if (!prevCurrent)
                            return 0
                        else
                            return 1 / prevCurrent
                    })
                    break
                case '^2':
                    if (current !== undefined) setCurrent(prevCurrent => prevCurrent ? (prevCurrent * prevCurrent) : prevCurrent)
                    else setResult(prevResult => prevResult * prevResult)
                    break
                case '√':
                    if (current !== undefined) setCurrent(prevCurrent => prevCurrent ? Math.sqrt(prevCurrent) : prevCurrent)
                    else setResult(prevResult => Math.sqrt(prevResult))
                    break
                case '/':
                case 'x':
                case '-':
                case '+':
                case '%':
                    setCurrent(prevCurrent => {
                        if (prevCurrent) setResult(prevCurrent)
                        return undefined
                    })
                    setOperator(value)
                    break
                case '+/-':
                    setCurrent(prevCurrent => prevCurrent ? -prevCurrent : prevCurrent)
                    break
                case ',':

                    break
                case '=':
                    if (!current) break
                    switch (operator) {
                        case '+':
                            setResult(prevResult => prevResult + current)
                            setOperator(undefined)
                            setCurrent(undefined)
                            break
                        case '/':
                            setResult(prevResult => prevResult / current)
                            setOperator(undefined)
                            setCurrent(undefined)
                            break
                        case 'x':
                            setResult(prevResult => prevResult * current)
                            setOperator(undefined)
                            setCurrent(undefined)
                            break
                        case '-':
                            setResult(prevResult => prevResult - current)
                            setOperator(undefined)
                            setCurrent(undefined)
                            break
                        case '%':
                            setResult(prevResult => prevResult % current)
                            setOperator(undefined)
                            setCurrent(undefined)
                            break
                    }
                    break
            }
        }
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