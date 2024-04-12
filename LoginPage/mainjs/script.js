//pega os dados do formulario//
let enviar = document.getElementById("send");

//add evento de validação do form com submit//
enviar.addEventListener('click', (event)=>{
   event.preventDefault();
   let login = document.getElementById("nome").value;
   let password = document.getElementById("senha").value;

   if (login=="" || password=="") {
      alert("Complete all the fields")
     
   }
   else if(login=="TesteLogin" &&  password=="TestePass"){
      alert("All done Lets do it"); 

   }
   if (login != "TesteLogin" || password!="TestePass") {
      alert("user not found")
   }
   
})

// Abas de Links//

let face=document.getElementById("face");
let goog = document.getElementById("google");
let git = document.getElementById("git");

face.addEventListener("click", (event) => {
   location.href="https://www.facebook.com/?locale=pt_BR";
})
goog.addEventListener("click", (event)=> {
   location.href="https://g.co/kgs/PVofcsi";
})
git.addEventListener("click", (event)=> {
   location.href="https://github.com/";
})

// toogle and dark mode //

//pega o toogle//
let toogle = document.getElementById("toogle-ball");
let getCont=document.querySelector("#container");
let toogleDiv=document.querySelector("#toogle-div");

toogle.addEventListener("click", toogleEnable);


//add a animação do toogle ativo//
function toogleEnable() {

   let getH1=document.querySelector("h1");
   let getGit=document.querySelector("#git");
   let userIcon=document.querySelector("#user-icon");
   let keyIcon =document.querySelector("#key-icon");

   if (toogle.style.background==="whitesmoke") {

      toogle.style.background="black";
      toogle.style.transform="translateX(40px)"
      toogle.style.transition="0.3s linear";
   
   
      getCont.style.background="black";
      toogleDiv.style.background="white";

      getH1.style.color="white";
      getGit.style.background="white";

      userIcon.style.color="white";
      keyIcon.style.color="white";

   }else{
      toogleDesable();
      getH1.style.color="";
      getH1.style.transition="0.3s linear"

      userIcon.style.color="";
      keyIcon.style.color=""
   }
 
}
//desabilita a animação do toogle//
function toogleDesable() {
   toogle.style.background="whitesmoke";
   toogle.style.transform="translateX(0.1px)"
   toogle.style.transition="0.3s linear";


   getCont.style.background="";
   toogleDiv.style.background="";
   getCont.transition="0.3s linear"; 
}









