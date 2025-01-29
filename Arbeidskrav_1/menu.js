
let faneHTML = ""
/** Har fått hjelp av foreleser Tore-Marius til å finjustere .map fra linje 4 til 6.**/
resources.map((cat, index) => {
    faneHTML += `<li><button onclick="dropdown('${cat.category}')">${cat.category}</button></li>`
})


/** Fått hjelp av medstudent Hanna Sørum til løsning av funksjon for utskrift av tekstfelt i main section. Har også brukt 
 ChatGPT til å feilsøke hvorfor koden ikke fungerer og for å få forklart feilkoder i konsollen. https://chatgpt.com/share/67935b5f-dab8-800d-87af-e9694407c6f8
 Dette gjelder fra kodelinje 15 til 30. **/

 /** Har brukt chatgpt for å feilsøke og få hjelp med hvorfor listepunktene med lenker til w3schools osv ikke ble skrevet ut.  
    Dette gjelder for linje 25.https://chatgpt.com/share/67938b0f-2484-800d-8bb6-e0ee3100f5cb**/
document.getElementById("faneid").innerHTML = faneHTML

function dropdown(info) {
    const filtered = resources.filter(resource => resource.category === info)
    const selectedCategory = filtered[0]
    const content = `
    <article>
        <h2 id="overskrift">${selectedCategory.category}</h2>
        <p id="textbox">${selectedCategory.text}</p>
        <ul>
        ${selectedCategory.sources.map(source => `<li><a href="${source.url}" target="_blank">${source.title}</a></li>`).join('')}
        </ul>
    </article>
    `
    document.getElementById("whitebox").innerHTML = content
}

dropdown("HTML")


/**<article>
        <h2 id="overskrift">${selectedSource.sources}</h2>
        <p id="textbox">${selectedSource.sources}</p>
    </article>**/

 /**<ul>
            ${selectedCategory.sources.map(source =>`<li><a href="${source.url}"${source.title}</li>`)}
        </ul>**/



/**document.getElementById("faneid").addEventListener("click", function() {
    document.getElementById("faneid").classList.toggle("visible")
})**/
