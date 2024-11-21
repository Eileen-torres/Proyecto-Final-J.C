if(document.getElementById('register-form')) {
    document.getElementById('register-form').addEventListener("submit", (event)=>) {
        event.preventDefault()

        const username = document.getElementById('username'). value
        const password = document.getElementById('password'). value

        if(username && password ) {
            localStorage.setItem("user", JSON.stringify({username, password}))
            alert('usuario registrado correctamente')
            window.location.href = 'login.html'
        }else {
            alert('por favor, complete los campos')
        }
        }

    }
}

