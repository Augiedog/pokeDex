import { useEffect, useState } from 'react';
import { PokeBall } from './context/PokeBall';
import Header from './Component/Header';
import NavBar from './Component/NavBar'
import Gallery from './Component/Gallery';
import './App.css';
import InfoView from './Component/InfoView';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';


function App() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [pokemon, setPokemon] = useState([]);
  const [poke, setPoke] = useState('')
  const [pokeBall, setPokeBall] = useState([])

  // Note: the empty deps array [] means
  // this useEffect will run once
  // similar to componentDidMount()
  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setPokemon(result);
        }
      ).catch(
        (error) => {
          setIsLoaded(true);
          setError(error);
        })
  }, [])

  useEffect(() => {
    console.log(poke,"captured url for pokeball")
  }, poke)



  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <Container>
        {console.log(pokemon, "everythin")}
        <Header />
        <Row className="justify-content-md-center">
          <Col>
            <PokeBall.Provider value={pokeBall}>
              <InfoView />
            </PokeBall.Provider>
          </Col>
          <Col className='gallery'><Gallery pokemon={pokemon.results} setPoke={setPoke} /></Col>
        </Row>
        <NavBar />     
      </Container>      
    );
  }
}

export default App;
