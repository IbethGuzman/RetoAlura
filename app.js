// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = []
function agregarAmigo(){
    let amigo = document.getElementById("amigo").value
    if(amigo.trim() !== ""){
        console.log (amigo)
        amigos.unshift(amigo)
        alert("¡Amigo agregado!")
        document.getElementById("listaAmigos").innerHTML = amigos.map(amigo => `<li>${amigo}</li>`).join("")
        amigo = document.getElementById("amigo").value = "";
    }else{
        alert("¡Ingrese datos al input!")
    }
}


function sortearAmigo(){
    let amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)]
    document.getElementById("sorteoAmigo").innerHTML = `<H1> Amigo sorteado </H1> <br> <p> ${amigoSorteado} </p>`
}
