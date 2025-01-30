Proyecto de Gestión de Usuarios
Este proyecto consta de un microservicio desarrollado en Spring Boot para el backend, con una base de datos PostgreSQL, y un frontend en Angular para la gestión de usuarios. El sistema permite realizar operaciones CRUD sobre usuarios, incluyendo las funcionalidades de agregar, editar, eliminar y mostrar usuarios.

Parte 1: Backend - Spring Boot
Requisitos
Java 17 o superior.
PostgreSQL instalado y configurado.
Pasos para ejecutar el backend localmente
Clonar el repositorio:

bash
Copiar
Editar
git clone <URL-del-repositorio>
Configurar la base de datos PostgreSQL:

Crea una base de datos en PostgreSQL (por ejemplo, gestion_usuarios).

Puedes usar el siguiente comando SQL para crear la base de datos:

sql
Copiar
Editar
CREATE DATABASE gestion_usuarios;
Configura la conexión a la base de datos en el archivo application.properties de Spring Boot:

properties
Copiar
Editar
spring.datasource.url=jdbc:postgresql://localhost:5432/gestion_usuarios
spring.datasource.username=<tu-usuario>
spring.datasource.password=<tu-contraseña>
spring.jpa.hibernate.ddl-auto=update
Ejecuta el backend:

Abre la terminal en la carpeta del proyecto y ejecuta:

bash
Copiar
Editar
./mvnw spring-boot:run
El servidor se ejecutará en http://localhost:8080.

Comandos para crear la tabla usuarios en PostgreSQL
Para crear la tabla usuarios en PostgreSQL, asegúrate de tener configurada la base de datos, y Spring Boot se encargará de crear las tablas automáticamente usando JPA.

Si prefieres crearla manualmente, puedes ejecutar el siguiente comando SQL:

sql
Copiar
Editar
CREATE TABLE usuarios (
  id SERIAL PRIMARY KEY,
  nombre VARCHAR(100) NOT NULL,
  correo VARCHAR(100) NOT NULL,
  edad INT NOT NULL
);
Probar el microservicio
Usando Postman:

Asegúrate de que el backend esté corriendo.

Abre Postman y prueba los siguientes endpoints:

Obtener usuarios: GET http://localhost:8080/api/data
Agregar usuario: POST http://localhost:8080/api/data
Body (JSON):
json
Copiar
Editar
{
  "nombre": "Juan Perez",
  "correo": "juan@example.com",
  "edad": 30
}
Actualizar usuario: PUT http://localhost:8080/api/data/{id}
Body (JSON):
json
Copiar
Editar
{
  "nombre": "Juan Perez",
  "correo": "juan.perez@example.com",
  "edad": 31
}
Eliminar usuario: DELETE http://localhost:8080/api/data/{id}
Usando el frontend (Angular):

Asegúrate de que el backend esté corriendo.
Ejecuta el frontend (explicado más abajo).
En el frontend podrás ver la lista de usuarios, agregar nuevos usuarios, editar o eliminar usuarios a través de la interfaz.
Parte 2: Frontend - Angular
Requisitos
Node.js (versión 16 o superior).
Angular CLI instalado globalmente.
Pasos para ejecutar el frontend localmente
Clonar el repositorio:

bash
Copiar
Editar
git clone <URL-del-repositorio>
Navegar al directorio del frontend:

bash
Copiar
Editar
cd frontend
Instalar dependencias:

bash
Copiar
Editar
npm install
Ejecutar la aplicación:

bash
Copiar
Editar
ng serve
La aplicación se ejecutará en http://localhost:4200.

Probar el frontend
para probar el boton de eliminar o modificar solo es pasar el cursos por la fila a eliminar o modificar
La aplicación de Angular se conectará automáticamente al backend en http://localhost:8080.
Podrás:
Ver la lista de usuarios.
Agregar nuevos usuarios mediante el formulario.
Editar usuarios al hacer clic en el botón "Editar".
Eliminar usuarios al hacer clic en el botón "Eliminar".
Parte 3: Otros Detalles
Consideraciones
El frontend y backend están configurados para que trabajen juntos sin necesidad de cambios adicionales. Asegúrate de que ambos servicios estén corriendo en los puertos 4200 (frontend) y 8080 (backend).
