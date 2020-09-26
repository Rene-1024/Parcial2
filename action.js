function calcular(){
    var nota_t1 = document.getElementById("nota_t1").value;
    var nota_t2 = document.getElementById("nota_t2").value;
    var parcial = document.getElementById("parcial").value;
    
    
//lic como evito que se genere la accion de calcular si el numero excede la cantidad permitida 
    if (nota_t1<0){
        alert("la nota minima es 0 verifica por favor tu nota de taller 1");
    }
    else if(nota_t1>10){
        alert("la nota maxima es 10 verifica por favor tu nota de taller 1");
    }
    else{
        var nota_t1 = nota_t1 * 0.5;
    }
    

    if (nota_t2<0){
        alert("la nota minima es 0 verifica por favor tu nota de taller 2");
    }
    else if(nota_t2>10){
        alert("la nota maxima es 10 verifica por favor tu nota de taller 2");
    }
    else{
        var nota_t2 = nota_t2 * 0.5;
    }

    var nota_lab = nota_t1 + nota_t2;
    var nota_lab = nota_lab * 0.10;
    var nota_lab = nota_lab.toFixed(1)
    alert(nota_lab);

    if (parcial<0){
        alert("la nota minima es 0 verifica por favor tu nota de parcial");
    }
    else if(parcial>10){
        alert("la nota maxima es 10 verifica por favor tu nota de parcial");
    }
    else{
        var parcial = parcial * 0.15;
       
    }

        var L = (nota_t1 + nota_t2)* 0.10;
        var p = parcial * 0.15;
        var nota = p + L; 

    alert(nota);
    


    

}