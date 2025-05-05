function mostrarDetalle(producto) {
  let contenido = '';
  if (producto === 'pastelChocolate') {
    contenido = `
      <h5>Pastel de Chocolate</h5>
      <p>Precio: $20</p>
      <p><a href="https://www.ecured.cu/Pastel_de_chocolate">Descripción detallada del pastel de chocolate.</a>
      <img src="https://th.bing.com/th/id/R.dba4583f4cdcb717c17cf866aa362c44?rik=9KX0YsFVv5ksow&pid=ImgRaw&r=0/350x250" class="img-fluid" alt="Pastel de Chocolate">
    `;
  } else if (producto === 'cupcakesVainilla') {
    contenido = `
      <h5>Cupcakes de Vainilla</h5>
      <p>Precio: $15</p>
      <p><a href="https://bonpastis.com/es/cupcakes/22-cupcakes-de-vainilla.html">Descripción detallada de los cupcakes de vainilla.</p>
      <img src="https://th.bing.com/th/id/R.4efe0438cafa6878606d29f0abf08026?rik=TNFkI7j%2fV7AL2w&pid=ImgRaw&r=0/350x250" class="img-fluid" alt="Cupcakes de Vainilla">
    `;
  } else if (producto === 'galletasDecoradas') {
    contenido = `
      <h5>Galletas Decoradas</h5>
      <p>Precio: $10</p>
      <p><a href="https://es.wikipedia.org/wiki/Decoraci%C3%B3n_de_galletas">Descripción detallada de las galletas decoradas.</p>
      <img src="https://th.bing.com/th/id/OIP.iXHJozndxhoVjXW8SCZpjQHaE8?rs=1&pid=ImgDetMain/350x250" class="img-fluid" alt="Galletas Decoradas">
    `;
  }
  document.getElementById('contenidoDetalle').innerHTML = contenido;
  $('#modalDetalle').modal('show');
}

function mostrarReceta(receta) {
  let contenido = '';
  if (receta === 'brownies') {
    contenido = `
      <h5>Receta de Brownies</h5>
      <p>Ingredientes:</p>
      <ul>
        <li>200g de chocolate</li>
        <li>150g de azúcar</li>
        <li>100g de mantequilla</li>
        <li>3 huevos</li>
        <li>80g de harina</li>
      </ul>
      <p>Instrucciones:</p>
      <ol>
        <li>Precalentar el horno a 180°C.</li>
        <li>Derretir el chocolate y la mantequilla.</li>
        <li>Mezclar con el azúcar y los huevos.</li>
        <li>Añadir la harina y mezclar bien.</li>
        <li>Hornear durante 25-30 minutos.</li>
      </ol>
    `;
  } else if (receta === 'tartaQueso') {
    contenido = `
      <h5>Receta de Tarta de Queso</h5>
      <p>Ingredientes:</p>
      <ul>
        <li>500g de queso crema</li>
        <li>200g de azúcar</li>
        <li>4 huevos</li>
        <li>1 cucharadita de vainilla</li>
        <li>Base de galleta</li>
      </ul>
      <p>Instrucciones:</p>
      <ol>
        <li>Precalentar el horno a 160°C.</li>
        <li>Mezclar el queso crema con el azúcar.</li>
        <li>Añadir los huevos uno a uno.</li>
        <li>Agregar la vainilla.</li>
        <li>Verter sobre la base de galleta y hornear durante 50-60 minutos.</li>
      </ol>
    `;
  }
  document.getElementById('contenidoReceta').innerHTML = contenido;
  $('#modalReceta').modal('show');
}