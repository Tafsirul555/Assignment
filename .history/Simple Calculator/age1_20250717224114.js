function agecalculator(){

    let Userage=prompt("Type your born years : ");

    let age =(2025-Userage) *365;

    let ptag =document.createElement('p');
    ptag.setAttribute("id", "showage");
    let text=document.createTextNode("Your age:"+ age +" Dayes");
    ptag.appendChild(text);

    document.getElementById("demo").appendChild(ptag);
}


function resets(){
    document.getElementById("showage").remove();
}