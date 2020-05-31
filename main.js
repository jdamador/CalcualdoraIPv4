let list_class = [
    {id: "A", mask: "255.0.0.0", min: 0, max: 128},
    {id: "B", mask: "255.255.0.0", min: 128, max: 192},
    {id: "C", mask: "255.255.255.0", min: 192, max: 224},
    {id: "D", mask: "Reservadas", min: 224, max: 240},
    {id: "E", mask: "Reservadas", min: 240, max: 256}
];

// Muestra la dirección de red aplicando algunas restricciones
function showRedDir(first, second, third, fourth){
    let netDiv = document.getElementById("result-net");
    let aux1 = first;
    let aux2 = second;
    let aux3 = third;
    let aux4 = fourth;
    if(aux2 == 255 && aux3 == 255 && aux4 >= 252){
        netDiv.innerHTML = "Dirección Multiclase";
    }
    else{
        if (aux4 >= 255){
            aux3 ++;
            aux4 = 0;
        }
        else{
            aux4 ++;
        }
        if(aux3 > 255){
            aux2 ++;
            aux3 = 0;
        }
        let newDir = aux1 + "." + aux2 + "." + aux3 + "." + aux4
        netDiv.innerHTML = newDir;
    }
}

// Revisa la dirección a la que pertenece la clase
function checkAndShowClass(inputFirst){
    let classDiv = document.getElementById("result-class");
    list_class.forEach(element => {
        if(inputFirst >= element.min && inputFirst < element.max){
            classDiv.innerHTML = element.id;
            showMask(element)
        }
    });
}

// Imprime la máscara por defecto
function showMask(element){
    let maskDiv = document.getElementById("result-mask");
    maskDiv.innerHTML = element.mask;
}

// Función principal que se llama cuando se toca el botón para analizar la información
function mainShowInformation() {
    let inputFirst = document.getElementById('first-input').value;
    let inputSecond = document.getElementById('second-input').value;
    let inputThird = document.getElementById('third-input').value;
    let inputFourth = document.getElementById('fourth-input').value;
    checkAndShowClass(inputFirst);
    showRedDir(inputFirst, inputSecond, inputThird, inputFourth);

}

// Función de control de inputs, es usado para evitar que la persona digite inputs menores a 0 o mayores a 255
window.onload=function(){
    const inputFirst = document.getElementById('first-input');
    inputFirst.addEventListener('change', updateFirstValue);
    function updateFirstValue(e) { 
        if(e.target.value < 0){
            inputFirst.value = 0;
        }  
        if(e.target.value > 255){
            inputFirst.value = 255
        }
    }

    const inputSecond = document.getElementById('second-input');
    inputSecond.addEventListener('change', updateSecondValue);
    function updateSecondValue(e) { 
        if(e.target.value < 0){
            inputSecond.value = 0;
        }  
        if(e.target.value > 255){
            inputSecond.value = 255
        }
    }

    const inputThird = document.getElementById('third-input');
    inputThird.addEventListener('change', updateThirdValue);
    function updateThirdValue(e) { 
        if(e.target.value < 0){
            inputThird.value = 0;
        }  
        if(e.target.value > 255){
            inputThird.value = 255
        }
    }

    const inputFourth = document.getElementById('fourth-input');
    inputFourth.addEventListener('change', updateFourthValue);
    function updateFourthValue(e) { 
        if(e.target.value < 0){
            inputFourth.value = 0;
        }  
        if(e.target.value > 255){
            inputFourth.value = 255
        }
    }
}
