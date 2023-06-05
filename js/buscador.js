const contadoresDiv=document.getElementById('contadoresDiv');
const buscador=document.getElementById('buscador');
//console.log(contadoresDiv);
var elements= contadoresDiv.getElementsByClassName('tarjeta')
//console.log(elements);
function asignaId(elements) {
    for (var i = 0; i < elements.length; i++) {
        var palabraclave = buscador.value.toLowerCase();
        //console.log(elements);
        var client = elements[i];
        //console.log(client);
        var serviceElement = client.querySelector('.numeral');
        //console.log(serviceElement);
        var serviceText = serviceElement.textContent.toLowerCase();
        //console.log(serviceText);
        if (serviceText.includes(palabraclave)) {
          client.style.display = 'inline-block';
        } else {
          client.style.display = 'none';
        }
      }
}
buscador.addEventListener('input',(e)=>{
    e.preventDefault();
    
    asignaId(elements);
});