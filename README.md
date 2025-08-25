# 🍽️ Restaurante Placeholder

Landing Page responsive para un restaurante ficticio, construida con *HTML, CSS y JavaScript vanilla, integrando librerías externas como **Swiper.js* y *Lightbox2, y empaquetada con **Webpack 5* para desarrollo y producción.

---

## 🚀 Instrucciones de uso

### 1. Clonar repositorio
git clone https://github.com/tuusuario/restaurante-placeholder.git  
cd restaurante-placeholder

### 2. Instalar dependencias
Asegúrate de tener *Node.js* y *npm* instalados, luego ejecuta:  
npm install

### 3. Ejecutar en modo desarrollo
Levanta un servidor local con recarga automática:  
npm run dev  
Accede en tu navegador a 👉 http://localhost:8080

### 4. Generar build de producción
Para crear la carpeta optimizada */dist*:  
npm run build  

El resultado contiene:  
- Archivos HTML, CSS y JS minificados  
- Hashing automático para control de caché  
- Imágenes optimizadas  

Puedes abrir directamente dist/index.html en cualquier navegador o desplegar la carpeta en un hosting.

---

## 🛠️ Configuración del bundle (Webpack 5)

El proyecto está configurado con *Webpack* para facilitar el desarrollo y optimizar la entrega:

- *Entry Point* → src/main.js  
- *Loaders*:  
  - css-loader y postcss-loader → Procesan y minifican CSS  
  - Gestión de imágenes y assets incluida  
- *Plugins*:  
  - HtmlWebpackPlugin → Genera index.html en dist automáticamente  
  - MiniCssExtractPlugin → Extrae CSS en archivos separados  
  - ImageMinimizerPlugin → Optimiza imágenes en producción  
- *Output*:  
  - Archivos finales en /dist con nombres hasheados (main.[hash].js, main.[hash].css)  

### 🔄 Flujo de construcción
[src] → [webpack.config.js] → [bundle optimizado] → [dist]

---

## 📚 Librerías utilizadas

- [Swiper.js](https://swiperjs.com/) → Carrusel responsive y táctil  
- [Lightbox2](https://lokeshdhakar.com/projects/lightbox2/) → Galería de imágenes interactiva  
- [Google Fonts – Roboto](https://fonts.google.com/specimen/Roboto) → Tipografía principal  

---

## 📱 Responsividad

La Landing Page está diseñada para adaptarse a distintos dispositivos:  
- 📱 Smartphones (Android / iOS)  
- 📲 Tablets  
- 💻 Escritorio / Portátiles  

👉 Se puede comprobar con las DevTools del navegador (F12 → Toggle Device Toolbar).  

---

## 📑 Referentes y material adicional

- [Documentación oficial de Webpack](https://webpack.js.org/)  
- [Guía de optimización de Webpack](https://webpack.js.org/guides/production/)  
- [Guía de inicio de Swiper.js](https://swiperjs.com/get-started)  
- [Documentación de Lightbox2](https://lokeshdhakar.com/projects/lightbox2/)  

---

## ✨ Autor

Proyecto académico desarrollado por *Santiago Restrepo* y *Josue Pino*
