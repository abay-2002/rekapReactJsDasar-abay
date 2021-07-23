import React, { Component } from 'react'

import PropsStateOperan from './PropsStateOperan'

export default class PropsState extends Component {
    constructor(props){
        super(props);
        this.state = {
            makanan : "Mie Ayam"
        }
    }
    
    gantiMakanan = (makanan_baru) => {
        this.setState({
            makanan : makanan_baru
        })
    }

    render() {
        return (
            <div>
                <h2>{this.state.makanan}</h2>
                <button onClick={ _ => {this.gantiMakanan("Coto Kuda")}}>Ganti Makanan</button>
                <PropsStateOperan makanan={this.state.makanan} gantiMakanan={this.gantiMakanan}/>
            </div>
        )
    }
}
