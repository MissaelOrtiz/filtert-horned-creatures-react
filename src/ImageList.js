import React, { Component } from 'react'
import ImageItem from './ImageItem'

export default class ImageList extends Component {
    state = {}

    handleHornedChange = (e) => {
        this.setState({choice: e.target.value})
    }

    render() {
        const hornedAnimals = this.props.data
        let filteredHorns = hornedAnimals

        if (this.state.choice) {
            filteredHorns = hornedAnimals.filter( animal => animal.keyword === this.state.choice)
        }
        
        return (
            <div>
                <label>
                    <select onChange={this.handleHornedChange}>
                        {hornedAnimals.map( (animal, i) => <option value={animal.keyword} key={i}> {animal.keyword} </option>)}
                    </select>
                </label>
                {
                    filteredHorns.map( (animal, i) => <ImageItem data={animal} key={i}/>)
                }
            </div>
        )
    }
}
