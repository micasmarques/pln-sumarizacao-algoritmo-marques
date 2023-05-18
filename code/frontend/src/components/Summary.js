import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextEditor from './TextEditor';
import SummaryResult from './SummaryResult';

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
        gap: 2,
        backgroundColor: '#f5f5f5',
        padding: '20px',
      }}
    >
      <Typography variant="h4" component="div" gutterBottom>
        Text Summarization
      </Typography>
      <Typography variant="body1" gutterBottom>
        This is a web interface for the Marques Text Summarization algorithm. Enter the text you want to summarize and specify the number of sentences in the summary.
      </Typography>
      <TextEditor text={text} setText={setText} />
      <Button
        variant="contained"
        onClick={handleClick}
        sx={{ backgroundColor: '#2196f3', color: 'white', fontWeight: 'bold' }}
      >
        Summarize
      </Button>
      <SummaryResult summary={summary} />
    </Box>
  );
}

export default Summary;
