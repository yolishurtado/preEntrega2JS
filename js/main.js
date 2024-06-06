// VARIABLES

const productos = [
    { nombre: "dolar", precio: 1200 },
    { nombre: "euro", precio: 1000 },
    { nombre: "real", precio: 171 },
    { nombre: "peso urugayo", precio: 25 },
  ];

  let carrito = [];
  let nombre = "";
  let apellido = "";
  let dni = 0;

// DATOS DEL COMPRADOR

function ingresoDeDatos() {
    nombre += prompt("Ingrese su nombre");
    apellido += prompt("ingrese su apellido");
    dni += parseInt(prompt("ingrese su numero de DNI")
    );
    let datosComprador = `-Nombre: ${nombre}\n-Apellido: ${apellido}\n-DNI: ${dni}\n`;
    return datosComprador;
  }
  
  let validaccionDatos = prompt(
    `los datos:\n${ingresoDeDatos()}\nson correctos? \nresponda con un "si" o "no"`
  );
  while (validaccionDatos != "si" && validaccionDatos != "no") {
    confirmacion = prompt(`Responde con "si" o "no"`);
    validaccionDatos = confirmacion;
  }

// COMPRA

if (validaccionDatos === "si") {
    alert(
      "A continuacion nuestras monedas disponibles por el momento:"
    );
    let listaDeProductos = productos.map(
      (producto) => producto.nombre + " - " + "$" + producto.precio
    );
    alert(listaDeProductos.join("\n"));
  } else {
    alert("gracias, hasta la proxima!");
  }
  function comprar() {
  
  //   AGREGAR PRODUCTO
  
  {
      id = prompt(
        `que moneda desea cambiar?`
      );
      if (
        id == "dolar" ||
        id == "euro" ||
        id == "real" ||
        id == "peso uruguayo" 
      ) {
        switch (id) {
            case "dolar":
              precio = 1200;
            case "euro":
              precio = 1000;
              break;
            case "real":
              precio = 171;
              break;
            case "peso uruguayo":
              precio = 25;
              break;
          }
        let cantidad = parseInt(prompt("cuantas unidades deseas?"));
        carrito.push({ id, precio, cantidad });
      }
    }
  
  //  RESUMEN DE LA COMPRA

    let compra = carrito.map((e) => e.id + " - " + "$" + e.precio * e.cantidad);
    alert(`Los productos seleccionados son:\n${compra.join("\n")}`);
    const total = carrito.reduce(
      (acumulador, elemento) => acumulador + elemento.precio * elemento.cantidad,
      0
    );
    alert(`El total a pagar es de: $${total}`);

// COMPRA

  }
  comprar();
  
  let terminarCompra = prompt(`confirmar compra?\n("si" - "no")`);
  while (terminarCompra !== "no" || terminarCompra !== "si") {
    if (terminarCompra == "si") {
      alert(
        `Gracias ${nombre} por tu compra!!\n`
      );
      break;
    } else if (terminarCompra == "no") {
      alert(`Gracias, te esperamos la proxima!!`);
      break;
    } else {
      alert(`responde con "si" o "no"`);
      terminarCompra = prompt(`confirmar compra?\n("si" - "no")`);
    }
  }



 


