import { Box } from '@mui/material/';
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { actions } from './actions/actions';
import { GET_ARTICLES, GET_CURRENT_ART } from "./actions/actionsNames";
import AllArticles from './components/AllArticles';
import CurrentArt from './components/CurrentArt';
import Title from "./components/Title";
import { getArticlesSelector, getLoadingSelector } from "./selectors/articlesSelectors";
import { ArticlesType } from "./types/types";

function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const articles = useSelector(getArticlesSelector);
  const loading = useSelector(getLoadingSelector);
  const [currentArticles, setCurrentArticles] = useState<ArticlesType[]>([]);

  useEffect(() => {
    const id = location.pathname.replace('/', '');
    if (!id && !loading) {
      if (articles.length) {
        return;
      }
      dispatch<GetArticlesType>({ type: GET_ARTICLES, current: [] });
      return
    };
    dispatch<GetCurrentType>(actions.getCurrentArt(id));
  }, [location])

  useEffect(() => {
    setCurrentArticles(articles);
  }, [articles])

  const handleGetMore = () => {
    dispatch<GetArticlesType>
      ({ type: GET_ARTICLES, current: currentArticles })
  }

  const handleSeeMore = (id: string) => {
    navigate(`${id}`);
  }

  return (
    <>
      <Box
        style={{ width: '80%', margin: '0 auto' }}
      >
        <Title />
        <Routes>
          <Route
            path='/'
            element={<AllArticles
              loading={loading}
              currentArticles={currentArticles}
              handleSeeMore={handleSeeMore}
              handleGetMore={handleGetMore}
            />}
          />
          <Route path='/:id' element={<CurrentArt />} />
        </Routes>
      </Box>
    </>
  );
};

export default App;


interface GetArticlesType {
  type: typeof GET_ARTICLES,
  current: ArticlesType[]
}

interface GetCurrentType {
  type: typeof GET_CURRENT_ART,
  id: string
}