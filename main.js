// * Values for each class defined by convention.
let list_class = [
    { id: "A", mask: "255.0.0.0", min: 0, max: 128, host: 24, net: 8 },
    { id: "B", mask: "255.255.0.0", min: 128, max: 192, host: 16, net: 16 },
    { id: "C", mask: "255.255.255.0", min: 192, max: 224, host: 8, net: 24 },
    { id: "D", mask: "Reservadas", min: 224, max: 240, host: "reservado", net: "reservado" },
    { id: "E", mask: "Reservadas", min: 240, max: 256, host: "reservado", net: "reservado" }
];

// Variable that storage the element with the information about the class for the given ip address.
let ipClass;
let inputFirst;
let inputSecond;
let inputThird;
let inputFourth;
// * This function is call when press the button to analyze de information.
function mainShowInformation() {
    inputFirst = document.getElementById('inputFirst-input').value;
    inputSecond = document.getElementById('inputSecond-input').value;
    inputThird = document.getElementById('inputThird-input').value;
    inputFourth = document.getElementById('inputFourth-input').value;
    checkAndShowClass();
    if (inputFirst == ipClass.max - 1 && inputSecond == 255 && inputThird == 255 && inputFourth >= 252) {
        alert("Al ingresar una dirección IP superior o igual a [#.255.255.252], donde # es el último dígito aceptado para la clase de al dirección se genera un error de desbordamiento pues no hay suficientes IP's para cubrir las que se necesita mostrar")
    }
    else {
        showRedDir();
        showFistIP();
        showLastIPs();
    }
}

// * Check to which class the address belongs
function checkAndShowClass() {
    let classDiv = document.getElementById("result-class");
    // Check according to the list of classes which class the address belongs.
    console.log(inputFirst)
    list_class.forEach(element => {
        if (inputFirst >= element.min && inputFirst < element.max) {
            classDiv.innerHTML = element.id;
            ipClass = element;
            showMask(element)
        }
    });
}


// Show the default Mask.
function showMask(element) {
    let maskDiv = document.getElementById("result-mask");
    maskDiv.innerHTML = element.mask;
}

// * Call function to calculate the gateway.
function showRedDir() {
    let display = document.getElementById("result-net");
    calculateNextIP(display);
}

// * Call function to calculate the fist IP.
function showFistIP() {
    let display = document.getElementById("result-inputFirst-dir");
    calculateNextIP(display);
}

/**
 * * Show the network direction (Gateway) applying some restrictions.
 * @param {*} inputFirst 
 * @param {*} inputSecond 
 * @param {*} inputThird 
 * @param {*} inputFourth 
 */
function calculateNextIP(display) {


    if (inputFourth < 255) {
        inputFourth++;
    } else if (inputThird < 255) {
        inputThird++;
        inputFourth = 0;
    } else if (inputSecond < 255) {
        inputSecond++;
        inputThird = 0;
        inputFourth = 0;
    } else {
        inputFirst++;
        inputSecond = 0;
        inputThird = 0;
        inputFourth = 0;
    }
    let ip = inputFirst + "." + inputSecond + "." + inputThird + "." + inputFourth
    display.innerHTML = ip;
}


function showLastIPs() {
    let lastIP = document.getElementById("result-last-dir");
    let broadcast = document.getElementById("result-broadcast");

    lastIP.innerHTML = `${ipClass.max - 1}.255.255.254`;
    broadcast.innerHTML = `${ipClass.max - 1}.255.255.255`;
    let host = document.getElementById("result-bits-host");
    host.innerHTML = ipClass.host;
    let net = document.getElementById("result-bits-net");
    net.innerHTML = ipClass.net;
}





// Función de control de inputs, es usado para evitar que la persona digite inputs menores a 0 o mayores a 255
window.onload = function () {
    const inputFirst = document.getElementById('inputFirst-input');
    inputFirst.addEventListener('change', updateinputFirstValue);
    function updateinputFirstValue(e) {
        if (e.target.value < 0) {
            inputFirst.value = 0;
        }
        if (e.target.value > 255) {
            inputFirst.value = 255
        }
    }

    const inputSecond = document.getElementById('inputSecond-input');
    inputSecond.addEventListener('change', updateinputSecondValue);
    function updateinputSecondValue(e) {
        if (e.target.value < 0) {
            inputSecond.value = 0;
        }
        if (e.target.value > 255) {
            inputSecond.value = 255
        }
    }

    const inputThird = document.getElementById('inputThird-input');
    inputThird.addEventListener('change', updateinputThirdValue);
    function updateinputThirdValue(e) {
        if (e.target.value < 0) {
            inputThird.value = 0;
        }
        if (e.target.value > 255) {
            inputThird.value = 255
        }
    }

    const inputFourth = document.getElementById('inputFourth-input');
    inputFourth.addEventListener('change', updateinputFourthValue);
    function updateinputFourthValue(e) {
        if (e.target.value < 0) {
            inputFourth.value = 0;
        }
        if (e.target.value > 255) {
            inputFourth.value = 255
        }
    }
}
