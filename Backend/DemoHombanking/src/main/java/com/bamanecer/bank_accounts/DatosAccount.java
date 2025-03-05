package com.bamanecer.bank_accounts;

public record DatosAccount(
        Long id,
        long num_cuenta,
        String username,
        float balance,
        String tipo_moneda

) {
}
