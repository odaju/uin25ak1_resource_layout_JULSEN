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
    faneHTML += `<li><button>${cat.category}</button></li>`
})

document.getElementById("faneid").innerHTML = faneHTML