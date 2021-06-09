import React, { Component } from 'react'

export default class Dropdown extends Component {
    render() {
        return (
            <label className="label">
            <select onChange={this.props.event}>
                <option value="" key="0">All</option>
              {this.props.options.map((single, i) => <option value={single} key={i+1} >{single}</option>)}
            </select>
            </label>
        )
    }
}
