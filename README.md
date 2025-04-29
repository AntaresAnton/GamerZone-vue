# 🎮 Tienda Gaming - Plataforma de Comercio Electrónico para Videojuegos realizada en Vue.js

![Vue.js](https://img.shields.io/badge/Vue.js-3.x-4FC08D?style=for-the-badge&logo=vue.js&logoColor=white)
![Bootstrap](https://img.shields.io/badge/Bootstrap-5.2-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-Ready-2496ED?style=for-the-badge&logo=docker&logoColor=white)
![Vuex](https://img.shields.io/badge/Vuex-4.x-4FC08D?style=for-the-badge&logo=vue.js&logoColor=white)

Una moderna tienda en línea para productos gaming, desarrollada con Vue.js 3 y Bootstrap 5. Este proyecto implementa una experiencia de usuario completa para la compra de consolas, periféricos y accesorios gaming.

<!-- ![Tienda Gaming Preview](https://placehold.co/800x400/121212/FFFFFF?text=Tienda+Gaming+Preview) -->

## 📋 Tabla de Contenidos

- [✨ Características](#-características)
- [🚀 Tecnologías](#-tecnologías)
- [🛠️ Instalación](#️-instalación)
- [🏗️ Estructura del Proyecto](#️-estructura-del-proyecto)
- [📦 Dockerización](#-dockerización)
- [🔧 Configuración](#-configuración)
- [📝 Scripts Disponibles](#-scripts-disponibles)
- [🧪 Testing](#-testing)
- [🌐 Despliegue](#-despliegue)
- [🤝 Contribución](#-contribución)
- [📄 Licencia](#-licencia)

## ✨ Características

- 🛒 Carrito de compras completo con gestión de estado mediante Vuex
- 🔍 Búsqueda y filtrado de productos por categoría, precio y valoración
- 💳 Proceso de checkout con validación de formularios
- 📱 Diseño completamente responsive para móviles, tablets y escritorio
- 🎨 Animaciones suaves y transiciones usando AOS (Animate On Scroll)
- 🔒 Gestión de sesiones de usuario (registro/login)
- 📦 Seguimiento de pedidos
- 🌙 Modo oscuro/claro

## 🚀 Tecnologías

Este proyecto utiliza las siguientes tecnologías:

- **Frontend**: 
  - Vue.js 3 (Composition API)
  - Vuex 4 para gestión de estado
  - Vue Router para navegación
  - Bootstrap 5 para UI
  - SASS para estilos personalizados
  - AOS para animaciones

- **Herramientas de Desarrollo**:
  - ESLint y Prettier para formateo de código
  - Vue CLI para scaffolding y desarrollo
  - Webpack para bundling
  - Babel para transpilación

- **Despliegue**:
  - Docker y Docker Compose para containerización
  - Nginx como servidor web

## 🛠️ Instalación

### Requisitos Previos

- Node.js (v14 o superior)
- npm o yarn
- Docker y Docker Compose (opcional, para containerización)

### Instalación Local

1. Clonar el repositorio:
   ```bash
   git clone https://github.com/tu-usuario/tienda-gaming.git
   cd tienda-gaming
   ```

2. Instalar dependencias:
   ```bash
   npm install
   ```

3. Iniciar servidor de desarrollo:
   ```bash
   npm run serve
   ```

4. La aplicación estará disponible en `http://localhost:8080`

## 🏗️ Estructura del Proyecto

```
tienda-gaming/
├── public/                  # Archivos públicos estáticos
├── src/                     # Código fuente
│   ├── assets/              # Imágenes y recursos
│   ├── components/          # Componentes Vue reutilizables
│   ├── router/              # Configuración de Vue Router
│   ├── store/               # Estado global con Vuex
│   ├── styles/              # Archivos SCSS globales
│   ├── views/               # Componentes de página/vista
│   ├── App.vue              # Componente raíz
│   └── main.js              # Punto de entrada de la aplicación
├── .eslintrc.js             # Configuración de ESLint
├── .gitignore               # Archivos ignorados por Git
├── babel.config.js          # Configuración de Babel
├── Dockerfile               # Configuración de Docker para producción
├── docker-compose.yml       # Configuración de Docker Compose
├── package.json             # Dependencias y scripts
└── vue.config.js            # Configuración de Vue CLI
```

## 📦 Dockerización

El proyecto está configurado para ser fácilmente dockerizado, tanto para desarrollo como para producción.

### Producción

Para construir y ejecutar la aplicación en un entorno de producción:

```bash
docker-compose up -d
```

Esto construirá la imagen Docker y ejecutará el contenedor. La aplicación estará disponible en `http://localhost:8080`.

### Desarrollo

Para desarrollo con hot-reload:

```bash
docker-compose -f docker-compose.dev.yml up -d
```

## 🔧 Configuración

### Variables de Entorno

Crea un archivo `.env` en la raíz del proyecto para configurar variables de entorno:

```
VUE_APP_API_URL=https://api.example.com
VUE_APP_TITLE=Tienda Gaming
```

### Personalización de Vue CLI

Puedes personalizar la configuración de Vue CLI editando el archivo `vue.config.js`.

## 📝 Scripts Disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Compila la aplicación para producción
- `npm run build:prod` - Compila optimizado para producción
- `npm run build:dev` - Compila para desarrollo
- `npm run build:analyze` - Analiza el tamaño del bundle
- `npm run lint` - Ejecuta el linter
- `npm run format` - Formatea el código con Prettier
- `npm run test` - Ejecuta las pruebas unitarias
- `npm run deploy` - Construye y despliega la aplicación

## 🧪 Testing

Este proyecto utiliza Jest para pruebas unitarias. Para ejecutar las pruebas:

```bash
npm run test
```

## 🌐 Despliegue

### Despliegue Manual

1. Construye la aplicación:
   ```bash
   npm run build
   ```

2. Los archivos generados estarán en la carpeta `dist/`, que puedes desplegar en cualquier servidor web estático.

<!-- ### CI/CD -->

<!-- El proyecto está preparado para integración continua y despliegue continuo. Consulta los archivos de configuración en la carpeta `.github/workflows/` para más detalles. -->

## 🤝 Contribución

Las contribuciones son bienvenidas. Por favor, sigue estos pasos:

1. Haz fork del repositorio
2. Crea una rama para tu característica (`git checkout -b feature/amazing-feature`)
3. Haz commit de tus cambios (`git commit -m 'Add some amazing feature'`)
4. Push a la rama (`git push origin feature/amazing-feature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está licenciado bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para más detalles.

---

<p align="center">
  Desarrollado con ❤️ por <a href="https://github.com/antaresanton">Patricio Quintanilla</a>
</p>

<!-- <p align="center">
  <a href="https://twitter.com/tu-usuario"><img src="https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white" alt="Twitter"></a>
  <a href="https://linkedin.com/in/tu-usuario"><img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn"></a>
</p> -->