/**console.log(faneid)

let faneHTML = ""

resources.map((faneid, index) => faneHTML += 
            `<ul class="faneid">
                <li><a href=${fanid.resources}>HTML</a></li>
                <li><a href=${faneid.resources}>CSS</a></li>
                <li><a href=${faneid.resources}>JavaScript</a></li>
                <li><a href=${faneid.resources}>React</a></li>
                <li><a href=${faneid.resources}>Sanity and headless</a></li>
            </ul>`)

document.getElementById("faneid").innerHTML = faneHTML **/



let faneHTML = ""

resources.map((cat, index) => {
    faneHTML += `<li><button onclick="dropdown('${cat.category}')">${cat.category}</button></li>`
})

document.getElementById("faneid").innerHTML = faneHTML

function dropdown(info) {
    const filtered = resources.filter(resource => resource.category === info)
    const selectedCategory = filtered [0]
    const content = `
    <article>
        <h2 id="overskrift">${selectedCategory.category}</h2>
        <p id="textbox">${selectedCategory.text}</p>
        <ul>
            ${selectedCategory.sources.map(source =>`<li><a href="${source.url}"${source.title}</li>`)}
        </ul>
    </article>
    `

    document.getElementById("whitebox").innerHTML = content
}

dropdown("HTML")

/**document.getElementById("faneid").addEventListener("click", function() {
    document.getElementById("faneid").classList.toggle("visible")
})**/
