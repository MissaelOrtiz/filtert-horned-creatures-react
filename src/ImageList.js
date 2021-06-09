import React, { Component } from 'react'
import ImageItem from './ImageItem'

export default class ImageList extends Component {
    render() {
        return (
            <div className="list">
                {
                    this.props.filteredList.map( (animal, i) => <ImageItem data={animal} key={i}/>)
                }
            </div>
        )
    }
}
