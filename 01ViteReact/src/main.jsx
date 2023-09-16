import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
    return(
        <div>
            <h1>Custom React Component !</h1>
        </div>
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(
    <>
        <App />
        <MyApp />
    </>
) 
