import React from 'react';
import { Typography, Box } from '@mui/material';
import { topicdata } from './topicdata';

const TopicContent = ({ selectedTopic }) => {
  const topic = topicdata[selectedTopic];

  if (!topic) return null;

  return (
    <Box>
      <Typography variant="body1" sx={{ color: "white", fontFamily: "Kanit, sans-serif", fontWeight: 700 }}>
        {topic.content}
      </Typography>
    </Box>
  );
};

export default TopicContent;