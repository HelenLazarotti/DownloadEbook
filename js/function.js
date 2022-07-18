function somar(){
    var resultado = document.getElementById("conta");
    var res = Number.parseInt(resultado.value)

    if(res === 80){
        msgAcerto.innerHTML = "Você acertou! Pode fazer o download."
    } else{
        msgAcerto.innerHTML = "Você errou! Tente novamente."
    }   
}

function buscar(){
    var comeco = document.getElementById("campoBusca");
    var comecar = (comeco.value)

    if(comecar == "cursos"){
        indicacao.innerHTML = "Clique em (Início)"
    } else if (comecar == "ebook"){
        indicacao.innerHTML = "Clique em (Baixar Ebook)"
    } else if (comecar == "ajuda"){
        indicacao.innerHTML = "Clique em (Fale Conosco)"
    }
}

function baixarEbook(){

    if(document.getElementById("nome").value.length < 3){
        window.alert("Preencha os campos obrigatórios*.")
    } else if (document.getElementById("email").value.length < 3) {
        window.alert("Preencha os campos obrigatórios*.")
    }

    window.alert("Clique em OK se tem certeza do download do arquivo.");

    
}
