import React, {useState} from 'react';

function Summary() {
    const [text, setText] = useState('');
    const [numSentences, setNumSentences] = useState(1);
    const [summary, setSummary] = useState('');

    const handleClick = () => {
        fetch('http://localhost:5000/summarize', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                text,
                num_sentences: numSentences
            })
        })
            .then(response => response.json())
            .then(data => {
                setSummary(data.summary);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    };

    return (
        <div>
            <textarea value={text} onChange={(e) => setText(e.target.value)}/>
            <input type="number" value={numSentences} onChange={(e) => setNumSentences(e.target.value)}/>
            <button onClick={handleClick}>Summarize</button>
            <p>{summary}</p>
        </div>
    );
}

export default Summary;
