function calcular(){
    var nota_t1 = document.getElementById("nota_t1").value;
    var nota_t2 = document.getElementById("nota_t2").value;
    var parcial = document.getElementById("parcial").value;
    var nombre = document.getElementById("nombre").value;

    if(nota_t1 < 0 || nota_t1 >10){
        alert("la nota de taller 1 es invalida");
    }
    else{
        nota_t1 = nota_t1 * 0.05;
        alert(nota_t1)
    }
    if(nota_t1 < 0 || nota_t1 >10){
        alert("la nota de taller 1 es invalida");
    }
    else{
        nota_t1 = nota_t1 * 0.05;
        alert(nota_t1)
    }
}