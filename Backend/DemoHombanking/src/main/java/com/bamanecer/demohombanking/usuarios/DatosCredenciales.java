package com.bamanecer.demohombanking.usuarios;

public record DatosCredenciales(
        String usuario_id,
        String usuario,
        String password_hash,
        String perfil
) {

}
