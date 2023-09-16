import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
    return(
        <div>
            <h1>Custom React Component | Malav</h1>  {/*custom react component*/}
        </div>
    )
}

const anotherUser = 'Malav React' //a const declared and can be used as an evaluated expression in other components 

// const ReactElement = {
//     type: 'a',
//     props: {
//         href: 'https://google.com',
//         target: '_blank'
//     },
//     children: 'Click me to visit Google !'
// }

const reactElement = React.createElement(
    'a',
    {href:'https://google.com', target:'_blank'},
    'click me to visit googly',
    anotherUser 
)

const anotherElement = (
    <a href="https://google.com" target='_blank'>
        Visit Google
    </a>
)

ReactDOM.createRoot(document.getElementById('root')).render(
    // <App/>  
    reactElement     
) 
