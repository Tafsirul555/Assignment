function agecalculator(){

    let Userage=prompt("Type your born years : ");

    let age =(2025-Userage);

    let ptag =document.createElement('p');
    ptag.setAttribute("id", "showage");
    let text=document.createTextNode("Your age:"+ age+" Years");
    ptag.appendChild(text);

    document.getElementById("demo").appendChild(ptag);
}


function resets(){
    document.getElementById("showage").remove();
}