function customRender(reactElement, container) {
    // const domElement = document.createElement(reactElement.type)
    // domElement.innerHTML = reactElement.children
    // domElement.setAttribute('href', reactElement.props.href)             //react Version 1.0.0
    // domElement.setAttribute('target', reactElement.props.target)

    // container.appendChild(domElement)
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    for (const props in reactElement.props) {
        if(props === 'children') continue            //react version 1.2.0
        domElement.setAttribute(props, reactElement.props[props])
    }
    container.appendChild(domElement)
}

const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Click me to visit Google !'
}

const mainContainer = document.querySelector('.root')

customRender(reactElement, mainContainer)

