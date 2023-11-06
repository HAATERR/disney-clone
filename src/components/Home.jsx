import React from 'react'
import styled from 'styled-components';
import ImgSlider from './ImgSlider';
import Viewers from './Viewers';
import Recommends from './Recommends';
import NewDisney from './NewDisney';
import Originals from './Originals';
import Trending from './Trending';
import {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import  db from "../firebase";
import { setMovies, clearMovies } from '../features/movie/movieSlice';
import { selectUserName } from '../features/user/userSlice';

const Home = () => {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName)
  let recommends = [];
  let newDisneys = [];
  let originals = [];
  let trending = [];

  useEffect(() => {
    dispatch(clearMovies());
    let newRecommends = [];
    let newNewDisneys = [];
    let newOriginals = [];
    let newTrending = [];
  
    db.collection('movies')
      .get()
      .then((snapshot) => {
        snapshot.docs.map((doc) => {
          switch (doc.data().type) {
            case 'recommend':
              newRecommends = [...newRecommends, { id: doc.id, ...doc.data() }];
              break;
  
            case 'new':
              newNewDisneys = [...newNewDisneys, { id: doc.id, ...doc.data() }];
              break;
  
            case 'original':
              newOriginals = [...newOriginals, { id: doc.id, ...doc.data() }];
              break;
  
            case 'trending':
              newTrending = [...newTrending, { id: doc.id, ...doc.data() }];
              break;
            default:
              break;
          }
        });
  
        dispatch(
          setMovies({
            recommend: newRecommends,
            newDisney: newNewDisneys,
            original: newOriginals,
            trending: newTrending,
          })
        );
      });
  }, [userName]);
  
  return (
    <Container>
     <ImgSlider />
     <Viewers />
     <Recommends />
     <NewDisney />
     <Originals />
     <Trending />
    </Container>
  )
}

const Container = styled.main`
 position: relative;
 min-height: calc(100vh - 250px);
 overflow-x: hidden;
 display: block;
 top: 72px;
 padding: 0 calc(3.5vw + 5px);


 &:after{
    background: url('/assets/images/home-background.png')  center center / cover no-repeat fixed;
    content: '';
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -1;
 }

`

export default Home