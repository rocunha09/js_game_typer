
var campo = $(".campo-digitacao")
var tempoInicial = tempo

$(document).ready(()=>{
    atualizaTamanhoFrase()
    iniciaContadores()
    iniciaCronometro()
    reiniciaJogo()
})

function atualizaTamanhoFrase(){
    var frase = $(".frase").text()
    var palavras = frase.split(" ")
    var tamanhoFrase = $("#tamanho-frase").text(palavras.length)
}

function iniciaContadores(){
    campo.on("input", ()=>{
        var textoDigitado = campo.val()
        var palavrasDigitadas = textoDigitado.split(/\S+/).length - 1
        var caracteresDigitados = textoDigitado.length
    
        $("#contador-palavras").text(palavrasDigitadas)
        $("#contador-caracteres").text(caracteresDigitados)
    })
}

function iniciaCronometro(){
    var tempo = $("#tempo").text()
    tempoInicial = tempo
    campo.one("focus", ()=>{
        var cronometro = setInterval(()=> {
            tempo--;
            $("#tempo").text(tempo);
            
            if (tempo < 1) {
                campo.attr("disabled", true)
                clearInterval(cronometro) //para a contagem
            }
        }, 1000);
    })
}

function reiniciaJogo(){
    var btnReiniciar = $("#botao-reiniciar")
    btnReiniciar.on("click", ()=>{
        //zerando o textarea
        campo.attr("disabled", false)
        campo.val("")
    
        //zerando contador de caracteres, palavras e tempo
        $("#contador-palavras").text("0")
        $("#contador-caracteres").text("0")
        $("#tempo").text(tempoInicial)

        //inicializa o cronometro novamente
        iniciaCronometro()
    
    })
}
