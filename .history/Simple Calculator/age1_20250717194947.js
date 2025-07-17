function agecalculator(){

    var Userage=prompt("Type your born years : ");

    var age =(2025-Userage) *356;

    var ptag =document.createElement('p');
    ptag.setAttribute("id", "showage");
    var text=docoment.createTextNode("your age:" + age + "Dayes");
    ptag.appendChild(text);

    document.getElementById("demo").appendChild(ptag);

}

agecalculator();


function resets(){
    document.getElementById("showage").remove
}