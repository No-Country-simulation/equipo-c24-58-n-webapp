package com.bamanecer.Clients;

import jakarta.persistence.*;

@Entity(name ="clientes")
@Table(name="clientes")
public class Clients {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long DNI;
    private long id_usuario;
    private String nombre;
    private String email;
    private String telefono;
    private String direccion;

}