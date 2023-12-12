function linkOpener(evt) {
    let link = evt.target.dataset.link;
    window.open(link, "_self");
}

const links = ['Home', 'Articles', 'Projects', 'Tutoring']

linkElementArray = []
for (const link of links) {
    let elm = document.getElementById("link" + link);
    linkElementArray.push(elm);
}

for (const elm of linkElementArray) {
    elm.addEventListener("click", linkOpener);
}