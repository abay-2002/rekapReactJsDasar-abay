import React, { Component } from 'react'

// State adalah data private sebuah component. Data ini hanya tersedia untuk component tersebut dan tidak bisa di akses dari component lain.
//Perbedaan state dan props sbb:
// // props
// props are read only 
// props cannot be modified 

// // state
// state change can be asynchronous
// state can be modified using this.setState({ properties : value })
// State adalah data private sebuah component. Data ini hanya tersedia untuk component tersebut dan tidak bisa di akses dari component lain.

// state sederhana
export default class PropsdanstateState extends Component {
    constructor(props){
        super(props);
        this.state = {
            makanan : "Mie Pangsit | ini adalah contoh state sederhana"
        }
    }

    render() {
        return (
            <div>
                <h2>{this.state.makanan}</h2>
            </div>
        )
    }
}


// state berubah
export class PropsdanstateStateBerubah extends Component {
    constructor(props){
        super(props);
        this.state = {
            minuman : "Jus Mangga"
        }
    }

    gantiMinuman = (minuman_baru) => {
        this.setState({
            minuman : minuman_baru
        })
    }

    render() {
        return (
            <div>
                <h2>{this.state.minuman}</h2>
                <button onClick={ _ => {this.gantiMinuman("Jus Sirsak")}}>Ganti Minuman</button>
            </div>
        )
    }
}




