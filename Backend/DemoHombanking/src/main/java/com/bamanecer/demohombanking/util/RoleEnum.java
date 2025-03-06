package com.bamanecer.demohombanking.util;

public enum RoleEnum {
    ROLE_USER,  // Rol para usuarios normales
    ROLE_ADMIN; // Rol para administradores

    // Método para convertir un String a RoleEnum
    public static RoleEnum fromString(String role) {
        try {
            return RoleEnum.valueOf(role.toUpperCase());
        } catch (IllegalArgumentException e) {
            throw new IllegalArgumentException("Rol no válido: " + role);
        }
    }

    // Método para obtener el nombre del rol sin el prefijo "ROLE_"
    public String getSimpleName() {
        return this.name().replace("ROLE_", "");
    }
}
