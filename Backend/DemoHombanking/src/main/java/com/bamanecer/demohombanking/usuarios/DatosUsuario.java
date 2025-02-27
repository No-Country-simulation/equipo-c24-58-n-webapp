package com.bamanecer.demohombanking.usuarios;

public record DatosUsuario(
        Long id,
        String nombre,
        String email,
        String telefono,
        String direccion,
        String estado
) {
}
