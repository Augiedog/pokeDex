import Card from 'react-bootstrap/Card'


function InfoView(props) {
    const pokemon = props.pokemon
    console.log(pokemon, 'infoView')
    return (
        <>
            <Card style={{ width: '95%' }}>
                <Card.Img variant="top" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png" />
                <Card.Body>
                    <Card.Title>pokemon.name</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
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

