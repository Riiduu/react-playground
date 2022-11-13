import React, {useState} from 'react';
import './App.css';

function App() {
    const [count, modifyCount ] = useState(0);
    return (
        <div className="App">
            { count }
            <br />
            <button onClick={() => modifyCount(count - 1)}>-</button>
            <button onClick={() => modifyCount(count + 1)}>+</button>
        </div>
    );
}

export default App;
