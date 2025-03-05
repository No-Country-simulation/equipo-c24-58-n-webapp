package com.bamanecer.demohombanking.controller.credenciales;

import com.bamanecer.demohombanking.Repository.Usuario.ICredencialesRepository;
import com.bamanecer.demohombanking.Security.DatosJWTToken;
import com.bamanecer.demohombanking.Security.TokenService;
import com.bamanecer.demohombanking.usuarios.Credenciales;
import com.bamanecer.demohombanking.usuarios.DatosCredenciales;
import com.bamanecer.demohombanking.usuarios.DatosUsuario;
import com.bamanecer.demohombanking.usuarios.Usuario;
import jakarta.transaction.Transactional;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;


import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.UriComponentsBuilder;

import java.net.URI;
import java.util.Optional;

@RestController
@RequestMapping("/login")
public class CredencialesController {

    @Autowired
    private AuthenticationManager autenticationManager;

    @Autowired
    private TokenService tokenService;

    @PostMapping
    public ResponseEntity autenticacionUsuario (@RequestBody @Valid DatosCredenciales datosCredenciales) {
        Authentication authtoken= new UsernamePasswordAuthenticationToken(datosCredenciales.usuario(),
                datosCredenciales.password_hash());
        System.out.println(authtoken + "credenciales del body");
        var usuarioAutenticado =autenticationManager.authenticate(authtoken);
        System.out.println(usuarioAutenticado + "autenticado");
        var JWTtoken = tokenService.generarToken((Credenciales) usuarioAutenticado.getPrincipal());
        System.out.println(JWTtoken + "token");
        return ResponseEntity.ok(new DatosJWTToken(JWTtoken));
    }
}
