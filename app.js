document.getElementById("formRegistro").addEventListener("submit", function (event) {
    event.preventDefault();

    const nombre = document.getElementById("nombre").Value;
    const apellido = document.getElementById("apellido").Value;
    const correo = document.getElementById("correo").value;
    const contraseña = document.getElementById("contraseña").value;
    const genero = document.getElementById("genero").value;


    const usuario = {
        nombre: nombre,
        apellido: apellido,
        correo: correo,
        contraseña: contraseña,
        genero: genero
    };

    localStorage.setItem("usuarioRegistrado", JSON.stringify(usuario));
    window.location.href = "login.html"

}

//login// 

document.getElementById("formRegistro").addEventListener("submit", function (event) {
    event.preventDefault ();

    const correologin = document.getElementById("correologin").value;
    const contraseñalogin = document.getElementById("contraseñalogin").value;

    const usuarioRegistrado = JSON.parse(localStorage.getItem(usuarioRegistrado));

    if (usuarioRegistrado && usuarioRegistrado.correo === correologin && usuarioRegistrado.
        contraseña === contraseñalogin) {
            localStorage.setItem("nombreUsuario, usuarioRegistrado.nombre");
            window.location.href = "saludo.html";
        } else {
            alert("correo o contraseña incorrectos");
        }
        ))
}