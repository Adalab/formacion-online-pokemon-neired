import React from 'react';

class Pokecard extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     pokemonItem : {}
  //   }
  // }

  // componentDidMount(){
  //   fetch(this.props.url)
  //     .then(res=>res.json())
  //     .then(data => {
  //       this.setState({
  //         pokemonItem: data,
  //       });
  //     })
  //   };

  render() {
    const { pokemon } = this.props;

    return (
      <div className="pokemon-card">
        <div className="pokemon-card_top-container">
          {/* <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/` + pokemon.id + `.png`} alt={pokemon.name} className="pokemon-img"></img> */}
          <img src={pokemon.sprites.front_default} alt={pokemon.name} className="pokemon-img"></img>
          <p className="pokemon-id">ID/{pokemon.id}</p>
        </div>
        <div className="pokemon-bottom-container">
          <h2 className="pokemon-name">{pokemon.name}</h2>
          <div className="pokemon-types_container">
            {/* <p>{pokemonItem.types.type.name}</p> */}
            {/* <ul className="pokemon-type">
              {pokemonItem.types
                .map((type, index) => { return (
                  <li key={index}>{type.type.name}</li>
              )})}
            </ul> */}
          </div>
        </div>
      </div>
    );
  }
}

export default Pokecard;