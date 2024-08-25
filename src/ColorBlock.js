import React, { useState } from 'react'

function ColorForm(props){
    let [input, setInput] = useState('')

    return (
        <div>
            <form>
                <input type="text" 
                onChange={(e) => setInput(e.target.value)} />
                <button type="submit">Submit!</button>
            </form>
        </div>
    )
}

// Do not forget to export your component once you have built it!
export default ColorBlock
