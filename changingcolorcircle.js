let circle=document.createElement("div")
circle.style.border="2px solid black"
circle.style.height="80px"
circle.style.width="80px"
circle.style.borderRadius="100%"
circle.style.backgroundColor="red"

document.body.appendChild(circle)

circle.onclick =function change(){
    if (circle.style.backgroundColor=="red" )
        circle.style.backgroundColor="yellow"
    else if(circle.style.backgroundColor=="yellow"){
        circle.style.backgroundColor="green"
    }
    
    else {
        circle.style.backgroundColor="red"
    }
}