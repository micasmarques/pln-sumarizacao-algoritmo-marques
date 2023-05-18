import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function SummaryResult({ summary }) {
  return (
    <Box
      sx={{
        width: '100%',
        maxWidth: '800px',
        margin: '20px auto',
        padding: '20px',
        backgroundColor: 'white',
        borderRadius: '4px',
        textAlign: 'center',
        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
      }}
    >
      <Typography variant="h6" component="div" gutterBottom>
        Summary
      </Typography>
      <Typography variant="body1" sx={{ textAlign: 'justify', lineHeight: 1.5 }}>
        {summary}
      </Typography>
    </Box>
  );
}

export default SummaryResult;
