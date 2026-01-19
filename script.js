document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const form = e.target;
    const nombre = form.nombre.value;
    const email = form.email.value;
    const nivel = form.nivel.value;
    const mensaje = form.mensaje.value;

    const mailtoLink = `
mailto:ingeniosgab@gmail.com
?subject=Solicitud MathMaster - ${nivel}
&body=Nombre: ${nombre}%0A
Correo: ${email}%0A
Nivel: ${nivel}%0A%0A
Solicitud:%0A${mensaje}
    `;

    window.location.href = mailtoLink;
});
