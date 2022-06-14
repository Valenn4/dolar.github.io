fetch('api.txt')
.then(data => data.json())
.then(data => data.forEach(el => {

    const divDolar = document.createElement("div")
    divDolar.setAttribute("class", "divDolar")
    const parrafoDolar = document.createElement("p")
    const parrafoVenta = document.createElement("p")
    const parrafoCompra = document.createElement("p")

    divDolar.appendChild(parrafoDolar)
    divDolar.appendChild(parrafoVenta)
    divDolar.appendChild(parrafoCompra)
    document.body.appendChild(divDolar)

    setInterval(() => {
        parrafoDolar.innerHTML = el.casa.nombre
         parrafoVenta.innerHTML = el.casa.venta
        parrafoCompra.innerHTML = el.casa.compra    
    }, 1000);
    


})) 


