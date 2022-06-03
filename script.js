let resultado
let palavras
let busca

function encontrar() {
    palavras = document.getElementById("texto").value
    busca = document.getElementById("busca").value

    resultado = palavras.includes(busca)
    if (busca == ""){
        alert("digite o produto")
    }else{
        imprimir()
    }
    
    
}

function imprimir(){
    if(resultado == true){
        document.getElementById("tela").innerText = "Contém"
    }else{
        document.getElementById("tela").innerText = "Não Contém"
    }
    

}

