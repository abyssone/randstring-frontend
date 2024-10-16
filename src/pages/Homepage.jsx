import React, {useState, useEffect} from "react";


const Homepage = function() {
    const [text, setText] = useState('Здарова');

    function fetchToBack() {
        fetch(`${process.env.REACT_APP_BACKEND_URL}/api/text/random`, {
            credentials: 'include'
        })
            .then(response => response.json())
            .then(data => setText(data.text))
            .catch(e => console.log(e));
    }

    useEffect(() => {
        fetchToBack();
    }, [])

    return (
        <div className="App">
            <input value={text} onChange={e => setText(e.target.value)} />
            <button onClick={() => fetchToBack()}> Get Random</button>
        </div>
    );
}


export default Homepage;