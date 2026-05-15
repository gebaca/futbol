# ⚽ Football Academy SaaS - Digital Ecosystem

Este repositorio contiene la infraestructura técnica y la estrategia de producto de una plataforma integral diseñada para la gestión profesional de academias de fútbol. El enfoque principal es la **operatividad en el terreno (Gemba)**, la **escalabilidad de datos** y la **profesionalización del análisis táctico**.

---

## 📈 Visión de Producto

Este SaaS B2B busca transformar la relación entre directores, entrenadores y familias mediante una interfaz intuitiva y herramientas de alto rendimiento.

**Documentación Estratégica:**

- 🇪🇸 [Análisis de Producto (Notion)](https://www.notion.so/An-lisis-Producto-3608d03cc89680a6b19cf828d406144c)
- 🇺🇸 [Product Analysis (Notion)](https://www.notion.so/Product-analysis-3608d03cc8980809ffaef6cc2c43029)

---

## 🛠️ Stack Tecnológico (The Ferrari Stack)

Se ha seleccionado un conjunto de herramientas de vanguardia que garantiza una experiencia de usuario fluida y una gestión de datos robusta.

### Frontend (Tactical Core)

- **Vite + React + TypeScript:** Base ultra rápida con tipado estricto para evitar errores en producción.
- **Tailwind CSS (v4):** Sistema de diseño Mobile-First optimizado para el uso en exteriores.
- **GSAP (GreenSock):** Motor de animaciones para la pizarra táctica y transiciones fluidas.
- **TanStack Suite (Query & Form):** Gestión avanzada de caché asíncrona y validación de formularios.
- **Zod & Axios:** Validación de esquemas de datos y comunicación eficiente con la API.
- **Lucide React:** Iconografía técnica y deportiva.

### Backend (Business Intelligence) - _In Progress_

- **Python + FastAPI:** Motor de alto rendimiento para lógica de negocio y gestión de datos.
- **Pydantic:** Sincronización de esquemas de datos con el Frontend.
- **PostgreSQL:** Integración de base de datos relacional para registros históricos.

---

## 📂 Estructura del Repositorio

- `front/`: Aplicación cliente (PWA) orientada a la movilidad del entrenador.
- `back/`: API REST y lógica de servidor (Python).
- `docs/`: Artefactos de producto, diagramas de flujo y auditorías de calidad.

---

## 🚀 Instalación y Desarrollo (Front)

```bash
cd front
npm install
npm run dev
```
