package com.bamanecer.demohombanking.controller.usuario;

import com.bamanecer.usuarios.Usuario;
import com.bamanecer.usuarios.DatosUsuario;
import com.bamanecer.usuarios.IUsuarioRepository;
import com.bamanecer.usuarios.Credenciales;
import com.bamanecer.usuarios.DatosCredenciales;
import com.bamanecer.usuarios.ICredencialesRepository;

import jakarta.transaction.Transactional;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.UriComponentsBuilder;

import java.net.URI;
import java.util.List;

@RestController
@RequestMapping("/usuario")
public class UsuarioController {
    @Autowired
    private IUsuarioRepository usuarioRepository;;

    @GetMapping("/listar")
    public List<Usuario> listar(){
        return usuarioRepository.findAll();
    }

    @GetMapping("/listar/{id}")
    public Usuario listar(@PathVariable Long id){
        return usuarioRepository.findById(id).get();
    }

    @PostMapping("/crear") //de crear usuario por el usuario tecnico más adelante
    @Transactional
    public ResponseEntity<DatosUsuario> crear(@RequestBody @Valid Usuario usuario, UriComponentsBuilder uriComponentsBuilder){
        Usuario usuarioCreado = usuarioRepository.save(usuario);
        DatosUsuario datosUsuario = new DatosUsuario(usuarioCreado.getId(), usuarioCreado.getNombre(), usuarioCreado.getEmail(),usuarioCreado.getTelefono(),usuarioCreado.getDireccion(),String.valueOf(usuarioCreado.getEstado()));
        URI url = uriComponentsBuilder.path("/usuario/{id}").buildAndExpand(usuario.getId()).toUri();
        return ResponseEntity.created(url).body(datosUsuario);

    }
    @PostMapping ("/register") //del formulario de registro de crear cuenta
    @Transactional
    public Usuario registrar(@RequestBody @Valid Usuario usuario, UriComponentsBuilder uriComponentsBuilder){
        Usuario usuarioCreado = usuarioRepository.save(usuario);
        DatosUsuario datosUsuario = new DatosUsuario(usuarioCreado.getId(), usuarioCreado.getNombre(), usuarioCreado.getEmail(),usuarioCreado.getTelefono(),usuarioCreado.getDireccion(),String.valueOf(usuarioCreado.getEstado()));
        URI url = uriComponentsBuilder.path("/usuario/{id}").buildAndExpand(usuario.getId()).toUri();
        return ResponseEntity.created(url).body(datosUsuario);
    }
}

/*@RestController
@RequestMapping("/")
public class AccountsController {

}*/