package com.bamanecer.bank_accounts;

import jakarta.persistence.*;

@Entity(name ="usuario")
@Table(name="usuario")
public class bank_accounts {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String nombre;
    private String email;
    private String telefono;
    private String direccion;

}