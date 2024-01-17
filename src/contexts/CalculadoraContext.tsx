import React, { createContext, ReactNode, useEffect, useState } from "react"

type CalculadoraContextType = {
    result: string
    setResult: React.Dispatch<React.SetStateAction<string>>
    current: string | undefined
    setCurrent: React.Dispatch<React.SetStateAction<string>>
}

const initialValue = {
    result: "",
    setResult: {} as React.Dispatch<React.SetStateAction<string>>,
    current: "",
    setCurrent: {} as React.Dispatch<React.SetStateAction<string>>,
}

const CalculatorContext = createContext<CalculadoraContextType>(initialValue)

export default CalculatorContext

type Props = {
    children: ReactNode
}

export function CalculatorContextProvider(props: Props) {
    const [result, setResult] = useState("")
    const [current, setCurrent] = useState("")

    useEffect(() => console.log(value))

    const value = {
        result,
        setResult,
        current,
        setCurrent,
    }

    return <CalculatorContext.Provider value={value}>{props.children}</CalculatorContext.Provider>
}
