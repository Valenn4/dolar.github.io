const container = document.querySelector(".container"),
dolares = document.querySelector(".dolares")

function api() {
    fetch('https://www.dolarsi.com/api/api.php?type=valoresprincipales')
    .then(data => data.json())
    .then(data => data.forEach(el => {
        const divDolar = document.createElement("div")
        const divSub = document.createElement("div")
        divDolar.setAttribute("class", "divDolar")
        const tipoDolar = document.createElement("p")
        tipoDolar.setAttribute("class", "tipoDolar")
        tipoDolar.innerHTML+= el.casa.nombre 

        compra = document.createElement("p")
        compra.setAttribute("class", "compra")
        compra.innerHTML+= 'Compra: ' + el.casa.compra

        const venta = document.createElement("p")
        venta.setAttribute("class", "venta")
        venta.innerHTML+= 'Venta: ' + el.casa.venta

        dolares.appendChild(divDolar)
        divDolar.appendChild(divSub)
        divSub.appendChild(tipoDolar)
        divSub.appendChild(compra)
        divSub.appendChild(venta)


    }))  


}
api()

setInterval(() => {
    api()
    const dolares = document.querySelector(".dolares")

    dolares.innerHTML = ""
    
}, 20000);


/* CAMBIO */

const form = document.querySelector(".formulario"),
inputPesos = document.querySelector(".pesos"),
listaDolares = document.getElementById("listaDolares"),
resultadoCambio = document.querySelector(".resultadoCambio")

form.addEventListener("submit", (e) => {
    e.preventDefault()
    
    if (form.listaDolares.value === "Dolar Oficial"){
        const compra = document.querySelectorAll(".compra")[0].innerHTML

        let indice = compra.indexOf(":")
        let extraer = compra.substring(indice+ 2)
        let listo = extraer.replace(",", ".")
        
        resultadoCambio.innerHTML = 'El resultado es: ' + Number(listo) * inputPesos.value
        console.log(resultadoCambio)

    }
    
    if (form.listaDolares.value === "Dolar Blue"){
        const compra = document.querySelectorAll(".compra")[1].innerHTML

        let indice = compra.indexOf(":")
        let extraer = compra.substring(indice+ 2)
        let listo = extraer.replace(",", ".")
        
        resultadoCambio.innerHTML = 'El resultado es: ' + Number(listo) * inputPesos.value

    }

    form.reset()
})


