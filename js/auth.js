// Verifica si el usuario está logueado
function checkAuth() {
    const isLoggedIn = localStorage.getItem("userLoggedIn");

    // Si NO está logueado Y no está en login.html, redirigir
    if (!isLoggedIn && !window.location.pathname.includes("login.html")) {
        window.location.href = "login.html";
    }
}

// Ejecutar al cargar la página
checkAuth();
