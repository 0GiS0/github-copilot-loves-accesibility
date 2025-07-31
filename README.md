# ♿ GitHub Copilot Loves Accessibility

**Español | [English](README_EN.md)**

👋 Este repositorio contiene una página web de demostración que implementa intencionalmente malas prácticas de accesibilidad. Está diseñado para ser utilizado en talleres de concientización sobre accesibilidad y sesiones de capacitación para mostrar errores comunes que cometen los desarrolladores cuando la accesibilidad no es una prioridad.

¡Puedes encontrar esto como parte de uno de mis videos en YouTube, échale un vistazo a mi canal!

[![DESARROLLOS ACCESIBLES CON GITHUB COPILOT](https://github.com/user-attachments/assets/529f8f05-47dc-419c-b63d-23cc80a40a7f)](https://youtu.be/scuLmec8LmY)


## 🚨 Demostración de Problemas de Accesibilidad

La página de demostración en este repositorio incluye intencionalmente los siguientes problemas de accesibilidad:

- 🚫 **Texto alternativo faltante en imágenes**: Las imágenes no tienen atributos alt, haciéndolas inaccesibles para usuarios de lectores de pantalla.
- 👀 **Contraste de color pobre**: Algunos textos tienen bajo contraste con su fondo, dificultando la lectura para personas con baja visión.
- ⌨️ **Sin indicadores de enfoque**: Los elementos interactivos no muestran indicadores visuales de enfoque, imposibilitando la navegación por teclado.
- 📋 **Formularios inaccesibles**: Los campos de formulario carecen de etiquetas apropiadas y atributos ARIA.
- 🔇 **Elementos interactivos que no funcionan con lectores de pantalla**: Componentes de UI personalizados que no están construidos con accesibilidad en mente.
- 🎨 **Uso solo de color para transmitir información**: Indicadores de estado que dependen únicamente de diferencias de color.
- 🔄 **Estructura de encabezados inconsistente o ilógica**: Los niveles de encabezado saltan de h1 a h3, luego a h4, h5 y h6.
- 🌐 **Sin atributo lang en la etiqueta HTML**: Falta la declaración de idioma.
- 📢 **Contenido dinámico no anunciado a tecnologías de asistencia**: Sin regiones ARIA live para contenido agregado dinámicamente.
- ⏭️ **Sin enlace de salto**: No hay forma de omitir menús de navegación repetitivos.

## 📝 Cómo Usar Esta Demostración

1. Abre `index.html` en tu navegador para ver la página inaccesible.
2. Intenta navegar la página usando solo tu teclado (tecla Tab).
3. Si es posible, prueba la página usando un lector de pantalla.
4. Usa las herramientas de desarrollador del navegador para inspeccionar problemas de accesibilidad.

## 🧪 Pruebas Manuales de Accesibilidad con Accessibility Insights

[Accessibility Insights](https://accessibilityinsights.io/) es la herramienta recomendada para la verificación manual de accesibilidad de esta página de demostración. Ayuda a identificar problemas de accesibilidad que las pruebas automatizadas podrían pasar por alto y proporciona orientación sobre cómo solucionarlos.

### 🔍 Instalando Accessibility Insights

1. **Accessibility Insights for Web** (recomendado para esta demostración):
   - Instala la extensión desde [Chrome Web Store](https://chrome.google.com/webstore/detail/accessibility-insights-fo/pbjjkligggfmakdaogkfomddhfmpjeni) o [Microsoft Edge Add-ons](https://microsoftedge.microsoft.com/addons/detail/accessibility-insights-fo/nlgdhundjgnlbnjacdfdgpbmnjdpkged)
   - Una vez instalado, verás el ícono de Accessibility Insights en la barra de herramientas de tu navegador

2. Para otras plataformas, visita [accessibilityinsights.io](https://accessibilityinsights.io/) para descargar:
   - Accessibility Insights for Windows
   - Accessibility Insights for Android

## 🤖 Pruebas Automatizadas de Accesibilidad con GitHub Actions

Este repositorio incluye un flujo de trabajo de pruebas de accesibilidad automatizadas usando axe-core, que se ejecuta en cada push a la rama principal y en pull requests.

### 📋 Acerca de las Pruebas de Accesibilidad

Las pruebas automatizadas:
- Usan axe-core, un motor de pruebas de accesibilidad líder
- Verifican la página web desplegada en busca de problemas de cumplimiento WCAG 2.1
- Generan informes detallados de cualquier violación de accesibilidad
- Comentan en pull requests con resultados de pruebas de accesibilidad
- Fallan el flujo de trabajo si se encuentran problemas críticos de accesibilidad

### 📊 Visualizando Resultados de Pruebas

**Para Pull Requests:**
- El flujo de trabajo comenta automáticamente en PRs con resultados de pruebas de accesibilidad
- Los comentarios incluyen un resumen de violaciones y próximos pasos accionables
- Los comentarios se actualizan si las pruebas se ejecutan nuevamente en el mismo PR

**Para análisis detallado:**
1. Navega a la pestaña "Actions" en el repositorio de GitHub
2. Selecciona el flujo de trabajo "Accessibility Testing"
3. Elige la ejecución más reciente del flujo de trabajo
4. Revisa la salida de prueba en el paso "Run axe-core accessibility tests"
5. Descarga el informe JSON detallado desde la sección "Artifacts"

### 🔄 Ejecutando Pruebas Localmente

Para ejecutar las mismas pruebas de accesibilidad localmente:

1. Instala Node.js y npm
2. Instala las herramientas requeridas:
   ```bash
   npm install -g @axe-core/cli http-server
   ```
3. Inicia un servidor local en la raíz del repositorio:
   ```bash
   http-server -p 5500 .
   ```
4. En otra terminal, ejecuta las pruebas de accesibilidad:
   ```bash
   axe http://localhost:5500 --exit
   ```

### 🔧 Ejecutando Pruebas con Accessibility Insights

Después de instalar Accessibility Insights for Web:

1. **FastPass** (evaluación rápida):
   - Haz clic en el ícono de Accessibility Insights en la barra de herramientas de tu navegador
   - Selecciona "FastPass" del menú
   - Haz clic en "Start" para escanear la página actual
   - Revisa las verificaciones automáticas y los resultados de tab stops

2. **Assessment** (evaluación integral):
   - Haz clic en el ícono de Accessibility Insights
   - Selecciona "Assessment" del menú
   - Haz clic en "Start assessment"
   - Sigue el proceso guiado para realizar verificaciones manuales
   - Completa todos los pasos de prueba para una evaluación exhaustiva

3. **Ad hoc tools** (pruebas enfocadas):
   - Haz clic en el ícono de Accessibility Insights
   - Selecciona herramientas específicas como "Color", "Headings" o "Landmarks"
   - Estas herramientas ayudan a analizar aspectos específicos de la página

### 📊 Interpretando Resultados

- **Fallas:** Revisa cada verificación fallida para entender qué problemas de accesibilidad existen
- **Instancias:** Examina elementos específicos que están causando problemas de accesibilidad
- **Cómo solucionarlo:** Sigue la orientación proporcionada para abordar cada problema
- **Por qué importa:** Aprende por qué cada problema es importante para la accesibilidad

### ⏱️ Cuándo Realizar Verificación Manual

- Durante el desarrollo al implementar o modificar componentes de UI
- Antes de enviar un pull request que incluya cambios de UI
- Como parte de la revisión de código para cambios relacionados con UI
- Después de corregir fallas de pruebas automatizadas de accesibilidad
- Antes de lanzamientos importantes o despliegues

### 💻 Usando Dev Container

Este repositorio incluye una configuración de dev container con la extensión Live Server:

1. Abre el repositorio en Visual Studio Code con la extensión Dev Containers instalada.
2. Cuando se te solicite, haz clic en "Reopen in Container" o usa la paleta de comandos: `Dev Containers: Reopen in Container`.
3. Una vez que el contenedor esté construido y ejecutándose, haz clic en "Go Live" en la barra de estado para iniciar Live Server.
4. La página se abrirá automáticamente en tu navegador y se actualizará cuando se realicen cambios.

### 🌐 GitHub Pages

Esta demostración está disponible en GitHub Pages una vez que el flujo de trabajo de GitHub Actions haya completado. El sitio se desplegará en: https://0GiS0.github.io/github-copilot-loves-accesibility/

## 🎯 Propósito

Esta demostración está destinada a ser utilizada como una herramienta educativa para ayudar a los desarrolladores a entender errores comunes de accesibilidad y la importancia de diseñar y construir con accesibilidad en mente desde el inicio.

## ⚠️ Descargo de Responsabilidad

Este proyecto viola intencionalmente las mejores prácticas de accesibilidad con fines educativos. El código en este repositorio no debe usarse como referencia para construir aplicaciones web accesibles.
