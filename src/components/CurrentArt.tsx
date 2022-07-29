import { Box } from '@mui/material';
import React from 'react'
import { useSelector } from 'react-redux';
import { getCurrentSelector } from '../selectors/articlesSelectors';
import Article from './Article';

const CurrentArt = () => {
  const currentArt = useSelector(getCurrentSelector);
  return (
    <Box
      style={{
        padding: 10,
        border: '1px solid blue',
        margin: 10
      }}
    >
      {currentArt?.description}
    </Box>
  )
}

export default CurrentArt