$("#botao-frase").click(fraseAleatoria)
$("#botao-frase-id").click(buscarFrase)


//realizando ajax com jquery
//realiza chamada get em uma url e recebe na função de callback os dados retornados (data)
function fraseAleatoria(){
    $("#spinner").show()
    $.get("http://localhost:3000/frases", trocaFrase).fail(()=>{
        $("#erro").show()
       
    setTimeout(() => {
            $("#erro").toggle()
        }, 2000)

    }).always(()=>{
        $("#spinner").toggle()
    })
}

function buscarFrase(){
    var fraseId = $("#frase-id").val() == "" ? "0" : $("#frase-id").val() 
    dados = {id: fraseId}

    $("#spinner").show()
    $.get("http://localhost:3000/frases", dados, trocaFraseUnica).fail(()=>{
        $("#erro").show()
        
        setTimeout(() => {
            $("#erro").toggle()
        }, 2000)

    }).always(()=>{
        $("#spinner").toggle()
    })
}

function trocaFrase(data){
    var frase = $(".frase")
    numFrase = Math.floor(Math.random() * data.length);
    frase.text(data[numFrase].texto)

    atualizaTamanhoFrase()
    atualizaTempoInicial(data[numFrase].tempo)
}


function trocaFraseUnica(data){
    var frase = $(".frase")
    frase.text(data.texto)

    atualizaTamanhoFrase()
    atualizaTempoInicial(data.tempo)
}
