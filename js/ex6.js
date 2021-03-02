
const words = [
    {
      term: "Procrastination",
      definition: "Avoidance of doing a task that needs to be accomplished"
    },
    {
      term: "Tautology",
      definition: "logical argument constructed in such a way that it is logically irrefutable"
    },
    {
      term: "Oxymoron",
      definition: "figure of speech that juxtaposes elements that appear to be contradictory"
    }
  ];

  const listElement = document.createElement("dl");
  
  words.forEach(word => {
    const dtElement = document.createElement("dt");
    const strongElt = document.createElement("strong");
    strongElt.textContent = word.term;
    const ddElement = document.createElement("dd");
    ddElement.textContent = word.definition;
  
    dtElement.appendChild(strongElt);
    listElement.appendChild(dtElement);
    listElement.appendChild(ddElement);
  });
  
  document.getElementById("content").appendChild(listElement); 