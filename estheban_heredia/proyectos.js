var proyectos;

$(document).ready(function (){
  $.ajax({
    url:'http://127.0.0.1:5501/info.json'
  }).done(function(resultado){
    proyectos = resultado.proyectos;
    var htmlProyectos = ''
    for (var i=0; i < proyectos.length; i++){
      htmlProyectos +=`
      <h1>lorem ipsum doloris ameris</h1>
      <div class='contenedorPrincipal col-6 my-5 p-2 border rounded bg-white'>
      <div class='row'>
          <div id='idProyecto' class='col-6 text-left'>ID: ${proyectos.id}</div>
          <div id='fechaProyecto' class='col-6 text-right'>${proyectos.fecha}</div>
      </div>
      <div class='row'>
          <div id='tituloProyecto' class='col-12 text-center'><h1>${proyectos.nombre}</h1></div>
          <div id='descripcionProyecto' class='col-12 text-center'><p>${proyectos.descripcion}</p></div>
          <div id='linkProyecto' class='col-12 text-center text-primary'><p>${proyectos.link}</p></p></div>
      </div>
    </div>
      `
    }
    document.getElementById('proyectos').innerHTML = htmlProyectos
  })
});