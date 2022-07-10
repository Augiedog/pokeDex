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
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [pokemon, setPokemon] = useState([]);
  const [gotcha, setGotcha] = useState("https://pokeapi.co/api/v2/pokemon/7")
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
    fetch(gotcha)
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setPokeBall(result);
        }
      ).catch(
        (error) => {
          setIsLoaded(true);
          setError(error);
        })
  }, [gotcha])


  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <Container>
        {/* {console.log(pokemon, "first data request, APP")} */}
        <Header />
        <Row className="justify-content-md-center">
          <Col>
              <InfoView pokeBall={pokeBall}/>
          </Col>
          <Col className='gallery'>
            <Gallery pokemon={pokemon.results} setGotcha={setGotcha} />
          </Col>
        </Row>
        <NavBar next={pokemon.next} />     
      </Container>      
    );
  }
}

export default App;
