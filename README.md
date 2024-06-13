### Proyecto Social Network
Este proyecto es una red social desarrollada con React.js y Redux.

## Componentes

1 - Home
Renderiza una lista de publicaciones (Posts component) en la página de inicio.

2 - Register
Proporciona un formulario para el registro de usuarios con campos para nombre de usuario, correo electrónico, fecha de nacimiento, nombre, apellido y contraseña. Valida la edad durante el registro y envía acciones a Redux para el registro.

3 - Login
Permite a los usuarios iniciar sesión con su correo electrónico y contraseña. Envía acciones de inicio de sesión a Redux y redirige al perfil del usuario al iniciar sesión correctamente.

4 - Post
Muestra publicaciones individuales con opciones para dar me gusta/no me gusta, eliminar publicaciones y navegar a vistas detalladas de publicaciones. Utiliza Redux para la gestión del estado.

5 - Comment
Gestiona comentarios asociados con publicaciones, permitiendo a los usuarios eliminar sus comentarios. Utiliza Redux para la gestión del estado.

6 - Profile
Muestra información del perfil del usuario, incluyendo nombre de usuario, correo electrónico, fecha de nacimiento y publicaciones creadas por el usuario. Utiliza Redux para obtener detalles del usuario y gestionar el estado.

7 - Search
Obtiene información del usuario basada en el parámetro del nombre de usuario en la URL. Utiliza Redux para obtener detalles del usuario y gestionar el estado.

8 - User
Lista nombres de usuario como enlaces a sus perfiles detallados. Utiliza Redux para gestionar el estado.

## Gestión del Estado con Redux

- Auth Slice (authSlice.js): Gestiona la autenticación de usuarios, acciones de registro, inicio/cierre de sesión y estado relacionado con usuarios.

- Posts Slice (postsSlice.js): Maneja acciones relacionadas con publicaciones como crear, eliminar, dar me gusta y obtener publicaciones.

- Comment Slice (commentSlice.js): Gestiona comentarios asociados con publicaciones, incluyendo creación y eliminación.

# Estilos
Hoja de Estilos SCSS: Estilos personalizados para componentes utilizando archivos SCSS.

# Bibliotecas de Terceros
- React Router: Maneja la navegación dentro de la aplicación utilizando componentes <Link> y hooks como useNavigate.

- Ant Design: Utilizado para componentes de interfaz de usuario como notificaciones (notification).

## Imagenes
<img width="513" alt="Captura de pantalla 2024-06-14 a la(s) 1 22 41" src="https://github.com/JuanjoSalas/FrontSocialNetwork/assets/162991987/d10e3287-f12a-4464-aa78-b193c526fab5">
<img width="515" alt="Captura de pantalla 2024-06-14 a la(s) 1 23 07" src="https://github.com/JuanjoSalas/FrontSocialNetwork/assets/162991987/959a69ac-bf55-47ec-ac4b-da27560e56a6">
<img width="513" alt="Captura de pantalla 2024-06-14 a la(s) 1 23 50" src="https://github.com/JuanjoSalas/FrontSocialNetwork/assets/162991987/4f36a9d0-e14c-4951-98a4-9311293a8f0c">
<img width="512" alt="Captura de pantalla 2024-06-14 a la(s) 1 24 51" src="https://github.com/JuanjoSalas/FrontSocialNetwork/assets/162991987/ff002bd0-28ac-492d-aeb3-23c2c100272c">
<img width="512" alt="Captura de pantalla 2024-06-14 a la(s) 1 25 23" src="https://github.com/JuanjoSalas/FrontSocialNetwork/assets/162991987/35983d98-02fe-4548-9e40-bbbcf82134ef">
<img width="515" alt="Captura de pantalla 2024-06-14 a la(s) 1 25 42" src="https://github.com/JuanjoSalas/FrontSocialNetwork/assets/162991987/b82adc85-69b5-46f6-a226-977e5ef3a0a2">









## Para Empezar
Para ejecutar el proyecto localmente:

Clona el repositorio desde GitHub.
Instala las dependencias usando npm install.
Inicia el servidor de desarrollo con npm start.
Abre http://localhost para ver la aplicación en el navegador.
