import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';


function InfoView(props) {
    console.log(props,"right here")
    return (
        <>
            <Card style={{ width: '95%' }}>
                <Row className="justify-content-md-center">
                    <Col>
                        <Card.Img style={{ width: '230px'}} variant="top" src={props.pokeBall.sprites.front_default} />
                    </Col>
                    <Col>
                        <Card.Img style={{ width: '230px'}} variant="top" src={props.pokeBall.sprites.back_default} />
                    </Col>
                </Row>
                
                <Card.Body>
                    <Card.Title><h2>{props.pokeBall.name}  </h2></Card.Title>
                    <Card.Text>
                        {props.species.flavor_text_entries[0].flavor_text} 
                        {props.species.flavor_text_entries[1].flavor_text}
                        {props.species.flavor_text_entries[4].flavor_text}                     
                    </Card.Text>
                    <Card.Text> Height={props.pokeBall.height}, Weight={props.pokeBall.weight}</Card.Text>
                    <Card.Text>
                        {/* Evolved from {props.species.evolves_from_species.name || null} */}
                    </Card.Text>
                </Card.Body>
            </Card>
        </>
        
    )
}
export default InfoView

