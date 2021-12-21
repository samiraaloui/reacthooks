import React ,{useState} from 'react';
import MyNav from './components/MyNav/MyNav';
import MoviesData from './components/MoviesData/MoviesData'
import MoviesList from './components/MoviesList/MoviesList'
import AddMovie from './components/AddMovie/AddMovie'
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
         <div>
           <MyNav
            handelTitle={handelTitle}  
            handleStar={handleStar}/>
            <AddMovie
            getMoviesData={getMoviesData}/>
            <MoviesList
            MoviesListData={MoviesListData}
            titleSearch={titleSearch}
            ratingSearch={ratingSearch}/>
         </div>
         )
 }
 
 export default App
 