/*
Lo que se quiere hacer es obtener datos de una api. 
 */


const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
// se agrega punto a name porque es una clase
const $n = document.querySelector('.name');
//se le quita el gatito y se le pone punto por ser una clase
const $b = document.querySelector('.blog');
//se agrega punto y se coloca el elemento en html porque no existia
const $l = document.querySelector('.location');

//se agrega async para que funcione await.
async function displayUser(username) {
  $n.textContent = 'cargando...';
  await fetch(`${usersEndpoint}/${username}`)
  //se agrega los then al fetch.
  .then(response => response.json())
  .then(data => {
  //se coloca todo este texto dentro del cuerpo de fetch.
  //se reemplazan las comillas simples por `
    console.log(data);
    $n.textContent= `${data.name}`;
    $b.textContent = `${data.blog}`;
    $l.textContent = `${data.location}`;
  });
}

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  //se agrega signo de pesos para activar la variable
  $n.textContent = `Algo salió mal: ${err}`
}

displayUser('stolinski').catch(handleError);