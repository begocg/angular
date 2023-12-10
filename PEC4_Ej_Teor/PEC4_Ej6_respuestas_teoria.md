## ¿Cuáles son los style encapsulation de los componentes? Pon un ejemplo de uso de cada uno de ellos.
### Emulated
import { Component } from '@angular/core';

@Component({
  selector: 'app-emulated-component',
  template: '<p>Componente con encapsulación modulada</p>',
  styles: ['p { color: red; }']
})
export class EmulatedComponent { }

### None
import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-none-component',
  template: '<p>Componente con ninguna encapsulación</p>',
  styles: ['p { color: blue; }'],
  encapsulation: ViewEncapsulation.None
})
export class NoneComponent { }

### Shadow DOM
import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-shadow-dom-component',
  template: '<p>Componente con encapsulación Shadow DOM</p>',
  styles: ['p { color: green; }'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class ShadowDomComponent { }

## ¿Qué es el shadow DOM?
Es un tipo de encapsulación en la que usamos la API Shadow DOM que tiene nuestro navegador para encapsular la estructura HTML, los estilos y el JavaScript/TypeScript de un componente para aislarlos del resto de la aplicación.

## ¿Qué es el changeDetection?
Se utiliza para identificar y responder a los cambios en la aplicación. Se encarga de verificar si hay cambios en los datos de la aplicación y, en caso afirmativo, actualizar la interfaz de usuario de manera eficiente.

## ¿Qué diferencias existen entre las estrategias Default y OnPush? ¿Cuándo debes usar una y otra? Ventajas e inconvenientes.
La estrategia de Default es la predeterminada y se activa cada vez que se produce un evento en la aplicación, incluso si los datos no han cambiado. Es útil cuando los componentes tienen pocos datos y no necesitamos optimizaciones específicas de rendimiento. Yo la usaría para proyectos muy sencillos.
La estrategia de OnPush se activa solo cuando hay cambios en los datos del componente o si se produce un evento dentro del componente. Es útil cuando tenemos componentes con datos inmutables porque optimizamos el rendimiento. Yo la usaría en el resto de casos para que el rendimiento no se viera afectado.

En cuanto a las ventajas e inconvenientes de usar una u otra, se ven a simple vista. La Default, que es la predeterminada, activa la detección de cambios siempre que se produzca un evento aunque los datos del componente no hayan cambiado y esto significa un tiempo de rendimiento muy alto si nuestra aplicación es algo compleja. La OnPush, que solo activa la detección de cambios cuando cambian los datos del componente o se produce un evento dentro de él, es una opción más que recomendada porque se mejora el rendimiento y se indica claramente cuándo se debe realizar la detección de cambios. Los únicos inconvenientes que podemos apreciar de la OnPush es que requiere un poco de complejidad porque debemos diseñar con cuidado nuestra aplicación para asegurarnos de detectar todos los cambios.

## Explica con detalle el ciclo de vida de los componentes. Haz hincapié en cuándo se disparan los hooks OnChanges, OnInit, AfterViewInit y OnDestroy, puesto que son los más utilizados
El ciclo de vida de un componente tiene varios hooks, o métodos, que se ejecutan en diferentes momentos durante la creación, actualización y destrucción del componente.
### OnChanges
Se dispara cuando hay cambios en las propiedades de entrada (@Input) del componente. Se ejecuta antes de que se invoque el OnInit y en cada cambio detectado en las propiedades de entrada.
### OnInit
Se dispara una vez, justo después de que hayamos inicializado todas las propiedades del componente. Es el momento de realizar las inicializaciones y la lógica necesarias al comienzo de la vida del componente.
### AfterViewInit
Se dispara después de que hayamos inicializado las vistas y los hijos del componente. Es el momento de realizar la lógica que depende de las vistas y para interactuar con elementos del DOM.
### OnDestroy
Se dispara justo antes de destruir el componente. Es el momento de desuscribirse de los observables, liberar recursos y cancelar tareas programadas.