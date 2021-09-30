(function validacions () {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
            
          } else {
              window.open('formulario.html');
          }
          form.classList.add('was-validated')
        }, false)
              
    })
})()

btnlimpiarinputs.addEventListener('click', () =>{
    inputs.forEach(input => input.value = '');
})


  