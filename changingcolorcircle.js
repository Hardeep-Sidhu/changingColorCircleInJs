let circle=document.createElement("div")
circle.style.border="2px solid black"
circle.style.height="80px"
circle.style.width="80px"
circle.style.borderRadius="100%"
circle.style.backgroundColor="red"
circle.style.marginRight="40px"
document.body.appendChild(circle)

let btnon=document.createElement("button")
btnon.textContent="On"
btnon.style.marginRight="30px"
btnon.style.backgroundColor="dodgerblue"
btnon.style.color="white"
btnon.style.borderRadius="25%"
btnon.style.padding="4px"
document.body.appendChild(btnon)

let btnoff=document.createElement("button")
btnoff.textContent="Off"
btnoff.style.marginRight="30px"
btnoff.style.backgroundColor="dodgerblue"
btnoff.style.color="white"
btnoff.style.borderRadius="25%"
btnoff.style.padding="4px"
document.body.appendChild(btnoff)

btnon.addEventListener("click",()=>{
    if (circle.style.backgroundColor=="red" )
        circle.style.backgroundColor="yellow"
    else if(circle.style.backgroundColor=="yellow"){
        circle.style.backgroundColor="green"
    }
    else {
        circle.style.backgroundColor="red"
    }
})

btnoff.addEventListener("click",()=>{
    circle.style.backgroundColor="white"
})

/*circle.onclick =function change(){
    if (circle.style.backgroundColor=="red" )
        circle.style.backgroundColor="yellow"
    else if(circle.style.backgroundColor=="yellow"){
        circle.style.backgroundColor="green"
    }
    
    else {
        circle.style.backgroundColor="red"
    }
}*/