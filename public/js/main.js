
var campo = $(".campo-digitacao")
var tempoInicial = tempo
var frase = $(".frase").text()

$(document).ready(()=>{
    atualizaTamanhoFrase()
    iniciaContadores()
    iniciaCronometro()
    reiniciaJogo()
    comparaTexto()
})

function atualizaTamanhoFrase(){
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
            $("#botao-reiniciar").attr("disabled", true)
            
            tempo--;
            $("#tempo").text(tempo);
            
            if (tempo < 1) {
                campo.attr("disabled", true)
                clearInterval(cronometro) //para a contagem
                $("#botao-reiniciar").attr("disabled", false)

                //estilo
                campo.addClass("campo-digitacao-desabilitado")
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

        //estilo
        campo.removeClass("campo-digitacao-desabilitado")
        campo.removeClass("digitacao-correta")
        campo.removeClass("digitacao-errada")
    
    })
}

function comparaTexto(){
    campo.on("input", ()=>{
        var campoVal = campo.val()
        var parteFrase = frase.substr(0, campoVal.length)
        console.log("parte frase: " + parteFrase)
        console.log("digitado: " +campo.val())

        if(strcmp(campoVal, parteFrase)){
            campo.removeClass("digitacao-errada")
            campo.addClass("digitacao-correta")
        } else {
            campo.removeClass("digitacao-correta")
            campo.addClass("digitacao-errada")
        }
    })
}

function strcmp(strA, strB){
    return strA === strB ? true : false
}