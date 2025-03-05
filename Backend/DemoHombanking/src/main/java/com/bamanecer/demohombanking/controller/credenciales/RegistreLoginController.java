package com.bamanecer.demohombanking.controller.credenciales;

import com.bamanecer.demohombanking.Repository.Usuario.ICredencialesRepository;
import com.bamanecer.demohombanking.usuarios.Credenciales;
import com.bamanecer.demohombanking.usuarios.DatosUsuario;
import com.bamanecer.demohombanking.usuarios.Usuario;
import jakarta.transaction.Transactional;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.util.UriComponentsBuilder;

import java.net.URI;

@RestController
@RequestMapping("/login")
public class RegistreLoginController {
    @Autowired
    private ICredencialesRepository credencialesRepository;

    @PostMapping("/crear")
    @Transactional
    public ResponseEntity<Credenciales> crear(@RequestBody @Valid Credenciales credenciales){

        Credenciales loginCreado = credencialesRepository.save(credenciales);

        return ResponseEntity.ok(loginCreado);

    }
}
