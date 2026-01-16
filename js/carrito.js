let cart = [];

// Referencias
const botonCompraUno = document.getElementById("boton1");
const botonCompraDos = document.getElementById("boton2");
const botonCompraTres = document.getElementById("boton3");
const botonMostrarCompras = document.getElementById("mostrarCompras");
const contadorCompra = document.getElementById("contador-carrito");
const imprimirCompras = document.getElementById("imprimirCompras");
const botonlimpiar = document.getElementById ("limpiar");
const totalCompras = document.getElementById("total");
const botoncompras = document.getElementById("compras");
// Productos
const productoUno = {
  id: 1,
  name: "Lata de comida para perro gourmet",
  price: 4
};
const productoDos = {
  id: 2,
  name: "Caja multiproteínas para perros 10 unidades",
  price: 40
};
const productoTres = {
  id: 3,
  name: "Lata de comida para gato",
  price: 6
};

// Eventos de compra
botonCompraUno.addEventListener("click", () => {
  cart.push(productoUno);
  contadorCompra.textContent = "Carrito: " + cart.length;
  console.log("Carrito actual:", cart);
});

botonCompraDos.addEventListener("click", () => {
  cart.push(productoDos);
  contadorCompra.textContent = "Carrito: " + cart.length;
  console.log("Carrito actual:", cart);
});

botonCompraTres.addEventListener("click", () => {
  cart.push(productoTres);
  contadorCompra.textContent = "Carrito: " + cart.length;
  console.log("Carrito actual:", cart);
});

// Mostrar lista
botonMostrarCompras.addEventListener("click", () => {
  imprimirCompras.innerHTML = ""; // limpiar lista
  cart.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = `${item.name} - $${item.price}`;
    imprimirCompras.appendChild(li);
    total = cart.reduce((acc ,item) => acc + item.price,0);
    totalCompras.textContent =  "$"+ total;

  });
});
botonlimpiar.addEventListener("click",() => {
  imprimirCompras.innerHTML = ""
  totalCompras.innerHTML = ""
  contadorCompra.innerHTML =""
});

botoncompras.addEventListener("click" , ()=> {
  alert ("Compra realizada")
})
