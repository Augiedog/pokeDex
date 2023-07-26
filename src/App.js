import { useEffect, useState } from 'react';
 
import Header from './Component/Header';
import NavBar from './Component/NavBar'
import Gallery from './Component/Gallery';
import './App.css';
import InfoView from './Component/InfoView';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';


function App() {
  const [emall, setEmall] = useState("https://pokeapi.co/api/v2/pokemon-species/132")  
  const [ketch, setKetch] = useState("https://pokeapi.co/api/v2/pokemon/132")  
  const [twenty, setTwenty] = useState("https://pokeapi.co/api/v2/pokemon/")
  const [pokemon, setPokemon] = useState([])
  const [pokeBall, setPokeBall] = useState([])
  const [species, setSpecies] =useState([])
  const [error, setError] = useState(null)
  const [tewntyIsLoad, setTwentyIsLoad] = useState(false)
  const [emallIsLoad, setEmallIsLoad] = useState(false)
  const [ketchIsLoad, setKetchIsLoad] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)
  
  // Note: the empty deps array [] means
  // this useEffect will run once
  // similar to componentDidMount()
  useEffect(() => {
    fetch(twenty).then( async res => {
      try {
        const data = await res.json()
        setTwentyIsLoad(true)
        setPokemon(data)
      } catch (error) {
        setTwentyIsLoad(false)
        setError(error)
      }
    })
  }, [twenty])

  useEffect(() => {
    fetch(ketch).then( async res => {
      try {
        const data = await res.json()
        setKetchIsLoad(true)
        setPokeBall(data)
        setEmall(data.species.url)
      } catch (error) {
        setKetchIsLoad(false)
        setError(error)
      }
    })     
  }, [ketch])  

  useEffect(() => {
    fetch(emall).then( async res => {
      try {
        const data = await res.json()
        setEmallIsLoad(true)
        setSpecies(data)
      } catch (error) {
        setEmallIsLoad(false)
        setError(error)
      }
    })
  }, [emall])

  if (tewntyIsLoad, emallIsLoad, ketchIsLoad === true) {
    setIsLoaded(true)
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div className='App'><h1>Loading...</h1></div>;
  } else {
    return (
      <Container>
        <Header />
        <Row className="justify-content-md-center">
          <Col>
              <InfoView pokeBall={pokeBall} species={species} />
          </Col>
          <Col className='gallery'>
            <Gallery pokemon={pokemon.results} setKetch={setKetch} />
          </Col>
        </Row>
        
        <NavBar next={pokemon.next} previous={pokemon.previous} index={setTwenty} />     
      </Container>      
    );
  }
}

export default App;
