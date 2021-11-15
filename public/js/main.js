/*contador de palavras*/
var frase = $(".frase").text()
var palavras = frase.split(" ")
var tamanhoFrase = $("#tamanho-frase").text(palavras.length)

/*text area e contagem de palavras e caracteres*/
var campo = $(".campo-digitacao")
campo.on("input", ()=>{
    var textoDigitado = campo.val()
    var palavrasDigitadas = textoDigitado.split(/\S+/).length - 1
    var caracteresDigitados = textoDigitado.length

    $("#contador-palavras").text(palavrasDigitadas)
    $("#contador-caracteres").text(caracteresDigitados)
})

/*contagem de tempo e game over [usado one no lugar de on para que seja executado apenas 1 vez]*/
var tempo = $("#tempo").text()
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