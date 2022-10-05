import React from 'react'

const TodoWrite = ({ list, word, handlerWord, handlerList, inputTitle, inputContent }) => {
  return (
    <div>
      <div>{console.log(list)}</div>
      <div><input type="text" onChange={handlerWord} name='title' value={word.title || ''} ref={inputTitle} /></div>
      <div><input type="text" onChange={handlerWord} name='content' value={word.content || ''} ref={inputContent} /></div>
      <div>
        <button onClick={handlerList}>WRITE</button>
      </div>
    </div>
  )
}

export default TodoWrite