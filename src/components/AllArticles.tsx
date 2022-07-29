import { Button } from "@mui/material"
import React from "react"
import { ArticlesType } from "../types/types"
import Article from "./Article"
import Loader from "./Loader"

const AllArticles: React.FC<IAllArticlesProps> = (
  { loading,
    currentArticles,
    handleSeeMore,
    handleGetMore }
) => {

  if (loading) return <Loader />

  return (
    <>
      {currentArticles?.map(a => {
        return (
          <Article
            article={a}
            handleSeeMore={handleSeeMore}
          />
        )
      })}
      <Button variant="contained" onClick={handleGetMore}>Get more...</Button>
    </>
  )
}

export default AllArticles

interface IAllArticlesProps {
  loading: boolean,
  currentArticles: ArticlesType[],
  handleSeeMore: (id: string) => void
  handleGetMore: () => void
}