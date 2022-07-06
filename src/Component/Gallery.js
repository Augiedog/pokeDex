
function Gallery(props) {
    const pokemon = props.pokemon

    // const detailStyle = {
    //     'width': '80vw',
    //     'height': '20vh',
    //     'border': '1px solid black',
    //     'margin': '2px',
    //     'backgroundImage': `url(${pokemon.sprites.front_default})`,
    //     'backgroundRepeat': 'no-repeat',
    //     'backgroundSize': 'cover',
    //     'color': 'blue'
    // }
    // const detailView = () => {
    //     return (
    //         <div style={detailStyle}>
    //             <h2>{pokemon.name}</h2>
    //             <h3>{pokemon.height}</h3>
                
    //         </div>
    //     )
    // }
    
    return (
        <ul>
            {pokemon.results.map((item, index) => (
            <li key={index}>
              {item.name} 
            </li>
          ))}
        </ul>
    )
}
export default Gallery