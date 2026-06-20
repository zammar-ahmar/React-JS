
//     const DomElement = document.createElement(reactElement.type);
//     DomElement.innerHTML = reactElement.children
//     DomElement.setAttribute('href', reactElement.props.href)
//     DomElement.setAttribute('target', reactElement.props.target)

function customRender(reactElement, container) {
    const DomElement = document.createElement(reactElement.type);
     DomElement.innerHTML = reactElement.children
     
      for(let prop in reactElement.props){
        if(prop === "children") continue;
        DomElement.setAttribute(prop, reactElement.props[prop])
    container.appendChild(DomElement)
}
}


const root = document.getElementById('root');

const reactElement={
    type : 'a',
    props :{
         href :'https://www.google.com',
         target : '_blank',

    },
    children : ['Google']

}

customRender(reactElement, root)