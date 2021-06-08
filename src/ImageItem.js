import React, { Component } from 'react'

export default class ImageItem extends Component {
    render() {
        return (
            <div className="horny-card">
                <h2>{this.props.data.title}</h2>
                <img src={this.props.data.url} alt={this.props.data.title} className="rendered-image"/>
                <p>Keyword: {this.props.data.keyword}</p>
                <p>Description: {this.props.data.description}</p>
                <p>Horns: {this.props.data.horns}</p>
            </div>
        )
    }
}
