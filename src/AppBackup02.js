import React, { useState, useRef } from 'react'

const App = () => {
    const [word, setWord] = useState({});
    const [list, setList] = useState([]);

    const num = useRef(1);
    const inputTitle = useRef(null);
    const inputContent = useRef(null);

    const handlerWord = (e) => {
        const { name, value } = e.target;
        setWord({
            ...word,
            [name]: value,
            id: num.current
        })
    }

    const handlerList = () => {
        if (!word.title || !word.content) {
            alert('내용을 입력해주세요.');
            return
        }
        if (word.title.length < 5) {
            alert('5자 이상 입력해주세요.');
            //1. 입력창을 비우기 2. 비운 입력창에 포커스 주기
            setWord({
                ...word,
                title: "",
            });
            inputTitle.current.focus();
            return
        }
        const hg = /^[ㄱ-ㅎ가-힣]*$/;
        if (!hg.test(word.title)) {
            alert('한글만 입력해주세요...');
            setWord({
                ...word,
                title: "",
            });
            inputTitle.current.focus();
            return
        }
        if (word.content.length < 5) {
            alert('5자 이상 입력해주세요.');
            //1. 입력창을 비우기 2. 비운 입력창에 포커스 주기
            setWord({
                ...word,
                title: "",
            });
            inputTitle.current.focus();
            return
        }
        setList([...list, word]);
        setWord({
            title: "",
            content: "",
        })
        num.current++
    }
    return (
        <div>
            <h2>list</h2>
            <ul>
                {
                    list.map((li, idx) => <li key={li.id}>{li.title} : {li.content}</li>)
                }
            </ul>
            <hr />
            <div>{console.log(list)}</div>
            <div><input type="text" onChange={handlerWord} name='title' value={word.title || ''} ref={inputTitle} /></div>
            <div><input type="text" onChange={handlerWord} name='content' value={word.content || ''} /></div>
            <div>
                <button onClick={handlerList}>WRITE</button>
            </div>

        </div>
    )
}

export default App