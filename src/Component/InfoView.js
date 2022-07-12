import Card from 'react-bootstrap/Card'


function InfoView(props) {
    // console.log(props,"right here")
    return (
        <>
            <Card style={{ width: '95%' }}>
                <Card.Img style={{ width: '250px'}} variant="top" src={props.pokeBall.sprites.front_default} />
                <Card.Body>
                    <Card.Title><h2>{props.pokeBall.name}  </h2></Card.Title>
                    <Card.Text>
                        {props.species.flavor_text_entries[0].flavor_text} 
                        {props.species.flavor_text_entries[1].flavor_text}
                        {props.species.flavor_text_entries[4].flavor_text}
                        {props.species.flavor_text_entries[5].flavor_text}
                        {props.species.flavor_text_entries[6].flavor_text}
                        {props.species.flavor_text_entries[8].flavor_text}
                        {props.species.flavor_text_entries[9].flavor_text}                       
                    </Card.Text>
                    <Card.Text> Height={props.pokeBall.height}, Weight={props.pokeBall.weight}</Card.Text>
                    <Card.Text>
                        {/* Evolved from {props.species.evolves_from_species.name || null} */}
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

