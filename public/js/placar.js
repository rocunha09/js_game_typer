var countLinha = 0;

function insereDadosNoPlacar(usuario, qtdPalavras){
    var tabela = $(".placar").find("tbody")
    var numLinha = countLinha++
    var linha = criaLinha(usuario, qtdPalavras, numLinha)

    linha.find(".botao-remover").on("click",(event)=>{
        event.preventDefault()
        removerDadosDoPlacar($("#linha-"+numLinha))
    })
    tabela.prepend(linha)

    $(".placar").slideDown(500)
    scrollPlacar()
}

function scrollPlacar(){
    var posicaoPlacar = $(".placar").offset().top
    $("html, body").animate({
        scrollTop: (posicaoPlacar+300)+"px"
    }, 1000)
}

function criaLinha(usuario, qtdPalavras, numLinha){
    
    var linha = $("<tr>").attr("id", "linha-"+numLinha)
    var colunaNome = $("<td>").text(usuario)
    var colunaQtdPalavras = $("<td>").text(qtdPalavras)
    var colunaRemove = $("<td>")
    var btnRemover = $("<a>").addClass("botao-remover").attr("href", "#")
    var icone = $("<i>").addClass("material-icons").text("delete_sweep")
    
    btnRemover.append(icone)
    colunaRemove.append(btnRemover)
    linha.append(colunaNome)
    linha.append(colunaQtdPalavras)
    linha.append(colunaRemove)

    return linha
}

function removerDadosDoPlacar(id){   
    var linha = $(id) 
        linha.fadeOut() //efeito fadeOut
        setTimeout(() => {
            linha.remove() //remove do DOM
        }, 1000);
}


$("#botao-placar").click(mostraPlacar)

function mostraPlacar(){
    //$(".placar").css("display", "block")
    $(".placar").stop().slideToggle(800); //hide - show - toggle //slide aplica efeito
}

function recuperaPlacar(){
    $("#spinner").show()
    $.get("http://localhost:3000/placar", (dataList)=>{

        dataList.forEach((data)=>{
            insereDadosNoPlacar(data.usuario, data.pontos)
        })

    }).fail(()=>{
        $("#erro").show()
       
    setTimeout(() => {
            $("#erro").toggle()
        }, 2000)

    }).always(()=>{
        $("#spinner").toggle()
    })

}

$("#botao-sync").click(sincronizaPlacar)

function sincronizaPlacar(){
    $("#spinner").show()
    var placar = []
    var linhas = $(".placar>table>tbody>tr")
    
    for(var i = 0; i < linhas.length; i++){
        var linha = $(linhas[i])

        var usuario = linha.children().eq(0).text()
        var palavras = linha.children().eq(1).text()

        var jogador = {
            "usuario": usuario,
            "pontos": palavras
        }

        placar.push(jogador)
    }
    
    var dados = {
        placar: placar
    }
    
    $.post("http://localhost:3000/placar", dados, ()=>{
        console.log("dados salvos no servidor")
    }).fail(()=>{
        $("#erro").show()
       
    setTimeout(() => {
            $("#erro").toggle()
        }, 2000)

    }).always(()=>{
        $("#spinner").toggle()
    })

}