package com.bamanecer.demohombanking.Security;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.exceptions.JWTCreationException;
import com.auth0.jwt.interfaces.DecodedJWT;
import com.bamanecer.demohombanking.usuarios.Credenciales;
import com.bamanecer.demohombanking.usuarios.Usuario;
import org.springframework.stereotype.Service;

import java.time.Instant;
import java.time.LocalDateTime;
import java.time.ZoneOffset;

@Service
public class TokenService {

    public String generarToken(Credenciales credenciales) {

        try {
            Algorithm algorithm = Algorithm.HMAC256("123456");
            return JWT.create()
                    .withIssuer("bAmanecer")
                    .withSubject(credenciales.getUsername())
                    .withClaim("id", credenciales.getId())
                    .withExpiresAt(generarFechaExpiracion())
                    .sign(algorithm);
        } catch (JWTCreationException exception){
            throw new RuntimeException();
        }
    }

    public String getSubject(String token) {
     if(token == null){
         throw new RuntimeException();
     }
        DecodedJWT verificar = null;
        try {
                Algorithm algorithm = Algorithm.HMAC256("123456");
                verificar = JWT.require(algorithm)
                        .withIssuer("bAmanecer")
                        .build()
                        .verify(token);
                verificar.getSubject();
            } catch (JWTCreationException exception) {
                System.out.println(exception.toString());
            }
            if (verificar.getSubject() == null) {
                throw new RuntimeException("verifier invalido");
            }
        return verificar.getSubject();
        }

    private Instant generarFechaExpiracion() {
        return LocalDateTime.now().plusHours(2).toInstant(ZoneOffset.of("-05:00"));

    }

    }
