$("#botao-frase").click(fraseAleatoria)

//realizando ajax com jquery
//realiza chamada get em uma url e recebe na função de callback os dados retornados (data)
function fraseAleatoria(){
    $("#spinner").show()
    $.get("http://localhost:3000/frases", trocaFrase).fail(()=>{
        $("#erro").show()
       
    setTimeout(() => {
            $("#erro").toggle()
        }, 2000);    
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