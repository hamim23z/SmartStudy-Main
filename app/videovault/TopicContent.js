import React from 'react';
import { Typography, Box } from '@mui/material';
import { topicData } from './topicData';

const TopicContent = ({ selectedTopic }) => {
  const topic = topicData[selectedTopic];

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