const paraElements =  Array.from(document.getElementsByTagName("p"))
paraElements.forEach(paraElement => {
paraElement.style.backgroundColor = "yellow"
paraElement.style.fontWeight = "bold"
})