
function Gallery(props) {
    const pokemon = props.pokemon
   
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
              <div key={index} style={boxedStyle} onClick={(e) => props.setGotcha(item.url)} >
                <h5>{item.name}</h5>
              </div>
            ))}
        </>
    )
}
export default Gallery