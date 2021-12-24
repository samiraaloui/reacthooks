import React ,{useState} from 'react';
import MyNav from './components/MyNav/MyNav';
import MoviesData from './components/MoviesData/MoviesData'
import MoviesList from './components/MoviesList/MoviesList'
import AddMovie from './components/AddMovie/AddMovie';
import MovieDetails from './components/MovieDetails/MovieDetails';
import { Switch ,  Route } from 'react-router-dom';

 function App() {
    const[titleSearch, setTitleSearch]=useState('')
    const handelTitle=(input)=>{
      setTitleSearch(input)
    }
    const[ratingSearch, setRatingSearch]=useState(0)
    const handleStar=(input)=>{
      setRatingSearch(input)
    }
    const[MoviesListData , setMoviesListData]=useState(MoviesData)
    const getMoviesData=(input)=>{
      setMoviesListData([...MoviesListData , input])
    }
        return (
         <div className='App'>
           <Switch>
             <Route exact path="/" >
           
                  <MyNav
                  handelTitle={handelTitle}  
                  handleStar={handleStar}/>
                  <AddMovie
                  getMoviesData={getMoviesData}/>
                  <MoviesList
                  MoviesListData={MoviesListData}
                  titleSearch={titleSearch}
                  ratingSearch={ratingSearch}/>
             </Route>
             <Route  path="/details/:id" component={MovieDetails}/>
            </Switch>
         </div>
         )
 }
 
 export default App
 