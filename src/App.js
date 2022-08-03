import './App.css';
import Loader from './components/Loader';
import Container from './components/Container';
import { useState, useEffect } from 'react';

function App() {
 const [loading, setLoading] = useState(true)

 const preloading = () =>{ 
     setTimeout(() =>{
        setLoading(false)
     },1000)
 }
 useEffect( () =>{
    preloading()
 }
, [])

 return(

    loading ? <Loader/> : <Container/>
 )

}

export default App;
