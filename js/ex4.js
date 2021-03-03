let numtable = document.createElement("TABLE")



for (i = 1; i <= 12; i++){
    let tdElement = document.createElement("td")
    let trElement = document.createElement("tr")
    tdElement.textContent = i

    tdElement.style.border = "solid black"
    if(i % 4 === 0){
        tdElement.style.backgroundColor ="lightblue"
    }

    numtable.appendChild(tdElement)
    numtable.appendChild(trElement)
}

document.getElementById("output").appendChild(numtable).style.border = "solid black"
