# BIENVENIDOS AL PROYECTO ECOMMERCE GOOD MORNING (by Gaz Pardo)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Scripts disponibles

En este directorio, se puede ejecutar:

Este proyecto realizado en REACT JS se basa en un sistema online E-COMMERCE de venta de artículos del rubro tecnología.
Fue creado con la librería de JS, aplicado estilos visuales con hojas de estilo CSS.
La estructura de la APP fue lograda de la siguiente manera:
- NavBar (header con logo principal, botonera de navegación, acceso login y carrito de compras)
- CartWidget (componente responsable informativo de los productos seleccionados y montos)
- ItemListContainer (componente contenedor de los productos dispuestos en grilla –flexbox)
- ItemList (lista de items o productos)
- ItemDetailContainer (componente contenedor del producto o ítem y sus datos o detalles)
- ItemDetail (contenedor de los detalles del producto)
- ItemQuantitySelector (botón para incrementar o decrementar la cantidad de productos a comprar)
- Description (descripción del producto)
- AddItemButton (botón para agregar el ítem en cuestión al carrito de compras)
- Checkout (sección para confirmar la compra y realizar un pedido)
- Brief (detalle de compra).

ALCANCE DEL PROYECTO:
- INICIO: se muestra la estructura visual donde interctúan los componentes y los objetos de navegación.
- HEADER o NAV: el logotipo posee enlace al HOME o INICIO. Se presenta la botonera con 3 categorías, las cuales lleva al listado correspondiente.
- LOGIN: se emula un fomrulario con acceso restringido de NOMBRE de USUARIO y CONTRASEÑA, el cual validaría el acceso a diferentes secciones privadas de la app.
- CARTWIDGET: el carrito se actualiza cada vez que se agrega un producto, y muestra el total de la compra en curso (parcial o total).
- CARTWIDGET: el carrito tiene enlace a la sección o componente CART donde lista los productos seleccionados y la info correspondiente.
- ITEM: cada ítem tiene un TÍTULO (nombre), IMAGEN (foto del producto), DESCRIPCIÓN (texto informativo del producto), PRECIO y STOCK.
- Se CONFIGURÓ LA CUENTA DE firebase para llamar la info desde la nube, con PRODUCTS y COLLECTION.
- CHECKOUT: componente para confirmar la compra, informa sobre el proceso en curso o final, para llegar a una plataforma de pago (formulario emulado).


Gastón Pardo / React JS / Comisión 51150 / CODERHOUSE 
