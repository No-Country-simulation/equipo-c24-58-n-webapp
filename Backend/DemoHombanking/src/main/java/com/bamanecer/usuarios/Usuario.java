package com.bamanecer.usuarios;

import jakarta.persistence.*;

@Entity(name ="usuario")
@Table(name="usuario")
@contract
public class Usuario {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    private Long id;
    private String nombre;
    private String email;
    private String telefono;
    private String direccion;

}
