import React, { ReactElement, useContext } from "react"
import CalculatorContext from "../contexts/CalculadoraContext"

const Display: React.FC = (): ReactElement => {
    const { result, current, operator } = useContext(CalculatorContext)

    console.log(current)

    return (
        <div className="display">
            {
                <span className="display-result">
                    {(current || operator) !== undefined && result !== 0 ? Math.round(10000 * (result)) / 10000 : ''}
                </span>
            }
            <span>
                {
                    current
                        ? Math.round(10000 * (current)) / 10000
                        : operator ?? Math.round(10000 * (result)) / 10000
                }
            </span>
        </div>
    )
}

export default Display