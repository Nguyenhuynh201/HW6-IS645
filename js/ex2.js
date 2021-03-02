//Complete code for the following function
//Display text for 400 level courses
const displayText400 = () => {
    const course400 = Array.from(document.getElementsByClassName("400level"))
    course400.forEach ( element => {
        console.log(element.textContent)
    })
}

displayText400();
