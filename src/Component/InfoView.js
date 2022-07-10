import Card from 'react-bootstrap/Card'
import { useContext } from 'react'
import { PokeBall } from '../context/PokeBall'


function InfoView(props) {
    
    console.log(props, 'infoView')
    return (
        <>
            <Card style={{ width: '95%' }}>
                <Card.Img style={{ width: '250px'}} variant="top" src={props.pokeBall.sprites.front_default} />
                <Card.Body>
                    <Card.Title><h2>{props.pokeBall.name}</h2></Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content. Height={props.pokeBall.height}, Weight={props.pokeBall.weight}
                    </Card.Text>
                    <Card.Text>
                        evolutions
                    </Card.Text>
                    <Card.Text>
                        Moves
                    </Card.Text>
                </Card.Body>
            </Card>
        </>
        
    )
}
export default InfoView

