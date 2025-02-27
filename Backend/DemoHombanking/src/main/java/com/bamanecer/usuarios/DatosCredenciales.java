package com.bamanecer.usuarios;

public record DatosCredenciales(
        Long id,
        long id_usuario,
        String username,
        String pasword_hash,
        String perfil
) {
}
