import React from 'react'
//import NewCompon from './NewCompon.js';
const App = (props)=>{
    const obj = {
        fN:'Vova',
        lN:'Dvorskii'
    }
    return <h1 className='red-text'>Hi {obj.fN} {obj.lN}</h1>
}
export default App