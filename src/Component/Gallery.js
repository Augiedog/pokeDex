

function Gallery(props) {
    const pokemon = props.pokemon
    console.log(props, "Gallery props")
    

    const boxedStyle = {
        'width': '20%',
        'height': '15vh',
        'border': '1px solid black',
        'margin': '2px',
        'textTransform': 'capitalize',
        'backgroundColor': 'blue',
        'color': 'white'
    }
   
    // const gotcha = () => {
    //   console.log()
    //   fetch(pokemon.url)
    //     .then(res => res.json())
    //     .then(
    //       (ball) => {
    //         setPokeBall(ball)
    //       }
    //     )
    // }
    
    return (
        <>
            {pokemon.map((item, index) => (
              <div key={index} style={boxedStyle} onClick={(e) => props.setPoke(item.url)} >
                <h5>{item.name}</h5> 
              </div>
            ))}
        </>
    )
}
export default Gallery