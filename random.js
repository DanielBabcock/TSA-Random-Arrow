let arrowArray = [
    {image:'img/0.jpg'},
    {image:'img/1.jpg'},
    {image:'img/2.jpg'},
    {image:'img/3.jpg'},
    {image:'img/4.jpg'},
    {image:'img/5.jpg'},
    {image:'img/6.jpg'},
    {image:'img/7.jpg'}
]
console.log(arrowArray);

let arrowSign = document.getElementById("randomDiv");
let pageBody = document.getElementById("wholeBody");
let clickArrow = document.getElementById("newRandomImage")

// **********************click RANDOM ARROW*****************************

// ****************
// Code block's objective?
// ***
// Why does it work?
// ***
// ****************

pageBody.addEventListener("click", loadNewArrow);

function loadNewArrow(event){
    
    let newRandomPic = arrowArray[Math.floor(Math.random()*7 +1)];
        console.log("newRandomPic: ", newRandomPic);

    let newCard = `
        <div id="randomDiv">
            <img id="newRandomImage" src=${newRandomPic.image}>
        </div>
        `            
        clickArrow.innerHTML = newCard;   
}

// **********************onload RANDOM ARROW*****************************
// ****************
// Code block's objective?
// ***
// Why does it work?
// ***
// ****************
window.addEventListener("load", loadArrow);

function loadArrow(event){
        
    let randomPic = arrowArray[Math.floor(Math.random()*7 +1)];
    console.log("randomPic: ", randomPic);
    
    
    let card = `
    <div id="randomDiv">
        <img id="randomImg" src=${randomPic.image}> 
    </div>
    `            
    arrowSign.innerHTML += card;   
}