

function Gallery(props) {
    const pokemon = props.pokemon
    console.log(props, "Gallery props")
    

    const boxedStyle = {
        'width': '20%',
        'height': '15vh',
        'border': '1px solid black',
        'margin': '2px',
        'textTransform': 'capitalize',
        'backgroundColor': '#31A7F1',
        'color': 'white'
    }
   

    
    return (
        <>
            {pokemon.map((item, index) => (
              <div key={index} style={boxedStyle} onClick={(e) => this.props.setGotcha(item)} >
                <h5>{item.name}</h5> {console.log(item.url, "pokemon in gallery")}
              </div>
            ))}
        </>
    )
}
export default Gallery