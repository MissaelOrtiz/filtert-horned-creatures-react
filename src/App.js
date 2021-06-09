import './App.css';
import images from './data'
import Header from './Header'
import ImageList from './ImageList'
import React, { Component } from 'react'
import Dropdown from './Dropdown';

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

  handleAnimalChange = (e) => {
    this.setState({choice: e.target.value})
  }

  handleHornChange = (e) => {
    this.setState({horns: e.target.value})
  }

  render() {
    const hornedAnimals = images
    let filteredHorns = hornedAnimals

    if (this.state.choice) {
        filteredHorns = filteredHorns.filter( animal => animal.keyword === this.state.choice)
    }

    if (this.state.horns) {
      filteredHorns = filteredHorns.filter( animal => animal.horns === +(this.state.horns))
  }

    const animalTypeOptions = Array.from(new Set(hornedAnimals.map(animal => animal.keyword)));
    const animalHornsOptions = Array.from(new Set(hornedAnimals.map(animal => animal.horns)))
    
    return (
      <div className="App">
        <Header />
        <div className="filtered-div">
          <h2> Filter those with Horns </h2>
            <Dropdown options={animalTypeOptions} event={this.handleAnimalChange}/>
            <Dropdown options={animalHornsOptions} event={this.handleHornChange}/>
          <ImageList filteredList={filteredHorns} className="blocks"/>
        </div>
      </div>
    )
  }
}
