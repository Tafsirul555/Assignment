function agecalculator(){
    let Userage=prompt("Type your born years :");

    let age =(2025-Userage);

    let ptag = document.createElement('p');
    ptag.setAttribute("id", "showage");

    let text=docoment.createTextNode("your totle age:")
    
    console.log(age);

}

agecalculator();2000