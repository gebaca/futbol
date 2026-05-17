from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

# 1. Inicializamos FastAPI
app = FastAPI(
    title="Football Academy SaaS API",
    description="Backend de alto rendimiento para gestión deportiva",
    version="1.0.0"
)

# 2. Configuración de seguridad CORS
# Esto es OBLIGATORIO para que tu React (puerto 5173) pueda pedirle datos a Python (puerto 8000)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"], # El pase de invitado para tu Front
    allow_credentials=True,
    allow_methods=["*"], # Permite borrar, editar, crear y leer
    allow_headers=["*"],
)

# 3. Tu primera ruta de prueba (Endpoint)
@app.get("/")
def read_root():
    return {
        "status": "online",
        "project": "Football Academy SaaS",
        "version": "1.0.0"
    }