
//mostrar fecha
var d = new Date(); 
document.getElementById("fecha").innerHTML = ("Fecha: "+d.getDate()+"/"+d.getMonth()+"/"+d.getFullYear()+" y son las " + d.getHours() + " horas " + d.getMinutes() + " minutos " + d.getSeconds() + " segundos"); 

// array con productos
var dataSet = [
    ['1', 'Café Americano', '1000', '50'],
    ['2', 'Café Capuchino', '1200', '30'],
    ['3', 'Café Mocachino', '1200', '30'],
    ['4', 'Café Late', '1300', '25'],
    ['5', 'Café Expreso', '1500', '30'],
    ['6', 'Empanada de Pino', '2000', '20'],
    ['7', 'Empanada pollo champiñon','2000', '15'],
    ['8', 'sopaipillas', '1000', '100'],
];

//datatable producto
$(document).ready(function () {
    $('#example').DataTable({
        data: dataSet,
        columns: [
            { title: 'Id' },
            { title: 'Nombre' },
            { title: 'Precio' },
            { title: 'Stock' },
            
        ],
    });
});

//otener productos json
const jsonData= require('./productor.json'); 
console.log(jsonData);

