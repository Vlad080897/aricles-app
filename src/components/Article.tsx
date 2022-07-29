import { Box, Button } from '@mui/material/';
import React from 'react';
import { ArticlesType } from '../types/types';

const Article: React.FC<IArticleType> = ({ article, handleSeeMore }) => {
  const { id, description } = article;
  const reg = /^(.*?)[.?!]\s/;
  const shortDescr = reg.exec(description);
  return (
    <Box
      style={{
        padding: 10,
        border: '1px solid blue',
        margin: 10
      }}
    >
      {shortDescr && shortDescr[0]}
      <Button variant='text' onClick={() => handleSeeMore(id)}>See more...</Button>
    </Box>
  )
}

export default Article

interface IArticleType {
  article: ArticlesType,
  handleSeeMore: (id: string) => void
}