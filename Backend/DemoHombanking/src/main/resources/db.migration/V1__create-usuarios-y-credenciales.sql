CREATE TABLE usuarios (
    id INT PRIMARY KEY not null auto_increment,
    nombre VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL
    telefono VARCHAR(50) NOT NULL,
    direccion VARCHAR(255) NOT NULL,
    estado VARCHAR(30) NOT NULL DEFAULT (0),
);

CREATE TABLE credenciales (
    id INT PRIMARY KEY,
    usuario_id INT UNIQUE,
    username VARCHAR(100) UNIQUE NOT NULL,
    password_has VARCHAR(100) NOT NULL,
    perfil VARCHAR(100) NOT NULL,
    FOREIGN KEY (usuario_id) REFERENCES