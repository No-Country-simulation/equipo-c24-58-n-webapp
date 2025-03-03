package com.bamanecer.bank_accounts;

import jakarta.persistence.*;

@Entity(name ="bank_accounts")
@Table(name="bank_accounts")
public class bank_accounts {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long Num_Cuenta;
    private Long DNI;
    private long Saldo;
    private String moneda;


}