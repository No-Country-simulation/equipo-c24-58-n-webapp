CREATE TABLE usuarios (
    id bigint not null auto_increment,
    nombre VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    telefono VARCHAR(50) NOT NULL,
    direccion VARCHAR(255) NOT NULL,
    estado TINYINT NOT NULL DEFAULT 1,

    primary key(id)
);

