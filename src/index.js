import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';

// ===== BELAJAR COMPONENT =====
// import {ComponentNavbar} from './ComponentNavbar'
// import ComponentCard from './ComponentCard'

// ===== BELAJAR PROPS DAN STATE =====
// import {PropsdanstateProps} from './PropsdanstateProps'

// import PropsdanstateState from './PropsdanstateState'
// import {PropsdanstateStateBerubah} from './PropsdanstateState'

import PropsState from './PropsState'

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}

    {/* ===== BELAJAR COMPONENT ===== */}
    {/* <ComponentNavbar /> */}
    {/* <ComponentCard name="Akbar Angkasa" job="Front End Web Dev"/> */}
    {/* <ComponentCard name="Ananda Ajeng" job="Back End Web Dev"/> */}

    {/* ===== BELAJAR PROPS DAN STATE */}
    {/* <PropsdanstateProps judul="ini adalah props sederhana"/> */}
    {/* <PropsdanstateState /> */}
    {/* <PropsdanstateStateBerubah /> */}

    <PropsState />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
