//?hola tutor para la 3era pre-entrega hice un inicio se sesion para usuarios previamente registrado
//? use localstorage para almacenar los usuario
//*con funciones para guardar usuario, mostrar la lista de usuarios,  ocultarla y una para agregar usuarios


let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];


function guardarUsuarios() {
    localStorage.setItem('usuarios', JSON.stringify(usuarios));
}


function mostrarListaUsuarios() {
    const listaUsuarios = usuarios.map(user => `<li>${user.username}</li>`).join('');
    document.getElementById('listaUsuarios').innerHTML = `<ul>${listaUsuarios}</ul>`;
}


function ocultarListaUsuarios() {
    const listaUsuarios = document.getElementById('listaUsuarios');
    listaUsuarios.style.display = 'none';
}


function mostrarOcultarListaUsuarios() {
    const listaUsuarios = document.getElementById('listaUsuarios');
    if (listaUsuarios.style.display === 'none') {
        listaUsuarios.style.display = 'block';
    } else {
        listaUsuarios.style.display = 'none'; 
    }
    
}



document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const usuarioEncontrado = usuarios.find(user => user.username === username && user.password === password);

    if (usuarioEncontrado) {
        document.getElementById('mensaje').innerHTML = 'bienvenido ' + username;
        
    } else {
        document.getElementById('mensaje').innerHTML = 'usuario no existe, vuelve a intentar.';
    }
});


function agregarUsuario() {
    const username = prompt("ingresa un nombre de usuario:");
    const password = prompt("ingresa una contraseña:");

    if (username && password) {
        const nuevoUsuario = { username, password };
        usuarios.push(nuevoUsuario);
        guardarUsuarios();
        alert('usuario creado correctamente.');
    } else {
        alert('por favor, ingresa nombre y contraseña valida');
    }
}

