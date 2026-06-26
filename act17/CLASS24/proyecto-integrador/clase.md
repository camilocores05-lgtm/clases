# Proyecto Integrador - Requerimientos de la Aplicación

Este documento detalla las tareas y características requeridas para el desarrollo del proyecto.

---

## 📋 Lista de Tareas y Requerimientos

### 🛒 1. Carrito de Compras
- [x] **Acceso restringido**: Solo los usuarios que hayan iniciado sesión pueden interactuar con el carrito.
- [x] **Gestión de productos**: Permitir añadir productos al carrito y gestionar sus cantidades (incrementar / decrementar / eliminar).
- [x] **Finalización de compra**:
  - Implementar una simulación de compra ("compra ficticia").
  - Guardar el registro de la compra en la API de pruebas, asociándola mediante una referencia al ID del usuario correspondiente.

### 👥 2. Gestión de Roles de Usuario
- [x] **Definición de roles**: Implementar y diferenciar dos roles principales en la API de pruebas:
  - `cliente`
  - `admin`
- [x] **Modificación de roles**: El administrador puede cambiar el rol de cualquier usuario (excepto el suyo propio) desde el Panel de Administración.

### 🔒 3. Rutas Protegidas
- [x] **Control de acceso por autenticación**: Bloquear el acceso a rutas privadas si el usuario no ha iniciado sesión.
- [x] **Control de acceso por rol (Autorización)**: Restringir o permitir accesos específicos según el rol del usuario (`cliente` o `admin`).

### ⚙️ 4. Panel de Administración (Admin Panel)
- [x] **Gestión de Usuarios**:
  - Listado completo de usuarios registrados.
  - Filtro de búsqueda y búsqueda interactiva de usuarios.
  - Vista detallada al seleccionar un usuario.
  - Opción de eliminar usuarios de la plataforma.
  - Opción de **cambiar el rol** de un usuario (`admin` ↔ `cliente`) desde el panel de detalle.
- [x] **Gestión de Productos**:
  - Permitir **únicamente al rol `admin`** las acciones de:
    - ➕ Añadir productos.
    - 📝 Editar productos existentes.
    - 🗑️ Eliminar productos.

### 🎨 5. Renderizado Condicional
- [x] Ocultar o mostrar componentes, botones y secciones de la interfaz de usuario en función de:
  - El estado de autenticación (iniciado / no iniciado).
  - El rol del usuario activo (`admin` / `cliente`).

### 💅 6. Interfaz de Usuario (UI) y Diseño
- [x] **Rediseño estético**: Crear una UI moderna, limpia, simple y fácil de comprender.
- [x] **Diseño a prueba de errores**: Diseñar flujos intuitivos y agregar validaciones visuales claras.
- [x] **Consistencia de marca**: Mantener y respetar la paleta de colores actual del proyecto.
- [x] **Framework visual**: Implementar todas las mejoras estéticas y de diseño utilizando **Bootstrap**.

