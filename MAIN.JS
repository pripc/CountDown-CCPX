const ticket = document.querySelector('.classe-ingresso')
const ingressos = []

function highlightCard(selector){
    var element = document.querySelector(selector)
    element.classList.toggle("card-highlight") //toggle funciona como um interruptor,nesse caso quando passamos o mouse sobre o elemento, ele executa a classe entre parenteses//
}
selectCard = (selector) =>
{
    var element = document.querySelector(selector);
    element.classList.toggle('card-selected') //"liga e desliga" a classe card-selected conforme a função selectCard é chamada//
    if (ingressos.includes(selector)){ // se dentro do array ingressos já existir o objeto selecionado eu elimino o objeto//
        ingressos.pop(selector)
    }
    else{
        ingressos.push(selector) //caso contrário eu incluo o objeto no meu array//
    }
}
showSelectedCard = () =>
{
    if (ingressos.length > 0){
        window.alert("INGRESSOS SELECIONADOS: " +ingressos) //imprime numa janela de alerta o array ingressos//
    }else{
        window.alert("Você precisa selecionar pelo menos um  dos ingressos para continuar")
    }
    
}
