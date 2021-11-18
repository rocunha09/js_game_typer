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