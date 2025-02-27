package com.bamanecer.usuarios;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Table;
import org.springframework.data.annotation.Id;

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
