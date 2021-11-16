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
        $(id).remove()
}