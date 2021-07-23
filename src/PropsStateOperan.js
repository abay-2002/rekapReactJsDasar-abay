import React, { Component } from 'react'

export default class PropsStateOperan extends Component {
    render() {
        return (
            <div>
                <h2>{this.props.makanan}</h2>
                <button onClick={ _ => this.props.gantiMakanan("Soto betawi")}>Ganti Makanan</button>
            </div>
        )
    }
}

// perbedaan functional component dan class component adalah
// Class component memiliki state, sedangkan function based component tidak memiliki state (hanya menerima props). Secara sederhana, ketika kita membutuhkan state sudah hampir pasti akan membutuhkan class based component.
