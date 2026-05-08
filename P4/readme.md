# Práctica 4: Exportación + Documentación

Este documento detalla el proceso técnico seguido para la transposición de los diseños de alta fidelidad de Figma a un entorno de desarrollo real utilizando React. El código fuente completo de la aplicación se encuentra en la carpeta `/app`.

## 1. Exportación a HTML/React

El proceso de desarrollo no se limitó a una exportación automática, sino que se planteó como una **refactorización integral de código de diseño a código de producción**.

### Flujo de Trabajo
1.  **Generación de Base (Locofy):** Se utilizó el plugin *Locofy Lightning* para mapear las capas de Figma a componentes de React. Se identificaron problemas críticos en el código generado: posicionamiento absoluto rígido, falta de semántica HTML y alta redundancia en el CSS.
2.  **Refactorización Asistida por IA (Gemini):** Se utilizó IA generativa actuando como *Senior Frontend Developer* para desestructurar el código monolítico de Locofy y aplicar una arquitectura de **Diseño Atómico (Atomic Design)**.
3.  **Tecnologías Utilizadas:**
    * **React + Vite:** Para una configuración de desarrollo rápida y moderna.
    * **CSS Modules:** Para garantizar el encapsulamiento de estilos y evitar colisiones de clases globales.
    * **React Router:** Implementación de un sistema de rutas para convertir el prototipo en una Single Page Application (SPA).

### Detalles Técnicos de Implementación
* **Layout Responsivo:** Se sustituyeron todos los `top/left` absolutos por estructuras de **CSS Grid** y **Flexbox** fluidas. Por ejemplo, la cuadrícula de libros en la página de catálogo utiliza `grid-template-columns: repeat(auto-fill, minmax(280px, 1fr))` para adaptarse automáticamente a cualquier ancho de pantalla sin necesidad de múltiples Media Queries.
* **Gestión de Estado:** Se implementó lógica real con el hook `useState` en el **Foro de Comentarios**, permitiendo que la aplicación sea interactiva y no meramente estática.
* **Componentes Parametrizados:** Los componentes se diseñaron para recibir *props*, lo que permite que un mismo componente (como `BookCard` o `PromoCard`) renderice contenido diferente dinámicamente.

---

## 2. Documentación con Storybook

### Procedimiento Planificado
Para la documentación técnica del sistema de diseño, se planificó el uso de **Storybook** siguiendo este protocolo:
1.  **Aislamiento de Componentes:** Documentación individual de los **Átomos** (`PrimaryButton`, `NavItem`, `ProfileIcon`) para testear sus estados visuales (Hover, Active, Disabled).
2.  **Mapping de Props:** Definición de los `args` en Storybook para permitir a los diseñadores probar variaciones de texto e iconos en las **Moléculas** sin tocar el código fuente.

### Justificación de no implementación técnica
Debido a **restricciones de tiempo y ajustes en el calendario de la asignatura**, no se ha procedido a la instalación y despliegue del entorno de Storybook en el repositorio. En su lugar, el equipo ha priorizado la **calidad arquitectónica del código en React**, asegurando que todos los componentes sean "puros" y estén listos para ser integrados en Storybook en una fase futura con un coste de implementación mínimo.

---

## 3. Autoevaluación del diseño (Accesibilidad)

### Puntos Fuertes
* **Semántica HTML:** Se ha mejorado la accesibilidad mediante el uso de etiquetas semánticas (`<header>`, `<main>`, `<footer>`, `<article>`, `<nav>`) en lugar de `divs` genéricos, facilitando la navegación a lectores de pantalla.
* **Jerarquía de Encabezados:** Se ha implementado una estructura lógica de `<h1>`, `<h2>` y `<h3>` en todas las páginas para mantener un orden de lectura coherente.
* **Interactividad del Teclado:** Al transformar elementos visuales de Figma en etiquetas reales de `<button>` y `<a>`, se hereda de forma natural el comportamiento de foco y navegación por teclado.

### Puntos de Mejora
* **Contraste de Color:** Algunos elementos de la paleta original (como el texto sobre el color crema `#ede1cf`) podrían requerir ajustes menores para cumplir estrictamente con el nivel AAA de las pautas WCAG.
* **Textos Alternativos:** Aunque se han incluido etiquetas `alt` descriptivas en el código, se recomienda una auditoría completa de los activos en el directorio `/public` para asegurar que todas las imágenes de contenido aporten valor contextual a usuarios con discapacidad visual.

---

## 4. Conclusiones

La realización de esta práctica ha permitido al equipo comprender la brecha existente entre el diseño visual (Figma) y el desarrollo de software profesional. 

La utilización de herramientas como **Locofy** acelera la generación de activos, pero la intervención de una **IA Generativa guiada por criterios de ingeniería** ha sido la clave para obtener un código limpio, modular y mantenible. Hemos aprendido que la arquitectura (Atomic Design) es tan importante como la estética, y que una buena base técnica en React permite que una interfaz pase de ser un "dibujo" a una herramienta funcional y escalable.


<br>
