function calcular(){
    var nota_t1 = document.getElementById("nota_t1").value;
    var nota_t2 = document.getElementById("nota_t2").value;
    var parcial = document.getElementById("parcial").value;
    var nombre = document.getElementById("nombre").value;

    if (nombre == null || nombre.length == 0){
        alert("Por favor escribe tu nombre");
        return false;
    }
    if (nota_t1<0 ||nota_t1 == null || nota_t1.length == 0){
        alert("la nota minima es 0 verifica por favor tu nota de taller 1");
        return false;
    }
    else if(nota_t1>10 ||nota_t1 == null || nota_t1.length == 0){
        alert("la nota maxima es 10 verifica por favor tu nota de taller 1");
        return false;
    }

    if (nota_t2<0 ||nota_t2 == null || nota_t2.length == 0){
        alert("la nota minima es 0 verifica por favor tu nota de taller 2");
        return false;
    }
    else if(nota_t2>10 ||nota_t2 == null || nota_t2.length == 0){
        alert("la nota maxima es 10 verifica por favor tu nota de taller 2");
        return false;
    }

    if (parcial<0 ||parcial == null || parcial.length == 0){
        alert("la nota minima es 0 verifica por favor tu nota de parcial");
        return false;
    }
    else if(parcial>10 ||parcial == null || parcial.length == 0){
        alert("la nota maxima es 10 verifica por favor tu nota de parcial");
        return false;
    }
    var p = parcial * 0.15;
    var t1 = nota_t1 * 0.05;
    var t2 = nota_t2 * 0.05;
    var lab = t1 + t2;
    var final = p + lab;

    var p = p.toFixed(1);
    var lab = lab.toFixed(1);
    var final = final.toFixed(1)


    /*
    alert(final);
    alert(p);
    alert(lab);
    alert(nota_t1);
    alert(nota_t2);
    alert(parcial);
    */

    sessionStorage.setItem('final', (final));
    sessionStorage.setItem('p', (p));
    sessionStorage.setItem('lab', (lab));
    sessionStorage.setItem('nota_t1', (nota_t1));
    sessionStorage.setItem('nota_t2', (nota_t2));
    sessionStorage.setItem('parcial', (parcial));
    sessionStorage.setItem('nombre', (nombre));
    
    window.location = 'notas.html';
}

function notas(){
    var final = sessionStorage.getItem('final');
    var p = sessionStorage.getItem('p');
    var lab = sessionStorage.getItem('lab');
    var nota_t1 = sessionStorage.getItem('nota_t1');
    var nota_t2 = sessionStorage.getItem('nota_t2');
    var parcial = sessionStorage.getItem('parcial');
    var nombre = sessionStorage.getItem('nombre');
    
    document.getElementById("impresion").innerHTML +="<h1>Digital 4</h1>";
    document.getElementById("impresion").innerHTML +="<p>Nombre del estudiante: " + nombre + "</p>";
    document.getElementById("impresion").innerHTML +="<p>Nota taller 1: " + nota_t1 + "</p>";
    document.getElementById("impresion").innerHTML +="<p>Nota taller 2: " + nota_t2 + "</p>";
    document.getElementById("impresion").innerHTML +="<p>Nota Laboratorio: " + lab + "</p>";
    document.getElementById("impresion").innerHTML +="<p>Nota parcial: " + p + "</p>";
    document.getElementById("impresion").innerHTML +="<p>Nota Unidad: " + final + "</p>";
    
}