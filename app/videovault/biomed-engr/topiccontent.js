import React from 'react';
import { Typography, Box } from '@mui/material';
import { topicdata } from './topicdata';

const TopicContent = ({ selectedTopic }) => {
  const topic = topicdata[selectedTopic];

  if (!topic) return null;

  return (
    <Box>
      {/*This is for the actual text underneath the header of each page*/}
      <Typography variant="body1" sx={{ color: "white", fontFamily: "Kanit, sans-serif", fontWeight: 700 }}>
        {topic.content}
      </Typography>
    </Box>
  );
};

export default TopicContent;