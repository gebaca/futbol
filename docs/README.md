# ⚽ Football Academy SaaS (B2B) - Digital Ecosystem

Este repositorio contiene la infraestructura técnica y lógica de producto de una plataforma integral para la gestión de academias de fútbol. El enfoque principal es la **operatividad en el terreno (Gemba)**, la **escalabilidad de datos** y la **privacidad de menores**.

---

## 📈 Visión de Producto

Este proyecto no es solo un dashboard; es una solución B2B diseñada para profesionalizar la relación entre directores, entrenadores y familias.

**Documentación Detallada:**

- 🇪🇸 [Análisis de Producto (Notion)](https://www.notion.so/An-lisis-Producto-3608d03cc89680a6b19cf828d406144c)
- 🇺🇸 [Product Analysis (Notion)](https://www.notion.so/Product-analysis-3608d03cc8980809ffaef6cc2c43029)

---

## 🛠️ Stack Tecnológico (Propuesto)

Para garantizar la rapidez en el campo y la seguridad de los datos, el stack seleccionado es:

### Frontend (The "Tactical" Core)

- **Vite + React:** Desarrollo ultra rápido y rendimiento optimizado.
- **GSAP (GreenSock):** Motor de animaciones para la pizarra táctica y transiciones fluidas.
- **TypeScript:** Tipado estático para robustez en la gestión de datos deportivos.
- **Tailwind CSS:** Diseño **Mobile-First** eficiente y responsive.

### Backend (The "Intelligence")

- **Python + FastAPI:** API de alto rendimiento con documentación automática (Swagger).
- **Pydantic:** Validación de datos estricta y sincronizada con el frontend.
- **PostgreSQL:** Base de datos relacional para garantizar la integridad de los registros.

### QA & Infraestructura

- **Testing:** **Playwright/Cypress** para validación automatizada de User Stories (E2E).
- **Entorno local:** **Docker** para asegurar que el sistema funcione igual en cualquier máquina.
- **Despliegue:** **Vercel** para el frontend y una arquitectura escalable para el backend.

---

## 📂 Estructura del Repositorio

- `front/`: Aplicación cliente orientada a entrenadores (PWA/Mobile).
- `back/`: Lógica de servidor y esquemas de base de datos.
- `infra/`: Configuración de despliegue y contenedores.
- `docs/`: Artefactos de producto, diagramas ER y auditorías de calidad.

---

## 🚀 Hoja de Ruta (MVP)

1.  **Sprint 1:** Gestión de asistencia y CRM básico de jugadores.
2.  **Sprint 2:** Comunicación segura con familias (Sustituto de WhatsApp).
3.  **Sprint 3:** Pizarra táctica integrada y repositorio de ejercicios.

---

_Desarrollado bajo los principios de **Mercadona Tech** (Agilidad y Valor) y **Héctor Ibarra** (Sistemas de Diseño)._
