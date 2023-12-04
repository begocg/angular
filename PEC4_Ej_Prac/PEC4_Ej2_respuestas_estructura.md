## ¿Qué comando debes utilizar para crear un nuevo proyecto Angular utilizando Angular CLI denominado ecommerce?
ng new ecommerce

## ¿Qué estructura de ficheros ha creado?
- Ficheros de configuración en la raíz del proyecto
    -tsconfig.app.json: Este archivo contiene la configuración del compilador TypeScript específica para la aplicación. Define las opciones de compilación para el código TypeScript en la aplicación.
    -angular.json: Es el archivo de configuración principal de Angular. Contiene información sobre la estructura del proyecto, las opciones de compilación, las dependencias y las configuraciones del paquete Angular.
    -package.json: Es el archivo de configuración de npm que incluye las dependencias del proyecto, los scripts de ejecución y otra información relevante para la gestión del proyecto.
    -.editorconfig: Este archivo se utiliza para mantener la consistencia del estilo de codificación entre diferentes editores de código.
    -.gitignore: Archivo que especifica los archivos y directorios que se deben ignorar al realizar control de versiones con Git.
- Carpeta node_modules: Este directorio contiene todas las dependencias del proyecto. Estas son las bibliotecas y paquetes necesarios para ejecutar la aplicación.
- Carpeta src
    -index.html: Este archivo es la página HTML principal que se carga cuando se ejecuta la aplicación en un navegador.
    -main.ts: Este archivo inicia la plataforma Angular y carga el módulo principal de la aplicación.
    -styles.sass: Este archivo es el archivo SASS principal que se aplica a toda la aplicación.
    -assets: Este directorio se utiliza para almacenar archivos estáticos como imágenes, fuentes, etc., que se pueden utilizar en la aplicación.
    -app: Este directorio contiene los componentes, servicios, módulos y otros archivos relacionados con la lógica de la aplicación.
        -app.component.*: archivos que definen los componentes principales de la aplicación.
        -app.module.ts: archivo que define el módulo principal de la aplicación, donde declaramos los componentes, se importan los módulos y se configuran los servicios.

## Explica cada uno de los siguientes decoradores generados por Angular CLI, detallando cada una de las propiedades que se definen
- app.module.ts - @NgModule (declarations, imports, providers, bootstrap): El decorador @NgModule se utiliza para definir y configurar módulos. Un módulo en Angular agrupa y organiza componentes, directivas, pipes y servicios relacionados. Declarations se utiliza para declarar los componentes, directivas y pipes que pertenecen a este módulo. Imports especifica los módulos cuyas clases exportadas son necesarias para las plantillas de componentes declarados en este módulo. Providers se utiliza para declarar los servicios que este módulo proporciona. Bootstrap especifica el componente principal que se iniciará automáticamente al cargar la aplicación.
- app.component.ts - @Component (selector, templateUrl, styleUrls): El decorador @Component se utiliza para definir y configurar componentes. Un componente en Angular es una unidad fundamental de la interfaz de usuario que agrupa la lógica y la presentación de una parte específica de la aplicación. Selector es un selector CSS que indica cómo se insertará el componente en el HTML de la aplicación. TemplateUrl es la ruta al archivo HTML que define la plantilla del componente. StyleUrls es un array de rutas a uno o varios archivos CSS que se aplicarán al componente.
  
## ¿Es posible poder inyectar el template y los estilos en línea de un componente sin necesidad de specificarlos en templateUrl, styleUrls? ¿Es recomendable hacer esto?
Sí, es posible inyectar el template y los estilos en línea directamente en el componente en lugar de especificarlos en archivos separados mediante templateUrl y styleUrls. Si es recomendable o no, dependerá de la magnitud del proyecto. Si son pequeños o simples, la inyección en línea puede ser adecuada y más conveniente. Si son más grandes, es recomendable seguir la convención de separar el template y los estilos en archivos externos para facilitar el mantenimiento y la reutilización del código.