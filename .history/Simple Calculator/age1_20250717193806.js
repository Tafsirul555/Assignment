function agecalculator(){

    let Userage=prompt("Type your born years : ");

    let age =(2025-Userage) *356;

    let ptag =document.createElement('p');
    ptag.setAttribute("id", "showage");

    let text=docoment.createTextNode("your age :" + age + "Years");

    ptag.appendChild(text);

    document.getElementById("demo").appendChild(ptag);

    console.log(age);

    let nextyear = age + 1;
    Userage = Number(Userage);

}

agecalculator();