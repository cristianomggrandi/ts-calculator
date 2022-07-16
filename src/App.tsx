import React, { useState } from 'react'
import './App.css'
import { CalculatorContextProvider } from './contexts/CalculadoraContext'
import Display from './components/Display'
import Keyboard from './components/Keyboard'

function App() {
    return (
        <div className="App">
            <CalculatorContextProvider>
                <Display />
                <Keyboard />
            </CalculatorContextProvider>
        </div>
    )
}

export default App