(async () => {

const name = 'nombre'

const inputValue = fetch(name)
  .then(response => response.json())
  .then(data => data.name)

const { value: nombre } = await Swal.fire({
  title: 'Ingresa tu nombre',
  input: 'text',
  inputLabel: 'tu nombre',
  inputValue: inputValue,
  showCancelButton: true,
  inputValidator: (value) => {
    if (!value) {
      return 'necesitas escribir algo!!'
    }
  }
})

if (nombre) {
  Swal.fire(`Bienvenido ${nombre}`)
}

})()

setTimeout(function () {
  $('.loader_bg').fadeToggle();
}, 1500);

