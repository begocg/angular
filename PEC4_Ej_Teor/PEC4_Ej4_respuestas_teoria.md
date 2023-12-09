## Explica qué son y cuándo se deberían utilizar las siguientes variables locales de la directiva estructural NgFor
### index
Proporciona el índice actual del elemento en la iteración. Por ejemplo, si itero sobre un array, me dará la posición del elemento actual en el array.
### even
Es un booleano que me indica si el índice del elemento actual de la iteración es par.
### odd
Parecido al anterior, es un booleano que me indica si el índice del elemento actual de la iteración es impar.
### first
Es un booleano que me indica si el elemento actual es el primero en la iteración.
### last
Parecido al anterior, es un booleano que me indica si el elemento actual es el último en la iteración.

## ¿Para qué sirve la opción trackBy de la directiva estructural NgFor? Pon ejemplos de uso.
Con trackBy, le puedo proporcionar una función para hacer un seguimiento de los elementos por un valor único en vez de hacerlo por referencia de objeto. Es decir, si un elemento de la lista cambia, con esta función, evitamos que tenga que volver a renderizar todos los elementos solo porque algunos hayan cambiado.

Ejemplo:
Si tenemos esta iteración:

  items: Item[] = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' },
  ];

Con este código en html:

    <div *ngFor="let item of items">
      {{ item.name }}
    </div>

Angular tendría que renderizarla entera cada vez que un elemento cambiara, pero, si le añadimos la función trackBy después:

    trackBy(index: number, item: Item): number {
        return item.id;
    }

Y editamos el código en html de esta forma:

    <div *ngFor="let item of items; trackBy: trackBy">
      {{ item.name }}
    </div>

Cada elemento tendrá un identificador único y será más fácil acceder a él.

## ¿Es posible ejecutar dos directivas estructurales simultáneamente? Explica la razón tanto si es si posible como si no lo es.
En Angular, generalmente no podemos usar a la vez dos directivas estructurales en el mismo elemento. Esto se debe a que as directivas estructurales pueden modificar la estructura del DOM muchísimo y permitir múltiples directivas estructurales en un solo elemento podría llevar errores o incongruencias.