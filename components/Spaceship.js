import React from "react"; 

class Spaceship extends React.Component {
  render() {
    return (
      <div>
       <h1>{this.props.name}</h1>
       <p>{this.props.speed}</p>
       <p>Colors: {this.props.colors.join(', ')}</p>
      </div> 
        ) 
  }
}

Spaceship.defaultProps = {
  name: "Default Spaceship", 
  speed: 100, 
  hasRockets: false, 
  colors: ['black', 'red']
}

export default Spaceship; 
