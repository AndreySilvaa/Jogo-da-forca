var palavra
var palavras = ['CROCODILO', 'TEMPESTADE']
var erros = 0
var numsorte = 0
var pass
var visto = [0,0,0,0,0]
var perdeu = 0

// 2º
function game(sorte) {
    var sorte2 = sorte
    switch (sorte) {
        case 0:
            palavra = 'CROCODILO'
            numsorte = 1
            break
        case 1:
            palavra = 'TEMPESTADE'
            numsorte = 2
            break
        case 2:
            palavra = 'ESCURIDÃO'
            numsorte = 3
            break
        case 3:
            palavra = 'NUVEM'
            numsorte = 4
            break
        case 4:
            palavra = 'RELÓGIO'
            numsorte = 5
            break
    }
    

    ocultar(sorte2)
}

// 3º
function ocultar(sorte){

    switch (sorte){
        case 0:
            var p = 1
            var ocultarletra = []
            for (var c = 0; c < 9; c++) {
                ocultarletra[c] = document.querySelector("#croc > .palavra .p" + p).innerText = ' '
                p++
            }
            break
        case 1:
            var p = 1
            var ocultarletra = []
            for (var c = 0; c < 10; c++) {
                ocultarletra[c] = document.querySelector("#temp > .palavra .p" + p).innerText = ' '
                p++
            }
            break
        case 2:
            var p = 1
            var ocultarletra = []
            for (var c = 0; c < 10; c++) {
                ocultarletra[c] = document.querySelector("#dark > .palavra .p" + p).innerText = ' '
                p++
            }
            break
        case 3:
            var p = 1
            var ocultarletra = []
            for (var c = 0; c < 5; c++) {
                ocultarletra[c] = document.querySelector("#nuv > .palavra .p" + p).innerText = ' '
                p++
            }
            break
        case 4:
            var p = 1
            var ocultarletra = []
            for (var c = 0; c < 7; c++) {
                ocultarletra[c] = document.querySelector("#rel > .palavra .p" + p).innerText = ' '
                p++
            }
            break
    }
    
}

function passandosorte(n){
    pass = n
}

// 4º

function pegarletra(){
    if (perdeu == 1){
        alert('Você já perdeu.')
    } else if(palavra == 'CROCODILO' && visto[0] == 1 || palavra=='TEMPESTADE' && visto[1] == 1 || palavra=='ESCURIDÃO' && visto[2]== 1 || palavra=='NUVEM' && visto[3]==1 || palavra=='RELÓGIO' && visto[4]==1) {
        alert('Você já ganhou.')
    } else {
        var letratxt = document.getElementById("letratxt").value
        if(letratxt.length > 1){
            alert("Coloque apenas uma letra.")
        }else {
            verificar(letratxt)
            document.getElementById("letratxt").value = ''
            document.getElementById("letratxt").focus()
        }
    }
}

// 5º
function verificar(l) {
    var veri = palavra.match(l.toUpperCase())
    var p = 1

    if(veri == null) {
        alert('Letra incorreta.')
        switch (erros){
            case 0:
                document.getElementById('corpo').style.display = 'inline-block'
                break
            case 1:
                document.getElementById('braço_di').style.display = 'inline-block'
                break
            case 2:
                document.getElementById('braço_es').style.display = 'inline-block'
                break
            case 3:
                document.getElementById('perna_di').style.display = 'inline-block'
                break
            case 4:
                document.getElementById('perna_es').style.display = 'inline-block'
                break
            case 5:
                document.getElementById('cabeça').style.display = 'inline-block'
                perdeu = 1
                break
        }
        erros+=1
        document.getElementById("erros").innerText = erros.toString()
        
        if(erros == 6){
            alert("VOCÊ PERDEU!")
            ocultar(pass)
            document.getElementById("erros").innerText = '0'
            erros = 0
        }

    } else {
        if(palavra == 'CROCODILO') {
            for (var c = 0; c < palavra.length; c++){

                if(palavra.charAt(c) == veri) {
                    var exi = document.querySelector("#croc > .palavra .p"+p).innerText = veri
                }

                if(checagem(palavra)){
                    document.querySelector(".emoji1").style.display = 'block'
                }
                p++
            }
        } else if (palavra == 'TEMPESTADE'){
            for (var c = 0; c < palavra.length; c++){

                if(palavra.charAt(c) == veri) {
                    var exi = document.querySelector("#temp > .palavra .p"+p).innerText = veri
                }

                if(checagem(palavra)){
                    document.querySelector(".emoji2").style.display = 'block'
                }
                p++
            } 
        } else if (palavra == 'ESCURIDÃO'){
            for (var c = 0; c < palavra.length; c++){

                if (palavra.charAt(c) == veri) {
                    var exi = document.querySelector("#dark > .palavra .p"+p).innerText = veri
                }
                
                if(checagem(palavra)){
                    document.querySelector(".emoji3").style.display = 'block'
                }
                p++
            }
        } else if (palavra == 'NUVEM'){
            for (var c = 0; c < palavra.length; c++){

                if (palavra.charAt(c) == veri) {
                    var exi = document.querySelector("#nuv > .palavra .p"+p).innerText = veri
                }
                
                if(checagem(palavra)){
                    document.querySelector(".emoji4").style.display = 'block'
                }
                p++
            }
        }  else if (palavra == 'RELÓGIO'){
            for (var c = 0; c < palavra.length; c++){

                if (palavra.charAt(c) == veri) {
                    var exi = document.querySelector("#rel > .palavra .p"+p).innerText = veri
                }
                
                if(checagem(palavra)){
                    document.querySelector(".emoji5").style.display = 'block'
                }
                p++
            }
        }
    }

}

function checagem(nome){
    if (nome == 'CROCODILO'){
        if(document.querySelector("#croc > .palavra").innerText == 'CROCODILO' ){
            visto[0] = 1
            return true
        }
    } else if(nome == 'TEMPESTADE'){
        if(document.querySelector("#temp > .palavra").innerText == 'TEMPESTADE' ){
            visto[1] = 1
            return true
        }
    }  else if(nome == 'ESCURIDÃO'){
        if(document.querySelector("#dark > .palavra").innerText == 'ESCURIDÃO' ){
            visto[2] = 1
            return true
        }
    } else if(nome == 'NUVEM'){
        if(document.querySelector("#nuv > .palavra").innerText == 'NUVEM' ){
            visto[3] = 1
            return true
        }
    } else if(nome == 'RELÓGIO'){
        if(document.querySelector("#rel > .palavra").innerText == 'RELÓGIO' ){
            visto[4] = 1
            return true
        }
    }

}

// 1º
function exibir(){
    document.getElementById("botao").innerText = "PASSO"
    
    for(var c=1; c <6; c++){
        document.querySelector(".emoji"+c).style.display = 'none'
    }

    if (numsorte == 0){
        passandosorte(numsorte)
    } else if (numsorte == 1){
        passandosorte(numsorte)
    } else if (numsorte == 2){
        passandosorte(numsorte)
    } else if (numsorte == 3){
        passandosorte(numsorte)
    } else if (numsorte == 4){
        passandosorte(numsorte)
    } else if (numsorte == 5){
        numsorte = 0
        for (var c = 0; c < 5; c++){
            visto[c] = 0
        }
        passandosorte(numsorte)
    }

    var temp = document.querySelector("#jogo > #temp")
    var croc = document.querySelector("#jogo > #croc")
    var dark = document.querySelector("#jogo > #dark")
    var nuv = document.querySelector("#jogo > #nuv")
    var rel = document.querySelector("#jogo > #rel")

    if (numsorte == 0){                                                              
        var jogo = document.querySelector("#jogo > #croc").style.display = "block"
        temp.style.display = "none" 
        dark.style.display = "none"  
        nuv.style.display = "none"
        rel.style.display = "none"
        
    } else if (numsorte == 1){
        var jogo = document.querySelector("#jogo > #temp").style.display = "block"
        croc.style.display = "none" 
        dark.style.display = "none"  
        nuv.style.display = "none" 
        rel.style.display = "none"
    } else if (numsorte == 2){
        var jogo = document.querySelector("#jogo > #dark").style.display = "block"
        temp.style.display = "none"  
        croc.style.display = "none"  
        nuv.style.display = "none"
        rel.style.display = "none"
    } else if (numsorte == 3){
        var jogo = document.querySelector("#jogo > #nuv").style.display = "block"
        temp.style.display = "none"  
        croc.style.display = "none"  
        dark.style.display = "none"
        rel.style.display = "none"
    } else if (numsorte == 4){
        var jogo = document.querySelector("#jogo > #rel").style.display = "block"
        temp.style.display = "none"  
        croc.style.display = "none"  
        dark.style.display = "none"
        nuv.style.display = "none"
    }

    if (palavra == 'CROCODILO' && visto[0] == 0 || palavra=='TEMPESTADE' && visto[1] == 0 || palavra=='ESCURIDÃO' && visto[2]== 0 || palavra=='NUVEM' && visto[3]==0 || palavra=='RELÓGIO' && visto[4]==0){
        alert('Você perdeu! \nA palavra certa era: '+ palavra)
    }

    document.getElementById("erros").innerText = '0'
    erros = 0

    document.getElementById('corpo').style.display = 'none'
    document.getElementById('braço_di').style.display = 'none'
    document.getElementById('braço_es').style.display = 'none'
    document.getElementById('perna_di').style.display = 'none'
    document.getElementById('perna_es').style.display = 'none'
    document.getElementById('cabeça').style.display = 'none'
    perdeu =0
    
    game(numsorte)
}

function inicia(){
    var botao = document.getElementById("botao").addEventListener("click", exibir)
    var enviarle = document.getElementById("enviarle").addEventListener("click", pegarletra)

}

window.addEventListener("load", inicia)
