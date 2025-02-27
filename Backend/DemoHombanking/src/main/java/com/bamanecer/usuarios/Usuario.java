package com.bamanecer.usuarios;

import jakarta.persistence.*;
import lombok.Getter;

@Entity(name ="usuario")
@Table(name="usuario")
@Getter
public class Usuario {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String nombre;
    private String email;
    private String telefono;
    private String direccion;
    private String estado;

    public Usuario(DatosUsuario datosUsuario) {
        this.nombre = datosUsuario.nombre();
        this.email = datosUsuario.email();
        this.telefono = datosUsuario.telefono();
        this.direccion = datosUsuario.direccion();
        this.estado = datosUsuario.estado();
    }

    public Usuario() {
    }

}
