import './App.css';
import images from './data'
import Header from './Header'
import ImageList from './ImageList'
import React, { Component } from 'react'

// function App() {
//   return (
//     <div className="App">
//       <Header />
//       <ImageList data={images}/>
//     </div>
//   );
// }

export default class App extends Component {
  state = {}

  handleHornedChange = (e) => {
    this.setState({choice: e.target.value})
  }

  render() {
    const hornedAnimals = images
        let filteredHorns = hornedAnimals

        if (this.state.choice) {
            filteredHorns = hornedAnimals.filter( animal => animal.keyword === this.state.choice)
        }
    return (
      <div className="App">
        <Header />
        <div className="filtered-div">
          <h2> Filter those with Horns </h2>
          <label>
            <select onChange={this.handleHornedChange}>
              <option value="" key="0"> Display All</option>
              <option value="narwhal" key="1"> Narwhal </option>
              <option value="rhino" key="2"> Rhino </option>
              <option value="unicorn" key="3"> Unicorn </option>
              <option value="unilego" key="4"> Unilego </option>
              <option value="triceratops" key="5"> Triceratops </option>
              <option value="markhor" key="6"> Markhor </option>
              <option value="mouflon" key="7"> Mouflon </option>
              <option value="addax" key="8"> Addax </option>
              <option value="chameleon" key="9"> Chameleon </option>
              <option value="lizard" key="10"> Lizard </option>
              <option value="dragon" key="11"> Dragon </option>
            </select>
          </label>
          <ImageList filteredList={filteredHorns} className="blocks"/>
        </div>
      </div>
    )
  }
}
