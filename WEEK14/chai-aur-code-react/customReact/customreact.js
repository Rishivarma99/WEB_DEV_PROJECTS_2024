
// IN THIS WAY THE FUNCTION HTML CODE IN CONVERTED AND THEN RENDERED INTO 
// OUR DESIRED LOCATION IN THE PUBLIC INDEX FILE 
const reactElement = {
    type : 'a',
    props:{
        href : 'https://google.com',
        target : '_blank'
    }
    ,
    children : 'click me to visit google'
}

function customRender(reactElement,mainContainer){
  
    // mainContainer.innerHTML=`<a href="${reactElement.props['href']}" target="_${reactElement.props['target']}">${reactElement.children}</a>`
    
    const domElement = document.createElement(reactElement.type);

    domElement.innerHTML = reactElement.children;
    for(const prop in reactElement.props){
         
        if(prop === 'children'){
            continue ;
        }

        domElement.setAttribute(prop,reactElement.props[prop]);
      
    } 

    mainContainer.appendChild(domElement);


}

const mainContainer = document.getElementById('root');

customRender(reactElement,mainContainer);

console.log(mainContainer);
