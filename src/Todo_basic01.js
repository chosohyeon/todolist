import React, { useState } from 'react'

const Todo_basic01 = () => {
    const [input, setInput] = useState(); // useState(초기값);
    const [list, setList] = useState([])
    return (
        <div style={{ textAlign: "center", padding: "100px 0" }}>
            {/* {input} */}
            <ul>
                {
                    list.map((it,idx) => <li key={idx}>{it}</li>)
                }
            </ul>
            <input type="text" onChange={(e) => setInput(e.target.value)} value={input} />
            <button onClick={() => setList([...list, input])}>입력</button>
            {console.log(list)}
        </div>
    )
}

export default Todo_basic01