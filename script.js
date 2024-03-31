//toogle//
let toogleball = document.getElementById("toogleBall");
let cont =document.getElementById("container")

function oneClick() {
    ;
    toogleball.classList.add("toogleActive");
    cont.classList.add("containerDark");
}

function againClick() {
    toogleball.classList.add("toogleOff")  
}

//variaveis //
let loginBtn=document.getElementById("send");
let name=document.getElementsByClassName(".inputName");
let senha=document.getElementsByClassName(".inputSenha");


loginBtn.addEventListener("click",(e) => {
    //campos e btn//
    let user=document.getElementById("name").value;
    let passWord=document.getElementById("senha").value;
    
//validacao de campo//
   
    if (user == "" || passWord == "") {
        alert("Complete todos os campos");
    } else {
        if (user == "TesteUser" && passWord == "TestePass") {
            window.location.href="../concluido.html";
                alert("Passou");
                
        } else {
            alert("Usuario ou senha incorretos");
      }
    }

})

// LINKS AREA// 

let faceBook = document.getElementById("face-logo");
let googleLink = document.getElementById("google-logo");
let gitHub = document.getElementById("git-logo");

faceBook.addEventListener("click", (e) => {
    window.location.href="https://www.facebook.com/?locale=pt_BR";
})
googleLink.addEventListener("click", (e) => {
    window.location.href="https://g.co/kgs/syCtm42";
})
gitHub.addEventListener("click", (e) => {
    window.location.href="https://github.com/";
})