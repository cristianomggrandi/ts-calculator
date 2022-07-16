import React, { ReactElement } from "react"

const Keyboard: React.FC = (): ReactElement => {
    const numberButtons = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

    return (
        <div>
            {numberButtons.map((i) => (
                <button key={i}>{i}</button>
            ))}
        </div>
    )
}

export default Keyboard