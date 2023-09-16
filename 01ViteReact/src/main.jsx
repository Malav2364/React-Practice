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
    'click me to visit googly'
)

const anotherElement = (
    <a href="https://google.com" target='_blank'>
        Visit Google
    </a>
)

ReactDOM.createRoot(document.getElementById('root')).render(
    reactElement        
) 
