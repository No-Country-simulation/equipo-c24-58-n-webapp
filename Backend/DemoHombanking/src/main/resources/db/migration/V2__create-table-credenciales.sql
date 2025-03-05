CREATE TABLE credenciales (
    id BIGINT PRIMARY KEY auto_increment,
    usuario_id INT UNIQUE,
    usuario VARCHAR(100) UNIQUE NOT NULL,
    password_hash VARCHAR(60) NOT NULL,
    perfil VARCHAR(100) NOT NULL,

    FOREIGN KEY (usuario_id) REFERENCES usuarios(id)
    );