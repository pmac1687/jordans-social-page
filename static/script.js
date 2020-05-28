function createNew(thing) {
    const heading = document.createElement(thing);
    const level = document.createElement('div');
    if (thing==='h1'){
        var title = prompt('What should the heading say?');
        heading.innerHTML = title;
        heading.style.margin = '0px';
    }
    if (thing==='img') {
        var title = prompt('whate is the image file name?');
        heading.src = title;
        heading.style.height = '250px';
        heading.style.width = '250px';
    }
    if (thing==='p') {
        var title = prompt('Type the paragraph contents')
        heading.style.color = 'white';
        heading.style.fontSize = '20px';
        heading.style.fontStyle = 'bold';
        heading.style.backgroundColor = 'rgb(138,23,138)';
        heading.style.padding = '0px';
        heading.style.margin = '0px';
        heading.style.wordWrap = 'break-word';
        heading.style.width = '250px'
        heading.innerHTML = title;
    }
    const btn = document.createElement('button');
    btn.style.borderRadius = '50%';
    btn.style.width = '10px';
    btn.style.height = '20px';
    btn.style.backgroundColor = 'red';
    btn.onclick =function(){
        btn.remove();
        level.remove();
    }
    level.appendChild(btn);
    $( level ).draggable()
    level.appendChild(heading);
    const main = document.getElementById('main');
    main.appendChild(level)
    

};
function move() {
    const body = document.getElementById('main');
    body.style.backgroundImage = 'none';

};
$( function() {
    $( '#draggable' ).draggable();
});
function createParagraph() {

}
function newSection() {
    var image = prompt('for new background image, enter filename','else leave blank')
    const section = document.createElement('div');
    const main = document.getElementById('main');
    section.style.width = '1200px';
    section.style.height = '1200px';
    section.style.backgroundSize = 'cover';
    $( section ).draggable()
    if (image==='else leave blank'){
        section.style.backgroundImage = 'url(addy.JPG)';
    }
    else {
        image = 'url(' + image + ')';
        section.style.backgroundImage = image;
    }
    main.appendChild(section)
    
}
function createMedia(file) {
    var image = prompt('for new background image, enter filename')
    const section = document.createElement('div');
    const main = document.getElementById('main');
    section.style.width = '1200px';
    section.style.height = '1200px';
    section.style.backgroundSize = 'cover';
    $( section ).draggable()
    if (image==='else leave blank'){
        section.style.backgroundImage = 'url(addy.JPG)';
    }
    else {
        image = 'url(' + image + ')';
        section.style.backgroundImage = image;
    }
    main.appendChild(section)
    

}
