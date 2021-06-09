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
                        {/* {hornedAnimals.map( (animal, i) => <option value={animal.keyword} key={i}> {animal.keyword} </option>)} */}
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
                {
                    filteredHorns.map( (animal, i) => <ImageItem data={animal} key={i}/>)
                }
            </div>
        )
    }
}
