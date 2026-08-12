# Flujo de trabajo de GET /api/services
```
🌐 CLIENTE (Postman / Frontend)
 │  Petición: GET /api/services/kinesiologia 
 │  Petición: GET /api/services/65f1a2b...
 ▼
🚪 1. RUTAS (serviceRoutes.js)
 │  Atrapa cualquier valor en la variable: /:identificador
 ▼
🛂 2. CONTROLADOR (serviceControllers.js)
 │  Extrae 'identificador' de req.params y llama al Servicio.
 │  No toma decisiones.
 ▼
🧠 3. SERVICIO (serviceServices.js) - [LÓGICA DE NEGOCIO]
 │  Recibe 'identificador' y evalúa: mongoose.isValidObjectId()
 │
 ├─► ¿ES UN ID? (Sí) ───► Llama a this.service.obtenerPorId() ──┐
 │                                                              │
 └─► ¿ES UN ID? (No) ───► Llama a this.service.obtenerPorSlug() ─┐
                                                                │
🌉 4. REPOSITORIO (serviceRepository.js)                        │
 │  Puente de comunicación. Mantiene las vías separadas.        │
 │                                                              │
 ├─► obtenerPorId() ────────────────────────────────────────────┘
 │     Llama a this.services.buscarPorId()                      │
 │                                                              │
 └─► obtenerPorSlug() ──────────────────────────────────────────┘
       Llama a this.services.buscarPorSlug()                    │
                                                                │
👷 5. DAO / MANAGER (serviceMongoManager.js)                    │
 │  Ejecuta las consultas específicas en Mongoose.              │
 │                                                              │
 ├─► buscarPorId() ◄────────────────────────────────────────────┘
 │     Ejecuta: ServiceModel.findById(id)                       │
 │                                                              │
 └─► buscarPorSlug() ◄──────────────────────────────────────────┘
       Ejecuta: ServiceModel.findOne({ slug: slug })            │
                                                                │
 ▼                                                              ▼
🗄️ BASE DE DATOS (MongoDB Atlas) ◄──────────────────────────────┘