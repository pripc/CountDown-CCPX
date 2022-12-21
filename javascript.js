//Transferindo as variáevis para o local da página onde queremos que elas apareçam//
let dias = window.document.getElementById('dias')
let horas = window.document.getElementById('horas')
let minutos = window.document.getElementById('minutos')
let segundos = window.document.getElementById('segundos')
function contagem(){
    
    var deadline = new Date('jul 13 2023').getTime();
    var now =  new Date().getTime()
    var tResta = deadline - now //valor sai em milisegundos//
    var day = Math.floor(tResta / (1000 * 60 * 60 * 24))
    var hours = Math.floor((tResta%(1000 * 60 * 60 * 24))/(1000 * 60 * 60))
    var minutes = Math.floor((tResta %(1000*60*60))/(1000*60))
    var seconds = Math.floor((tResta%(1000*60))/1000)

    
    dias.innerHTML = day
    horas.innerHTML = hours
    minutos.innerHTML = minutes
    segundos.innerHTML = seconds

}
contagem()
setInterval(contagem, 1000) //Usando setInterval definimos qual o intervalo de tempo que a função será executada//
/*Nesse caso, como queremos ver os segundos, o intervalo de 1000 milisegundos é o bastante para
conseguirmos visualizar a mudança dos segundos*/
