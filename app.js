// DOM Elements
const comm = document.getElementsByClassName("comm_element");

// Listeners
Array.from(comm).forEach(element => {
    element.addEventListener('pointerdown',(event) => {
        moveComm(event);
    });
});
Array.from(comm).forEach(element => {
    element.addEventListener('pointerup',(event) => {
        poseComm(event);
    });
});
// Functions 
function moveComm(e){
    let targetId = e.path[0].id ? e.path[0].id : e.path[1].id;
    console.log(e.x,e.y,targetId);

    let elmnt = document.getElementById(targetId);

    elmnt.style.position = 'absolute';
    if(!elmnt.style.transform){
        elmnt.style.transform = 'translate(0px,0px)';
    }
    
    elmnt.onmousedown = dragMouseDown;

    let elementXrelative = 0;
    let elementYrelative = 0;
    let pointerXonClick = e.x;
    let pointerYonClick = e.y;


    console.log(elmnt.style.transform.match(/\d+/g)[0],
        elmnt.style.transform.match(/\d+/g)[1]);

    elementXrelative = Number(elmnt.style.transform.match(/\d+/g)[0]);
    elementYrelative = Number(elmnt.style.transform.match(/\d+/g)[1]);

    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();

        pointerXonClick = e.x;
        pointerYonClick = e.y;

        document.onmouseup = closeDragElement;
        // call a function whenever the cursor moves:
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        // calculate the new cursor position:

        let pointerXrelative = e.clientX - pointerXonClick;
        let pointerYrelative = e.clientY - pointerYonClick;

        //elementXrelative = pointerXrelative;
        //elementYrelative = pointerYrelative;

        // set the element's new position:
        let o_t = elementXrelative + pointerXrelative;
        let o_l = elementYrelative + pointerYrelative;

        elmnt.style.transform = 'translate('+o_t+"px,"+o_l+"px)";

        //console.log(elmnt.style.transform);

    }
    function closeDragElement() {
        // stop moving when mouse button is released:
        document.onmouseup = null;
        document.onmousemove = null;
    }

}
function poseComm(e){
    let targetId = e.path[0].id ? e.path[0].id : e.path[1].id;
    console.log(e.x,e.y,targetId);
}

