import React from 'react';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

function TextEditor({ text, setText }) {
  return (
    <>
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
            color: 'inherit',
            backgroundColor: 'white',
          },
        }}
      />
      <Typography variant="caption" gutterBottom>
        Enter the text you want to summarize
      </Typography>
    </>
  );
}

export default TextEditor;
