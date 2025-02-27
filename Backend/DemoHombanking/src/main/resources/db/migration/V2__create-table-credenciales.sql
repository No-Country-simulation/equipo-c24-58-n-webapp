CREATE TABLE credenciales (
    id BIGINT PRIMARY KEY,
    usuario_id INT UNIQUE,
    username VARCHAR(100) UNIQUE NOT NULL,
    password_has VARCHAR(100) NOT NULL,
    perfil VARCHAR(100) NOT NULL,

    FOREIGN KEY (usuario_id) REFERENCES usuarios(id)
    );