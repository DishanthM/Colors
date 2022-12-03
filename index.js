const conEl = document.querySelector(".container")

for (let index = 0; index < 100; index++) {
    const colorContainerEL = document.createElement("div")
    colorContainerEL.classList.add("color-container")
    conEl.appendChild(colorContainerEL)
}


const colorContainerEls = document.querySelectorAll(".color-container")


generateColors()

function generateColors(){
    colorContainerEls.forEach((colorContainerEL)=>{
         const newColorCode = randomColor()
         colorContainerEL.style.backgroundColor = "#" + newColorCode;
         colorContainerEL.innerText = "#" + newColorCode
    })
}

function randomColor(){
    const chars = "0123456789abcdef"
    const colorCodeLenght = 6;
    let colorCode = ""
    for (let index = 0; index < colorCodeLenght; index++) {
        const randomNum = Math.floor(Math.random() * chars.length) 
        colorCode += chars.substring(randomNum, randomNum + 1)
        }
        return colorCode;
}