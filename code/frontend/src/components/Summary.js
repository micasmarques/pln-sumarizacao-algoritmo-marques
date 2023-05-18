import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

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
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        gap: 2
      }}
    >
      <Typography variant="h4" component="div" gutterBottom>
        Text Summarization
      </Typography>
      <TextField
        variant="outlined"
        multiline
        rows={4}
        fullWidth
        value={text}
        onChange={(e) => setText(e.target.value)}
        label="Enter Text"
        sx={{
          '& textarea': {
            fontFamily: 'inherit',
            fontSize: 'inherit',
            color: 'inherit'
          }
        }}
      />
      <Typography variant="caption" gutterBottom>
        Enter the text you want to summarize
      </Typography>
      <TextField
        variant="outlined"
        type="number"
        value={numSentences}
        onChange={(e) => setNumSentences(parseInt(e.target.value))}
        label="Number of Sentences"
      />
      <Typography variant="caption" gutterBottom>
        Specify the number of sentences in the summary
      </Typography>
      <Button variant="contained" onClick={handleClick}>
        Summarize
      </Button>
      <Box
        sx={{
          width: '100%',
          maxWidth: '800px',
          margin: '20px auto',
          padding: '20px',
          border: '1px solid #ccc',
          borderRadius: '4px',
          textAlign: 'center'
        }}
      >
        <Typography variant="h6" component="div" gutterBottom>
          Summary
        </Typography>
        <Typography variant="body1" className="summary-text">
          {summary}
        </Typography>
      </Box>
      <style>
        {`
          .summary-text {
            text-align: justify;
            line-height: 1.5;
          }
        `}
      </style>
    </Box>
  );
}

export default Summary;
