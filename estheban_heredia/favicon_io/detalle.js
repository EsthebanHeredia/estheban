$(document).ready(function(){
  $.ajax({
    url:"info.json"
  }).done(function(resultado){
    eventos = resultado.eventos;
    var id = location.search.match(/id=(\d)*/)[1]
    evento = eventos.find(function (element){
      return element.id == id
    })
    var html =`
    <div class="contenedor col-12">
    <h1 class="titulo">${evento.nombre}</h1>
    <p class="fecha">${evento.fecha} - ${evento.lugar}</p>
    <p class="descripcion">${evento.descripcion}</p>
    <p class="precio">Costo: ${evento.precio}</p>
    <p class="invitados">Invitados: ${evento.invitados}</p>
  </div> 
    `
    document.getElementById("evento").innerHTML = html
  })
})
