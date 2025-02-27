package com.bamanecer.demohombanking.usuarios;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity(name ="usuario")
@Table(name="usuarios")
@Getter
@Setter
public class Usuario {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String nombre;
    private String email;
    private String telefono;
    private String direccion;
    private int estado;

    public Usuario(DatosUsuario datosUsuario) {
        this.nombre = datosUsuario.nombre();
        this.email = datosUsuario.email();
        this.telefono = datosUsuario.telefono();
        this.direccion = datosUsuario.direccion();
        this.estado = Integer.parseInt(datosUsuario.estado());
    }

    public Usuario() {
    }

}
