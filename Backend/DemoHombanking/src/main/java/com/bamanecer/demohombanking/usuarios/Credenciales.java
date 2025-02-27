package com.bamanecer.demohombanking.usuarios;

import jakarta.persistence.*;

@Entity(name="credenciales")
@Table(name="credenciales")
public class Credenciales {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private long id_usuario;
    private String username;
    private String pasword_hash;
    private String perfil;
}
