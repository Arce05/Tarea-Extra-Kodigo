document.getElementById('registro-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que el formulario se envíe de forma predeterminada
  
    // Obtener los valores de los campos del formulario
    var nombre = document.getElementById('nombre').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirm-password').value;
  
    // Validar el campo de correo electrónico
    if (!validateEmail(email)) {
      showAlert('El correo electrónico no es válido');
      return;
    }
  
    // Validar que las contraseñas coincidan
    if (password !== confirmPassword) {
      showAlert('Las contraseñas no coinciden');
      return;
    }
  
    // Validar que todos los campos estén completos
    if (nombre === '' || email === '' || password === '' || confirmPassword === '') {
      showAlert('Por favor, completa todos los campos');
      return;
    }
  
    // Si todas las validaciones pasan, mostrar un mensaje de éxito
    showAlert('Registro exitoso', 'success');
  
    // Aquí puedes agregar el código adicional que necesites, como enviar los datos a un servidor
  
    // Restablecer los valores del formulario
    document.getElementById('registro-form').reset();
  });
  
  function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  }
  
  function showAlert(message, type = 'danger') {
    var alertDiv = document.createElement('div');
    alertDiv.className = 'alert alert-' + type;
    alertDiv.textContent = message;
  
    var container = document.querySelector('.container');
    container.insertBefore(alertDiv, document.getElementById('registro-form'));
  
    setTimeout(function() {
      alertDiv.remove();
    }, 3000);
  }

  function mostrarMensaje(event) {
    event.preventDefault(); // Evita que el formulario se envíe y se recargue la página
  
    // Validar el formulario aquí
    var nombre = document.getElementById('nombre').value;
    var email = document.getElementById('email').value;
    // Realiza validaciones adicionales si es necesario
  
    // Ocultar el formulario
    document.getElementById('registro-form').style.display = 'none';
  
    // Mostrar el mensaje de agradecimiento
    var mensajeElement = document.getElementById('mensaje');
    mensajeElement.style.display = 'block';
  }
  
  
  
  