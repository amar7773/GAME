let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector(".reset");
let newbtn=document.querySelector("#new-button");
let msgcont=document.querySelector(".msg-cont");
let msg=document.querySelector("#msg");
let turno=true;
let winpatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,4,6],
    [2,5,8],
    [3,4,5],
    [6,7,8],
];
const resetgame=()=>{
    truno=true;
    enableboxes();
    msgcont.classList.add("hide");
}
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turno){
            box.innerText="O";
            turno=false;
        }
        else{
            box.innerText="X";
            turno=true;
        }
        box.disabled=true;
        checkwinner();
    })
})
const disableboxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const enableboxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}
const showwinner=(winner)=>{
    msg.innerText=`Congratulation,Winner Is ${winner}`;
    msgcont.classList.remove("hide");
    disableboxes();
}
const checkwinner=()=>{
    for(pattern of winpatterns){
        let pos1=boxes[pattern[0]].innerText;
        let pos2=boxes[pattern[1]].innerText;
        let pos3=boxes[pattern[2]].innerText;
        if(pos1!=""&& pos2!="" && pos3!=""){
            if(pos1===pos2 && pos2===pos3){
                showwinner(pos1);
            }
        }
    }
}
newbtn.addEventListener("click",resetgame);
resetbtn.addEventListener("click",resetgame);
