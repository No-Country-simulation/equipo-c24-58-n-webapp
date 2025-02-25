package com.bamanecer.usuarios;

public record DatosUsuario(
        Long id,
        String nombre,
        String email,
        String telefono,
        String direccion
) {
}
