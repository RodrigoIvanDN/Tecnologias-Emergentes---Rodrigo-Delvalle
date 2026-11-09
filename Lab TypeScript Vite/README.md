# Lab TypeScript y Vite

## ¿Qué es React y cómo se integra con Vite, TypeScript y TSX?

React es una biblioteca de JavaScript para crear interfaces de usuario mediante componentes reutilizables. Vite crea y ejecuta el proyecto de frontend rápidamente, con recarga en caliente durante el desarrollo y una compilación optimizada para producción. TypeScript agrega tipos estáticos al código, lo que ayuda a detectar errores antes de ejecutar la aplicación. TSX es TypeScript con sintaxis JSX: permite escribir la interfaz de React en archivos `.tsx` manteniendo el tipado de props, estados y eventos.

Vite ofrece las plantillas `vanilla-ts` y `react-ts`. La primera es adecuada para esta tarea porque renderiza directamente en el DOM; `react-ts` agrega React y archivos `.tsx` para crear la interfaz con componentes.

## Ejecución

```bash
npm install
npm run dev
```

No abras `index.html` con doble clic: Vite debe transformar TypeScript antes de mostrar la página. Al ejecutar `npm run dev`, abre la dirección que aparece en la terminal (normalmente `http://localhost:5173`).

Para GitHub Pages, este repositorio publica desde la raíz de `main`; por eso se incluye la carpeta `dist` ya generada. El enlace del laboratorio es `https://rodrigoivandn.github.io/Tecnologias-Emergentes---Rodrigo-Delvalle/Lab%20TypeScript%20Vite/dist/`.

El laboratorio implementa `safeParse`, el tipo `Student`, el type guard `isStudent` y `average`. Si el JSON es válido, muestra el nombre y el promedio; si no, muestra un error.
